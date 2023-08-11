/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { img, title, price, id } = this.props;
    return (
      <div className="shop-item">
        <span className="shop-item-title">{title}</span>
        <img className="shop-item-image" src={img} />
        <div className="shop-item-details">
          <span className="shop-item-price">${price}</span>
          <button className="btn btn-primary shop-item-button" type="button" onClick={this.addToCard}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
