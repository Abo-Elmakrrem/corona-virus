<template>
  <section>
    <b-container>
      <div class="take-steps d-flex justify-content-around">
        <b-row>
          <b-col>
            <div class="texts">
              <h4>Take steps to protect others</h4>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Stay home if you’re sick</span
                >
                – Stay home if you are sick, except to get medical care.
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Cover your mouth and nose</span
                >
                – with a tissue when you cough or sneeze (throw used tissues in
                the trash) or use the inside of your elbow.
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Wear a facemask if you are sick</span
                >
                – You should wear a facemask when you are around other people
                (e.g., sharing a room or vehicle) and before you enter a
                healthcare provider’s
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Clean AND disinfect frequently touched surfaces daily</span
                >– This includes phones tables, light switches, doorknobs,
                countertops, handles, desks, toilets, faucets, and sinks.
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Clean the dirty surfaces </span
                >– Use detergent or soap and water prior to disinfection.
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Stay informed about the local COVID-19 situation </span
                >– Get up-to-date information about local COVID-19 activity from
                <a href="">public health officials.</a>
              </p>
              <p>
                <font-awesome-icon class="icon" icon="check-circle" /><span
                  >Dedicated, lined trash can </span
                >– If possible, dedicate a lined trash can for the ill person.
                Use gloves when removing garbage bags, and handling & disposing
                of trash.
              </p>
            </div>
          </b-col>
          <b-col>
            <div>
              <img src="../../assets/images/steps.png" />
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="steps">
        <h6>Follow steps to wash hands</h6>
        <a href=""
          >Why do I need wash hand <font-awesome-icon icon="arrow-right"
        /></a>
        <div id="hand-wash" class="hand-wash d-flex justify-content-between">
          <b-row>
            <b-col>
              <div>
                <img src="../../assets/images/hand-a.png" />
                <h5>Soap on Hand</h5>
              </div>
            </b-col>
            <b-col>
              <div>
                <img src="../../assets/images/hand-b.png" />
                <h5>Palm to Palm</h5>
              </div>
            </b-col>
            <b-col>
              <div>
                <img src="../../assets/images/hand-c.png" />
                <h5>Between Fingers</h5>
              </div>
            </b-col>
            <b-col>
              <div>
                <img src="../../assets/images/hand-d.png" />
                <h5>Back to Hands</h5>
              </div>
            </b-col>
            <b-col>
              <div>
                <img src="../../assets/images/hand-e.png" />
                <h5>Clean with Water</h5>
              </div>
            </b-col>
            <b-col>
              <div>
                <img src="../../assets/images/hand-f.png" />
                <h5>Focus on Wrist</h5>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'prevetion2'
}
</script>
<style scoped>
.take-steps {
  background-color: white;
}
.take-steps div img {
  width: 350px;
  height: 500px;
}
.take-steps h4 {
  color: var(--gray-color);
  font-weight: bold;
  font-size: 30px;
  padding: 30px 0;
}
.take-steps p {
  font-size: 15px;
}
.take-steps p span {
  font-weight: bold;
}
.take-steps .icon {
  margin-right: 5px;
  color: #3dca93;
}
.steps {
  text-align: center;
  padding: 50px;
}
.steps h6 {
  font-weight: bold;
  color: var(--gray-color);
  font-size: 30px;
}
.steps a {
  text-decoration: none;
  font-weight: bold;
}
.hand-wash {
  padding-top: 60px;
}
.hand-wash h5 {
  padding-top: 10px;
  font-weight: bold;
  font-size: 15px;
}
.hand-wash img {
  width: 120px;
  height: 120px;
  border-radius: 100px 100px;
}
</style>
