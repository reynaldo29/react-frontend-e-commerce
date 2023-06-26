import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { signUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const mutation = useMutation(signUser);
    const navigate = useNavigate();
    const onSubmit = async (
        { email, password },
        { setSubmitting, setErrors, resetForm }
    ) => {
        try {
            const res = await mutation.mutateAsync({ email, password });
            navigate("/");
            /* mutation.mutate(
                { email, password },
                {
                    onSuccess: (data) => {
                        console.log(data.data);
                        resetForm();
                    },
                    onError: (error) => {
                        if (error.code === "ERR_BAD_REQUEST") {
                            return setErrors({
                                email: "Usuario no encontrado",
                            });
                        }
                    },
                    onSettled: () => {
                        setSubmitting(false);
                    },
                }
            ); */

            resetForm();
        } catch (error) {
            if (error.response.status === 404) {
                return setErrors({
                    email: "Usuario no encontrado",
                });
            }
            if (error.response.status === 401) {
                return setErrors({
                    password: "Contraseña inválida",
                });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().trim().min(6).required(),
    });

    return (
        <section className="flex h-[90vh] w-full flex-col place-content-center place-items-center bg-[rgb(252,249,247)]">
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
                    variant="h4"
                    sx={{ fontFamily: "Poppins" }}
                >
                    INGRESA
                </Typography>

                <Formik
                    initialValues={{ email: "", password: "" }}
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
                            sx={{ mt: 6 }}
                        >
                            <TextField
                                type="text"
                                label="Ingresa correo"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                fullWidth
                                sx={{
                                    mb: 6,
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
                                type="password"
                                placeholder="Ingrese contraseña"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                                id="password"
                                label="Ingrese contraseña"
                                fullWidth
                                sx={{ mb: 6 }}
                                error={errors.password && touched.password}
                                helperText={
                                    errors.password &&
                                    touched.password &&
                                    errors.password
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
                                ¿No sabes o no recuerdas tu contraseña?
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
                                Ingresar
                            </LoadingButton>
                        </Box>
                    )}
                </Formik>
            </Box>
        </section>
    );
};

export default Login;
