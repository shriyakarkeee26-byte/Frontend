import React from 'react'
import Hero from './Hero'
import About from './assets/pages/About'
import ProjectParent from "./assets/components/Projects/ProjectParent";
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Hero />
      <hr />
      <About />
      <hr />
      <ProjectParent />
      <hr />
    <Contact />
    </div>
  );
}

export default Home;