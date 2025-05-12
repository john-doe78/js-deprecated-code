import {useState, useEffect} from "react";

function ShoppingComponent() {
    const [categories, setCategory] = useState([]);
    const [products, setProduct] = useState([]);
    const [cart, setCartItems] = useState([]);
    const apiUrl = "https://fakestoreapi.com/products";

    function loadProducts(url) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return setProduct(data);
        })
        .catch(e => console.error(`Error fetching Products: ${e}`));
    }

    function loadCategories(url) {
        fetch(`${url}/categories`)
        .then((response) => response.json())
        .then((data) => {
            data.unshift("All");
            return setCategory(data);
        })
        .catch(e => console.error(`Error fetching Categories: ${e}`));
    }

    function handleCategoryChange(e) {
        const category_ = e.target.value.toLowerCase();
        if (category_ === "all") {
            loadProducts(`${apiUrl}`);
        } else {
            loadProducts(`${apiUrl}/category/${category_}`);
        }
    }

    useEffect(() => {
        loadCategories(apiUrl);
        loadProducts(apiUrl);
    }, [])

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h2><span className="bi bi-cart"></span>Shopping Homepage</h2>
            </header>

            <section className="row">
                <nav className="col-3">
                    <div>
                        <label htmlFor="shopping">Select a Category</label>
                        <select 
                            className="form-select" 
                            id="shopping"
                            onChange={handleCategoryChange}
                        >
                        {
                            categories.map((category, index) => {
                                return (<option key={index}>{category.toUpperCase()}</option>);
                            })
                        }
                        </select>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap">
                {
                    products.map((product, index2) => {
                        return (
                            <div className="card m-2 p-2 w-25" key={index2}>
                                <img src={product.image} className="card-img-top" alt="product-image" height="200" />
                                <div className="card-header"  style={{height: "160px"}}>
                                    <h5>{product.title}</h5>
                                </div>

                                <div className="card-body">
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span>
                                        {product.rating.rate} | {product.rating.count}
                                    </dd>
                                </div>

                                <div className="card-footer">
                                    <button
                                        type="submit"
                                        id={product.id}
                                        className="btn btn-danger"
                                        onClick={(e) => {
                                            const id = e.target.id;
                                            fetch(`${apiUrl}/${id}`)
                                            .then((response) => response.json())
                                            .then((data) => {
                                                return setCartItems(data);
                                            })
                                            .catch((e) => console.error(`Error fetching Cart items: ${e}`));
                                        }}
                                    ><span className="bi bi-cart4"></span>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })
                }
                </main>
            </section>

            <h2>detail</h2>
            
        </div>
    );
}

export default ShoppingComponent;