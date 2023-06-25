import { featuredProducts } from "../../data";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductsFeaturedItem from "../ProductsFeaturedItem";
const ProductFeatured = () => {
    const [featureProducts, setFeaturedProducts] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    useEffect(() => {
        setFeaturedProducts(featuredProducts);
    }, []);
    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[#FCF9F7]">
            <div className="relative mb-12 mt-12 flex h-24 w-3/4 place-content-center place-items-center">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Productos Destacados
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Productos destacados
                </h3>
            </div>
            <div className="relative mb-0 flex h-[520px] w-full flex-col place-content-center overflow-hidden">
                <Slider {...settings}>
                    {featureProducts.map((item, index) => (
                        <ProductsFeaturedItem item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProductFeatured;
