import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min 3 characters.')
    .max(50, 'Too Long! Max 50 characters.')
    .required('Required'),
  email: Yup.string()
    .matches(/^[^\s@]{7,}@[^\s@]+\.[^\s@]+$/, 'Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Min 8 characters.')
    .max(50, 'Too Long! Max 50 characters.')
    .required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: FeedbackSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 7,
        width: '35ch',
      }}
      noValidate
      autoComplete="on"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        type="text"
        fullWidth
        variant="outlined"
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        fullWidth
        variant="outlined"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        fullWidth
        variant="outlined"
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegistrationForm;
