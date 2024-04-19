import React from "react";
import Layout from "../Component/Layout/Layout.js";
import { useAuth } from "../Context/AuthContext.js";


function HomePage() {
  let [auth]=useAuth()
  
  return (
    <Layout title="Best Offer -">
     <div className="container d-flex justify-content-center align-items-center">
      <h1 className="row"> This is Home Page</h1>
     </div>
      {JSON.stringify(auth,null,4)}
    </Layout>
  );
}

export default HomePage;
