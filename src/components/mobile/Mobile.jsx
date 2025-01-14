import { useState } from "react";
import Profile from "./Profile";
import About from "./About";
import SocialButtons from "./socialButton/SocialButtons";
import Footer from "./Footer";
import Modal from "./Modal";
import "@assets/styles/style.css";
import RandevuModal from "./RandevuModal";
import { ToastContainer } from "react-toastify";
import NotificationButton from "./NotificationButton";

const Mobile = () => {
  const [language, setLanguage] = useState("az");
  const [isOpen, setIsOpen] = useState(false);
  const [isRandevuOpen, setIsRandevuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="md:none">
      <div className="w-full h-full flex flex-col items-center">
        <NotificationButton setIsOpen={setIsOpen} />
        <About language={language} />
        <Profile setIsOpen={setIsOpen} />
        <SocialButtons setIsRandevuOpen={setIsRandevuOpen} />
        <Footer onLanguageChange={handleLanguageChange} />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} language={language} />
        <RandevuModal
          isOpen={isRandevuOpen}
          setIsOpen={setIsRandevuOpen}
          language={language}
        />
        <ToastContainer closeOnClick position="top-center" />
      </div>
    </div>
  );
};

export default Mobile;
