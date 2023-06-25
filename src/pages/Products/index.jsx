import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import { products } from "../../data";
import ProductItem from "../../components/ProductItem";
const opciones = [
    "Nombre, A a Z",
    "Nombre, Z a A",
    "Precio: de más bajo a más alto",
    "Precio: de más alto a más bajo",
];

const AllProducts = () => {
    const [optionName, setOptionName] = useState([]);

    const handleChange = (event) => {
        setOptionName(event.target.value);
    };

    return (
        <section className="flex h-auto w-full flex-col place-content-center place-items-center bg-[rgb(252,249,247)]">
            <div className="relative mb-12 mt-12 flex h-24 w-3/4 place-content-center place-items-center border-b-slate-400">
                <div className="absolute top-0 flex w-2/3 place-content-center place-items-baseline text-center">
                    <h2 className="font-['Tangerine',normal] text-6xl italic text-[#394149] opacity-20">
                        Nuestros Productos
                    </h2>
                </div>

                <h3 className="absolute top-7 block text-center font-['Poppins',normal] text-5xl font-semibold">
                    Nuestros Productos
                </h3>
            </div>
            <div className="mb-2 mt-2 flex w-3/4 place-content-between place-items-center ">
                <div className="flex w-1/3 flex-row place-content-between place-items-center gap-8 text-lg">
                    <div className="w-1/3">
                        <h3>Ordenar por </h3>
                    </div>
                    <div className="w-2/3">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Opc.
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={optionName}
                                label="Age"
                                onChange={handleChange}
                                sx={{ backgroundColor: "white" }}
                            >
                                {opciones.map((item, index) => (
                                    <MenuItem value={item} key={index}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="flex place-items-center text-[#C28566]">
                    <h4 className="text-lg font-semibold">Hay 360 productos</h4>
                </div>
            </div>

            <div className="mb-12 mt-12 flex w-3/4 flex-wrap place-content-around gap-8 ">
                {products.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
