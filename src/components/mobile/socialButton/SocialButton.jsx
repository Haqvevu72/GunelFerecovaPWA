const SocialButton = ({ href, src, alt, additionalClass = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative size-[72.84px] ${additionalClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute size-[72.84px] animate"
      />
    </a>
  );
};

export default SocialButton;
