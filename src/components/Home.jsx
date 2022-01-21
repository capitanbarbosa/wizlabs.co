import React from "react";

function Home() {
  return (
    <div className="home ">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require("../images/bruhPic2.png")}
              alt=""
            />
          </div>
          <div class="col-lg-5"> 
              <h1 class="font-weight-light">Hello there. My name is Luis, and this is my first React website!</h1>
             <p>
               Feel free to look around my journey so far...
             </p>
          </div>
        </div>
      </div>
      <div>
        <h1 class='text-center'>bruh</h1>
      
      
      
      
      </div>
    </div>
  );
}

export default Home;