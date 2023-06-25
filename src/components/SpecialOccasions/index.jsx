import { specialOccasions } from "../../data";
const SpecialOccasions = () => {
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#FCF9F7]">
            <div className="relative mb-12 mt-12 flex h-24 w-3/4 place-content-center place-items-center">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Ocaciones Especiales
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Ocaciones Especiales
                </h3>
            </div>
            <div className="mb-12 flex w-3/4 flex-wrap place-content-between gap-4">
                {specialOccasions.map((item) => (
                    <article
                        className="relative flex h-[680px] w-[460px] overflow-hidden"
                        key={item.id}
                    >
                        <img
                            src={item.img}
                            alt="ocassion.jpg"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-3 left-5 right-5 flex h-[320px] w-[420px] flex-col place-content-center place-items-center bg-[#F7F0EB]">
                            <div className="w-3/4 ">
                                <h3 className="font-['Poppins',normal] text-3xl font-semibold">
                                    {item.name}
                                </h3>
                            </div>
                            <div className="mt-4 w-3/4">
                                <p className="font-semibold text-[#C28566]">
                                    {item.date}
                                </p>
                                <p className="mt-4 block text-justify font-['Poppins',normal] text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className="mt-2 flex w-3/4 place-items-center">
                                <button className="w-2/5 bg-[#C28566] p-2 font-['Poppins',normal]">
                                    Ver Productos
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SpecialOccasions;
