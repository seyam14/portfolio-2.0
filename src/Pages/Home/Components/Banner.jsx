import { useEffect, useState } from "react";
import hero from "../../../assets/landing.png";
import FramerMagnetic from "./FramerMagnetic";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "long",
      };
      const formattedTime = currentDate.toLocaleString("en-US", options);
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    const resumePdfUrl =
     "https://drive.google.com/file/d/1P3YSprI4h5lg2rD_ZW_2tgyhMTS6iBEm/view?usp=drive_link";

    const downloadLink = document.createElement("a");
    downloadLink.href = resumePdfUrl;

    downloadLink.download = "Seyams_Resume.pdf";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 max-w-screen-2xl mx-auto lg:px-2 cursor-crosshair p-2 lg:p-0">
      <div className="space-y-10 flex flex-col justify-center p-4 lg:p-0">
        <h1 className="text-2xl text-[#A6ADBB] font-bold">Assalamualaikum Warahmatullahi Wabarakatuh </h1>
        <div className="text-[#A6ADBB] hover:text-orange-400 ease-in-out duration-1000 space-y-2">
          <h1 className="text-4xl lg:text-4xl font-semibold">
          I am 
          </h1>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#3CD7A1] hover:text-violet-400 ease-in-out duration-1000">
        Seyam
        </h1>
        <p className="text-[#A6ADBB] text-xl">
          I like to create solid and scalable digital front-end products. My
          main goal is to give you the best visual experiences. From UI design
          to web development I can collaborate at every level.
        </p>
        <p className="text-[#A6ADBB] text-xl">{currentTime}. </p>
        <span className="text-[#3CD7A1] font-semibold hover:text-orange-400 duration-700 ease-in-out text-xl">
          Available for works.
        </span>

        <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-5">
          <button
            onClick={handleDownloadResume}
            className="btn bg-[#3CD7A1] hover:bg-orange-400 text-black duration-500 ease-in-out text-lg"
          >
            {" "}
            Download Resume
          </button>
        <FramerMagnetic>
        <button
           onClick={() => {
            handleDownloadResume();
            scrollToContactForm();
          }}
          className="btn btn-outline border-orange-400 border-2 text-orange-400 hover:border-[#3CD7A1] hover:bg-[#3CD7A1] duration-500 ease-in-out hover:text-black text-lg">
            Hire Me
          </button>
        </FramerMagnetic>
        </div>
      </div>
      <div className="flex items-center justify-end opacity-80 hover:opacity-50 duration-1000 ease-in-out">
        <img src={hero} alt="Hero" className="h-[600px] hidden lg:block" />
      </div>
    </div>
  );
};

export default Banner;
