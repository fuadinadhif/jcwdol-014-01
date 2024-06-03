import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /[@#$%^&*()]/,
      "Password must contain at least one special character"
    ),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema,
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Name is required";
    //   }

    //   if (!values.email) {
    //     errors.email = "Email is required";
    //   }

    //   if (!values.password) {
    //     errors.password = "Password is required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be at least 8 characters";
    //   } else if (!/[A-Z]/.test(values.password)) {
    //     errors.password = "Password must contain at least one uppercase letter";
    //   }

    //   return errors;
    // },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name && (
        <small>{formik.errors.name}</small>
      )}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email && (
        <small>{formik.errors.email}</small>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password && (
        <small>{formik.errors.password}</small>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
