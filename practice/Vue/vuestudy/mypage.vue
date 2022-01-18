<template>
  <ion-content fullscreen scroll-y="true">
    <v-main class="fullwidth fullheight bg_card" :class="$mq">
      <v-card
        flat
        tile
        class="mx-auto align-self-start text-center pa-8"
        min-width="320"
        max-width="1200"
        color="transparent"
        style="margin-bottom:100px;"
      >
        <v-row justify="center" class="title_root">
          <v-card class="title_root_css pb-15">
            <v-row justify="center" class="mypage_title_1">
              <v-col cols="12" class="main_title_1_text">
                {{ $ml.get("mypage_title") }}
              </v-col>
              <v-row
                class="d-flex justify-center align-end imgPosition"
                style="margin-top:-12px;"
              >
                <v-img
                  src="@/assets/gif_02_img.png"
                  class="main_title_1_img"
                  cover
                ></v-img>
              </v-row>
              <v-btn
                elevation="0"
                class="main_title_back"
                :class="$mq"
                icon
                v-on:click="$router.go(-1)"
              >
              </v-btn>
            </v-row>
            <div style="display: flex;">
              <div style="flex: 1;"></div>
              <div style="flex: 4;">
                <v-row
                  class="justify-center"
                  style="display: flex; flex-direction: column;"
                >
                  <div class="mypage_contents_position">
                    <div class="mypage_contents_info">이름</div>
                    <div class="mypage_input_box">{{ this.user_name }}</div>
                  </div>

                  <div class="mypage_contents_position">
                    <div class="mypage_contents_info">
                      휴대 전화번호
                    </div>
                    <div class="mypage_input_box">{{ this.user_phone }}</div>
                  </div>

                  <div v-if="$mq !== 'sm'" class="divide_line"></div>

                  <div
                    v-if="$mq !== 'sm'"
                    class="mypage_contents_position pt-10"
                  >
                    <div class="mypage_contents_info">
                      상담건수
                    </div>
                    <div class="mypage_input_box">
                      <span
                        class="counsel_count_link"
                        @click="move_to_counsel_list()"
                      >
                        {{ this.user_counsel_count }} 건
                      </span>
                    </div>
                  </div>

                  <div v-else class="mypage_contents_position">
                    <div class="mypage_contents_info">
                      상담건수
                    </div>
                    <div class="mypage_input_box">
                      <span
                        class="counsel_count_link"
                        @click="move_to_counsel_list()"
                      >
                        {{ this.user_counsel_count }} 건
                      </span>
                    </div>
                  </div>

                  <div class="mypage_contents_position">
                    <div class="mypage_contents_info">
                      신청한 키트
                    </div>
                    <div class="mypage_input_box">
                      {{ this.user_apply_kit }}
                    </div>
                  </div>

                  <div class="mypage_contents_position">
                    <div class="mypage_contents_info">
                      발송주소
                    </div>
                    <div class="mypage_input_box">
                      {{ this.user_apply_address }}
                    </div>
                  </div>

                  <div
                    class="mypage_contents_position"
                    style="margin-bottom: 20px;"
                  >
                    <div class="mypage_contents_info">
                      발송여부
                    </div>
                    <div class="mypage_input_box">
                      {{ this.user_kit_shipping_check }}
                    </div>
                  </div>

                  <div class="display: flex; flex-direction: column;">
                    <div class="mypage_contents_info">
                      내가본 컨텐츠
                    </div>
                    <v-row>
                      <v-col
                        class="my_page_healing_contents_thumbnail"
                        v-for="(el, index) in $mq !== 'sm'
                          ? user_healing_contents_list
                          : user_healing_m_contents_list"
                        :key="index"
                      >
                        <v-btn
                          @click="move_to_healing_contents()"
                          class="icon"
                          v-bind:style="{
                            'background-image': 'url(' + el.Thumbnail_url + ')'
                          }"
                        >
                          <div class="icon_skin">
                            <span
                              class="icon_text"
                              :class="$mq"
                              v-html="el.title"
                            ></span>
                          </div>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </v-row>
              </div>
              <div style="flex: 1;"></div>
            </div>
          </v-card>
        </v-row>
      </v-card>
    </v-main>
  </ion-content>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user_name: "",
      user_phone: "",
      user_counsel_count: "",
      user_apply_kit: "",
      user_apply_address: "",
      user_kit_shipping_check: "",
      user_contents: "",
      user_healing_contents_list: [],
      user_healing_m_contents_list: [],
      user_healing_overlay: []
    };
  },
  created() {
    axios({
      method: "post",
      url: "/api_new/api_mypage.php",
      headers: { Authorization: localStorage.getItem("p_cookie") },
      data: {}
    }).then(response => {
      console.log(response.data);
      this.user_validation = true;
      this.user_name = response.data.name;
      this.user_phone = response.data.tel;
      this.user_counsel_count = response.data.counseling_count;
      this.user_apply_kit = response.data.kit_name;
      this.user_apply_address = response.data.address;
      this.user_kit_shipping_check = response.data.kit_send;
      this.user_healing_contents_list = response.data.my_content_list.slice(
        0,
        4
      );
      this.user_healing_m_contents_list = response.data.my_content_list.slice(
        0,
        3
      );
    });
  },
  methods: {
    move_to_healing_contents() {
      window.open("/#/contents?type=2", "_blank");
    },
    move_to_counsel_list() {
      window.open("/#/counsel_list", "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/common";
@import "src/assets/css/swiper-bundle.min";

* {
  user-select: none;
}

.mypage_title_1 {
  height: 186px;
  background: rgba(177, 200, 206, 255);
  margin: 0px !important;
  border: 1px solid $color-white;
}

.mypage_contents_info {
  color: black;
  font-size: 20px;
  margin-right: 20px;
  flex: 1;
  text-align: left;
  padding: 10px;
}

.mypage_input_box {
  border: 1px solid gray;
  border-radius: 20px;
  width: 350px;
  height: 50px;
  flex: 2;
  text-align: left;
  padding: 10px 15px;
  background-color: white;
}

.mypage_contents_position {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.divide_line {
  position: absolute;
  border-top: solid 2px rgba(177, 200, 206, 255);
  width: 95%;
  left: 2.5%;
  top: 37%;
  margin-top: 0px;
}

.counsel_count_link {
  text-decoration: underline;
  cursor: pointer;
}

.title_root_css {
  background-color: #f0f0f0 !important;
}

.my_page_healing_contents_thumbnail {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  width: 25%;
  height: 100%;
  margin: 20px;
  padding: 0px;
  overflow: hidden;
  // flex: 1;
}

.my_page_healing_contents_thumbnail_image {
  background-size: contain;
  border-radius: 50%;
}

.icon {
  width: 100%;
  height: 100% !important;
  padding: 0px !important;
  // margin: 12px 0px;
  border-radius: 50%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: $ft-color-contents-icon-text;
}

.icon_skin {
  width: 150px;
  height: 150px !important;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  display: table;
}

.icon_text {
  width: 160px;
  white-space: break-spaces;
  height: 44px;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;

  // font-size: 3vw;
  text-shadow: 0px 0px 3px $ft-color-shadow;
}

// .icon_text.sm {
//   // font: normal normal bold 2vw/3vw !important;
//   font-size: 2.5vw;
// }

//! 모바일
.sm.bg_card {
  .mypage_contents_info {
    color: black;
    font-size: 3.2vw;
    line-height: 3vw;
    // margin-right: 2vw;
    flex: 1;
    text-align: left;
    padding: 2.5vw;
    margin-top: 10px;
  }

  .mypage_input_box {
    border: 1px solid gray;
    border-radius: 20px;
    flex: 2;
    text-align: left;
    padding: 18px 15px;
    background-color: white;
    margin-right: 30px;
    font-size: 3.2vw;
    // line-height: 3vw;
    overflow: hidden;
    width: 60vw;
    height: auto;
  }

  .mypage_contents_position {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .my_page_healing_contents_thumbnail {
    border-radius: 50%;
    width: 20%;
    height: 100%;
    margin: 10px;
    padding: 0px;
  }

  .main_title_back {
    width: 5vw;
    height: 5vw;
    position: absolute;
    left: 5vw;
    top: 5vw;
  }

  .icon {
    width: 23vw;
    height: 23vw !important;
    border-radius: 13vw;
    margin: 2vw 0px;
    // font: normal normal bold 3vw/3vw !important;
  }

  .icon_skin {
    width: 23vw;
    height: 23vw !important;
    border-radius: 13vw;
    margin: 2vw 0px;
  }

  .icon_text {
    width: 23vw;
    height: 5vw;
    // font: normal normal bold 2vw/3vw !important;
    font-size: 3.5vw;
  }
}
</style>
