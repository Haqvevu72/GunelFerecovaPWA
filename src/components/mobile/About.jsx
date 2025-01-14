import name_az from "@assets/images/name_az.png";
import desc_az from "@assets/images/desc_az.png";

const About = ({ language }) => {
  const translations = {
    az: {
      name: name_az,
      description: desc_az
    },
    en: {
      name: "Namiq Rzayev",
      description:
        "CEO & Founder Webonly. Our company specializes in website development, CRM systems, and mobile apps.",
    },
    ru: {
      name: "Намиг Рзаев",
      description:
        "CEO & Founder Webonly. Наша компания занимается разработкой сайтов, crm и мобильных приложений.",
    },
  };

  const content = translations[language] || translations.uz;

  return (
    <div className="mt-24 mr-16">
      <img id="name" src={content.name} alt=""  className="w-[255.63px] h-[84px]"/>
      <img id="description" src={content.description} className="w-[283.04px]"/>
        
    </div>
  );
};

export default About;
