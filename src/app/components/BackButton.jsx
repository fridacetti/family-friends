"use client";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="bg-button/50 cursor-pointer rounded-full p-2 backdrop-blur-sm"
    >
      <IoIosArrowBack color="white" size={22} />
    </div>
  );
};

export default BackButton;
