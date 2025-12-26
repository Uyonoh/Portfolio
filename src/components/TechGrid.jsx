import TechIcon from "./TechIcon";
import { technologies } from "../lib/data";

function TechGrid() {
  return (
    <div className="row justify-content-center g-4">
      {technologies.map((tech, index) => (
    <TechIcon 
      key={index}
      name={tech.name}
      iconClass={tech.iconClass}
      type={tech.type}
      src={tech.src}
      delay={tech.delay}
    />
  ))}
    </div>
  );
}

export default TechGrid;
