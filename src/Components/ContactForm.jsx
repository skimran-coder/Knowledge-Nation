import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.fName) {
    errors.fName = "Required";
  } else if (values.fName.length > 15) {
    errors.fName = "Must be 15 characters or less";
  }

  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length > 20) {
    errors.subject = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      // Create the mailto link
      const mailtoLink = `mailto:skimranloco@gmail.com?subject=Contact from ${
        values.fName
      } for: ${values.subject}&body=${encodeURIComponent(
        values.message
      )}%0D%0A%0D%0AContact Email: ${values.email}`;

      // Open the mailto link
      window.location.href = mailtoLink;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <input
        id="fName"
        name="fName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fName}
        placeholder="Your Name*"
        className="p-2 border border-gray-300 rounded"
      />
      {formik.touched.fName && formik.errors.fName ? (
        <div className="error-message">{formik.errors.fName}</div>
      ) : null}

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="p-2 border border-gray-300 rounded"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error-message">{formik.errors.email}</div>
      ) : null}

      <input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
        placeholder="Subject*"
        className="p-2 border border-gray-300 rounded"
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div className="error-message">{formik.errors.subject}</div>
      ) : null}

      <textarea
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        placeholder="Your Message*"
        className="p-2 border border-gray-300 rounded"
        rows="4"
      ></textarea>
      {formik.touched.message && formik.errors.message ? (
        <div className="error-message">{formik.errors.message}</div>
      ) : null}

      <button type="submit" className="bg-[#20AD94] text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ContactForm;