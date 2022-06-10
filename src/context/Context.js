import React, { useState, useContext } from 'react';

const Ctx = React.createContext();

export function useCtx() {
    return useContext(Ctx);
}

export function CtxProvider({ children }) {
    const [burger, setBurger] = useState(['mayo', 'salad', 'cutlet', 'cheese', 'tomato', 'cucumber']);
    const [array, setArray] = useState();

    const value = { burger, setBurger, array, setArray };

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
