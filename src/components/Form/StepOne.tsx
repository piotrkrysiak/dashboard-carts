import { useFormik } from 'formik';
import { number, object } from 'yup';
import Button from '../Button';
import Icon from './Icon';
import Input from './Input';

interface Props {
  onSubmit: (values: { id: number; useId: number }) => void;
}

const MyForm = ({ onSubmit }: Props) => {
  const validationSchema = object().shape({
    id: number()
      .integer()
      .positive('ID must be a positive integer')
      .required('ID is required'),
    useId: number()
      .integer()
      .positive('Use ID must be a positive integer')
      .required('Use ID is required'),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      useId: 0,
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="pt-4">
      <Input
        label="Id"
        id="id"
        name="id"
        value={formik.values.id}
        onChange={formik.handleChange}
        error={formik.errors.id}
        type="number"
      />
      <Input
        label="UserId"
        id="useId"
        name="useId"
        value={formik.values.useId}
        onChange={formik.handleChange}
        error={formik.errors.useId}
        type="number"
        className="mb-4"
      />
      <Button type="submit" className="ml-auto">
        <Icon />
      </Button>
    </form>
  );
};

export default MyForm;
