import React from "react";
import Admin from "layouts/Admin.js";

import Header from "components/Headers/Header.js";

const Inventario = (props) => {
    return (
        <>
            <Header />
            <div>Cotizaciones screen</div>
        </>
    )
}

Inventario.layout = Admin;

export default Inventario;