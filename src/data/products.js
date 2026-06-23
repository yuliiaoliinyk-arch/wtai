export const CATEGORIES = ["Wszystkie", "Bukiety", "Kwiaty cięte", "Rośliny doniczkowe", "Sezonowe"];

export const PRODUCTS = [
    {
        id: "bukiet-roz",
        name: "Bukiet róż klasycznych",
        price: 149.99,
        category: "Bukiety",
        rating: 4.8,
        inStock: false,
        tags: ["romantyczny", "bestseller"],
        images: [
            "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=60",
        ],
        description: "Klasyczny bukiet czerwonych róż — idealny na rocznicę i wyjątkowe okazje.",
    },
    {
        id: "tulipany-pastel",
        name: "Tulipany pastelowe",
        price: 89.0,
        category: "Kwiaty cięte",
        rating: 4.6,
        inStock: true,
        tags: ["wiosna"],
        images: [
            "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=60",
        ],
        description: "Lekki bukiet pastelowych tulipanów — świeży akcent do domu lub na prezent.",
    },
    {
        id: "storczyk",
        name: "Storczyk Phalaenopsis",
        price: 129.0,
        category: "Rośliny doniczkowe",
        rating: 4.7,
        inStock: true,
        tags: ["doniczka"],
        images: [
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=60",
        ],
        description: "Elegancki storczyk w doniczce — prosty w pielęgnacji, a wygląda świetnie.",
    },
    {
        id: "piwonie-premium",
        name: "Piwonie premium",
        price: 179.0,
        category: "Sezonowe",
        rating: 4.9,
        inStock: true,
        tags: ["premium", "sezonowe"],
        images: [
            "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=60",
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=60",
        ],
        description: "Piwonie o dużych główkach i intensywnym zapachu. Dostępne sezonowo.",
    },
];
