<template>
  <div id="app">
    <b-container>
      <b-row>
        <nav class="navbar navbar-light">
          <img src="./assets/img/logo.svg" alt="revechat">
        </nav>
        <h1>Almost Set… Integrate your Live Chat Now</h1>

        <tab/>

        <div class="d-flex justify-content-center dashboard-btn-section">
          <b-button type="submit" class="dashboard-btn">Skip to Dashboard</b-button>
        </div>

        <modal ref="my-modal"></modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Tab from "./tab";
import Modal from "./modal";
export default {
  name: 'app',
  components:{
    'tab' : Tab,
    'modal' : Modal
  },

  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import "./scss/main";

#app{

  .navbar{
    padding: 26px 0;
  }

  h1{
    color: $header-color;
    font-size: $fs-large;
    font-weight: $fw-Bold;
    text-align: center;
  }

  .dashboard-btn-section{
    margin-top: 48px;
    .dashboard-btn{
      background-color: $primary-color;
      color:#fff;
      font-size: $fs-medium;
      font-weight: $fw-medium;
      border: 0;
      width: 357px;
      height: 42px;

      &:hover, &:focus, &:active {
        box-shadow: none !important;
        outline: none !important;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
 #app{
   margin: 20px 0;

   .navbar{
     padding: 12px;
   }
   h1{
     font-size: $fs-medium;
     font-weight: $fw-medium;
   }

   .dashboard-btn-section {
     margin-top: 12px;
   }
 }
}
</style>
