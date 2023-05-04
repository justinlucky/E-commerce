import React,  { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './main-section.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faMinusCircle,faPlusCircle);

const MainSection = () => {
  //for FaQs
  const [showAnswer, setShowAnswer] = useState([]);
  const [showIcon, setShowIcon] = useState([]);

  const toggleAnswer = (index) => {
    let newShowAnswer = [...showAnswer];
    let newShowIcon = [...showIcon];
    newShowAnswer[index] = !showAnswer[index];
    newShowIcon[index] = !showIcon[index];
    setShowAnswer(newShowAnswer);
    setShowIcon(newShowIcon);
  };
  useEffect(() => {
    setShowAnswer(Array(3).fill(false));
    setShowIcon(Array(3).fill(true));
  }, []);
  //for displaying ads
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const images = [
    'https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk0ODE&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1581092917372-d2db8f7904c6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk1MTA&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1593157327129-77b8e914481b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk1MTA&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1532634740-6837b2a21d39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk1NTQ&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1522579479806-486feddb6d25?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk1ODY&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1619719826894-89d6c4fd5739?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk1ODY&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1535561848016-bcf09980313d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk2MzI&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1518994603110-1912b3272afd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk5NjQ&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1507484467459-0c01be16726e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4Nzk5NjQ&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1570042707108-66761758315a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4ODAwMjc&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1518648949339-298b03f37f3b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4ODAwMjc&ixlib=rb-4.0.3&q=85',
    'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODI4ODAwNjQ&ixlib=rb-4.0.3&q=85',
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((currentIndex) => {
        if(currentIndex === images.length - 1){
          return 0;
        }
        return currentIndex + 1;
      });
    }, 30000);
    setIntervalId(id);
    return () => { clearInterval(intervalId);}
  }, [images.length]);

  const handleMoveLeft = () => {
    setCurrentImageIndex((currentIndex) => {
      if(currentIndex === 0){
        return images.length-1;
      }
      return currentIndex - 1;
    });
  };

  const handleMoveRight = () => {
    setCurrentImageIndex((currentIndex) => {
      if(currentIndex === images.length-1){
        return 0;
      }
      return currentIndex + 1;
    });
  };
  //product list//
  const products = [
    {
      name:'Product1',
      price:'$100',
      description:'Description1',
      image:' ',
      button:'Add to Cart',
      deductProducts:'-',
      quantity:'1',
      addProducts:'+',
    },
    {
      name:'Product2',
      price:'$200',
      description:'Description2',
      image:' ',
      button:'Add to Cart',
      deductProducts:'+',
      quantity:'1',
      addProducts:'+',
    },
    {
      name:'Product3',
      price:'$300',
      description:'Description3',
      image:' ',
      button:'Add to Cart',
      deductProducts:'+',
      quantity:'1',
      addProducts:'+',
    },
  ];
  const handleAddToCart = (product) => {
    //logical operation after adding it to cart//
    alert(`${product} added to cart successfully!`);
  };
  return (
    <div id='main-container'>
      <section id="latest-products">
        <h2>Latest Products</h2>
          <div className="products-ads">
            <button className="move-button-left" onClick={handleMoveLeft}>
              &lt;
            </button>
            <img 
              src={images[currentImageIndex]}
              alt={`Product Ads ${currentImageIndex}`}
              className="product-image" />
            <button className="move-button-right" onClick={handleMoveRight}>
              &gt;
            </button>
          </div>
        <div className="product-list">
          {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <img src={product.image} alt=" " />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.name)}>{product.button}</button>
            <div className="quantity-container">
              <button className="decrement-button">{product.deductProducts}</button>
              <span className='quantity'>{product.quantity}</span>
              <button className="increment-button">{product.addProducts}</button>
            </div>
          </div>
          ))}
          <button className="shop-for-more"><Link to='/products'>Shop for More</Link></button>
        </div>
      </section>
      <section id="about-us">
        <h2>About Us</h2>
        <p>Welcome to our Website! We provide wide range of agricultural high-quality products at affordable prices. If you have any question or concerns, please don't hasitate to reach us.</p>
        <button className='reach-us-button'>
          <Link to='/contact'>Reach Us</Link>
        </button>
        <p>Or in case you would like to know what we do? Feel free to know about us!</p>
        <button className="about-us-button"><Link to='/about'>More About Us</Link></button>
      </section>
      <section id="subscription">
        <h2>Subscribe to Our Website</h2>
        <div className="subscription-options">
          <div className="option">
            <h3>Basic</h3>
            <p>$0/month</p>
            <button className="subscribe-button">Continue</button>
          </div>
          <div className="option">
            <h3>Premium</h3>
            <p>$17.7/month</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="option">
            <h3>Ultimate</h3>
            <p>$27.7/month</p>
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>
      <section id="faqs">
        <h2>Frequently asked Questions</h2>
        <hr/>
        <div className="faq-item">
        <h3>How do I placed an Order?</h3>
        <FontAwesomeIcon
          icon={showIcon[0] ? faPlusCircle : faMinusCircle}
          onClick={() => toggleAnswer(0)} className='ans'
        />
        {showAnswer[0] && (
          <p>
            To place an order, simply navigate to the products page and click
            on 'Add to Cart' button. And go to cart and select your mode of
            payment and select the desire address for shipping and your order
            is placed.
          </p>
        )}
      </div>
      <div className="faq-item">
        <h3>How do I cancel an Order?</h3>
        <FontAwesomeIcon
          icon={showIcon[1] ? faPlusCircle : faMinusCircle}
          onClick={() => toggleAnswer(1)} className='ans'
        />
        {showAnswer[1] && (
          <p>
            To cancel an order, please contact our customer service with your
            order number and we will assist you with the cancellation process.
          </p>
        )}
      </div>
      <div className="faq-item">
        <h3>What is your return policy?</h3>
        <FontAwesomeIcon
          icon={showIcon[2] ? faPlusCircle : faMinusCircle}
          onClick={() => toggleAnswer(2)} className='ans'
        />
        {showAnswer[2] && (
          <p>
            We accept returns within 30 days of purchase, provided the product
            is unused and in its original packaging. Please contact our
            customer service to initiate the return process.
          </p>
        )}
      </div>
      </section>
      <section id="back-to-top">
        <a href="#main-container">Back to Top</a>
      </section>
    </div>
  );
}

export default MainSection
