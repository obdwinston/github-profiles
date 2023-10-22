import { createContext, useReducer } from "react";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async (text) => {
    dispatch({ type: "SET_LOADING" });

    const params = new URLSearchParams({ q: text });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "FETCH_USERS",
      payload: items,
    });
  };

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  const fetchUser = async (login) => {
    dispatch({ type: "SET_LOADING" });

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "FETCH_USER",
        payload: data,
      });
    }
  };

  const fetchRepos = async (login) => {
    dispatch({ type: "SET_LOADING" });

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: "FETCH_REPOS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        user: state.user,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        fetchUser,
        fetchRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
