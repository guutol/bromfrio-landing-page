import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Início", exact: true },
  { to: "/services", label: "Serviços", exact: true },
  { to: "/about", label: "Sobre", exact: true },
];

const isLinkActive = (pathname, to, exact) =>
  exact ? pathname === to : pathname.startsWith(to);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink
                  exact
                  className="navbar-brand"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="navbar-brand-icon" aria-hidden="true">
                    ❄️
                  </span>
                  Bomfrio
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  aria-label="Abrir menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    menuOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                    {navLinks.map((link) => (
                      <li className="nav-item" key={link.to}>
                        <NavLink
                          activeClassName="menu_active"
                          exact={link.exact}
                          className="nav-link"
                          aria-current={
                            isLinkActive(pathname, link.to, link.exact)
                              ? "page"
                              : undefined
                          }
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                    <li className="nav-item">
                      <NavLink
                        activeClassName="nav-cta-btn-active"
                        exact
                        className="nav-cta-btn"
                        aria-current={
                          isLinkActive(pathname, "/contact", true)
                            ? "page"
                            : undefined
                        }
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                      >
                        Contato
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
