import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const Nav = () => {
  const links = [
    { label: "home", path: "/" },
    { label: "pages", path: "/pages" },
    { label: "products", path: "/product" },
    { label: "blog", path: "/blog" },
    { label: "shop", path: "/shop" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-purple-700 text-white font-light text-xs p-2 flex justify-around">
        <div>
          <span className="mx-2">
            <i className="bi bi-envelope"></i> email@email.com
          </span>
          &nbsp;
          <span className="mx-2">
            <i className="bi bi-telephone"></i> +234 ()654
          </span>
        </div>
        <div className="capitalize">
          <Link to="" className="mx-2">
            login <i className="bi bi-person"></i>
          </Link>
          <Link to="" className="mx-2">
            WishList <i className="bi bi-heart"></i>
          </Link>
          <Link to="" className="mx-2">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </header>
      <nav className="bg-white flex align-middle justify-around py-5">
        <div className="font-bold capitalize">Webstore</div>
        <div>
          {links.map((link, i: number) => (
            <StoreLink key={i} to={link.path}>
              {link.label}
            </StoreLink>
          ))}
        </div>
        <div>
          <div className="input-wrapper border border-1 border-gray-100 inline-flex w-full p-0 ">
            <input
              type="search"
              name="search"
              placeholder=""
              className="outline-0 border-0 w-full "
            />
            <button className="bg-pink-500 text-white p-1 px-2 border-0">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </nav>


          <SectionHeader title='title'/>

    </>
  );
};

const StoreLink = (props: any) => {
  const clazz: string = "text-black font-light capitalize mx-2";

  const handleActiveLink = (isActive: boolean): string => {
    const result: string = isActive ? clazz.concat("text-pink-500") : clazz;

    return result;
  };
  return (
    // <NavLink className={(isActive:boolean) => `${handleActiveLink(isActive)}`} {...props}>
    <NavLink className={clazz} {...props}>
      {props.children}
    </NavLink>
  );
};

export default Nav;
