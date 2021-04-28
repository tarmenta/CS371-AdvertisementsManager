import React, { useState, useEffect } from "react";
import Advertisements from "./components/advertisements";
import AdvertisementForm from "./components/advertisementForm";
import { Container } from "semantic-ui-react";
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  const [ads, setAds] = useState([]);

  const fetchAds = async () => {
    let result = await fetch("http://localhost:5000/advertisements");
    result = await result.json();

    setAds(result);
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div>
      <Container style={{ marginTop: 40, width: "80%" }}>
      <Login />
      <Advertisements advertisements={ads} />
      </Container>
    </div>
  );
};

export default App;
