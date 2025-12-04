import {  Navbar } from "@/components"
import type { JSX } from "react"

export function Community(): JSX.Element {
  return (
    <>
      <div
        id="community"
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/background.jpg')",
        }}
      >
        <Navbar/>
      </div>
    </>
  )
}

