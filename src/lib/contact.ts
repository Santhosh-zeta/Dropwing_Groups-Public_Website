export type ContactPayload = {
  name: string;
  organization: string;
  email: string;
  engagementType: string;
  objective: string;
  context: string;
  role?: string;
};

export async function submitContact(payload: ContactPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  if (!endpoint) throw new Error("Contact submissions are not configured yet. Please use contact@dropwinggroups.com.");
  const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error("We could not send your request. Please try again or email contact@dropwinggroups.com.");
}
