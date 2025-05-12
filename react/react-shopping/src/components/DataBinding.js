function DataBinding() {
    let product = {
        name: "Samsung TV",
        price: 45045.5,
        isAvailable: true
    };

    let categories = [
        "All",
        "Electronics",
        "Footwear"
    ];

    return (<>
        <div className='container'>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>

                <dt>Price</dt>
                <dd>{product.price}</dd>

                <dt>Available</dt>
                <dd>{(product.isAvailable) ? "Available": "Out of Stock"}</dd>
            </dl>

            <h2>categories</h2>
            <ol>
            {
                categories.map(category => {
                    return (
                        <li key={category}>{category}</li>
                    );
                })
            }
            </ol>

            <h2>Select Categories</h2>
            <select>
            {
                categories.map(category => {
                    return (
                        <option key={category}>{category}</option>
                    );
                })
            }
            </select>
        </div>
    </>);
}

export default DataBinding;