import Header from "../components/header";
import Education from "../education";
import WorkExperience from "../experience";
import Home from "../home";
import Projects from "../projects";


const HomePage = () => {


  return (
    <>
      <Header />
      <Home />
      <Education />
      <WorkExperience />
      <Projects />
      <div style={{scrollSnapAlign: "start", paddingTop: "24px"}}></div>
    </>
  );
};

export default HomePage;
