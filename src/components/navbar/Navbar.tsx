import { type JSX } from "react"
import logo from '../../assets/Logo.png'
import { Typography } from "../typography"

export function Navbar(): JSX.Element {
  return (
    <>
      <header className="">
        <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 ">
          <div className="max-w-7xl text-primary-700 flex flex-wrap text-heading-lg items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                className="w-13"
                alt="Fixando PC"
              />
              
            </a>
            
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                    aria-current="page"
                  >
                    <Typography
                    as="p"
                    >
                      Home
                    </Typography>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="#AboutUS"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    <Typography
                    as="p"
                    >
                      About
                    </Typography>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
