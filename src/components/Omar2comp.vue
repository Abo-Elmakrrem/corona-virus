<template>
  <section class="protect">
    <div class="container">
      <div class="protect-text">
        <h5>Do’s & Don’ts</h5>
        <h2>Protect yourself</h2>
        <p>
          The best thing you can do now is plan for how you can adapt your daily
          routine. Take few steps to protect yourself as Clean your hands often,
          Avoid close contact, Cover coughs and sneezes, clean daily used
          surfaces etc. The best way to prevent illness is to avoid being
          exposed to this virus.
        </p>
      </div>
    <div class="protect-boxs p-0  row">
      <div class="protect-left-boxs col-lg-4">
        <div class="row mb-3 g-0">
          <div class="text col-6 ps-5 pt-4">
            <p>Avoid close contact</p>
          </div>
          <div class="col-6 pe-5 position-relative"> <img src="../assets/images/donts-a.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 start-0" icon="times-circle"/>
          </div>
        </div>
         <div class="row mb-3 g-0">
          <div class="text col-6 ps-5 pt-4">
            <p>Don’t Touch Face</p>
          </div>
          <div class="col-6 pe-5 position-relative"> <img src="../assets/images/donts-b.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 start-0" icon="times-circle"/>
          </div>
        </div>
         <div class="row g-0">
          <div class="text col-6 ps-5 pt-4">
            <p>Social Distancing</p>
          </div>
          <div class="col-6 pe-5 position-relative"> <img src="../assets/images/donts-c.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 start-0" icon="times-circle"/>
          </div>
        </div>
      </div>
      <div class="protect-middle-boxs col-lg-4">
        <div class="slider"><img src="../assets/images/protect.png" /></div>
      </div>
      <div class="protect-right-boxs text-center col-lg-4">
        <div class="row mb-3 g-0">
          <div class="col-6 ps-5 position-relative"> <img src="../assets/images/hand-d.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 end-0" icon="check-circle"/>
          </div>
          <div class="text col-6 pe-5 pt-4">
            <p>Wash Your Hands</p>
          </div>
        </div>
         <div class="row mb-3 g-0">
          <div class="col-6 ps-5 position-relative"> <img src="../assets/images/dos-b.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 end-0" icon="check-circle"/>
          </div>
           <div class="text col-6 pe-5 pt-4">
            <p>Drink Much Watar</p>
          </div>
        </div>
         <div class="row g-0">
          <div class="col-6 ps-5 position-relative"> <img src="../assets/images/dos-c.png">
          <font-awesome-icon class=" icon1 position-absolute top-0 end-0" icon="check-circle"/>
          </div>
          <div class="text col-6 pe-5 pt-4">
            <p>Use Face Mask</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Omar2comp'
}
</script>
<style scoped>
.protect {
  padding: 100px 0;
  background-color: #f7f9fe;
}
.protect .protect-text {
  width: 100%;
  margin: auto;
  text-align: center;
}
.protect .protect-text h5 {
  color: #2a81ea;
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 7px;
}
.protect .protect-text h2 {
  color: #50658e;
  font-size: 42px;
  font-family: "Oswald", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.protect .protect-text p {
  color: #3d4b69;
  line-height: 1.5em;
}
.protect .protect-boxs .protect-middle-boxs img {
    /* width: 100%; */
    height: 50vh;
}
.protect .protect-boxs .protect-left-boxs img {
  height: 15vh;
  border: 1px solid var(--main-color);
  border-radius: 50%;
 }
 .protect .protect-boxs .protect-left-boxs .icon1 {
   height: 5vh;
   color: red;
   font-size: 25px;
 }
 .protect .protect-boxs .protect-right-boxs img {
  height: 15vh;
  border: 1px solid var(--main-color);
  border-radius: 50%;
 }
 .protect .protect-boxs .protect-right-boxs .icon1 {
   height: 5vh;
   color: green;
   font-size: 25px;
 }
 .protect .protect-boxs .protect-right-boxs .text {
    color: #2a81ea;
    font-weight: bold;
    font-size: 14px;
}
.protect .protect-boxs .protect-left-boxs .text {
    color: #2a81ea;
    font-weight: bold;
    font-size: 14px;
}
</style>
