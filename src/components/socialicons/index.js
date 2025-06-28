import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          // Create a nice display name for the tooltip
          const displayName = platform.charAt(0).toUpperCase() + platform.slice(1);
          return (
            <li key={platform}>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip={displayName}
                aria-label={displayName}
              >
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
