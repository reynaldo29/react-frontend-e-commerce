const ProductsFeaturedItem = ({ item }) => {
    return (
        <div
            key={item.id}
            className="flex flex-col place-content-center place-items-center gap-4"
        >
            <div className="flex h-80 w-80 place-content-center place-items-center overflow-hidden rounded-full">
                <img
                    src={item.img}
                    alt="img.jpg"
                    className="h-80 w-80 object-cover"
                />
            </div>

            <h4 className="text-center font-['Tangerine',normal] text-2xl font-semibold text-[#394149]">
                {item.name}
            </h4>
        </div>
    );
};
export default ProductsFeaturedItem;
