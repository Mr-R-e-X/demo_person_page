import { ScientistSVG } from "./SVGs";
const ResearchCard = () => {
  return (
    <div className="bg-slate-600 rounded tracking-wider max-w-xs lg:max-w-md mx-auto my-10 text-white shadow-xl shadow-slate-800">
      <header className="p-4">
        <h3 className="text-base font-semibold lg:font-bold lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p className="text-xs lg:text-xl">
          Accusamus eius mollitia animi aperiam!
        </p>
      </header>

      <section>
        <ScientistSVG />
        <p className="text-xs tracking-wider p-2 lg:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          unde tenetur nam aspernatur excepturi, consequatur, vitae dolorum
          consectetur inventore laborum aperiam laudantium nulla maiores ad.
          Accusamus eius mollitia animi aperiam!
        </p>
      </section>

      <footer className="p-4">
        <a
          href="#"
          className="uppercase font-bold text-sm text-green-600 hover:underline"
        >
          More Info
        </a>
        <a href="#" className="float-right">
          <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
        </a>
        <a href="#" className="float-right mr-3">
          <img src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
        </a>
      </footer>
    </div>
  );
};

export default ResearchCard;
