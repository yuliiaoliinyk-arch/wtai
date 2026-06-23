import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="page">
            <h1>404</h1>
            <p className="muted">Nie ma takiej strony.</p>
            <Link className="btn" to="/">Wróć na Home</Link>
        </section>
    );
}
