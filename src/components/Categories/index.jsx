import "./categories.css";
import CategoryItem from "../CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="Container4">
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Categories;
