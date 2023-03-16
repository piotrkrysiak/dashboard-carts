import { useFormik } from 'formik';
import { number, object } from 'yup';
import Button from '../Button';
import ErrorMessage from './ErrorMessage';
import Icon from './Icon';

interface Props {
  onSubmit: (values: { id: number; useId: number }) => void;
}

const MyForm = ({ onSubmit }: Props) => {
  const validationSchema = object().shape({
    id: number()
      .integer()
      .positive('ID must be a positive integer')
      .required('ID is required'),
    useId: number().required('Use ID is required'),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      useId: 0,
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        {formik.touched.id && formik.errors.id && (
          <ErrorMessage>{formik.errors.id}</ErrorMessage>
        )}
      </div>
      <div>
        <label htmlFor="useId">Use ID:</label>
        <input
          type="number"
          id="useId"
          name="useId"
          onChange={formik.handleChange}
          value={formik.values.useId}
        />
        {formik.touched.useId && formik.errors.useId && (
          <ErrorMessage>{formik.errors.useId}</ErrorMessage>
        )}
      </div>
      <Button type="submit">
        <Icon />
      </Button>
    </form>
  );
};

export default MyForm;
