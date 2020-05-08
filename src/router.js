import React from "react";
import Home from "./container/Home/Home";
import Introduce from "./container/introduce/Introduce";
import Login from "./container/login/Login";
import Signup from "./container/signup/Signup";
import Profile from "./container/profile/Profile";
import Product from "./container/product/Product";
import ProductDetail from "./container/productDetail/ProductDetail";
const router = [
    {
        path:"/",
        exact:true,
        main : () => <Home/>
    },
    {
        path:"/introduce",
        main : () => <Introduce/>
    },
    {
        path:"/login",
        main : () => <Login/>
    },
    {
        path:"/signup",
        main : () => <Signup/>
    },
    {
        path:"/profile",
        main : () => <Profile/>
    },
    {
        path:"/product/:page",
        main : () => <Product/>
    },
    {
        path:"/productDetail/:id",
        main : () => <ProductDetail/>
    },
    {
        path:"*",
        main : () => <h1>notthing</h1>
    },
]

export default router;