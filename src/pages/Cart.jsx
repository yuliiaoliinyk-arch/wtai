import React from "react";
import { useCart } from "../context/cartContext.jsx";
import { formatPrice } from "../utils/formatPrice.js";

export default function Cart() {
    const { state, total, removeFromCart, setQty, clearCart } = useCart();
    const items = Object.values(state.items);

    return (
        <section className="page">
            <header className="page-head">
                <h1>Koszyk</h1>
                <p className="muted">useReducer + Context — zmiana ilości, usuwanie, podsumowanie.</p>
            </header>

            {items.length === 0 ? (
                <div className="empty">
                    <p>Koszyk jest pusty.</p>
                    <p className="muted">Dodaj produkty z zakładki „Produkty”.</p>
                </div>
            ) : (
                <div className="cart">
                    <div className="cart-list">
                        {items.map(({ product, qty }) => (
                            <article key={product.id} className="cart-row">
                                <img className="cart-img" src={product.images[0]} alt={product.name} />
                                <div className="cart-info">
                                    <strong>{product.name}</strong>
                                    <span className="muted">{formatPrice(product.price)} / szt.</span>
                                </div>

                                <div className="cart-qty">
                                    <button className="btn" onClick={() => setQty(product.id, qty - 1)} aria-label="Zmniejsz">
                                        −
                                    </button>
                                    <input
                                        className="qty-input"
                                        type="number"
                                        min="1"
                                        value={qty}
                                        onChange={(e) => setQty(product.id, Number(e.target.value || 1))}
                                        aria-label="Ilość"
                                    />
                                    <button className="btn" onClick={() => setQty(product.id, qty + 1)} aria-label="Zwiększ">
                                        +
                                    </button>
                                </div>

                                <div className="cart-sum">
                                    <strong>{formatPrice(product.price * qty)}</strong>
                                    <button className="btn link danger" onClick={() => removeFromCart(product.id)}>
                                        Usuń
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className="cart-summary">
                        <h2>Podsumowanie</h2>
                        <div className="sum-row">
                            <span>Wartość</span>
                            <strong>{formatPrice(total)}</strong>
                        </div>
                        <div className="sum-row">
                            <span>Dostawa</span>
                            <strong>{formatPrice(total > 150 ? 0 : 15)}</strong>
                        </div>
                        <div className="sum-row total">
                            <span>Razem</span>
                            <strong>{formatPrice(total + (total > 150 ? 0 : 15))}</strong>
                        </div>

                        <button className="btn primary">Przejdź do płatności (demo)</button>
                        <button className="btn" onClick={clearCart}>Wyczyść koszyk</button>
                    </aside>
                </div>
            )}
        </section>
    );
}
