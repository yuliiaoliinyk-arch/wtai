import React, {createContext, useContext, useMemo, useReducer} from "react";

const CartContext = createContext(null);

const initialState = {
    items: {}, // { [id]: { product, qty } }
    isModalOpen: false,
    modalMsg: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const {product, qty} = action.payload;
            const current = state.items[product.id]?.qty ?? 0;
            const nextQty = Math.max(1, current + qty);

            return {
                ...state,
                items: {...state.items, [product.id]: {product, qty: nextQty}},
                isModalOpen: true,
                modalMsg: `Dodano do koszyka: ${product.name}`,
            };
        }
        case "REMOVE": {
            const next = {...state.items};
            delete next[action.payload.id];
            return {...state, items: next};
        }
        case "SET_QTY": {
            const {id, qty} = action.payload;
            if (!state.items[id]) return state;
            return {
                ...state,
                items: {...state.items, [id]: {...state.items[id], qty: Math.max(1, qty)}},
            };
        }
        case "CLEAR":
            return {...state, items: {}};
        case "MODAL_CLOSE":
            return {...state, isModalOpen: false, modalMsg: ""};
        default:
            return state;
    }
}

export function CartProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const count = useMemo(
        () => Object.values(state.items).reduce((sum, it) => sum + it.qty, 0),
        [state.items]
    );

    const total = useMemo(
        () => Object.values(state.items).reduce((sum, it) => sum + it.qty * it.product.price, 0),
        [state.items]
    );

    const api = useMemo(
        () => ({
            state,
            count,
            total,
            addToCart: (product, qty = 1) => dispatch({type: "ADD", payload: {product, qty}}),
            removeFromCart: (id) => dispatch({type: "REMOVE", payload: {id}}),
            setQty: (id, qty) => dispatch({type: "SET_QTY", payload: {id, qty}}),
            clearCart: () => dispatch({type: "CLEAR"}),
            closeModal: () => dispatch({type: "MODAL_CLOSE"}),
        }),
        [state, count, total]
    );

    return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
