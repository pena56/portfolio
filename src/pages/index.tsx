import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs"

function Index() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-14 lg:gap-6 lg:h-screen lg:overflow-hidden bg-gray-900">
      <div className="w-full max-w-[1260px] mx-auto flex flex-col lg:flex-row gap-14 lg:gap-6">
        <aside className="p-4 md:p-6 lg:p-10 flex flex-col gap-8 lg:w-[40%] lg:h-full lg:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-100 text-4xl lg:text-5xl font-bold">
                Moses Ogbopina
              </h1>

              <p className="text-gray-100 text-xl lg:text-2xl">
                Frontend | Mobile Developer
              </p>
            </div>

            <p className="text-gray-400 lg:text-lg">
              I design and build Scalable Web Applications that met
              Accessibility standards and also responsive across a wide range of
              devices.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/pena56" target="_blank">
              <AiFillGithub size="2rem" color="#94A3B8" />
            </a>
            <a href="https://twitter.com/pena_mo56" target="_blank">
              <AiFillTwitterCircle size="2rem" color="#94A3B8" />
            </a>
            <a
              href="https://www.linkedin.com/in/moses-ogbopina/"
              target="_blank"
            >
              <AiFillLinkedin size="2rem" color="#94A3B8" />
            </a>
          </div>
        </aside>

        <div className="flex flex-col gap-10 lg:flex-1 lg:overflow-y-scroll scrollbar-hide pb-10">
          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4 relative">
            <div className="w-full py-4 sticky top-0 left-0 right-0 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
              <p className="text-gray-100 text-sm lg:text-base font-semibold tracking-wider">
                ABOUT ME
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-300 text-base lg:text-lg">
                Hi, I'm{" "}
                <span className="text-gray-100 font-bold">Moses Ogbopina</span>,
                a Frontend Developer with over three years of experience. I
                graduated from the Department of Computer Science at the
                University of Port Harcourt.
              </p>
              <p className="text-gray-300 text-base lg:text-lg">
                I love to design and build Scalable Web Applications that met
                Accessibility standards and also responsive across a wide range
                of devices. I love challenges and learning new skills and tools,
                if there's something I don't know, I will learn it.
              </p>
            </div>
          </section>

          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <div className="w-full py-4 sticky top-0 left-0 right-0 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
              <p className="text-gray-100 text-sm font-semibold tracking-wider lg:text-lg">
                EXPERIENCE
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs lg:text-sm text-gray-400 tracking-wider">
                MAY 2022 - MAY 2023
              </p>

              <div>
                <p className="text-gray-200 text-base lg:text-lg font-bold">
                  Frontend & Mobile Engineer
                </p>
                <p className="text-gray-400 text-base lg:text-lg flex items-center gap-2">
                  Flovest Savings Limited
                  <BsArrowUpRight />
                </p>
              </div>

              <p className="text-gray-300 text-base lg:text-lg">
                During my tenure as a React Front End Developer at Flovest from
                May 2022 to May 2023, I played a pivotal role in the company's
                digital transformation. As a proactive collaborator, I worked
                closely with a multifunctional team consisting of designers,
                product owners, and backend developers to drive the creation of
                user-centric solutions. My responsibilities spanned across
                diverse platforms, including web and mobile applications,
                ensuring the highest level of functionality, responsiveness, and
                security. With a strong emphasis on user experience, I executed
                various tasks to elevate Flovest's digital presence.
              </p>

              <div className="w-full flex flex-wrap gap-2">
                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  HTML
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  CSS
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  JavaScript
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  React
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  NextJS
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  React Native
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  Tailwind CSS
                </p>

                <p className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider">
                  Bootstrap
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <div className="w-full py-4 sticky top-0 left-0 right-0 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
              <p className="text-gray-100 text-sm lg:text-lg font-semibold tracking-wider">
                PROJECTS
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 lg:order-last lg:flex-1">
                  <a href="https://myflovest.com/" target="_blank">
                    <p className="text-gray-200 text-base font-bold flex items-center gap-2">
                      Flovest Marketing Website
                      <BsArrowUpRight />
                    </p>
                  </a>

                  <p className="text-gray-300 text-base">
                    One of my primary responsibilities was the development of a
                    visually appealing and user-friendly marketing website using
                    ReactJS and TailwindCSS. I seamlessly translated the design
                    concepts into a fully functional and responsive web
                    application, engaging visitors and potential clients with an
                    immersive online experience. My role extended beyond code
                    implementation; I played a vital role in integrating design
                    elements and backend functionality, ensuring a harmonious
                    blend of aesthetics and functionality that aligned with
                    Flovest's branding and goals.
                  </p>
                </div>

                <div className="w-full lg:w-52 h-44 lg:h-24 rounded overflow-hidden relative">
                  <img
                    src="/assets/2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 lg:order-last lg:flex-1">
                  <a
                    href="https://app.myflovest.com/auth/login"
                    target="_blank"
                  >
                    <p className="text-gray-200 text-base font-bold flex items-center gap-2">
                      Flovest Web App
                      <BsArrowUpRight />
                    </p>
                  </a>

                  <p className="text-gray-300 text-base">
                    In addition to the marketing website, I was involved in
                    creating a user-friendly web application for Flovest's
                    administrative backend. Utilizing HTML, CSS, and JavaScript,
                    I worked collaboratively with designers and product owners
                    to ensure the efficient operation of the backend systems. My
                    contributions included developing intuitive user interfaces
                    and enhancing user experience, emphasizing ease of
                    navigation and data management. The resulting web app
                    streamlined internal processes, enhancing the efficiency of
                    Flovest's operations.
                  </p>
                </div>

                <div className="w-full lg:w-52 h-44 lg:h-24 rounded overflow-hidden relative">
                  <img
                    src="/assets/1.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 lg:order-last lg:flex-1">
                  <a
                    href="https://play.google.com/store/search?q=flovest&c=apps"
                    target="_blank"
                  >
                    <p className="text-gray-200 text-base font-bold flex items-center gap-2">
                      Flovest Mobile App
                      <BsArrowUpRight />
                    </p>
                  </a>

                  <p className="text-gray-300 text-base">
                    My role extended to mobile app development, where I
                    leveraged React Native to craft a cross-platform solution. I
                    integrated the backend API into the mobile app, ensuring
                    seamless data flow and functionality. Moreover, I managed
                    the deployment of the mobile app to both the Play Store and
                    App Store, facilitating accessibility for a wider audience.
                    Throughout this process, I prioritized security measures,
                    implementing safeguards to protect against fraudulent
                    activities and to maintain the trust of Flovest's user base.
                    My work on the mobile app played a pivotal role in expanding
                    Flovest's reach and accessibility on the go.
                  </p>
                </div>

                <div className="w-full lg:w-52 h-44 lg:h-24 rounded overflow-hidden relative">
                  <img
                    src="/assets/3.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <div className="w-full py-4 sticky top-0 left-0 right-0 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
              <p className="text-gray-100 text-sm lg:text-lg font-semibold tracking-wider">
                ARTICLES
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex w-full gap-4">
                <div className="w-[30%] h-12 lg:h-20 overflow-hidden rounded relative">
                  <img
                    src="/assets/A5.webp"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base">2021</p>
                  <a
                    target="_blank"
                    href="https://medium.com/@ogbopinamoses/how-to-implement-infinite-scroll-in-a-react-app-using-the-intersection-observer-api-3d8b3d88629b"
                    className="text-gray-200 text-base lg:text-lg flex items-center gap-2"
                  >
                    How to Implement Infinite Scroll in a React App using the
                    Intersection Observer API
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="flex w-full gap-4">
                <div className="w-[30%] h-12 lg:h-20 overflow-hidden rounded relative">
                  <img
                    src="/assets/A4.webp"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base">2021</p>
                  <a
                    target="_blank"
                    href="https://medium.com/bithubph/how-to-build-an-authentication-system-in-react-using-firebase-2717103ee197"
                    className="text-gray-200 text-base lg:text-lg flex items-center gap-2"
                  >
                    How to Build an Authentication system in React using
                    Firebase
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="flex w-full gap-4">
                <div className="w-[30%] h-12 lg:h-20 overflow-hidden rounded relative">
                  <img
                    src="/assets/A1.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base">2019</p>
                  <a
                    target="_blank"
                    href="https://medium.com/bithubph/how-to-deploy-your-django-applications-on-heroku-8b58fdb09dd0"
                    className="text-gray-200 text-base lg:text-lg flex items-center gap-2"
                  >
                    How to deploy your Django Applications on Heroku
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="flex w-full gap-4">
                <div className="w-[30%] h-12 lg:h-20 overflow-hidden rounded relative">
                  <img
                    src="/assets/A2.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base">2019</p>
                  <a
                    target="_blank"
                    href="https://medium.com/bithubph/how-to-install-django-on-windows-with-ease-7bd599a04b56"
                    className="text-gray-200 text-base lg:text-lg flex items-center gap-2"
                  >
                    How To Install Django On Windows With Ease
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="flex w-full gap-4">
                <div className="w-[30%] h-12 lg:h-20 overflow-hidden rounded relative">
                  <img
                    src="/assets/A3.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
                </div>

                <div className="flex-1">
                  <p className="text-gray-400 text-base">2019</p>
                  <a
                    target="_blank"
                    href="https://medium.com/@ogbopinamoses/how-to-install-jsprettier-in-sublime-text-f22b0f77380e"
                    className="text-gray-200 text-base lg:text-lg flex items-center gap-2"
                  >
                    How to install JsPrettier in Sublime Text
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Index
