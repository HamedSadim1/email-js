import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { EmailData } from "../types";
import { ContactSchema, initialFormValues } from "../utils/constants";
import { sendEmail } from "../utils/emailService";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmailHandler = async (
    values: EmailData,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSubmitting(true);
    try {
      await sendEmail(values);
      setIsModalOpen(true);
      resetForm();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Er is een fout opgetreden bij het verzenden van het bericht. Probeer het opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="glass-card p-8 max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Stuur ons een bericht
      </h3>

      <Formik
        initialValues={initialFormValues}
        validationSchema={ContactSchema}
        onSubmit={sendEmailHandler}
      >
        {({ isValid, dirty }) => (
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/90 mb-2"
              >
                Naam
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-field"
                placeholder="Uw naam"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/90 mb-2"
              >
                E-mail
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="uw.email@voorbeeld.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-300 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/90 mb-2"
              >
                Bericht
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={6}
                className="input-field resize-none"
                placeholder="Typ hier uw bericht..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
                className={`btn-primary w-full py-3 px-6 text-lg font-semibold rounded-lg transition duration-300 ${
                  !isValid || !dirty || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bericht verzonden!
              </h3>
              <p className="text-gray-600 mb-6">
                Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u
                op.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-primary w-full"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
