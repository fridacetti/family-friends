"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";


const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  return (
    <div className="flex h-lvh flex-col items-center justify-center gap-10">
      <div>
        {state.succes && (
          <p className="text-green-400">Tillykke din formulat er sendt...</p>
        )}
        <form action={postProduct}>
          {state.error?.productName && (
            <p className="text-red-400">{state.error.productName}</p>
          )}
          <input
            type="text"
            name="productname"
            placeholder="Product Name"
            defaultValue={state.productName}
            className="mr-2 border p-1"
            />
            {state.error?.productPrice && (
              <p className="text-red-400">{state.error.productPrice}</p>
            )}
          <input
            name="productprice"
            placeholder="Product Price"
            defaultValue={state.productPrice}
            className="mr-2 border p-1"
          />
          <button
            type="submit"
            className="cursor-pointer border border-blue-500 bg-blue-300 p-1 text-white"
          >
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default addProduct;
