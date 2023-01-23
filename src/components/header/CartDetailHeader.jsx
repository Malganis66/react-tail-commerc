import { useContext } from "react";
import { useCartDetail } from "@/context/useCartDetailCTX";

import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
  const { CartProducts,ridCartProducts } = useContext(useCartDetail);
  return (
    <section className="absolute top-[125%] left-0 md:left-full md:-translate-x-full md:top-full z-10 w-full md:max-w-lg">
      <div className="mx-4 bg-slate-50 shadow-2xl rounded-md">
        <h4 className="font-bold text-lg p-6">Cart</h4>
        <hr />
        {CartProducts.length === 0 && (
          <p className="text-center p-10 text-grayish-blue">
            Your cart is empty
          </p>
        )}
        {CartProducts.map((product) => {
          return (
            <article
              key={product.id}
              className="grid items-center gap-6 grid-cols-[1fr_3fr_1fr] p-6"
            >
              <img src={product.img} alt="" className="rounded-md" />
              <div>
                <h6>{product.brand}</h6>
                <p>
                  <span>${product.discountPrice} x {product.quantity}</span>{" "}
                  <span className="font-bold">${(product.discountPrice * product.quantity).toFixed(2)}</span>
                </p>
              </div>
              <button className="ml-auto" onClick={()=> ridCartProducts(product.id)}>
                <DeleteIcon className="hover:fill-black fill-slate-300" />
              </button>
            </article>
          );
        })}
        {CartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-orange-prime py-4 text-white font-bold">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
