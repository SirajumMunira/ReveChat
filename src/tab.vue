<template>
  <div id="tabSection">

    <b-tabs justified>
      <b-tab active>
        <template #title>
          <div class="d-flex justify-content-start">
            <img src="./assets/img/tab-icon1.svg" alt="Install Code" class="align-self-center">
            <div class="tab-header-section">
              <p class="tab-header-section__tab-header">Install Code Manually</p>
              <span class="tab-header-section__tab-text">Basic JavaScript</span>
            </div>
          </div>
        </template>

        <!--1st tab body-->
        <div class="tab-body">
           <h5>
             Copy and paste the snippet before the closing &lt;/body&gt; tag on every page of your website.
           </h5>

           <b-row class="copy-btn-section m-0">
             <div class="col-7">
               <p class="code-text">
               {{code}}
               </p>
             </div>

             <div class="col-5 btn-right">
               <span v-show="whenCopied" class="code-copied">Code Copied</span>
               <button v-clipboard:copy="code"
                       v-clipboard:success="showCopyText" class="copy-btn">
                 <img src="./assets/img/copy.svg" alt="copy">
                 Copy Code
               </button>
             </div>
           </b-row>

           <div class="tab-body__footer d-flex justify-content-between">
             <p>Need Help? <span>Check Installation Guide</span></p>
             <p>Done? <span>Verify Your Installation</span></p>
           </div>
          </div>
      </b-tab>

      <!--2nd tab body-->
      <b-tab>
        <template #title>
          <div class="d-flex justify-content-start">
            <img src="./assets/img/tab-icon2.svg" alt="Install Code" class="align-self-center">
            <div class="tab-header-section">
              <p class="tab-header-section__tab-header">Install with Plugins</p>
              <span class="tab-header-section__tab-text">Wordpress, Magento, 42+</span>
            </div>
          </div>
        </template>

        <div class="tab-body">
          <h5>Setup REVE Chat with one of the following popular platforms.</h5>

          <b-container>
            <b-row class="row-cols-5 img-section">
              <div class="col">
                <img src="./assets/img/wordpress.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img2.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img3.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img4.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img5.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img6.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img7.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img8.png" alt="wordpress">
              </div>
              <div class="col">
                <img src="./assets/img/img9.png" alt="wordpress">
              </div>
              <div class="col">
                <p>View All Platforms</p>
              </div>
            </b-row>
          </b-container>
        </div>
      </b-tab>

      <!--3rd tab body-->
      <b-tab>
        <template #title>
          <div class="d-flex justify-content-start">
            <img src="./assets/img/tab-icon3.svg" alt="Install Code" class="align-self-center">
            <div class="tab-header-section">
              <p class="tab-header-section__tab-header">Email Developers</p>
              <span class="tab-header-section__tab-text">Send Instructions</span>
            </div>
          </div>
        </template>

        <div class="tab-body">
          <h5>We'll send an email the installation code and instructions on how to get REVE Chat installed.</h5>

          <b-row>
            <b-col md="8" sm="12">
              <b-form>
                <b-form-group id="input-group-1" label="Receivers Email *" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="your_developer@email.com" required>
                  </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Enter Message" label-for="textarea">
                  <b-form-textarea
                    id="textarea"
                    placeholder="Write your message…">
                  </b-form-textarea>
                </b-form-group>

                <b-button type="submit" class="send-btn">Send Mail <img src="./assets/img/send-icon.svg" alt="send mail"></b-button>
                <span class="confirm-text">Confirmation text</span>
              </b-form>
            </b-col>
          </b-row>
        </div>
      </b-tab>
    </b-tabs>

  </div>
</template>

<script>
  export default {
    name: 'Tab',
    data () {
      return {
        whenCopied: false,
        code: ' <!-- Start of REVE Chat Script-->\n' + ' <script type=\'text/javascript\'>\n' +
          'window.$_REVECHAT_API || (function(d, w) { var r = $_REVECHAT_API = function(c) {r._.push(c);}; w.__revechat_account=\'3855745\';w.__revechat_version=2;\n' +
          'r._= []; var rc = d.createElement(\'script\'); rc.type = \'text/javascript\'; rc.async = true; rc.setAttribute(\'charset\', \'utf-8\');\n' +
          'rc.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + \'static.revechat.com/widget/scripts/new-livechat.js?\'+new Date().getTime();'
      }
    },

    methods:{
      showCopyText(){
        this.whenCopied = true
        setTimeout(() => this.hideCopyText(), 1000)
      },

      hideCopyText(){
        this.whenCopied = false
      }
    }
  }
</script>

<style lang="scss">
@import "./scss/main";

