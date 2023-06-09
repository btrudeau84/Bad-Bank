import React from "react";

function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="card">
            <img src="bank.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Welcome to Bad Bank</h5>
              <p className="card-text">Security kinda sucks here. Just FYI.</p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
