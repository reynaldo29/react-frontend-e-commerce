import { Button, Container, TextField } from "@mui/material";
const ContactAd = () => {
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#F7F0EB]">
            <div className="flex h-60 w-3/4 flex-col place-items-center justify-center gap-8">
                <Container
                    sx={{
                        textAlign: "center",
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h2 className="font-['Poppins',normal] text-4xl font-semibold">
                        REGISTRATE PARA MÁS NOVEDADES
                    </h2>
                </Container>

                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        gap: "8px",
                        justifyContent: "center",
                        width: "75%",
                        overflow: "hidden",
                    }}
                >
                    <TextField
                        placeholder="Email"
                        sx={{
                            width: "85%",
                            backgroundColor: "white",
                        }}
                    />
                    <Button
                        color="success"
                        sx={{
                            background: "#C28566",
                            color: "white",
                            width: "15%",
                            borderRadius: 0,
                        }}
                    >
                        Registrar
                    </Button>
                </Container>
            </div>
        </section>
    );
};

export default ContactAd;