#tabSection{
  display: flex;
  justify-content: center;
  margin: 42px 0 0 0;

  .tabs {
    max-width: 853px;

    .nav-item{
      margin-right: 5px;
      background-color: $background-color;
      border: 1px solid #DADADA;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &:last-of-type{
        margin-right: 0;
      }
    }

    .nav-tabs {
      border-bottom: 0 !important;

      .nav-link {
        padding: 20px 18px;
        border: 0 !important;

        &:focus, &:active{
          color: transparent !important;
          background-color: #fff;
          border-bottom: 0 !important;

          &:hover{
            background-color: #fff !important;
          }
        }

        &:hover{
          background-color: $background-color;
          color: transparent !important;
        }

        .tab-header-section {
          text-align: left;
          padding-left: 16px;

          &__tab-header {
            margin-bottom: 0;
            color: $header-color;
            font-size: $fs-medium;
            font-weight: $fw-Bold;
          }

          &__tab-text {
            color: $small-text;
            font-size: $fs-small;
            font-weight: $fw-regular;
          }
        }
      }
    }


    .tab-content {

      .tab-pane {
        border: 1px solid #DADADA;
        border-top: 0;
        width: 850px;
        padding: 20px 27px 25px 27px;

        .tab-body{
          &__footer {
            margin-top: 22px;

            p {
              color: $text-color;
              font-size: $fs-medium;
              font-weight: $fw-regular;
              margin-bottom: 0;

              span {
                color: $primary-color;
                font-size: $fs-medium;
                font-weight: $fw-Bold;
              }
            }
          }

          h5 {
            color: $text-color;
            font-size: $fs-small;
            font-weight: $fw-regular;
            padding-bottom: 20px;
            margin-bottom: 0;
          }

          .copy-btn-section{
            background-color: $background-color;
            padding: 12px 17px;

            .code-text {
              color: $text-color;
              font-size: $fs-xs;
              font-weight: $fw-regular;
              margin-bottom: 0;
            }

            .code-copied{
              color: #0F9D58;
              font-size: $fs-medium;
              font-weight: $fw-regular;
            }

            .btn-right{
              text-align: right;
              .copy-btn{
                background-color: transparent;
                color: $primary-color;
                font-size: $fs-medium;
                font-weight: $fw-Bold;
                margin-bottom: 0;
                border: 0;
              }
            }
          }

          .img-section{
            .col{
              padding-left: 0;
              text-align: center;
              align-self: center;
              margin-bottom: 18px;

              img{
                text-align: center;
                max-width: 142px;
              }

              p{
                text-align: center;
                color: $primary-color;
                font-size: $fs-medium;
                font-weight: $fw-Bold;
                margin-bottom: 0;
                padding-left: 12px;
              }
            }
          }

          .form-group{
            margin-bottom: 16px;

            label{
              color: $header-color;
              font-size: $fs-small;
              font-weight: $fw-regular;
              padding-bottom: 8px;
            }

            .form-control{
              border: 1px solid rgba(0, 0, 0, 0.2);

              &::placeholder {
                color: #AAAAAA;
                font-size: $fs-medium;
                font-weight: $fw-regular;
              }
            }

            textarea{
              resize: none;
            }
          }

          .send-btn{
            background-color: #fff;
            color: $primary-color;
            font-size: $fs-medium;
            font-weight: $fw-medium;
            border: none;

            &:hover, &:focus, &:active {
              box-shadow: none !important;
              outline: none !important;
            }
          }

          .confirm-text{
            color: #000000;
            font-size: $fs-small;
            font-weight: $fw-regular;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #tabSection{
    margin: 24px 0;

    .tabs {
      max-width: 100vw;

      .nav-item{
        margin-right: 5px;
        background-color: $background-color;
        border: 1px solid #DADADA;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        &:last-of-type{
          margin-right: 0;
        }
      }

      .nav-tabs {
        border-bottom: 0 !important;

        .nav-link {
          padding: 12px 8px;

          img{
            width: 16px;
          }

          .tab-header-section {
            padding-left: 6px;

            &__tab-header {
              margin-bottom: 0;
              font-size: $fs-xs;
              font-weight: $fw-Bold;
            }

            &__tab-text {
              font-size:$fs-xs;
              font-weight: $fw-regular;
            }
          }
        }
      }

      .tab-content {
        .tab-pane {
          border: 1px solid #DADADA;
          border-top: 0;
          width: 100%;
          padding: 16px 12px;

          .tab-body{
            &__footer {
              margin-top: 22px;

              p {
                font-size: $fs-xs;
                font-weight: $fw-regular;

                span {
                  font-size: $fs-xs;
                  font-weight: $fw-medium;
                }
              }
            }

            h5 {
              color: $text-color;
              font-size: $fs-small;
              font-weight: $fw-regular;
              padding-bottom: 20px;
              margin-bottom: 0;
            }

            .copy-btn-section{
              padding: 12px 12px;

              .code-text {
                word-break: break-word;
                font-size: $fs-xs;
                font-weight: $fw-regular;
              }

              .code-copied{
                color: #0F9D58;
                font-size: $fs-small;
                font-weight: $fw-regular;
              }

              .btn-right{
                .copy-btn{
                  font-size: $fs-xs;
                  font-weight: $fw-medium;

                  img{
                    width: 12px;
                  }
                }
              }
            }

            .img-section{
              .col{
                padding-left: 0;
                text-align: center;
                align-self: center;
                margin-bottom: 18px;

                img{
                  text-align: center;
                  width: 100px;
                  max-width: 100%;
                }

                p{
                  font-size: 10px;
                  font-weight: $fw-medium;
                  padding-left: 0;
                }
              }
            }

            .form-group{
              margin-bottom: 16px;

              label{
                color: $header-color;
                font-size: $fs-small;
                font-weight: $fw-regular;
                padding-bottom: 8px;
              }

              .form-control{
                border: 1px solid rgba(0, 0, 0, 0.2);

                &::placeholder {
                  color: #AAAAAA;
                  font-size: $fs-medium;
                  font-weight: $fw-regular;
                }
              }

              textarea{
                resize: none;
              }
            }

            .send-btn{
              background-color: #fff;
              color: $primary-color;
              font-size: $fs-medium;
              font-weight: $fw-medium;
              border: none;

              &:hover, &:focus, &:active {
                box-shadow: none !important;
                outline: none !important;
              }
            }

            .confirm-text{
              color: #000000;
              font-size: $fs-small;
              font-weight: $fw-regular;
            }
          }
        }
      }
    }
  }
}

</style>
