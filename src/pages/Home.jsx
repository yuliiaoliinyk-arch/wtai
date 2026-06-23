import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import ProductCard from "../components/ui/ProductCard.jsx";

export default function Home() {
    const featured = PRODUCTS.slice(0, 3);

    return (
        <section className="page">
            <div className="hero">
                <div className="hero-content">
                    <h1>Kwiaty na dziś. Dostawa na jutro.</h1>
                    <p className="muted">
                        kwiatpl — bukiety, kwiaty cięte i rośliny doniczkowe. Prosto, estetycznie i responsywnie.
                    </p>
                    <div className="hero-actions">
                        <Link className="btn primary" to="/produkty">Zobacz produkty</Link>
                        <Link className="btn" to="/kontakt">Zapytaj o dostawę</Link>
                    </div>
                </div>
                <div className="hero-card">
                    <p className="muted">Bestsellery</p>
                    <ul className="mini-list">
                        <li>✿ Bukiet róż klasycznych</li>
                        <li>✿ Tulipany pastelowe</li>
                        <li>✿ Storczyk Phalaenopsis</li>
                    </ul>
                </div>
            </div>

            <h2 className="section-title">Polecane</h2>
            <div className="grid products-grid" role="list">
                {featured.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}
