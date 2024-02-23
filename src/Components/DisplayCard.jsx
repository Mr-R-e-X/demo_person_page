const DisplayCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-400 align-middle mx-1 min-h-56 min-w-40 p-2 rounded-md shadow-lg shadow-slate-800">
      <div>
        <img
          src="https://i.pinimg.com/originals/20/fc/54/20fc549e37996cc5df80ed6628289bc4.jpg"
          className="rounded-md object-cover"
        />
      </div>
      <p className="text-lg text-gray-200 font-semibold"> Lorem Ipsum </p>
      <p> Lorem Ipsum </p>
    </div>
  );
};

export default DisplayCard;
