import { useEffect, useState } from "react";

// gambar
import bgSecondary from "../assets/bg-cl-secondary.png";
import bgPrimary from "../assets/bg-cl-primary.png";

const Footer = ({ check }) => {
  const [bg, setBg] = useState(check);

  useEffect(() => {
    check ? setBg(bgPrimary) : setBg(bgSecondary);
  }, []);

  return (
    <>
      <div
        className={`${
          check ? "text-secondary" : "text-primary"
        } w-full bg-cover bg-center bg-no-repeat py-4 text-center text-lg font-medium `}
        style={{ backgroundImage: `url(${bg})` }}
      >
        2023 © MMD UB. All rights reserved by Kelompok 120 Desa Dilem.
      </div>
    </>
  );
};

export default Footer;
