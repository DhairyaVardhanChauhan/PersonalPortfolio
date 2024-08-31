import EducationCarousel from "./EducationCarousel";
import Headings from "./Headings";

const Work = ({data}) => {
  return (
    <>
      <Headings>Work</Headings>
      <EducationCarousel data={data}></EducationCarousel>
    </>
  );
};
export default Work;
