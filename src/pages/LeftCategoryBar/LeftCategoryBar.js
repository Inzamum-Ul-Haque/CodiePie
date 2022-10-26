import React from "react";
import { Link } from "react-router-dom";

const LeftCategoryBar = ({ categories }) => {
  return (
    <div>
      <div>
        <h4 className="text-center fw-bold">Categories</h4>
      </div>
      <ul className="categories-link mt-3">
        {categories.map((category) => (
          <li className="pb-4" key={category.category_id}>
            <Link to={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftCategoryBar;
