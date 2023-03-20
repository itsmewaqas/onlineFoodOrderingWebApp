import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import productList from '../sharedComponents/ProductList';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';

function OrderOnline(props) {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  // data get randomly
  // const finalData = productList.sort(() => Math.random() - Math.random());

  const [productItem, SetproductItem] = useState([]);

  const addItem = (item) => {
    SetproductItem(productItem => [...productItem, item]);
    dispatch(addToCart(
      item
    ))
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Order Online</h3>
      </div>
      <div className='container'>
        <ul className='productList'>
          {productList?.map((item, index) => (
            <li key={index.toString()}>
              <img src={item.productImg} alt="" />
              <h3>{item.productTitle}
                <span>${item.productPrice}</span></h3>
              <p>{item.productDescription}</p>
              <button onClick={() => addItem(item)}>Order a delivery
                <img src={require('../assets/img/fast-delivery.png')} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderOnline;