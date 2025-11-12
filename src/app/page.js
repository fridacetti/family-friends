import PetList from "./components/PetList";
import Category from "./components/Category";
import { FiHome, FiStar, FiMessageCircle, FiUser } from "react-icons/fi";
import Header from "./components/Header";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <div className="mx-auto min-h-screen max-w-[390px]">
      <Header />

      <section className="flex gap-4 overflow-x-auto p-5">
        <Category />
      </section>

      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>

      <nav className="fixed right-0 bottom-0 left-0 z-20  mx-auto flex h-20 max-w-[390px] items-center justify-around rounded-2xl border-t border-stone-200/20 bg-neutral-100/80 backdrop-blur-lg">
        <FiHome color="#F2968F" size={30} />
        <FiStar color="grey" size={30} />
        <FiMessageCircle color="grey" size={30} />
        <FiUser color="grey" size={30} />
      </nav>
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  console.log(category);

  return (
    <section className="grid grid-cols-2 justify-items-stretch gap-4 p-5 pb-26">
      <PetList category={category} />
    </section>
  );
}
