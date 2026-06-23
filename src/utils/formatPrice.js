export function formatPrice(n) {
    return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(n);
}
