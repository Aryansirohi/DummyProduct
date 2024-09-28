const initialState = {
    products: [],
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, products: action.products };
      case 'FETCH_PRODUCTS_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  }
