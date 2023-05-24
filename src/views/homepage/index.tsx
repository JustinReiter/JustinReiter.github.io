import { RefObject, useEffect, useMemo, useState } from "react";
import Header from "../components/header";
import Education from "../education";
import WorkExperience from "../experience";
import Home from "../home";
import Projects from "../projects";

function useOnScreen(ref: RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    if (ref.current){
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}

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
