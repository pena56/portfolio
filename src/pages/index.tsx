import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import ProfileDetails from "@/components/profile-details";
import Projects from "@/components/projects";
import Socials from "@/components/socials";

function Index() {
  return (
    <main className="w-full flex flex-col lg:flex-row gap-14 lg:gap-6 lg:h-screen lg:overflow-hidden bg-gray-900 relative">
      <div className="w-full max-w-[1260px] mx-auto flex flex-col lg:flex-row gap-14 lg:gap-6 relative">
        {/* Animated background patterns */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:overflow-hidden lg:overflow-visible">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700 rounded-full opacity-30 filter blur-3xl animate-blob1" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600 opacity-20 rounded-full blur-3xl animate-blob2 filter" />

          <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-blob3 filter" />
        </div>

        <aside className="p-4 md:p-6 lg:p-10 flex flex-col gap-8 lg:w-[40%] lg:h-full lg:justify-between relative z-10">
          <ProfileDetails />

          <Socials />
        </aside>

        <div className="flex flex-col gap-10 lg:flex-1 lg:overflow-y-scroll scrollbar-hide pb-10">
          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4 relative">
            <Header title="ABOUT ME" />

            <About />
          </section>

          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <Header title="EXPERIENCE" />

            <Experience />
          </section>

          <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <Header title="PROJECTS" />

            <Projects />
          </section>

          {/* <section className="px-4 md:px-6 lg:px-10 flex flex-col gap-4">
            <Header title="ARTICLES" />

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
          </section> */}
        </div>
      </div>
    </main>
  );
}

export default Index;
