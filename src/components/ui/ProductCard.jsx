import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice.js";
import { useCart } from "../../context/cartContext.jsx";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <article className="card" role="listitem">
            <Link className="card-media" to={`/produkty/${product.id}`}>
                <img src={product.images[0]} alt={product.name} loading="lazy" />
            </Link>

            <div className="card-body">
                <div className="card-top">
                    <h3 className="card-title">
                        <Link to={`/produkty/${product.id}`}>{product.name}</Link>
                    </h3>
                    <span className="badge">{product.category}</span>
                </div>

                <p className="muted clamp-2">{product.description}</p>

                <div className="card-bottom">
                    <strong>{formatPrice(product.price)}</strong>
                    <button
                        className="btn"
                        onClick={() => addToCart(product, 1)}
                        disabled={!product.inStock}
                        aria-disabled={!product.inStock}
                    >
                        {product.inStock ? "Do koszyka" : "Brak"}
                    </button>
                </div>
            </div>
        </article>
    );
}
