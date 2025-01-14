import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RandevuModal = ({ isOpen, setIsOpen, language }) => {
  const translations = {
    az: {
      phonePlaceholder: "Telefon nömrəsi",
      namePlaceholder: "Ad Soyad",
      submit: "Qəbula yazıl",
      services: "Xidmətlər",
    },
    en: {
      phonePlaceholder: "Phone Number",
      namePlaceholder: "Full Name",
      submit: "Book Appointment",
      services: "Services",
    },
    ru: {
      phonePlaceholder: "Номер телефона",
      namePlaceholder: "Полное имя",
      submit: "Записаться",
      services: "Услуги",
    },
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    translations[language].services
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const content = translations[language] || translations.az;

  if (!isOpen) return null;

  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    const telegramBotToken = "6848614665:AAGj0_WcSdBrTUTH9ssifEbpWKQWPTjsV4A";
    const chatId = "5285815942";
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const message = `New Appointment:\nName: ${name}\nPhone: ${phone}\nDate: ${selectedDate.toLocaleDateString()}\nService: ${selectedService}`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Appointment registered!");
          setName("");
          setPhone("");
          setSelectedDate(new Date());
          setSelectedService(content.services);
          closeModal();
        } else {
          toast.error("Error, please try again.");
        }
      })
      .catch(() => toast.error("Error, please try again."));
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const selectService = (service) => {
    setSelectedService(service);
    setDropdownOpen(false);
  };

  return (
    <div className="relative z-50">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75"
        onClick={closeModal}
      ></div>
      <div className="fixed inset-0 flex justify-center items-end mx-2 mb-2">
        <div
          className="rounded-lg shadow-lg w-full max-w-lg text-center bg-gradient-to-r from-[#2b003f] to-[#581179]"
          onClick={(e) => e.stopPropagation()}
          aria-labelledby="modal-title"
        >
          <div className="relative bg-white p-4 rounded-lg mx-2 my-2">
            <button
              className="absolute right-4 top-2 bg-red-600 px-2 font-bold text-center rounded-full text-white flex"
              onClick={closeModal}
            >
              X
            </button>
            <h2 id="modal-title" className="text-2xl font-bold mb-2">
              {content.submit}
            </h2>
            <input
              type="text"
              placeholder={content.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
            <input
              type="tel"
              placeholder={content.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
            />
            <div className="mt-1 w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-gray-300 rounded-lg w-full p-2.5 text-gray-900"
              />
            </div>
            <div className="relative mt-1 w-full">
              <button
                className="w-full px-3 py-2 border rounded-md shadow-sm text-gray-700 text-left focus:outline-none focus:ring-indigo-500"
                onClick={toggleDropdown}
              >
                {selectedService}
              </button>
              {isDropdownOpen && (
                <div className="absolute bottom-full left-0 w-full bg-white border rounded-md shadow-lg mt-1">
                  <ul className="text-left">
                    <li
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectService("Website")}
                    >
                      Website
                    </li>
                    <li
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectService("CRM")}
                    >
                      CRM
                    </li>
                    <li
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectService("Digicard")}
                    >
                      Digicard
                    </li>
                    <li
                      className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => selectService("Mobile")}
                    >
                      Mobile
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-sm"
              >
                {content.submit}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandevuModal;
