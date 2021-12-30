<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light position-relative">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>Tanatos <span>Studio</span></h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse container"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link to="/">Home</router-link></a
              >
            </li>
            <li></li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/Test">test</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/About">About</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/Symptoms">Symptoms</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/prevention">prevention</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/Treatment">Treatment</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/Fandq">FAQ</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/News">News</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/News">do & dont</router-link></a
              >
            </li>
            <li class="nav-item dark-theme">
              <a class="nav-link" href="#">
                <i class="fas fa-moon"></i>
              </a>
            </li>
            <li class="nav-item light-theme">
              <a class="nav-link" href="#">
                <i class="fas fa-sun"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- footer section -->
    <footer>
        <div class="container mt-5 first-div">
          <div class="row">
            <div class="footer-paragraph col">
              <h2 class="text-uppercase">
                c<span class="h2-icon"><font-awesome-icon icon="virus" /></span
                >vid<span class="h2-19">19</span>
              </h2>
              <p class="first-paragraph">
                This website is for health information and advice about
                coronavirus (COVID-19), how to prevent and protect yourself from
                disease.
              </p>
              <p class="second-paragraph mt-5">
                Learn about the government response to coronavirus on GOV.UK.
              </p>
              <div class="footer-icons">
                <span><font-awesome-icon icon="virus" /></span>
                <span><font-awesome-icon icon="virus" /></span>
                <span><font-awesome-icon icon="virus" /></span>
              </div>
            </div>
            <div class="col">
              <h5 class="text-uppercase">quick links</h5>
              <ul class="unordered-footer mt-3">
                <li>
                  <a href="">About Corona</a>
                </li>
                <li class="mt-3">
                  <a href="">Symptoms</a>
                </li>
                <li class="mt-3">
                  <a href="">Prevention</a>
                </li>
                <li class="mt-3">
                  <a href="">Protect Youself</a>
                </li>
                <li class="mt-3">
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <h5 class="text-uppercase">helpfull Link</h5>
              <ul class="unordered-footer">
                <li class="mt-3"><a href="#">Healthcare Professionals</a></li>
                <li class="mt-3"><a href="#">Healthcare Facilities</a></li>
                <li class="mt-4">
                  <a href="#">Older Adults &amp; Medical Conditions</a>
                </li>
                <li class="mt-3"><a href="#">Repare your Family</a></li>
              </ul>
            </div>
            <div class="col">
              <h5 class="text-uppercase">important link</h5>
              <ul class="unordered-footer">
                <li class="mt-3"><a href="#">WHO Website</a></li>
                <li class="mt-3"><a href="#">CDC Website</a></li>
                <li class="mt-3"><a href="#">NHS Website</a></li>
                <li class="mt-3"><a href="#">Harvard Health</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- horizontal -->
        <hr />
        <!-- horizontal -->
        <div class="container privacy-policy">
          <div class="row">
            <div class="col">
              <p>
                © 2020 COVID-19. Template Made by
                <span>PHP-62 Team</span> .
              </p>
            </div>
            <div class="col col-lg-2"><a href="#">Privacy Policy</a></div>
          </div>
        </div>
        <div class="container mt-4 copy-rights">
          <p>
            Disclaimer: We hope you find the information presented on this
            website useful. This website is for general information and raise
            awareness of (2019-nCoV) only.
          </p>
          <p>
            All the information based on WHO, NHS and CDC website. Information
            on our website is meant for awareness, if you have any doubt please
            verify from respective site.
          </p>
        </div>
    </footer>
  </div>
</template>

<style scoped>
/* footer */
footer {
  /* margin-top: 5%; */
  background-color: #151c2e;
  background-image: url(../src/assets/images/shape-a.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 125vh;
}
footer .first-div{
  padding-top: 5%;
}
footer .first-paragraph {
  color: #b2bfe0;
}
footer .second-paragraph {
  color: #b2bfe0;
}
footer h2 {
  font-weight: 900;
  color: #fff;
}
footer h5 {
  color: #fff;
}
footer h2 .h2-19 {
  color: #4b6691;
}
footer h2 .h2-icon {
  color: #ff5363;
}
.footer-icons {
  display: flex;
  justify-content: space-around;
  margin-right: 100px;
  font-size: 30px;
  color: #fff;
  background-color: #50658e;
}
footer .unordered-footer a {
  text-decoration: none;
  color: #b2bfe0;
}
footer .unordered-footer {
  list-style-type: none;
}
footer h5 {
  margin-left: 20px;
}
footer hr {
  color: #b2bfe0;
  width: 75%;
  height: 3px;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
}
footer .privacy-policy {
  color: #b2bfe0;
}
footer .privacy-policy span {
  color: #fff;
  font-weight: bold;
}
footer .copy-rights {
  font-size: 13px;
  color: #b2bfe0;
}
/* footer */
</style>
// <b-navbar toggleable="lg" type="dark" variant="info">
//         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
//         <div class="container">
//           <b-navbar-brand href="#">NavBar</b-navbar-brand>
//           <b-collapse id="nav-collapse" is-nav>
//             <b-navbar-nav>
//               <div class="d-flex">
//                 <ul>
//                   <li><router-link to="/">Home</router-link></li>
//                   <li><router-link to="/Test">test</router-link></li>
//                   <li><router-link to="/About">About</router-link></li>
//                   <li><router-link to="/Symptoms">Symptoms</router-link></li>
//                   <li>
//                     <router-link to="/prevention">prevention</router-link>
//                   </li>
//                   <li>
//                     <router-link to="/Treatment">Treatment</router-link>
//                   </li>
//                   <li><router-link to="/Fandq">FAQ</router-link></li>
//                   <li><router-link to="/News">News</router-link></li>
//                 </ul>
//               </div>
//             </b-navbar-nav>
//           </b-collapse>
//         </div>
//       </b-navbar>
