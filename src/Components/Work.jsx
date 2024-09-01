import EducationCarousel from "./EducationCarousel";
import Headings from "./Headings";

const Work = ({ data }) => {
  return (
    <>
      <Headings>Work Experience</Headings>
      <EducationCarousel data={data}></EducationCarousel>
    </>
  );
};
export default Work;
