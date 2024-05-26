

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
    number: Yup.number().positive().integer().required("Required"),
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
      <Form>
        <div>
          <label htmlFor={nameId}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={phoneId}>
            Number
          </label>
          <Field type="tel" name="number" id={phoneId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;