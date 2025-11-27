import type { JSX } from "react"
import { Navbar } from "../../components"
import VideoBackground from "../../components/VideoBackground/VideoBackground"
import video from "../../assets/Home-bg.mp4"
{/* import { AboutUs } from "./sections" */}
import { Hero } from "../../components/hero"

export function Home(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="relative">
        <section className="relative min-h-screen">
          {/* Video  absolute background inside the hero */}
          <VideoBackground src={video} coverType="absolute" />
          {/* Hero content - above the video */}
          <Hero/>
        </section>

        {/* Sections below will scroll normally */}
        <section className=" ">
          { /*<AboutUs /> */}
        </section>
      </main>
    </>
  )
}

export default Home
