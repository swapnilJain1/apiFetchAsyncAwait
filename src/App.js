import { useState, useEffect } from "react";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = await response.json();
      setProfiles(data);
      console.log(profiles);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {profiles.map((item) => (
        <div key={item.id}>
          <p>Name : {item.first_name}</p>
          <p>Last Name :{item.last_name}</p>
          <p>User Name :{item.username}</p>
          <p>Email :{item.email}</p>
          <p>Mobile :{item.phone_number}</p>
          <p>DOB :{item.date_of_birth}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
