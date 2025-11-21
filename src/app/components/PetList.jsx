import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Favorite from "./Favorite";

const PetList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => (
    <Link href={`/detalje/${product.id}`} key={product.id}>
    <div className="hover:bg-button/30 relative grid h-auto cursor-pointer rounded-2xl shadow-md">
        <Favorite id={product.id}/>
        <div className="flex flex-col">
          <Image
            loading="eager"
            alt="makeup"
            src={product.thumbnail}
            width={300}
            height={200}
            className="rounded-2xl"
          />

          <div className="px-2 pt-2">
            <div className="font-semibold tracking-wide">{product.title}</div>
            <div className="text-sm text-gray-400">
              {product.brand ? product.brand : "Unknown Brand"}
            </div>
          </div>
          <div className="flex justify-end px-2 pb-2">
            <div className="text-sm font-medium text-gray-400">
              {product.price} $
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default PetList;
