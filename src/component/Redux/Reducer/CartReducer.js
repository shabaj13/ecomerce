const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDTOCART":
      const exist = state.find((elem) => elem.id === product.id)
      if (exist) {
        state.map((elem) => {
          return elem.id === product.id ? { ...elem } : elem
        })
      } else {
        return [
        ...state,
        product,
      ]
      }
  
      break;
    
      case "DELCART":
      return state.filter((elem) => {
         return elem.id !== product.id;
       })
        break;
  
    default:
      return state;
      break;
  }

}


export default handleCart;