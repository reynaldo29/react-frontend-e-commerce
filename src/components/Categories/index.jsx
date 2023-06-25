import "./categories.css";
import CategoryItem from "../CategoryItem";
import { categories } from "../../data";

const Categories = () => {
    /* return (
        <div className="Container4">
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    );
 */
    return (
        <section className="flex w-full place-content-center bg-[#FCF9F7]">
            <div className="mb-12 mt-12 flex w-3/4 place-content-between gap-28">
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
