import CustomSelect from "./CustomSelect";

const Footer = ({ onLanguageChange }) => {
  return (
    <div className="font-bold text-lg flex items-center space-x-4 mt-3 mb-2 text-white">
      <p>
        Created by{" "}
        <a
          href="https://webonly.io/"
          className="bg-gradient-to-r from-[#00C5F7] to-[#CAFBFF] bg-clip-text text-transparent"
        >
          Webonly
        </a>
      </p>
      <CustomSelect onLanguageChange={onLanguageChange} />
    </div>
  );
};

export default Footer;
