import { useState, useEffect } from "react";

function TwoWayBinding() {
    const productObject = {
        name: "",
        price: 0,
        stock: false,
        city: ""
    };
    const [product, setProduct] = useState(productObject);
    const [productInfo, setNewProduct] = useState(productObject);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <input 
                                type="text" 
                                onChange={(e) => {
                                    return setProduct({
                                        name: e.target.value,
                                        price: product.price,
                                        stock: product.stock,
                                        city: product.city
                                    });
                                }} 
                                placeholder="Samsung TV" 
                                className="form-control"
                            /> 
                        </dd>

                        <dt>Price</dt>
                        <dd>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={(e) => {
                                    return setProduct({
                                        name: product.name,
                                        price: e.target.value,
                                        stock: product.stock,
                                        city: product.city
                                    })
                                }}
                            /> 
                        </dd>

                        <dt>City</dt>
                        <dd>
                            <select 
                                className="form-select"
                                onChange={(e) => {
                                    return setProduct({
                                        name: product.name,
                                        price: product.price,
                                        stock: product.stock,
                                        city: e.target.value
                                    });
                                }}
                            >
                                <option>Delhi</option>
                                <option>Hyderbad</option>
                                <option>Mumbai</option>
                                <option>Chennai</option>
                            </select>
                        </dd>

                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input"
                                onChange={(e) => {
                                    return setProduct({
                                        name: product.name,
                                        price: product.price,
                                        stock: e.target.checked,
                                        city: product.city
                                    });
                                }}
                            /> Available
                        </dd>
                    </dl>

                    <button 
                        type="submit" 
                        className="btn btn-danger"
                        onClick={(e) => {
                            return setNewProduct(product);
                        }}
                    >Register</button>
                </div>
                <div className="col-9">
                    <h2>Detail of Product</h2>

                    <dl>
                        <dt>Name</dt>
                        <dd>{productInfo.name}</dd>
                    </dl>
                    <dl>
                        <dt>Price</dt>
                        <dd>{productInfo.price}</dd>
                    </dl>
                    <dl>
                        <dt>City</dt>
                        <dd>{productInfo.city}</dd>
                    </dl>
                    <dl>
                        <dt>Stock</dt>
                        <dd>{(productInfo.stock) ? "Available": "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default TwoWayBinding;