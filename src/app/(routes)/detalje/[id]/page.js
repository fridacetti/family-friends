import { FiStar } from "react-icons/fi";
import Image from "next/image";
import Info from "@/app/components/Info";
import { Suspense } from "react";
import BuyButton from "@/app/components/BuyButton";
import BackButton from "@/app/components/BackButton";
import Nav from "@/app/components/Header";

export default async function detalje({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <Suspense>
      <div className="mx-auto min-h-screen max-w-[390px]">

      <Nav />
      <div className="grid px-5">
        <Image
          src={product.thumbnail}
          alt="Hund"
          width={400}
          height={400}
          className="col-start-1 row-start-1 h-auto w-full rounded-3xl object-cover"
        />

        <div className="z-50 col-start-1 row-start-1 mx-4 mt-4 flex items-start justify-between">
          <BackButton />
          <div className="bg-button/50 rounded-full p-2 backdrop-blur-sm">
            <FiStar color="white" size={22} />
          </div>
        </div>

        <div className="z-10 col-start-1 row-start-1 mb-4 ml-4 w-fit place-content-end">
          <div className="bg-button/40 flex items-center gap-2 rounded-2xl px-3 py-2 backdrop-blur-sm">
            <Image
              src={product.thumbnail}
              alt="Profil"
              width={28}
              height={28}
              className="rounded-lg object-cover"
            />
            <p className="text-sm font-medium text-white drop-shadow-md">
              {product.category}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 pt-4 pb-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <Info tags={product.tags} />
        <p className="pt-4 pb-4">{product.description}</p>
        <p className="text-gray-400">{product.sku}</p>
      </div>
      <div className="flex justify-center">
        <BuyButton price={product.price} />
      </div>
      </div>
    </Suspense>
  );
}
