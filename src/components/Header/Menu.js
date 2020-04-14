import React from "react";

const MenuLink = ({ title, link }) => {
  return (
    <li className="menu-li">
      <a className="menu-link" href={link}>
        {title}
      </a>
    </li>
  );
};

const Menu = () => {
  const links = [
    {
      title: "Compaign",
      link: "/",
    },
    {
      title: "Deployments",
      link: "/",
    },
    {
      title: "KoL",
      link: "/",
    },
  ];

  return (
    <>
      <div style={{ float: "left", boxShadow: "0 0 6px var(--gray-xl)" }}>
        <img
          alt="logo"
          height="64px"
          width="auto"
          src="https://s3-img.meituan.net/v1/mss_3d027b52ec5a4d589e68050845611e68/ff/n0/0k/9r/d1_265738.jpg@596w_1l.jpg"
        />
      </div>

      <ul className="menu is-unstyled">
        {links.map((link, index) => (
          <MenuLink key={index} title={link.title} link={link.link} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
