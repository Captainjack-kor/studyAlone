<template>
  <v-row>
    <v-dialog
      :class="$mq"
      v-model="dialog"
      content-class="popupDialog"
      persistent
    >
      <!-- //TODO : title 분기처리 -->
      <div
        class="popupTitle"
        style="background-color: white;"
        :class="$mq"
      >
        <v-col
          style="text-align: left;"
          class="popupTItleContents"
          :class="$mq"
        >
        </v-col>
      </div>
        <!-- v-on:click="mv_url_func(el.move_url)" -->
      <v-card
        class="popupDialogCard rounded-0 mv_url"
        outlined
        style=""
        :class="$mq"
      >
        <v-card-text
          style="text-align: left; padding: 0px;"
          class="popupText"
          :class="$mq"
        >
          <v-row style="padding: 0px;">
            <v-col style="padding: 0px;">
              <!-- //TODO: api 변경후 list로 출력
              v-for="(el, idx) in el.img_url"
              :key="idx" -->
              <v-img
                src="../assets/05-6-540x304.jpeg"
                alt=""
                class="popupIMG"
                :class="$mq"
                contain
              />
            </v-col>
            <v-col
              style="margin-left: 1rem;"
              class="popupContents"
              :class="$mq"
            >
            2353425453543435
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <div class="white">
        <!-- <v-checkbox
          v-model="checkbox"
          :label="desc"
        ></v-checkbox> -->

        <v-col
          style="border-top: 0px solid lightgray; padding-top: 0px; padding-bottom: 0px;"
          class="popupFooter"
          :class="$mq"
        >
          <v-row>
            <v-col
              class="blockPopupBtn"
              @click="[/*dialog = false,*/ donotWatchAnymore()]"
              :class="$mq"
            >
              <span class="desc" :class="$mq">
                {{ desc }}
              </span>
            </v-col>

            <v-spacer class="spacer" :class="$mq"></v-spacer>

            <v-btn
              class="closeBtn"
              style="background-color: #4B4B4B; border-radius: 0px; font-weight: bold; height:48px;"
              color="white"
              text
              @click="closePopup()"
            >
              닫기 X
            </v-btn>
          </v-row>
        </v-col>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: [],
      checkbox: false,
      popupInfo: [],
      desc: "오늘 하루동안 보지 않기",
      newPopupInfo: []
    };
  },
  // created() {
  //   var self = this;
  //   var api = "api_login_gubun.php";
  //   var param = {};

  //   self.$store.dispatch("apiCall", { api, param }).then(() => {
  //     var data = self.$store.state.api_result;
  //     if (data.event_gubun === "Y") {
  //       this.popupInfo = data.list;
  //     }

  //     for (let i = 0; i < this.popupInfo.length; i++) {
  //       let checkCookie = this.getCookie("mycookie" + this.popupInfo[i].idx);
  //       if (checkCookie !== "popupEnd" + this.popupInfo[i].idx) {
  //         this.newPopupInfo.push(this.popupInfo[i]);
  //       }
  //     }

  //     if (data == false || data == "err") {
  //       //error
  //       // alert("정보를 가져오는데 실패하였습니다. 새로 고침 후 다시 시도해 주세요.");
  //     } else {
  //       try {
  //         if (data.ret_code == "S") {
  //           self.recommend_list = data.recommend_list;
  //           self.breath_list = data.breath_list;
  //           self.youtube_list = data.youtube_list;
  //           self.music_list = data.music_list;
  //           self.novel_list = data.novel_list;
  //           self.my_content_list = data.my_content_list;

  //           var type = this.$route.query.type;
  //           if (type == "-1") {
  //             self.menu(-1);
  //           } else if (type == "0") {
  //             self.menu(0);
  //           } else if (type == "1") {
  //             self.menu(1);
  //           } else if (type == "2") {
  //             self.menu(2);
  //           } else if (type == "3") {
  //             self.menu(3);
  //           } else if (type == "4") {
  //             self.menu(4);
  //           } else {
  //             self.menu(-1);
  //           }
  //         } else {
  //           // alert(
  //           //   "정보를 가져오는데 실패하였습니다. 새로 고침 후 다시 시도해 주세요."
  //           // );
  //         }
  //       } catch (e) {
  //         // alert("정보를 가져오는데 실패하였습니다. 새로 고침 후 다시 시도해 주세요.");
  //       }
  //     }
  //   });
  // },
  methods: {
    mv_url_func(el) {
      if (el) {
        window.open(el);
      }
    },

    // closePopup(index) {
      // console.log(this.popupInfo[index].idx);
      
      // this.newPopupInfo = this.newPopupInfo.filter(
      //   element => element.idx !== index
      // );
    // },

    setCookie(name, value) {
      var today = new Date();
      // today.setDate(today.getDate() + expiredays); // 현재시간에 하루를 더함
      // today.setMinutes(today.getMinutes() + 1);
      today.setHours(24);
      today.setMinutes(0);
      today.setSeconds(0);

      document.cookie =
        name + "=" + escape(value) + "; expires=" + today.toGMTString();
      // alert(document.cookie);
    },

    getCookie(name) {
      var cookie = document.cookie;
      if (document.cookie != "") {
        var cookie_array = cookie.split("; ");
        for (let index = 0; index < cookie_array.length; index++) {
          var cookie_name = cookie_array[index].split("=");
          if (cookie_name[0] === name) {
            return cookie_name[1];
          }
        }
      }
      return;
    },

    donotWatchAnymore() {
      // this.newPopupInfo = this.newPopupInfo.filter(
      //   element => element.idx !== index
      // );
      // this.setCookie("mycookie" + index, "popupEnd" + index);
    }
  }
};
</script>


