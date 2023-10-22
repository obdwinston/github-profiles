const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };
    case "FETCH_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "FETCH_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
