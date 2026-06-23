import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p className="muted">© {new Date().getFullYear()} kwiatpl — demo SPA (React).</p>
                <p className="muted">Dostawa: Warszawa i okolice • Kontakt: kontakt@kwiatpl.pl</p>
            </div>
        </footer>
    );
}
