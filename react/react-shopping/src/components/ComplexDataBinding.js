import { useEffect, useState } from "react";

let products = [
    {
        "name": "Samsung TV",
        "price": 5600.4
    },
    {
        "name": "Apple iPhone 14",
        "price": 999.99
    },
    {
        "name": "Sony Headphones",
        "price": 299.99
    },
    {
        "name": "Dell Laptop",
        "price": 1200.49
    },
    {
        "name": "Nike Running Shoes",
        "price": 120.75
    }
];

let menu = [
    {
        categories: "Electronics",
        products: ["Samsung TV", "iPhone 14", "Sony Headphones"]
    },
    {
        categories: "Clothing",
        products: ["Nike Running Shoes", "Adidas Jacket", "Levi's Jeans"]
    },
    {
        categories: "Home Appliances",
        products: ["Washing Machine", "Refrigerator", "Microwave Oven"]
    },
    {
        categories: "Books",
        products: ["The Catcher in the Rye", "1984", "To Kill a Mockingbird"]
    },
    {
        categories: "Furniture",
        products: ["Sofa", "Dining Table", "Coffee Table"]
    }
];

function ComplexBinding() {
    const [getName, setName] = useState("John Snow");
    const [product, setProduct] = useState(["TV", "Mobile", "Laptop"]);

    const apiUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";
    const [getMarsPhoto, setMarsPhoto] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setMarsPhoto(data.photos.slice(0, 5)))
        .catch(e => console.error(`Error fetching data: ${e}`));
    }, []);

    return (
        <>
            <div className="container">
                <h2>Products Table</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

                <h2>Nested Products</h2>
                <ol>
                    {
                    menu.map((item, index) => {
                        return (
                            <li key={index}>{item.categories}
                                <ol type="a">
                                    {item.products.map((product, index2) => {
                                        return (
                                            <li key={index2}>{product}</li>
                                        );
                                    })}
                                </ol>
                            </li>
                        );
                    })
                    }
                </ol>

                <h2>Dropdown Products</h2>
                <select>
                    {
                    menu.map((item, index) => {
                        return (
                            <optgroup label={item.categories} key={index}>
                                {
                                item.products.map((product, index2) => {
                                    return (
                                        <option key={index2}>{product}</option>
                                    );
                                })
                                }
                            </optgroup>
                        );
                    })
                    }
                </select>

                <h2>Two ways Binding</h2>
                <label htmlFor="name">Username: </label>
                <input type="text" value={getName} id="name" onChange={(e) => setName(e.target.value)}/>
                <br />
                <h3>Hello {getName}</h3>

                <h2>By using State</h2>
                <ol type="I">
                    {
                    product.map((p, index) => {
                        return (
                            <li key={index}>{p}</li>
                        );
                    })
                    }
                </ol>

                <h2>Fetch data from NASA API</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Camera Name</th>
                            <th>Rover Name</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        getMarsPhoto.map((photo, index) => {
                            return (
                                <tr key={index}>
                                    <td>{photo.id}</td>
                                    <td>{photo.camera.full_name}</td>
                                    <td>{photo.rover.name}</td>
                                    <td><img src={photo.img_src} alt="" width="100" height="100" /></td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ComplexBinding;
