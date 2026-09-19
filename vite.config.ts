import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync } from "fs";
import type { IncomingMessage, ServerResponse } from "http";

// Load .env manually so credentials are available in server middleware
function loadEnvFile() {
  try {
    const raw = readFileSync(path.resolve(process.cwd(), ".env"), "utf-8");
    const vars: Record<string, string> = {};
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      vars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
    return vars;
  } catch {
    return {};
  }
}

const contactApiPlugin = () => {
  const env = loadEnvFile();

  return {
    name: "contact-api",
    configureServer(server: { middlewares: { use: (path: string, fn: (req: IncomingMessage, res: ServerResponse) => void) => void } }) {
      server.middlewares.use("/api/contact", (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let body = "";
        req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
        req.on("end", async () => {
          try {
            const data = JSON.parse(body || "{}");

            // Dynamic import so nodemailer stays server-side only
            const nodemailer = await import("nodemailer");
            const transporter = nodemailer.default.createTransport({
              host: env.SMTP_HOST || "smtp.hostinger.com",
              port: parseInt(env.SMTP_PORT || "465"),
              secure: true,
              auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS,
              },
            });

            const recipients = env.SMTP_TO || "daksha.dropwing@gmail.com,santhosh.dropwing@gmail.com";

            const emailBody = [
              `Name: ${data.name || "—"}`,
              `Email: ${data.email || "—"}`,
              `Company: ${data.company || "—"}`,
              `Project Type: ${data.projectType || "—"}`,
              `Budget: ${data.budget || "—"}`,
              "",
              "Message:",
              data.message || "—",
            ].join("\n");

            await transporter.sendMail({
              from: `"Persynix Contact Form" <${env.SMTP_USER}>`,
              to: recipients,
              replyTo: data.email,
              subject: `New project enquiry from ${data.name || "someone"} — Persynix`,
              text: emailBody,
              html: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.6">${emailBody.replace(/</g, "&lt;")}</pre>`,
            });

            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            console.error("[contact-api] Send failed:", err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to send message" }));
          }
        });
      });
    },
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), contactApiPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
