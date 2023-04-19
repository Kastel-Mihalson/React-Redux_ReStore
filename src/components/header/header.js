import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ numItems, total }) => {
    return (
        <header className="shop-header">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link className="shopping-cart" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
                { numItems } items ({total} RUB)
            </Link>
        </header>
    )
}

export default Header;