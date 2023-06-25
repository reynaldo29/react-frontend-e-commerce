import { latestProducts } from "../../data";
import Product from "../Product";
const LatestProducts = () => {
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#FCF9F7]">
            <div className="relative mb-12 mt-12 flex h-24 w-3/4 place-content-center place-items-center">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Últimas creaciones
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Últimas creaciones
                </h3>
            </div>
            <div className="mb-12 flex w-3/4 flex-wrap place-content-around gap-8">
                {latestProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default LatestProducts;
