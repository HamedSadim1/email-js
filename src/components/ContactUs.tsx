import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "react-bootstrap";

//! This is the schema for the form validation using Yup and Formik
const ContactUsSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Too short").required("Required"),
});

export const ContactUs = () => {
  //! This is the ref for the form element
  const form = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const sendEmail = () => {
    // emailjs
    //   .sendForm(
    //     "service_sn8amlj",
    //     "template_t0lbwq8",
    //     form.current !== null ? form.current : "",
    //     "xakGmNEoX8_C9Dy7v"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    console.log("sendmail");
  };

  return (
    <div className="container">
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactUsSchema}
        onSubmit={(values) => {}}
      >
        {({ errors, touched,handleReset }) => (
          <div className="mb-4 ms-5 me-5">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact me.
            </p>
            <Form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name" className="fw-bolder mb-1">
                    Name
                  </label>
                  <div className="md-form mb-0">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />

                    {errors.name && touched.name ? (
                      <div className="text-danger">{errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="fw-bolder mb-1">
                    Your email
                  </label>
                  <div className="md-form mb-0">
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />

                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="message" className="fw-bolder mt-4 mb-3">
                    Your message
                  </label>
                  <div className="md-form mb-0">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={6}
                      className="form-control md-textarea"
                    />

                    {errors.message && touched.message ? (
                      <div className="text-danger mt-2">{errors.message}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left ">
                <button
                  className="btn btn-outline-dark btn-rounded mt-4"
                  disabled={
                    errors.email || errors.message || errors.name ? true : false
                  }
                  onClick={toggleModal}
                >
                  Send
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className="container m-5">
        <Modal show={isOpen} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Your message has been send</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for you message</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;
