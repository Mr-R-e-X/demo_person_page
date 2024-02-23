import DoctoralStudents from "./DoctoralStudents";
import PostgraduateStudents from "./PostgraduateStudents";
import UndergraduateStudents from "./UndergraduateStudents";
const Alumni = () => {
  return (
    <div className="max-h-screen overflow-scroll no-scrollbar">
      <DoctoralStudents />
      <PostgraduateStudents />
      <UndergraduateStudents />
    </div>
  );
};

export default Alumni;
