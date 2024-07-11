import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { registerUser } from '../redux/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerValidationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Min 3 characters name is required')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Password must contain both letters and numbers')
            .required('Password is required'),
    });

    return (
        <Grid container className='h-screen w-full'>
            <Grid item xs={12} sm={12} md={6}>
                <img src='assets/SignUp.png' alt='Login Page' className='object-cover object-center w-full h-full' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} justifyContent='center' alignItems='center' style={{ background: 'linear-gradient(to top right, #FFE9E3, #FFFFFF)' }}>
                <Grid container justifyContent='center' alignItems='center' className='w-full' padding={5}>
                    <Grid item container justifyContent="center" alignItems="center">
                        <Avatar sx={{
                            background: 'linear-gradient(to top right, #FFE9E3, #FFFFFF)',
                            height: '50px',
                            width: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <AccountCircleIcon fontSize='large' style={{ color: '#818cf8' }} />
                        </Avatar>
                    </Grid>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={registerValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            const userData = {
                                name: values.name,
                                email: values.email,
                                password: values.password,
                                role: 'Admin'
                            };
                            dispatch(registerUser(userData)).unwrap()
                                .then(() => {
                                    navigate('/login');
                                    toast.success('Successfully Signed Up!');
                                })
                                .catch((error) => {
                                    toast.error(error);
                                });
                            setSubmitting(false);
                        }}
                    >
                        {(formik) => (
                            <Form className='w-full sm:w-2/3 md:w-3/5'>
                                <Grid item container justifyContent='center' alignItems='center'>
                                    <Typography variant='h5' className='text-lg'>Register</Typography>
                                </Grid>
                                <TextField
                                    required
                                    name='name'
                                    placeholder='Name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="name"
                                    label="Name"
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    type='email'
                                    required
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="email"
                                    label="Email"
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                />
                                <Button
                                    sx={{
                                        backgroundColor: '#818cf8', marginTop: 2, "&:hover": {
                                            backgroundColor: "#818cf8", color: '#fff'
                                        }
                                    }}
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                >
                                    Register
                                </Button>
                                <Grid item container justifyContent='center' alignItems='center'>
                                    <span>Already Have an Account?</span>
                                    <Link to='/login' style={{ color: '#818cf8', fontWeight: 'bold', marginTop: 3 }}> Login</Link>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={6}>
                    <img src='assets/taj.png' alt='Taj Mahal'/>
                </Grid> */}
            </Grid>
        </Grid>
    );
};

export default Register;
