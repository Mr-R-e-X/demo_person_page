import { useEffect, useState } from "react";

const AboutMe = () => {
  const [imgList, setImgList] = useState([
    "https://cdn.pixabay.com/photo/2022/01/14/07/50/physics-6936704_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/13/21/21/astronomy-5829414_1280.png",
    "https://cdn.pixabay.com/photo/2019/06/16/00/34/physicist-4276720_1280.jpg",
    "https://cdn.pixabay.com/photo/2012/01/09/11/33/laser-11646_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/12/12/17/08/physics-3871216_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/12/12/17/08/physics-3871216_1280.jpg",
  ]);
  const [currIndex, setCurrIndex] = useState(0);
  const imgProf =
    "https://people.bose.res.in/faculty/image/Avijit%20Chowdhury.jpg";
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
  console.log(imgList);
  return (
    <div className="bg-slate-600 max-w-9/12 min-h-full text-white text-justify p-2 overflow-scroll no-scrollbar">
      <div className="flex flex-col items-center">
        <img
          src={imgList[currIndex]}
          className="max-h-[45vh] min-h-[45vh]  w-full rounded-lg mx-2 mb-2 shadow-lg shadow-slate-800 object-cover"
        />
        <img
          src={imgProf}
          className="relative top-[-28vh] min-w-72 max-w-72 rounded-full mb-[-27.5vh] shadow-lg shadow-slate-800 object-cover"
        />
        <div className="">
          <p className="text-base">
            Greetings! I am{" "}
            <span className="text-green-400 text-xl font-semibold">
              Avijit Chowdhury
            </span>
            , an&nbsp;
            <span className="text-red-500 text-xl font-semibold">
              Assistant Professor in the Department of Condensed Matter Physics
              and Material Sciences&nbsp;
            </span>
            at the
            <a
              href="https://www.bose.res.in/"
              target="_blank"
              className="text-cyan-600 font-semibold text-xl"
            >
              &nbsp; S.N. Bose National Centre for Basic Sciences, Kolkata
            </a>
            . My academic journey began at Jadavpur University, where I earned
            my Bachelor&#39;s and Master&#39;s degrees in Physics. Following
            this, I pursued a Ph.D. in Spectroscopy at the Indian Association
            for the Cultivation of Science (IACS), Kolkata, with the degree
            conferred by Jadavpur University in 2013. With a rich professional
            background as an Assistant Professor at the National Institute of
            Technology Silchar, Assam, from 2013 to 2021, I am currently
            dedicated to advancing the field of condensed matter physics. My
            research focuses on Experimental Condensed Matter Physics and
            Materials Science, exploring applications of nanomaterials and
            semiconductor heterostructures in electronic and optoelectronic
            devices. Delving into areas such as layered nanohybrids, resistive
            memory devices, and functional nanomaterials, I am passionate about
            contributing to the scientific understanding of these materials.
            Feel free to explore my recent publications to learn more about my
            research endeavors. Thank you for visiting my website!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
