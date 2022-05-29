import React, { useState, useContext } from 'react';

const Ctx = React.createContext();

export function useCtx() {
    return useContext(Ctx);
}

export function CtxProvider({ children }) {
    const [burger, setBurger] = useState(['tomato', 'cucumber', 'onion', 'salad']);
    const value = { burger, setBurger };

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
