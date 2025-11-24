import React from "react";
const PreviewCarCard = ({images, changeBigCarImage, bigCarImage}) => {
  const handleClick = () => {
   if(bigCarImage  !== images.img){
    changeBigCarImage(images.img);
    console.log(images.img)
   }
  };
  return (
    <div className={`rounded-md  w-[120px] overflow-clip h-[84px] border-2 ${bigCarImage === images.img ? 'border-primary-green drop-shadow-xl': 'border-transparent'}  flex items-center justify-center hover:cursor-pointer`} onClick={handleClick} >
    <div className="h-full w-full ">
      <img
        src={images.img}
        alt="Car image"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
  );
};

export default PreviewCarCard;
