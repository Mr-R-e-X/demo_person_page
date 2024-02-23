import { useState, useEffect } from "react";
const Body = () => {
  const [imgList, setImgList] = useState([
    "https://cdn.pixabay.com/photo/2017/10/26/17/46/newtons-2891856_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/13/10/20/pulse-3079904_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/03/08/01/28/hypnosis-4041583_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/02/06/22/12/pendulum-626623_1280.jpg",
  ]);

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currIndex < imgList.length) {
        setCurrIndex(currIndex + 1);
      }
      if (currIndex == imgList.length - 1) {
        setCurrIndex(0);
      }
    }, 1000);
  }, [currIndex]);
  return (
    <div className="min-h-full flex items-center transition-all ease-in-out duration-200">
      <img
        src={imgList[currIndex]}
        className="object-cover px-2 py-2 rounded-3xl h-screen w-screen"
      />
    </div>
  );
};

export default Body;
