import { BsArrowUpRight } from "react-icons/bs";

const data = [
  {
    date: "FEB 2024 - PRESENT",
    role: "Frontend & Mobile Engineer",
    company: "Kontrack Technologies Inc",
    description: `As a Frontend & Mobile Engineer at Kontrack Technologies Inc, I have been instrumental in developing and maintaining high-quality web and mobile applications. My role involves collaborating with cross-functional teams to design user-friendly interfaces and ensure seamless functionality across platforms. I leverage my expertise in React, and React Native to create responsive and efficient applications that meet the needs of our clients. My commitment to delivering exceptional user experiences drives my work, and I continuously seek to improve the performance and security of our applications.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Tailwind CSS",
      "Expo",
    ],
    companyLink: "https://kontrack.ca/",
  },
  {
    date: "MAY 2022 - MAY 2023",
    role: "Frontend & Mobile Engineer",
    company: "Flovest Savings Limited",
    description: `During my tenure as a React Front End Developer at Flovest from May 2022 to May 2023, I played a pivotal role in the company's digital transformation. As a proactive collaborator, I worked closely with a multifunctional team consisting of designers, product owners, and backend developers to drive the creation of user-centric solutions. My responsibilities spanned across diverse platforms, including web and mobile applications, ensuring the highest level of functionality, responsiveness, and security. With a strong emphasis on user experience, I executed various tasks to elevate Flovest's digital presence.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NextJS",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
    ],
    companyLink: "#",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {data?.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <p className="text-xs lg:text-sm text-gray-400 tracking-wider">
            {item?.date}
          </p>

          <div>
            <p className="text-gray-200 text-base lg:text-lg font-bold">
              {item?.role}
            </p>
            <a
              href={item?.companyLink}
              target="_blank"
              className="text-gray-400 text-base lg:text-lg flex items-center gap-2 w-fit"
            >
              {item?.company}
              <BsArrowUpRight />
            </a>
            <div className="relative flex items-center my-4"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-rose-400 via-rose-300 to-transparent rounded-full" />
            {/* <span className="absolute left-0 -top-3 text-rose-400 text-xs font-semibold tracking-widest uppercase">
              Experience
            </span> */}
          </div>
          <p className="text-gray-300 text-base lg:text-lg">
            {item?.description}
          </p>

          <div className="w-full flex flex-wrap gap-2">
            {item?.skills?.map((skill, skillIndex) => (
              <p
                key={skillIndex}
                className="bg-[#183753] p-1 px-2 text-sm rounded text-rose-300 tracking-wider"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
