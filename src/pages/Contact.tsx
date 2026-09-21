import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { ContactPayload, submitContact } from "@/lib/contact";

type FormState = "editing" | "submitting" | "success" | "error";
type Errors = Partial<Record<keyof ContactPayload, string>>;
const initial = { name: "", organization: "", email: "", engagementType: "", objective: "", context: "" };

const Contact = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || undefined;
  const [data, setData] = useState<ContactPayload>({ ...initial, role });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<FormState>("editing");
  const [message, setMessage] = useState("");
  const isApplication = Boolean(role);
  const heading = isApplication ? `Apply for ${role}` : "Start with the problem.";
  const subheading = isApplication ? "Tell us about your experience and the work you want to own." : "Tell us where execution is breaking down. We will review the context before defining whether an engagement makes sense.";

  const validate = useMemo(() => (value: ContactPayload) => {
    const next: Errors = {};
    if (!value.name.trim()) next.name = "Enter your name.";
    if (!value.organization.trim()) next.organization = isApplication ? "Enter your current organization or independent status." : "Enter your organization.";
    if (!/^\S+@\S+\.\S+$/.test(value.email)) next.email = "Enter a valid email address.";
    if (!value.engagementType) next.engagementType = "Choose an engagement type.";
    if (!value.objective.trim()) next.objective = isApplication ? "Tell us why this role is a fit." : "Describe the strategic objective or problem.";
    return next;
  }, [isApplication]);

  const update = (key: keyof ContactPayload, value: string) => { setData(previous => ({ ...previous, [key]: value })); setErrors(previous => ({ ...previous, [key]: undefined })); if (state === "error") setState("editing"); };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(data); setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setState("error"); setMessage("Please correct the highlighted fields."); return; }
    setState("submitting"); setMessage("Sending your briefing…");
    try { await submitContact(data); setState("success"); setMessage("Your briefing has been received. Our team will review it and respond through the email you provided."); }
    catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "We could not send your request. Please email contact@dropwinggroups.com."); }
  };

  return <main id="main-content" className="min-h-screen bg-background pt-16"><SEO title={isApplication ? `Apply for ${role}` : "Discuss Your Challenge"} description="Start a Dropwing Groups engagement by sharing the system, objective, or operating problem that needs ownership." />
    <section className="relative overflow-hidden border-b border-white/10 bg-structural py-20 md:py-28"><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:64px_64px]" /><div className="site-container relative"><p className="eyebrow">{isApplication ? "Career application" : "Strategic intake"}</p><h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-.06em] text-white md:text-7xl">{heading}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subheading}</p></div></section>
    <section className="section-space"><div className="site-container grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><aside><h2 className="text-2xl font-bold text-white">What happens next</h2><ol className="mt-7 space-y-5 border-l border-white/10 pl-5 text-sm leading-relaxed text-muted-foreground"><li><span className="mr-2 font-mono text-primary">01</span>We review the context you share.</li><li><span className="mr-2 font-mono text-primary">02</span>We decide whether a conversation or a better next step is appropriate.</li><li><span className="mr-2 font-mono text-primary">03</span>We respond through the email you provide.</li></ol><div className="mt-10 border border-white/10 p-5"><Mail className="size-5 text-primary" /><p className="mt-3 text-sm text-white">Prefer email?</p><a href="mailto:contact@dropwinggroups.com" className="mt-1 inline-block text-sm text-primary hover:underline">contact@dropwinggroups.com</a></div></aside>
      <div className="border border-white/10 bg-white/[.02] p-6 md:p-10">{state === "success" ? <div className="py-12" role="status" aria-live="polite"><CheckCircle2 className="size-9 text-primary" /><h2 className="mt-6 text-3xl font-bold text-white">Briefing received.</h2><p className="mt-4 max-w-xl text-muted-foreground">{message}</p></div> : <form noValidate onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-status"><div className="grid gap-6 md:grid-cols-2"><Field label="Name" id="name" value={data.name} error={errors.name} onChange={value => update("name", value)} autoComplete="name" /><Field label={isApplication ? "Organization or independent status" : "Organization"} id="organization" value={data.organization} error={errors.organization} onChange={value => update("organization", value)} autoComplete="organization" /></div><Field label="Work email" id="email" type="email" value={data.email} error={errors.email} onChange={value => update("email", value)} autoComplete="email" /><div><label htmlFor="engagementType" className="text-sm font-semibold text-white">{isApplication ? "Application type" : "Engagement type"}</label><select id="engagementType" value={data.engagementType} onChange={event => update("engagementType", event.target.value)} aria-invalid={Boolean(errors.engagementType)} aria-describedby={errors.engagementType ? "engagementType-error" : undefined} className="mt-2 min-h-12 w-full border border-white/15 bg-background px-3 text-sm text-white"><option value="">Select one</option>{(isApplication ? ["Role application", "Open application"] : ["Strategic partnership", "Digital infrastructure", "Synthetic intelligence", "Brand sovereignty", "General inquiry"]).map(option => <option key={option}>{option}</option>)}</select>{errors.engagementType && <p id="engagementType-error" className="mt-2 text-sm text-red-300">{errors.engagementType}</p>}</div><TextField label={isApplication ? "Why are you a fit?" : "Strategic objective"} id="objective" value={data.objective} error={errors.objective} onChange={value => update("objective", value)} required /><TextField label={isApplication ? "Additional context (optional)" : "Additional context (optional)"} id="context" value={data.context} error={errors.context} onChange={value => update("context", value)} /><p className="text-xs leading-relaxed text-muted-foreground">By submitting, you agree that Dropwing Groups may use this information to respond to your request. Do not include sensitive information.</p><p id="form-status" role="status" aria-live="polite" className={state === "error" ? "text-sm text-red-300" : "text-sm text-muted-foreground"}>{message}</p><button disabled={state === "submitting"} className="inline-flex min-h-12 items-center gap-3 bg-primary px-6 text-xs font-bold uppercase tracking-[.16em] text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-60">{state === "submitting" ? "Sending briefing…" : "Send briefing"}<ArrowRight className="size-4" /></button></form>}</div>
    </div></section>
  </main>;
};

const Field = ({ label, id, type = "text", value, error, onChange, autoComplete }: { label: string; id: string; type?: string; value: string; error?: string; onChange: (value: string) => void; autoComplete?: string }) => <div><label htmlFor={id} className="text-sm font-semibold text-white">{label}</label><input id={id} type={type} value={value} autoComplete={autoComplete} onChange={event => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className="mt-2 min-h-12 w-full border border-white/15 bg-background px-3 text-sm text-white" />{error && <p id={`${id}-error`} className="mt-2 text-sm text-red-300">{error}</p>}</div>;
const TextField = ({ label, id, value, error, onChange }: { label: string; id: string; value: string; error?: string; onChange: (value: string) => void }) => <div><label htmlFor={id} className="text-sm font-semibold text-white">{label}</label><textarea id={id} value={value} onChange={event => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} rows={5} className="mt-2 w-full resize-y border border-white/15 bg-background p-3 text-sm leading-relaxed text-white" />{error && <p id={`${id}-error`} className="mt-2 text-sm text-red-300">{error}</p>}</div>;

export default Contact;
