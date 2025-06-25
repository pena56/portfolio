import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Socials() {
  return (
    <div className="flex gap-6">
      <a href="https://github.com/pena56" target="_blank">
        <AiFillGithub size="2rem" color="#94A3B8" />
      </a>
      <a href="https://twitter.com/pena_mo56" target="_blank">
        <AiFillTwitterCircle size="2rem" color="#94A3B8" />
      </a>
      <a href="https://www.linkedin.com/in/moses-ogbopina/" target="_blank">
        <AiFillLinkedin size="2rem" color="#94A3B8" />
      </a>
    </div>
  );
}
