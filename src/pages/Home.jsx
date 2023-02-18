import React from "react";
import Layout from "../layouts/Layout";
import PokeCard from "../components/PokeCard";

const Home = () => {
  return (
    <Layout>
      <div>
        <PokeCard />
      </div>
    </Layout>
  );
};

export default Home;
