import EducationSecond from "./EducationSecond";
import Headings from "./Headings";

const Work = ({ data }) => {
  return (
    <>
      <Headings>Work Experience</Headings>
      <EducationSecond data={data}></EducationSecond>
    </>
  );
};
export default Work;
