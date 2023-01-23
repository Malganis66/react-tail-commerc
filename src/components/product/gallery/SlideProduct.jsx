import { useEffect, useRef, useState } from "react";

import NextIcon from "@/components/icons/NextIcon";
import PrevIcon from "@/components/icons/PrevIcon";

export default ({
  ARRAY_IMG = [],
  ARRAY_SMALL_IMG = [],
  openSlideModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const btnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    openSlideModal && btnSlider.current.classList.remove("md:hidden");
  }, [openSlideModal]);

  const prevClick = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  };
  const nextClick = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <section {...props}>
      {openSlideModal && (
        <button className="md:col-span-4 text-right" onClick={handleCloseModal}>
          Close
        </button>
      )}
      <div className="col-span-4 relative">
        <img
          src={ARRAY_IMG[index]}
          alt=""
          className="object-cover aspect-[16/13] w-full md:aspect-[16/14] xl:aspect-[16/16] xl:max-h-[500px] 2xl:max-h-[500px] md:rounded-md cursor-pointer"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-3 md:hidden"
        >
          <button
            className="grid place-items-center h-10 w-10 rounded-full bg-white"
            onClick={prevClick}
          >
            <PrevIcon />
          </button>
          <button
            className="grid place-items-center h-10 w-10 rounded-full bg-white"
            onClick={nextClick}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {ARRAY_SMALL_IMG.map((smallImg, i) => {
        return (
          <div key={smallImg} onClick={()=> setIndex(i)} className="relative rounded-md overflow-hidden cursor-pointer">
            <img
              
              src={smallImg}
              alt=""
              className="hidden md:block md:rounded-md"
            />
            <span className={`hover:bg-[rgba(255,255,255,.5)] ${i === index && "bg-[rgba(255,255,255,.5)] border-2 border-orange-prime rounded-md"} h-full w-full absolute top-0 `}></span>
          </div>
        );
      })}
    </section>
  );
};
