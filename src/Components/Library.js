import React from "react";
import man from "./img.jpg"
import mam from "./img2.jpg"

const Library = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="navbar-nav">
          <a class="navbar-brand" href="/">
            User
          </a>
          <a class="navbar-brand" href="/">
                  Books
                </a>

            </div>
            <div class="navbar-nav">
            <button class="btn btn-outline-success m-1" type="submit">
                Login
              </button>
              <button class="btn btn-outline-success m-1" type="submit">
                SignUp
              </button>
            </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ height: "500px" }}>
              <div class="card-body">
                <h5 class="card-title">User</h5>
                <p class="card-text">This is User.</p>
                <a href="#" class="btn btn-primary">
                  Go for User
                </a>
                
              </div>
              <img src={mam}/>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ height: "500px" }}>
              <div class="card-body">
                <h5 class="card-title">Books</h5>
                <p class="card-text">This is books.</p>
                <a href="#" class="btn btn-primary">
                  Go for Books
                </a>
              </div>
              <img src={man}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
