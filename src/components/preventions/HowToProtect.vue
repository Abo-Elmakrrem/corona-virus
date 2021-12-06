<template>
  <section>
    <b-container>
      <div class="info">
        <b-row>
          <p class="p1">HOW TO PROTECT YOURSELF?</p>
          <h2>PREVENTION & ADVICE</h2>
          <p>
            There is currently no vaccine to prevent coronavirus disease 2019
            (COVID-19).
            <span
              >The best way to prevent illness is to avoid being exposed to this
              virus.</span
            >
            Stay aware of the latest information on the COVID-19 outbreak,
            available on the WHO website and through your national and local
            public health authority.
          </p>
        </b-row>
      </div>
      </b-container>
      <b-container>
      <div class="steps d-flex justify-content-between">
        <b-row>
          <b-col>
            <div>
              <img src="../../assets/images/advice-a.png" alt="" />
              <h3>Wash your hands frequently</h3>
              <p>
                Regularly and thoroughly clean your hands with an alcohol-based
                hand rub or wash them with soap and water for at least 20
                seconds.
              </p>
            </div>
          </b-col>
          <b-col>
            <div>
              <img src="../../assets/images/advice-b.png" alt="" />
              <h3>Maintain social distancing</h3>
              <p>
                Maintain at least 1 metre (3 feet) distance between yourself &
                anyone who is coughing or sneezing. If you are too close, get
                chance to infected.
              </p>
            </div>
          </b-col>
          <b-col>
            <div>
              <img src="../../assets/images/advice-c.png" alt="" />
              <h3>Avoid touching face</h3>
              <p>
                Hands touch many surfaces and can pick up viruses. So, hands can
                transfer the virus to your eyes, nose or mouth and can make you
                sick.
              </p>
            </div>
          </b-col>
          <b-col>
            <div>
              <img src="../../assets/images/advice-d.png" alt="" />
              <h3>Practice respiratory hygiene</h3>
              <p>
                Maintain good respiratory hygiene as covering your mouth & nose
                with your bent elbow or tissue when cough or sneeze.
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
      </b-container>
      <b-container>
      <div class="ask d-flex justify-content-around">
          <div>
            <a href="#hand-wash" class="handwash">
              Check How You Wash Hand <font-awesome-icon icon="arrow-right"
            /></a>
          </div>
          <div>
            <a href="#"
              >Q&A On CoronaVirus <font-awesome-icon icon="arrow-right"
            /></a>
          </div>
      </div>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'prevention1'
}
</script>
<style scoped>
.info {
  padding: 50px;
  text-align: center;
}
.info .p1 {
  color: var(--main-color);
  font-weight: bold;
}
.info h2 {
  color: var(--gray-color);
  font-weight: bold;
}
.info span {
  font-weight: bold;
}
.steps {
  text-align: center;
}
.steps div {
  padding: 30px;
}
.steps div h3 {
  font-size: 16px;
  font-weight: bold;
}
.steps img {
  border-radius: 100px 100px;
  width: 110px;
  height: 130px;
  padding-bottom: 20px;
}
.ask {
  padding: 30px;
}
.ask a {
  text-decoration: none;
  padding-right: 20px;
}
.ask .handwash {
  border-radius: 100px 100px;
  padding-left: 15px;
  border: 1px solid var(--main-color);
  color: white;
  background-color: var(--main-color);
}
.btn {
  border-radius: 50px 50px;
}
</style>
