<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="banner-image1 all-div">
            <!-- head -->
            <div class="container text-banner mt-5 all-div">
              <div class="row">
                <div class="col-lg-8 col-md-9 col-sm-12">
                  <h1 class="text-uppercase">corona</h1>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-12">
                  <span class="text-uppercase">
                <h3 class="">covid-19</h3>
                <h2 class="">virus</h2>
              </span>
                </div>
              </div>
              <!-- end of head -->
            </div>
            <!-- header info -->
            <div class="container btn-sec mt-5 p-sec">
              <div class="row">
                <div class="col-9">
                  <p>
                    The Coronavirus (COVID-19) was first reported in Wuhan,
                    Hubei, China in December 2019, the outbreak was later
                    recognized as a pandemic by the World Health Organization
                    (WHO) on 11 March 2020.
                  </p>
                  <div class="p-sec-btns">
                    <a href="#protect"
                      ><button class="btn btn-primary">
                        How to Protect
                        <!-- <span><font-awesome-icon icon="shield-alt" /></span> -->
                      </button></a
                    >
                    <a href="#about" class="covid"
                      >About <span class="text-uppercase">covid-19</span>
                      <span class="arrow">
                        <font-awesome-icon icon="arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- endof header -->
              <!-- statistics section -->
              <div class="statistics text-uppercase mt-5">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="banner-text-number">
                      <p class="count-p">World wide cases</p>
                      <p>
                        <span class="count">8</span><span>,</span
                        ><span class="count">949</span><span>,</span
                        ><span class="count">671</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="banner-text-number">
                      <p class="count-p">Deaths</p>
                      <p>
                        <span class="count">467</span><span>,</span
                        ><span class="count">432</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="banner-text-number">
                      <p class="count-p">Recovered</p>
                      <p>
                        <span class="count">4</span><span>,</span
                        ><span class="count">556</span><span>,</span
                        ><span class="count">091</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="update">
                * Last updated: Jun 21, 2020, 09:24 AM America/Chicago
              </p>
            </div>
            <!-- end of header info -->
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <!-- home image -->
          <div class="banner-image2 mt-5">
            <img src="../assets/images/header-a.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* banner */
.hello {
  background-image: url(../assets/images/shape-a.png);
}
.text-banner {
  display: flex;
  flex-direction: row;
}
.text-banner h1 {
  color: var(--gray-color);
  font-weight: 900;
  font-size: calc(var(--default-font-size) + 50px);
  font-family: "Oswald", sans-serif;
}
.text-banner span {
  color: var(--gray-color);
}
.text-banner span h3 {
  color: #ff5363;
}
/* end of banner */
/* p section */
.p-sec button {
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 30px;
  background-color: var(--main-color);
}
.p-sec .p-sec-btns {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-weight: bold;
  margin-top: ;
}
.p-sec .p-sec-btns .covid {
  margin-top: 2%;
  margin-left: 10%;
  text-decoration: none;
}
.p-sec-btns .arrow{
  margin-left: 10px;
}
/* end of p-section */
/* statistics */
.statistics {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.banner-text-number {
  color: #7d92bb;
  font-weight: bold;
  font-size: 15px;
  flex-direction: row;
}
.banner-text-number .count-p {
  font-size: 12px;
}
.banner-text-number .count {
  color: #465675;
  font-size: 30px;
}
.btn-sec .update {
  font-style: italic;
  font-size: 12px;
  color: #7d92bb;
  margin-top: 30px;
}
/* end of statistics */
/* banner image */
.banner-image1 .banner-image2 {
  display: flex;
  flex-wrap: wrap;
}
.banner-image2 img {
  width: 100%;
  height: 100%;
}
/* banner image */
</style>
