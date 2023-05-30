import React from "react";
import Image from "next/image";
async function getProductById(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
const ProductID = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product = await getProductById(id);

  return (
    <div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div className="grid grid-cols-4">
        {product.images.map((image: string) => (
          <div key={image}>
            <Image src={image} alt={image} width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductID;
