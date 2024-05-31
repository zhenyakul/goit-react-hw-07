import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContactData } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too short!!!")
    .max(30, "Name can contain only 30 char!!!")
    .required("Is required!!!"),
  phoneNumber: Yup.string()
    .min(9, "Number is invalid")
    .required("Is required!!!"),
});

const initialValues = {
  name: "Alex Kings",
  phoneNumber: "123-45-67",
};

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContactData(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} className={css.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.ErrorMessage}
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field name="phoneNumber" id={numberId} className={css.input} />
          <ErrorMessage
            name="phoneNumber"
            component="span"
            className={css.ErrorMessage}
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
