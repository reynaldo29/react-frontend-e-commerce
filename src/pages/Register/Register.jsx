import React from "react";
import "./Register.css";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
const Register = () => {
    /* return (
    <div className="Container10">
      <div className="Wrapper4">
        <h1 className="Title4">CREATE AN ACCOUNT</h1>
        <form className="Form4">
          <input className="Input4" placeholder="name"/>
          <input className="Input4" placeholder="last name"/>
          <input className="Input4" placeholder="username"/>
          <input className="Input4" placeholder="email"/>
          <input className="Input4" placeholder="password"/>
          <input className="Input4" placeholder="confirm password"/>
          <span className="Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="Button4">CREATE</button>
        </form>
      </div>
    </div>
  ); */
    const onSubmit = async (
        { email, password },
        { setSubmitting, setErrors, resetForm }
    ) => {
        try {
            console.log(email, password);
            resetForm();
        } catch (error) {
            console.log("error al traer datos");
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().trim().min(6).required(),
        address: Yup.string().required(),
        phone: Yup.string().min(7).max(9).required(),
        passwordConfirm: Yup.string()
            .trim()
            .oneOf(
                [Yup.ref("password"), null],
                "Las contraseñas deben coincidir"
            )
            .required(),
    });

    return (
        <section className="flex h-screen w-full flex-col place-content-center place-items-center bg-[rgb(252,249,247)]">
            <Box
                sx={{
                    mt: 2,
                    maxWidth: 400,
                    mx: "auto",
                    textAlign: "center",
                    backgroundColor: "rgb(252,249,247)",
                }}
            >
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{ fontFamily: "Poppins" }}
                >
                    BIENVENIDO
                </Typography>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{ fontFamily: "Poppins" }}
                >
                    POR FAVOR, REGÍSTRATE
                </Typography>

                <Formik
                    initialValues={{
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        address: "",
                        phone: "",
                        passwordConfirm: "",
                    }}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        isSubmitting,
                        errors,
                        touched,
                        handleBlur,
                    }) => (
                        <Box
                            onSubmit={handleSubmit}
                            component="form"
                            sx={{ mt: 3 }}
                        >
                            <TextField
                                type="text"
                                label="Ingresar nombre"
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                fullWidth
                                sx={{
                                    mb: 3,
                                }}
                                id="name"
                                placeholder="Ingresa tu nombre"
                                onBlur={handleBlur}
                                error={errors.name && touched.name}
                                helperText={
                                    errors.name && touched.name && errors.name
                                }
                            />
                            <TextField
                                type="text"
                                label="Ingresa apellido"
                                value={values.lastname}
                                onChange={handleChange}
                                name="lastname"
                                fullWidth
                                sx={{
                                    mb: 3,
                                }}
                                id="lastname"
                                placeholder="Ingresa tus apellidos"
                                onBlur={handleBlur}
                                error={errors.lastname && touched.lastname}
                                helperText={
                                    errors.lastname &&
                                    touched.lastname &&
                                    errors.lastname
                                }
                            />
                            <TextField
                                type="text"
                                label="Ingresa correo"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                fullWidth
                                sx={{
                                    mb: 3,
                                }}
                                id="email"
                                placeholder="Ingresa tu correo"
                                onBlur={handleBlur}
                                error={errors.email && touched.email}
                                helperText={
                                    errors.email &&
                                    touched.email &&
                                    errors.email
                                }
                            />

                            <TextField
                                type="text"
                                placeholder="Ingrese tu dirección"
                                value={values.address}
                                onChange={handleChange}
                                name="address"
                                onBlur={handleBlur}
                                id="address"
                                label="Ingrese dirección"
                                fullWidth
                                sx={{ mb: 3 }}
                                error={errors.address && touched.address}
                                helperText={
                                    errors.address &&
                                    touched.address &&
                                    errors.address
                                }
                            />
                            <TextField
                                type="text"
                                placeholder="Ingrese telefono"
                                value={values.phone}
                                onChange={handleChange}
                                name="phone"
                                onBlur={handleBlur}
                                id="phone"
                                label="Ingrese Nº telefono"
                                fullWidth
                                sx={{ mb: 3 }}
                                error={errors.phone && touched.phone}
                                helperText={
                                    errors.phone &&
                                    touched.phone &&
                                    errors.phone
                                }
                            />
                            <TextField
                                type="password"
                                placeholder="Ingrese contraseña"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                                id="password"
                                label="Ingrese contraseña"
                                fullWidth
                                sx={{ mb: 3 }}
                                error={errors.password && touched.password}
                                helperText={
                                    errors.password &&
                                    touched.password &&
                                    errors.password
                                }
                            />
                            <TextField
                                type="password"
                                placeholder="Confirmar contraseña"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                name="passwordConfirm"
                                onBlur={handleBlur}
                                id="passwordConfirm"
                                label="Confirmar contraseña"
                                fullWidth
                                sx={{ mb: 3 }}
                                error={
                                    errors.passwordConfirm &&
                                    touched.passwordConfirm
                                }
                                helperText={
                                    errors.passwordConfirm &&
                                    touched.passwordConfirm &&
                                    errors.passwordConfirm
                                }
                            />
                            <Typography
                                component="h1"
                                variant="h6"
                                sx={{
                                    fontFamily: "Poppins",
                                    mb: 2,
                                    color: "#e9ac8e",
                                }}
                            >
                                ¿Ya tienes cuenta? Ingresa...
                            </Typography>
                            <LoadingButton
                                type="submit"
                                disabled={isSubmitting}
                                loading={isSubmitting}
                                variant="contained"
                                fullWidth
                                sx={{
                                    mb: 2,
                                    backgroundColor: "#C28566",
                                    height: 48,
                                }}
                            >
                                Registrar
                            </LoadingButton>
                        </Box>
                    )}
                </Formik>
            </Box>
        </section>
    );
};

export default Register;
