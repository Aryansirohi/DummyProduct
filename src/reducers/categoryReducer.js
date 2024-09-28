const initialState = {
    categories: [],
  };
  
  export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_CATEGORIES_SUCCESS':
        return { ...state, categories: action.categories };
      case 'FETCH_CATEGORIES_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  }
