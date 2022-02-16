import React, { useState, useEffect } from "react";
import axios from "axios";
const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("fetch failed");
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p id="a">loading..</p>
        <div class="center">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    );
  }

  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  return (
    <ul class="row">
      {data.map((item) => (
        <div class="column">
          <li key={item.id}>
            <h2>{item.name}</h2>
            <h4> usename:</h4>
            <p> {item.username}</p>
            <h4> email:</h4>
            <p>{item.email}</p>
            <h4>address</h4>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
            <h4>phone :</h4>
            <p>{item.phone}</p>
            <h4>website :</h4>
            <p>{item.website}</p>
            <h4>company :</h4>
            <ul>
              <li>{item.company.name}</li>
              <li>{item.company.catchPhrase}</li>
            </ul>
          </li>
        </div>
      ))}
    </ul>
  );
};
export default UserList;
