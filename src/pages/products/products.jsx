import React, {useState} from 'react'
import './products.css'
import Footer from '../../components/footer/footer'
import Navbar1 from '../../components/header/navbar1'
import FloatingCart from '../../components/Floating-Cart/floating-cart';
const productsData = [
  {
    category: "Hot Deals",
    products: [
      {
        name: "Product 1",
        price: 9.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 2",
        price: 14.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 3",
        price: 19.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 4",
        price: 24.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 5",
        price: 29.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 6",
        price: 34.99,
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  {
    category: "Electronic & Hardware Gadgets",
    products: [
      {
        name: "Product 1",
        price: 9.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 2",
        price: 14.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 3",
        price: 19.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 4",
        price: 24.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 5",
        price: 29.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 6",
        price: 34.99,
        image: "https://via.placeholder.com/150"
      }
    ]
  },
  {
    category: "Seeds & Plants",
    products: [
      {
        name: "Product 1",
        price: 9.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 2",
        price: 14.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 3",
        price: 19.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 4",
        price: 24.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 5",
        price: 29.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 6",
        price: 34.99,
        image: "https://via.placeholder.com/150"
      }
    ]
  },
   {
    category: "Seeds & Plants",
    products: [
      {
        name: "Product 1",
        price: 9.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 2",
        price: 14.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 3",
        price: 19.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 4",
        price: 24.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 5",
        price: 29.99,
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Product 6",
        price: 34.99,
        image: "https://via.placeholder.com/150"
      }
    ]
  }
];

const ProductCategory = ({ category }) => {
  const [showMore, setShowMore] = useState(false);
  const products = showMore ? category.Products : category.products.slice(0, 4);

  return (
    <div className="category-container">
      <h2>{category.category}</h2>
      <div className="products-grid">
        {products.map((product,index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => console.log(`Added ${product.name} to cart`)}>Add to cart</button>
              <div className="product-quantity">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </div>
          </div>
          )
        )
      }
      </div>
      {!showMore && category.products.length >4 && (
        <button className="view-more-button" onClick={() => setShowMore(true)}>View More</button>
      )}
    </div>
  )
};

const Products = () => {
  return (
    <div id='products-container'>
      <Navbar1/>
      {productsData.map((category,index) => (
        <ProductCategory key={index} category={category} />
      ))}
      <FloatingCart/>
      <Footer/>
    </div>
  )
};

export default Products
