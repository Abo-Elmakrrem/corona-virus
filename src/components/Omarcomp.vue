<template>
 <section class="carefull">
     <!-- <div class="slider position-absolute top-50 start-50 translate-middle text-center"></div> -->
    <div class="container">
        <div class="carefull-texts row position-relative">
            <div class="carefull1 col-lg-7 col-md-12 col-sm-12">
            <h5>be careful & stay safe </h5>
            <h2> treatment for coronavirus</h2>
            <p>
            <span>to date, there is no vaccine and no speciffic antiviral medicine to prevent or treat COVID-2019.</span>
            "however, those affected should receive care to relieve symptoms. people with serious illness should be hospitalized. most patients recover thanks to supportive care"</p>
            <p>antibiotics do net help. as they do not work against viruses.
                treatment aims to relieve the symptoms while your body fights the inless. you'll need to stay in insolation, away from other people, until you have recovered.</p>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12">
            <div class="carefull2">
<h6>self care</h6>
            <p>"if you have mild symptoms, stay at home untill you've recovered. you can relieve your symptoms if you: </p>
            <ul>
                <li>
                    <div class="text"> Rest and sleep </div>
                </li>
                <li>
                    <div class="text">Keep warm </div>
                </li>
                <li>
                    <div class="text"> Drink plenty of liquids </div>
                </li>
                <li>
                    <div class="text"> Use a room humidifier or take a hot shower to help ease a sore throat and cough </div>
                </li>
            </ul>
            <h6> Medical Treatments </h6>
            <p>
                "if you develop a fever, cough, and have difficulty breathing, promptly seek medical care. call in advance and tell your health provider of any recent travel or recent contact with travelers."
            </p>
            </div>
        </div>
    </div>
    </div>
     </section>
</template>
<script>
export default {
  name: 'Omarcomp'
}
</script>
<style scoped>
.carefull{
    background-color: #2766bb;
    padding:30px 0;
    color: #fff;
    background-image: url(../assets/images/shape-a.png);
    background-size: cover;
}
.carefull .carefull-texts .carefull1 {
    margin: auto;
    padding: 0 15px;
    background-color: transparent;
}
.carefull .carefull-texts .carefull1 h5 {
    color: #73e3ff;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 7px;
}
.carefull .carefull-texts .carefull1 h2 {
    font-size: 35px;
    font-family: 'Oswald', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 25px;
}
.carefull .carefull-texts .carefull1 p {
    color: #ced4ff;
    margin-bottom: 20px;
}
.carefull .carefull-texts .carefull1 p span {
    font-weight: bold;
    color: #fff;
}
.carefull .carefull-texts .carefull2 {
    background-color: #1b47a1;
    padding: 40px;
    margin: 50px auto 0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}
.carefull .carefull-texts .carefull2 p {
    line-height: 1.5em;
    margin-bottom: 10px;
    font-size: 18px;
}
.carefull .carefull-texts .carefull2 ul {
    list-style: none;
    font-size: 15px;
}
.carefull .carefull-texts .carefull2 ul li {
    margin-bottom: 10px
}
</style>
