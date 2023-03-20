
export const addToCart = (data) => {
  return {
    type: 'ADDTOCART',
    payload: data,
  }
}

export const removeToCart = (id) => {
  return {
    type: 'REMOVETOCART',
    id,
  }
}

export const ordersuccess = () => {
  return {
    type: 'ORDERSUCCESS'
  }
}

