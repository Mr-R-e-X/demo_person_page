import ResearchCard from "./ResearchCard";

const Projects = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly overflow-scroll no-scrollbar">
      <ResearchCard />
      <ResearchCard />
      <ResearchCard />
      <ResearchCard />
    </div>
  );
};

export default Projects;
