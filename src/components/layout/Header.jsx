import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
import { useCart } from "../../context/cartContext.jsx";
import { useTheme } from "../../context/themeContext.jsx";

export default function Header() {
    const { count } = useCart();
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <a className="skip-link" href="#main">Przejdź do treści</a>

            <div className="container header-inner">
                <Link to="/" className="brand">
                    <span className="brand-mark" aria-hidden="true">✿</span>
                    <span className="brand-name">kwiatpl</span>
                </Link>

                <nav className="nav desktop-nav" aria-label="Główna nawigacja">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/produkty">Produkty</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                    <NavLink to="/koszyk" className="cart-link">
                        Koszyk <span className="badge" aria-label={`Liczba produktów w koszyku: ${count}`}>{count}</span>
                    </NavLink>
                </nav>

                <div className="header-actions">
                    <button className="btn icon" onClick={toggle} aria-label="Przełącz motyw">
                        {theme === "dark" ? "☾" : "☀"}
                    </button>

                    <button
                        className="btn icon burger"
                        onClick={() => setOpen(true)}
                        aria-label="Otwórz menu"
                        aria-expanded={open}
                    >
                        ☰
                    </button>
                </div>
            </div>

            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </header>
    );
}
