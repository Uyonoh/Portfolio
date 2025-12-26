function ProjectCard({ url, image, alt, title }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: url ? "pointer" : "default" }}
    >
      <img src={image} alt={alt} />
      <p>{title}</p>
    </div>
  );
}

export default ProjectCard;
