import emailjs from "@emailjs/browser";
import { EmailData } from "../types";

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: import.meta.env.VITE_EMAIL_TO,
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: import.meta.env.VITE_EMAIL_TO_NAME,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error("Email verzenden mislukt:", error);
    throw new Error(
      "Er is een fout opgetreden bij het verzenden van het bericht. Probeer het opnieuw."
    );
  }
};
