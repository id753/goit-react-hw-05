import { Field, Formik, Form } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery, query }) => {
  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <div className={s.input_form}>
            <Field
              name="query"
              className={s.input}
              placeholder="find your favorite movie"
            />

            <button type="submit" className={s.button}>
              Search
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
