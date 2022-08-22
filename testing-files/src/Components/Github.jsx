import React from "react";
import { fetchUser } from "./fetchUserse";

function Github() {
  const [query, setQuery] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [users, setUser] = React.useState([]);

  const handleSearch = (q = query) => {
    setIsLoading(true);
    setError(false);
    fetchUser(query)
      .then((res) => {
        setUser(res.data.items);
        // console.log(users)
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>GitHub</h1>
      <div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search"
        />
        <button disabled={isloading} onClick={handleSearch}>
          {" "}
          {isloading ? "loading" : "Search"}
        </button>
      </div>
      {error ? "please provide valid inputs" : null}
      <div>
        {users?.map((item) => (
          <div id={item.id}> {item.login} </div>
        ))}
      </div>
    </>
  );
}

export default Github;
