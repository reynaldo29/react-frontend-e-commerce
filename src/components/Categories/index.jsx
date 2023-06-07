import "./categories.css";
import CategoryItem from "../CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="Container4">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
