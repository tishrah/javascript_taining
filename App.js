import { useFormik } from "formik";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().min(6, "Minimum 6 character").required("required field"),
  password: yup
    .string()
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
      "Minimum eight characters, at least one letter and one number"
    )
    .required("password is required"),
});
function App() {
  const formik = useFormik({
    initialValues: { name: "", password: "", remember: false },
    validationSchema: schema,
  });
  return (
    
      <form>
        <label htmlFor="name">USERNAME</label>
        <br />
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
         
        />
        <p>{formik.errors?.name}</p>
        <label htmlFor="password">password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          
        />
        <p>{formik.errors?.password}</p>
        <input
          type="checkbox"
          name="remember"
          value={formik.values.remember}
          onChange={formik.handleChange}
          
        />
        <label htmlFor="remember">remember password</label><br/>
        <button type="submit">Submit</button>
      </form>
    
  );
}

export default App;
