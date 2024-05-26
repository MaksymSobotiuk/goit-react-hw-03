import css from "./ContactForm.module.css"

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

function ContactForm({ addContact }) {
  const nameId = useId();
  const phoneId = useId();
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number:  Yup.string()
    .matches(/^[0-9()+\-]+$/, "Phone number is not valid ")
    .min(6, "Too Short!")
    .max(18, "Too Long!")
    .required("Required"),
  });
  const handleSubmit = (value, actions) => {
    addContact({
      id: nanoid(),
      ...value,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field className={css.input} type="tel" name="number" id={phoneId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;