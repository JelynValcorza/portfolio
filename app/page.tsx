// import { Navbar } from "@/src/components/sections/Navbar";
// import { Hero } from "@/src/components/sections/Hero";
// import { About } from "@/src/components/sections/About";
// import { Skills } from "@/src/components/sections/Skills";
// import { Projects } from "@/src/components/sections/Projects";
// import { Experience } from "@/src/components/sections/Experience";
// import { Services } from "@/src/components/sections/Services";
// import { Certificates } from "@/src/components/sections/Certificates";
// import { Contact } from "@/src/components/sections/Contact";
// import { Footer } from "@/src/components/sections/Footer";
// import { ScrollProgress } from "@/src/components/common/ScrollProgress";
// import { BackToTop } from "@/src/components/common/BackToTop";
// import { LoadingScreen } from "@/src/components/common/LoadingScreen";
// // import { ParticleCanvas } from "@/src/components/common/ParticleCanvas";
// // import Orb from "@/components/Orb";
// import { LiquidChrome } from "@/components/LiquidChrome/LiquidChrome";
// export default function Home() {
//   return (
//     <>
//       {/*
//         The Elegant Noise Overlay Layer
//         - Sits fixed over the entire viewport (z-[9999])
//         - Ultra low opacity (opacity-[0.035]) ensures it feels elegant, not dusty
//         - pointer-events-none allows clicks to pass straight through it
//       */}
//       <div className="fixed -inset-[50%] h-[200%] w-[200%] animate-noise opacity-[0.035] pointer-events-none z-[9999]" />

//       <LoadingScreen />
//       <ScrollProgress />
//       <Navbar />
//       {/* <Orb
//         hoverIntensity={2}
//         rotateOnHover
//         hue={0}
//         forceHoverState={false}
//         backgroundColor="#000000"
//       /> */}
//       <main>
//         <div style={{ width: "100%", height: "100%", position: "relative" }}>
//           <LiquidChrome
//             baseColor={[
//               0.7568627450980392, 0.7568627450980392, 0.7568627450980392,
//             ]}
//             speed={0.3}
//             amplitude={0.3}
//             interactive
//           />
//           {/* <ParticleCanvas /> */}
//           <Hero />
//           <About />
//           <Skills />
//           <Projects />
//           <Experience />
//           <Services />
//           <Certificates />
//           <Contact />
//         </div>
//       </main>
//       <Footer />
//       <BackToTop />
//     </>
//   );
// }
import { Navbar } from "@/src/components/sections/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Skills } from "@/src/components/sections/Skills";
import { Projects } from "@/src/components/sections/Projects";
import { Experience } from "@/src/components/sections/Experience";
import { Services } from "@/src/components/sections/Services";
import { Certificates } from "@/src/components/sections/Certificates";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/sections/Footer";
import { ScrollProgress } from "@/src/components/common/ScrollProgress";
import { BackToTop } from "@/src/components/common/BackToTop";
import { LoadingScreen } from "@/src/components/common/LoadingScreen";
import { LiquidChrome } from "@/components/LiquidChrome/LiquidChrome";

export default function Home() {
  return (
    <>
      {/* LiquidChrome Background */}
      <div className="fixed inset-0 -z-10">
        <LiquidChrome
          baseColor={[0.0823529412, 0.1882352941, 0.2784313725]}
          speed={0.22}
          amplitude={0.22}
          interactive
        />
        <div className="absolute inset-0 bg-linear-to-b from-sky-400/8 via-transparent to-cyan-300/8 dark:from-sky-300/10 dark:to-cyan-300/10" />
      </div>

      {/* Noise Overlay */}
      <div className="fixed inset-[-50%] h-[200%] w-[200%] animate-noise opacity-[0.025] pointer-events-none z-9999" />

      <LoadingScreen />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Certificates />
          <Contact />
        </main>

        <Footer />
      </div>

      <BackToTop />
    </>
  );
}
