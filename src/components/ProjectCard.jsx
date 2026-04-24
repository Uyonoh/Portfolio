function ProjectCard({ url, image, alt, title }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <article
      className="project-card"
      onClick={handleClick}
      style={{ cursor: url ? "pointer" : "default" }}
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <img 
        src={image} 
        alt={alt} 
        loading="lazy" 
        width="400" 
        height="250" 
        style={{ objectFit: 'cover' }}
      />
      <h3 id={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-center">{title}</h3>
    </article>
  );
}

export default ProjectCard;
