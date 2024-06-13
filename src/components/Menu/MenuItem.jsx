import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  getClosest,
  getSiblings,
  slideToggle,
  slideUp,
} from "../../utils/utils";
import { useTranslation } from "react-i18next";

const MenuItem = ({ item, toggle }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path, location) => {
    if (location.pathname === path) {
      return true;
    }

    if (path !== "/" && location.pathname.includes(path)) {
      return true;
    }

    return false;
  };

  // Submenu Toggle Handler
  const menuExpandHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("vs-mean-expand") ||
      target.classList.contains("vs-mean-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        if (sibling.classList.contains("active")) {
          sibling.classList.remove("active");
        }
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 400);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 400);
        }
      });
      parent.classList.toggle("active");
    }
  };

  return (
    <li>
      <NavLink
        to={item.path || "#"}
        className={isActive(item.path, location) ? "nav-active" : ""}
      >
        {t(`navbar.${item.name}`)}
      </NavLink>
    </li>
  );
};

export default MenuItem;
