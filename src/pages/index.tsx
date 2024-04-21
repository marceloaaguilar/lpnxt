import AboutCurse from "../../components/AboutCourse";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SectionImages from "../../components/SectionImages";
import CourseContent from "../../components/CourseContent";
import AboutInstructor from "../../components/AboutInstructor";
import Form from "../../components/Form";
import Testmonials from "../../components/Testmonials";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutCurse/>
      <SectionImages/>
      <CourseContent/>
      <Testmonials/>
      <AboutInstructor/>
      <Form/>
    </>
  );
}
