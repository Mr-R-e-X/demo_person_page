import DisplayCard from "./DisplayCard";
import useHorizontalScroll from "../utility/useHorizontalScroll";
const DoctoralStudents = () => {
  const { scrollContainerRef, scrollLeft, scrollRight } = useHorizontalScroll();

  return (
    <>
      <div className="flex flex-row justify-between items-center py-4 mt-2 px-4 mx-1 rounded-lg bg-slate-800">
        <h1 className="text-xl text-white font-bold px-3">Doctoral Students</h1>
        <div className="hidden lg:flex flex-row ">
          <button onClick={scrollLeft}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3718/3718470.png"
              className="max-w-7 min-w-7 rounded-full object-cover rotate-180 mx-2 shadow-md shadow-slate-500"
            />
          </button>
          <button onClick={scrollRight}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3718/3718470.png"
              className="max-w-7 min-w-7 mx-2 rounded-full object-cover shadow-md shadow-slate-500"
            />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex flex-row px-2 w-full overflow-x-scroll py-4 no-scrollbar"
      >
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
      <div className="flex flex-row justify-center py-2 lg:hidden ">
        <button onClick={scrollLeft}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3718/3718470.png"
            className="max-w-7 min-w-7 rounded-full object-cover rotate-180 mx-4 shadow-md shadow-slate-500"
          />
        </button>
        <button onClick={scrollRight}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3718/3718470.png"
            className="max-w-7 min-w-7 mx-4 rounded-full object-cover shadow-md shadow-slate-500"
          />
        </button>
      </div>
    </>
  );
};

export default DoctoralStudents;
