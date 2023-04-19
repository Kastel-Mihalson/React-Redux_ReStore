import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './shopping-cart-table.css'
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from "../../actions";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} RUB</td>
                <td>
                    <button 
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-primary">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button 
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button 
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr> 
        )
    }
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Action</td> 
                    </tr>
                </thead>
                <tbody>
                { items.map(renderRow) }
                </tbody>
            </table>

            <div className="total">
                Total: {total} RUB
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { shoppingCart: { cartItems, orderTotal } } = state;
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)