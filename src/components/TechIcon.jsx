function TechIcon({ name, iconClass, type, src, delay }) {
  return (
    <div 
      className="col-6 col-md-4 col-lg-2" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {type === "image" ? (
        <img className="tech-icon" alt={name} src={src} />
      ) : (
        <i className={`${iconClass} tech-icon`}></i>
      )}
      {/* Optional: <p className="mt-2">{name}</p> */}
    </div>
  );
}

export default TechIcon;
