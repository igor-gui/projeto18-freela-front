import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/cities`)
      .then((res) => setCities(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>List of Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}
