import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

import ModalNotification from "../ModalNotification/ModalNotification";

import css from "./BookingForm.module.css";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    bookingDate: Yup.string().required("Required"),
    comment: Yup.string().max(300, "Max 300 characters"),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitted(true);
    setTimeout(() => {
      resetForm();
    }, 500);
  };

  return (
    <div className={css.form_container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.field_wrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.field_wrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field_wrapper}>
              <DatePicker
                selected={
                  values.bookingDate
                    ? new Date(
                        values.bookingDate.split(".").reverse().join("-")
                      )
                    : null
                }
                onChange={(date) =>
                  setFieldValue(
                    "bookingDate",
                    date ? date.toLocaleDateString("uk-UA") : ""
                  )
                }
                dateFormat="dd.MM.yyyy"
                placeholderText="Booking date*"
                className={css.input}
                calendarClassName="custom-calendar"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.field_wrapper}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ModalNotification
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        message="Your booking request has been submitted."
      />
    </div>
  );
};

export default BookingForm;
