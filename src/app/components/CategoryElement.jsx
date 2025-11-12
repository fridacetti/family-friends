"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="bg-button border-button flex h-15 w-30 shrink-0 items-center justify-center rounded-full border-2 text-white"
    >
      {category}
    </button>
  );
};

export default CategoryElement;
