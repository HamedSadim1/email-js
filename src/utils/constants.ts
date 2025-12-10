import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Naam is te kort").required("Naam is verplicht"),
  email: Yup.string()
    .email("Ongeldig e-mailadres")
    .required("E-mail is verplicht"),
  message: Yup.string()
    .min(10, "Bericht is te kort")
    .required("Bericht is verplicht"),
});

export const initialFormValues = {
  name: "",
  email: "",
  message: "",
};
