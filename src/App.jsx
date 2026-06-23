import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Modal from "./components/ui/Modal.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import { useCart } from "./context/cartContext.jsx";

export default function App() {
    const { state, closeModal } = useCart();

    return (
        <div className="app-shell">
            <Header />
            <main className="container" id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produkty" element={<Products />} />
                    <Route path="/produkty/:id" element={<ProductDetails />} />
                    <Route path="/koszyk" element={<Cart />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />

            <Modal open={state.isModalOpen} title="kwiatpl" onClose={closeModal}>
                <p className="muted">{state.modalMsg}</p>
            </Modal>
        </div>
    );
}
