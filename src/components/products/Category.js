import { useState } from "react"
import useFetch from "./useFetch"
import ProductList from "./ProductList";

const Category = () => {

    const {product, loading} = useFetch("https://fakestoreapi.com/products/")
    const [filterProduct, setFilterProduct] = useState(null)
    const [visibility, setVisibility] = useState(true)

    const filterMenCloth = (props) => {
        const newProduct = product.filter(products => products.category === "men's clothing")
        setFilterProduct(newProduct)
        setVisibility(false)
    }

    const filterWomenCloth = () => {
        const newProduct = product.filter(products => products.category === "women's clothing")
        setFilterProduct(newProduct)
        setVisibility(false)
    }

    const filterJewelry = () => {
        const newProduct = product.filter(products => products.category === "jewelery")
        setFilterProduct(newProduct)
        setVisibility(false)
    }

    const filterElectronics = () => {
        const newProduct = product.filter(products => products.category === "electronics")
        setFilterProduct(newProduct)
        setVisibility(false)
    }

    const filterProducts = () => {
        const newProduct = product
        setFilterProduct(newProduct)
        setVisibility(false)
    }

    return (
        <div>
            <h3 className="home-title">Products of the Day!</h3>

            <div className="category-buttons">
                <button onClick={filterProducts}>All Items</button>
                <button onClick={filterMenCloth}>Men's Clothing</button>
                <button onClick={filterWomenCloth}>Women's Clothing</button>
                <button onClick={filterJewelry}>Jewelry</button>
                <button onClick={filterElectronics}>Electronics</button>
            </div>
            
            {loading && <div className="home-loading">Loading...</div> }
            {visibility && product && <ProductList products={product} />}
            {filterProduct && <ProductList products={filterProduct} />}

            
        </div>
    );
}
 
export default Category;