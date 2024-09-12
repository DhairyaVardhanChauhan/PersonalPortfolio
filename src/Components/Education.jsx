import EducationSecond from "./EducationSecond";
import Headings from "./Headings";
const Education = ({data}) => {
  return (
    <>
      <Headings>Education</Headings>
      <EducationSecond data={data}></EducationSecond>
    </>
  );
};
export default Education;
