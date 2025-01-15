import name_az from "@assets/images/name_az.png";

const About = ({ language }) => {
  const translations = {
    az: {
      name: name_az,
      description:
        "Mən endokrin sistem xəstəliklərinin diaqnostikası, müalicəsi və profilaktikası üzrə ixtisaslaşmışam",
    },
    en: {
      name: "Namiq Rzayev",
      description:
        "Mən endokrin sistem xəstəliklərinin diaqnostikası, müalicəsi və profilaktikası üzrə ixtisaslaşmışam",
    },
    ru: {
      name: "Намиг Рзаев",
      description:
        "Mən endokrin sistem xəstəliklərinin diaqnostikası, müalicəsi və profilaktikası üzrə ixtisaslaşmışam",
    },
  };

  const content = translations[language] || translations.uz;

  return (
    <div className="h-[84px] mt-24 mr-16">
      <img
        id="name"
        src={content.name}
        alt=""
        className="w-[255.63px] h-[84px]"
      />
      <p id="description" className="text-white font-bold px-2">
        {content.description}
      </p>
    </div>
  );
};

export default About;
