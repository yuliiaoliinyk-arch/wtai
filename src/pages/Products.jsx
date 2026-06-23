import React, { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import ProductCard from "../components/ui/ProductCard.jsx";

export default function Products() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("Wszystkie");
    const [sort, setSort] = useState("popular"); // popular | priceAsc | priceDesc
    const [onlyInStock, setOnlyInStock] = useState(false);

    const filtered = useMemo(() => {
        let list = [...PRODUCTS];

        if (cat !== "Wszystkie") list = list.filter((p) => p.category === cat);
        if (onlyInStock) list = list.filter((p) => p.inStock);
        if (q.trim()) {
            const s = q.toLowerCase();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(s) ||
                    p.tags?.some((t) => t.toLowerCase().includes(s))
            );
        }

        if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
        if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
        if (sort === "popular") list.sort((a, b) => b.rating - a.rating);

        return list;
    }, [q, cat, sort, onlyInStock]);

    return (
        <section className="page">
            <header className="page-head">
                <h1>Produkty</h1>
                <p className="muted">Filtry, sortowanie i wyszukiwanie — wszystko w SPA.</p>
            </header>

            <div className="filters">
                <label className="field">
                    <span>Szukaj</span>
                    <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="np. róże, wiosna…" />
                </label>

                <label className="field">
                    <span>Kategoria</span>
                    <select value={cat} onChange={(e) => setCat(e.target.value)}>
                        {CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </label>

                <label className="field">
                    <span>Sortowanie</span>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="popular">Najwyżej oceniane</option>
                        <option value="priceAsc">Cena rosnąco</option>
                        <option value="priceDesc">Cena malejąco</option>
                    </select>
                </label>

                <label className="check">
                    <input
                        type="checkbox"
                        checked={onlyInStock}
                        onChange={(e) => setOnlyInStock(e.target.checked)}
                    />
                    <span>Tylko dostępne</span>
                </label>
            </div>

            <div className="grid products-grid" role="list">
                {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}
