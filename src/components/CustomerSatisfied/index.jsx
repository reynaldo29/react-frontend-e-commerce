import { personSatisfied } from "../../data";
const CustomerSatisfied = () => {
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#FCF9F7]">
            <div className="relative mb-12 mt-0 flex h-24 w-3/4 place-content-center place-items-center">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Clientes Satisfechos
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Clientes Satisfechos
                </h3>
            </div>
            <div className="mb-12 flex w-3/4 flex-row place-content-end  gap-8">
                {personSatisfied.map((item) => (
                    <div className="h-96 w-1/4 overflow-hidden" key={item.id}>
                        <img
                            src={item.img}
                            alt="client"
                            className="h-96 w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerSatisfied;
