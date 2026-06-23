import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import QuantityPicker from "../components/ui/QuantityPicker.jsx";
import { useCart } from "../context/cartContext.jsx";

export default function ProductDetails() {
    const { id } = useParams();
    const nav = useNavigate();
    const { addToCart } = useCart();

    const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);
    const [imgIdx, setImgIdx] = useState(0);
    const [qty, setQty] = useState(1);

    if (!product) {
        return (
            <section className="page">
                <h1>Nie znaleziono produktu</h1>
                <button className="btn" onClick={() => nav("/produkty")}>Wróć do produktów</button>
            </section>
        );
    }

    return (
        <section className="page">
            <button className="btn link" onClick={() => nav(-1)}>← Wróć</button>

            <div className="details">
                <div className="details-media">
                    <img className="details-main" src={product.images[imgIdx]} alt={product.name} />
                    <div className="details-thumbs" role="list">
                        {product.images.map((src, i) => (
                            <button
                                key={src}
                                className={`thumb ${i === imgIdx ? "active" : ""}`}
                                onClick={() => setImgIdx(i)}
                                aria-label={`Pokaż zdjęcie ${i + 1}`}
                                role="listitem"
                            >
                                <img src={src} alt="" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="details-info">
                    <h1>{product.name}</h1>
                    <p className="muted">{product.description}</p>

                    <div className="details-meta">
                        <span className="badge">{product.category}</span>
                        <span className="badge">{product.inStock ? "Dostępny" : "Brak"}</span>
                        <span className="badge">★ {product.rating}</span>
                    </div>

                    <div className="details-buy">
                        <strong className="price">{formatPrice(product.price)}</strong>
                        <QuantityPicker value={qty} onChange={setQty} />
                        <button
                            className="btn primary"
                            onClick={() => addToCart(product, qty)}
                            disabled={!product.inStock}
                        >
                            Dodaj do koszyka
                        </button>
                    </div>

                    <div className="note">
                        <p className="muted">
                            Dostawa: w wybranych miastach • Pakowanie prezentowe: opcjonalnie • Płatność: demo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
