const Information = () => {
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#F7F0EB]">
            <div className="flex h-60 w-3/4 flex-row place-content-between place-items-center">
                <article className="flex w-1/3 flex-col gap-4">
                    <h3 className="text-center text-4xl text-[#C28566]">
                        Delivery Rápido
                    </h3>
                    <p className="text-center">
                        Entrega en 24 horas en cualquier lugar
                    </p>
                </article>
                <article className="flex w-1/3 flex-col gap-4">
                    <h3 className="text-center text-4xl text-[#C28566]">
                        24/7 Support
                    </h3>
                    <p className="text-center">
                        Obtenga nuestro soporte en cualquier momento
                    </p>
                </article>
                <article className="flex w-1/3 flex-col gap-4">
                    <h3 className="text-center text-4xl text-[#C28566]">
                        Compra Segura
                    </h3>
                    <p className="text-center">
                        Método de pago en línea - YAPE
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Information;
