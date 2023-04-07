export const addToCart = (product) => {
  return {
    type: "ADDTOCART",
    payload: product,
  }
}
 

export const delCart = (product) => {
  return {
    type: "DELCART",
    payload: product,
  }
}


export const addToWish = (product) => {
  return {
    type: "ADDTOWISH",
    payload: product,
  }
}
 

export const delWish = (product) => {
  return {
    type: "DELWISH",
    payload: product,
  }
}