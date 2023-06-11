import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Bad Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/"
                  title="Bank Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/createaccount"
                  title="This is where you should go if you want to create an account."
                >
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/deposit"
                  title="Let make some MONEY!"
                >
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="withdraw"
                  title="Ugh. Fine.  Take your money."
                >
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="alldata"
                  title="Let's see some stuff!"
                >
                  All Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
