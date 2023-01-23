import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";

export default ({ ARRAY_IMG, ARRAY_SMALL_IMG }) => {
  const [openSlideModal, setOpenSlideModal] = useState(false);

  const handleOpenModal = () => innerWidth > 767 && setOpenSlideModal(true);

  const handleCloseModal = () => setOpenSlideModal(false);

  return (
    <>
      <SlideProduct
        ARRAY_IMG={ARRAY_IMG}
        ARRAY_SMALL_IMG={ARRAY_SMALL_IMG}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {openSlideModal && (
        <>
          <ModalProduct
            ARRAY_IMG={ARRAY_IMG}
            ARRAY_SMALL_IMG={ARRAY_SMALL_IMG}
            openSlideModal={openSlideModal}
            className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:max-w-xl md:z-10"
            handleCloseModal={handleCloseModal}
          />
          <span className="fixed top-0 left-0 h-full w-full bg-black/70" onClick={handleCloseModal}></span>
        </>
      )}
    </>
  );
};
