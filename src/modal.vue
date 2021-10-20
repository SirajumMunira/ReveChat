<template>
  <div id="popUpModal">
    <div ref="modal" class="modal fade" :class="{show, 'd-block': active}" tabindex="-1" role="dialog">
      <div class="modal-dialog centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verify your installation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b-form>
              <b-form-group id="input-group-1" label="Enter the URL of the snippet page where the snippet was installed." label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="www.yourwebsite.com" >
                </b-form-input>
              </b-form-group>

              <b-button type="submit" class="send-btn">Check</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',

  data () {
    return {
      active: false,
      show: false,
    }
  },

  mounted(){
    let pop = window.localStorage.getItem('popupTimer')

    if(pop==null) {
      setTimeout(() =>  this.toggleModal(), 30000)
    }
    else{
      let savedTime = new Date(Number(window.localStorage.getItem("popupTimer"))).getTime();
      let newTime= new Date().getTime();
      const diffTime = Math.abs(newTime - savedTime);
      let secondsDifference = Math.floor(diffTime/1000)
      if(secondsDifference>86400){
        setTimeout(() =>  this.toggleModal(), 30000)
      }
    }
  },

  methods:{
    toggleModal() {
      const body = document.getElementById("popUpModal");
      this.active = !this.active;
      this.active ? body.classList.add("modal-open") : body.classList.remove("modal-open");
      this.show = true
      const popUptime = new Date()
      window.localStorage.setItem('popupTimer', popUptime.getTime())
    },
    closeModal(){
      const body = document.getElementById("popUpModal");
      this.show = false
      this.active = false;
      this.active ? body.classList.add("modal-open") : body.classList.remove("modal-open");
    }

  }
}
</script>

<style lang="scss" scoped>
@import "./scss/main";

#popUpModal {

  .modal-backdrop.show {
    opacity: 0;
  }

  .close{
    background-color: #fff;
    border: none;
  }

  .modal-content{
    height: 250px;
    width: 425px;
    border-radius: 5px;

    .modal-header{
      border-bottom: 0;

      .modal-title{
        color: $header-color;
        font-size: $fs-medium;
        font-weight: $fw-Bold;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  #popUpModal {
    .modal-content{
      height: 250px;
      width: 300px;
    }
  }

}


</style>

<style lang="scss">
@import "./scss/main";
#popUpModal {
  .form-group{

    label{
      color: $text-color;
      font-size: $fs-small;
      font-weight: $fw-regular;
      padding-bottom: 8px;
    }

    .form-control{
      border: 1px solid rgba(0, 0, 0, 0.2);

      &::placeholder {
        color: #AAAAAA;
        font-size: $fs-small;
        font-weight: $fw-regular;
      }
    }

    textarea{
      resize: none;
    }
  }

  .send-btn{
    background-color: $primary-color;
    color:#fff;
    font-size: $fs-medium;
    font-weight: $fw-medium;
    border: 0;
    width: 186px;
    height: 42px;
    margin-top: 17px;

    &:hover, &:focus, &:active {
      box-shadow: none !important;
      outline: none !important;
    }
  }

}
</style>
