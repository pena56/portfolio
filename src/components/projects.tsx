import { BsArrowUpRight } from "react-icons/bs";

const data = [
  {
    title: "Flovest Marketing Website",
    description:
      "Developed a visually appealing and user-friendly marketing website using ReactJS and TailwindCSS, integrating design elements and backend functionality.",
    image: "/assets/2.jpg",
    link: "https://myflovest.com/",
  },
  {
    title: "Flovest Web App",
    description:
      "Created a user-friendly web application for Flovest's administrative backend using HTML, CSS, and JavaScript, enhancing user experience and data management.",
    image: "/assets/1.png",
    link: "https://app.myflovest.com/auth/login",
  },
  {
    title: "Flovest Mobile App",
    description:
      "Developed a cross-platform mobile app using React Native, integrating backend API and managing deployment to Play Store and App Store with security measures.",
    image: "/assets/3.png",
    link: "https://play.google.com/store/search?q=flovest&c=apps",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-10">
      {data?.map((project, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex flex-col gap-4 lg:order-last lg:flex-1">
            <a href={project?.link} target="_blank">
              <p className="text-gray-200 text-base font-bold flex items-center gap-2">
                {project?.title}
                <BsArrowUpRight />
              </p>
            </a>

            <p className="text-gray-300 text-base">{project?.description}</p>
          </div>

          <div className="w-full lg:w-52 h-44 lg:h-24 rounded overflow-hidden relative">
            <img
              src={project?.image}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
