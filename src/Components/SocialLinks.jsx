/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SocialLinks.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full flex  items-center gap-3 ">
      <a href="https://github.com/bl33h" target="_blank">
        <FontAwesomeIcon
          color="#aa6161"
          className="text-5xl  hover:text-white hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:sarap.echeverria@gmail.com" target="_blank">
        <FontAwesomeIcon
          color="#aa6161"
          className="text-5xl  hover:text-white hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a href="https://www.linkedin.com/in/saraech" target="_blank">
        <FontAwesomeIcon
          color="#aa6161"
          className="text-5xl  hover:text-white hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
