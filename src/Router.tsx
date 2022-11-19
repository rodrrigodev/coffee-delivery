import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Checkout } from "./pages/Checkout";
import { CheckoutFilled } from "./pages/CheckoutFilled";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/checkout/filled" element={<CheckoutFilled/>}/>
            <Route path="/checkout-finished/success" element={<Success/>}/>
            </Route>
        </Routes>
    )
}