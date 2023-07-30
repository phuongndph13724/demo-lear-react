import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGetAllProduct } from "../../services/apis/products";

const ProductPage = () => {
    const navigate = useNavigate()
  const [allProducts, setAllProduct] = useState(null);

  const getAllProduct = async () => {
    const data = await apiGetAllProduct();
    setAllProduct(data?.data);
  };

  

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="p-4">
      <div className="w-full flex justify-between">
        <Link className="p-2 rounded bg-green-200" to={"/"}>
          Home
        </Link>
        <button onClick={() => navigate('/product/add')} className="w-[40px] h-[40px] rounded-full bg-green-400">Add</button>
      </div>
      <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts?.map((product) => (
            <div key={product?.id} className="group relative bg-gray-200 p-4 rounded hover:bg-gray-500 hover:cursor-pointer">
              <div onClick={() => navigate(`/product/${product?.id}`)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product?.url}
                  alt={product?.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div onClick={() => navigate(`/product/${product?.id}`)} className="mt-4 h-[50px] flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product?.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product?.price}</p>
              </div>
              <div className="h-[70px]">
                <p>{product?.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};
export default ProductPage;
