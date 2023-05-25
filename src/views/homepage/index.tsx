import { RefObject, useEffect, useMemo, useState } from "react";
import Header from "../components/header";
import Education from "../education";
import WorkExperience from "../experience";
import Home from "../home";
import Projects from "../projects";

const HomePage = () => {
  const [focusedDiv, setFocusedDiv] = useState<string>('');


  return (
    <>
      <Header focusedDiv={focusedDiv} />
      <Home setFocusedDiv={setFocusedDiv} />
      <Education setFocusedDiv={setFocusedDiv} />
      <WorkExperience setFocusedDiv={setFocusedDiv} />
      <Projects setFocusedDiv={setFocusedDiv} />
    </>
  );
};

export default HomePage;
