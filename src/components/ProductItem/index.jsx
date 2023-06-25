import "./item.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
    return (
        <div className="bg-[#F7F0EB] font-['Tangerine',normal]">
            <div className="box-padre relative flex h-96 w-80 place-content-center overflow-hidden">
                <img
                    src={item.img}
                    alt="product-jpg"
                    className="h-96 w-80 transform object-cover transition-transform duration-300 hover:scale-125"
                />
                <div className="box-hijo absolute bottom-0 flex h-1/5 w-full overflow-hidden bg-[#C28566] text-white opacity-0">
                    <div className="flex w-1/2 place-content-center place-items-center gap-2 border-r border-white">
                        <Link to={`/product/show/${item.id}`}>
                            <p className="cursor-pointer">Ver más</p>
                        </Link>
                        <VisibilityIcon fontSize="small" />
                    </div>
                    <div className="flex w-1/2 place-content-center place-items-center gap-2 text-white">
                        <p>Añadir</p>
                        <ShoppingCartIcon fontSize="small" />
                    </div>
                </div>
            </div>
            <div className="mt-3 flex w-full flex-col p-3 text-center">
                <h3 className="block text-lg font-semibold text-[#C28566]">
                    {item.name}
                </h3>
                <h3 className="mt-2 block text-2xl font-semibold">
                    S/. {item.price.toFixed(2)}
                </h3>
            </div>
        </div>
    );
};
export default ProductItem;
