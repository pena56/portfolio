import { BsArrowUpRight } from "react-icons/bs";

const data = [
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
    <div className="flex flex-col gap-4">
      {data?.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="text-xs lg:text-sm text-gray-400 tracking-wider">
            {item?.date}
          </p>

          <div>
            <p className="text-gray-200 text-base lg:text-lg font-bold">
              {item?.role}
            </p>
            <p className="text-gray-400 text-base lg:text-lg flex items-center gap-2">
              {item?.company}
              <BsArrowUpRight />
            </p>
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
