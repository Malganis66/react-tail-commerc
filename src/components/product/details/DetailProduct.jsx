import CartIcon from "@/components/icons/CartIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import { useCartDetail } from "@/context/useCartDetailCTX";
import { useContext,useState } from "react";

export default ({objectProduct}) => {

  const {addCartProducts} = useContext(useCartDetail)

  const [count, setCount] = useState(0)
  const decrement = () => {
    if(count === 0) return 
    setCount(count - 1)
  }

  const handleAddToCart = ()=>{
    addCartProducts({
      img: objectProduct.thumbnailImages[0],
      id: objectProduct.id,
      discountPrice: (objectProduct.price * (1 - objectProduct.discount)).toFixed(2),
      title: objectProduct.title,
      quantity: count || 1
    })
    setCount(0)
  }

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="font-bold text-orange-prime mb-3 uppercase tracking-tight">
        {objectProduct.brand}
      </p>
      <h2 className="font-bold text-3xl mb-5">{objectProduct.title}</h2>
      <p className="text-dark-grayish-blue mb-5">
        {objectProduct.description}
      </p>
      <div className="grid gap-4 md:gap-1 grid-cols-3 md:grid-cols-[1fr_3fr] items-center font-bold mb-5">
        <span className="text-3xl">${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}</span>
        <span className="bg-pale-orange rounded-md mr-auto px-2 text-orange-prime text-lg">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
          ${(objectProduct.price).toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-[1fr_1.7fr] gap-4 font-bold">
        <div className="col-span-3 md:col-span-1 bg-light-grayish-blue py-3 px-5 rounded-md flex justify-between">
          <button onClick={decrement}>
            <MinusIcon className="hover:fill-orange-300"/>
          </button>
          <span className="select-none">{count}</span>
          <button  onClick={()=> setCount(count + 1)}>
            <PlusIcon className="hover:fill-orange-300"/>
          </button>
        </div>
        <button className="col-span-3 md:col-span-1 text-white rounded-md py-3 bg-orange-prime flex justify-center gap-x-3 shadow-lg shadow-orange-prime hover:bg-orange-400" onClick={handleAddToCart}>
          <CartIcon className="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
