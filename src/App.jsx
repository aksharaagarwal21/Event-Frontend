import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Guest from "./components/sections/Guest";
import Timeline from "./components/sections/Timeline";
import Sponsors from "./components/sections/Sponsors";
import FollowUs from "./components/sections/FollowUs";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/common/Footer";

function App() {
  return (
    <main className="bg-verse-void min-h-screen text-white selection:bg-blood selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Guest />
      <Timeline />
      <Sponsors />
      <FollowUs />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