<style scoped>
/* @import url("https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"); */
.mv_url {
  cursor: pointer;
}

.closeBtn {
  border-radius: 0;
  height: 48px;
  /* font-family: 'NanumSquareBold'; */
}

.blockPopupBtn {
  /* font-family: 'NanumSquareBold'; */
  margin-left: 15px;
  text-align: left;
  align-content: left;
  text-decoration: underline;
  text-underline-position: under;
  /* margin-bottom: 10px;å */
  /* padding: 0.5rem; */
  /* margin-top: 0.8rem; */
}

.blockPopupBtn.sm {
  /* font-family: 'NanumSquareBold'; */
  margin-left: 5px;
  text-align: left;
  align-content: left;
  text-decoration: underline;
  text-underline-position: under;
  /* font-size: 3vw/4vw; */
}

.desc {
  /* padding-top: 0.35rem; */
  /* font-size: 14px; */
}

.desc.sm {
  font-size: 14px;
}

.desc:hover {
  cursor: pointer;
  color: black;
  /* font-weight: 600; */
}

.popupIMG {
  /* height: 500px; */
  /* width: 800px; */

  /* height: 100%; */
  /* max-height: 800px; */
  /* overflow-y: scroll; */
}

.popupIMG.sm {
  /* width: 500px; */
}

.popupText {
  font-size: 18px;
}

.popupText.sm {
  font-size: 3vw/4vw;
}

.popupDialogCard {
  margin: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  /* height: auto; */
  max-height: 580px !important;
  height: 50vh !important;
  /* max-height: 800px; */
  /* max-height: auto; */
  /* max-height: 63vh; */
  width: 100%;
  padding-bottom: 20px;
  background-color: #f7f6f0;
  padding: 0px;
  border: none;
  border-style: none;
}

.popupDialogCard.sm {
  overflow-x: hidden;
  /* height: auto; */
  max-height: 580px !important;
  height: 50vh !important;
  /* max-height: 50vh; */
  /* margin-top: 2vw; */
  background-color: #f7f6f0;
  /* max-height: 50vh;  */
  border: none;
}

.popupFooter {
  border: none;
}

.popupFooter.sm {
  border: none;
}

.spacer.sm {
  display: none;
}
.popupTItleContents {
  overflow-y: hidden;
}

.popupTItleContents.sm {
  /* font-size: 2vw/3vw; */
  font-size: 17px;
  /* font-family: 'NanumSquareBold'; */
}

.popupTitle {
  /* position: fixed;
  top: 7%;
  width: 1080px; */
}

.popupContents.sm {
  font-size: 15px;
  /* font-family: 'NanumSquareBold'; */
}

/* @media screen and (max-width: 320px) {
  .popupDialogCard.sm {
    margin-top: 0rem;
    overflow-x: hidden;
    max-height: 350px;
    background-color: #f7f6f0;
    border: none;
  }
} */
</style>

<style>
.popupDialog {
  width: 500px !important;
  /* min-width: 500px; */
  height: auto !important;
  /* max-height: 580px; */
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
</style>
