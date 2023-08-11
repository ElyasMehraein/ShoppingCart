/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class CartProduct extends Component {
    clickhandler(){
        console.log("from cartProduc");
    }
    render() {

        return (
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src="Images/Shirt.png" width="100" height="100" />
                    <span className="cart-item-title">Shirt</span>
                </div>
                <span className="cart-price cart-column">$198</span>
                <div className="cart-quantity cart-column">

                    <button className="btn btn-danger" type="button" onClick={this.clickhandler} >REMOVE</button>
                </div>
            </div>
        )
    }
}
