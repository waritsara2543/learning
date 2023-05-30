import React, { Suspense } from "react";
import Loading from "../chart/loading";
import Link from "next/link";
import Image from "next/image";

async function getProduct() {
  const res = await fetch(`https://dummyjson.com/products`);
  return res.json();
}

const Product = async () => {
  const { products } = await getProduct();

  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-4">
        {products.map((product: any) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div>
              <div>{product.title}</div>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={100}
                height={100}
              />
            </div>
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default Product;
