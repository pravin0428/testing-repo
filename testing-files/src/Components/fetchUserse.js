import axios from "axios";

function fetchUser(query, page) {
  if (!query) {
    return Promise.reject("Put your search");
  }
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query
    }
  });
}
export { fetchUser };
