import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose?.();
        }
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="drawer-backdrop" role="presentation" onMouseDown={onClose}>
            <aside
                className="drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="drawer-head">
                    <strong>Menu</strong>
                    <button className="btn icon" onClick={onClose} aria-label="Zamknij menu">✕</button>
                </div>

                <nav className="drawer-nav">
                    <NavLink to="/" end onClick={onClose}>Home</NavLink>
                    <NavLink to="/produkty" onClick={onClose}>Produkty</NavLink>
                    <NavLink to="/koszyk" onClick={onClose}>Koszyk</NavLink>
                    <NavLink to="/kontakt" onClick={onClose}>Kontakt</NavLink>
                </nav>
            </aside>
        </div>
    );
}
