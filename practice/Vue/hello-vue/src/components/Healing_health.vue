<template>
  <v-col
    class="d-flex flex-column justify-center align-center bg_set"
    style="padding: 0px;"
    :class="$mq"
  >
    <v-row
      v-if="$mq !== 'sm'"
      style="width: 100%; padding-top: 10px; padding-bottom: 50px;"
    >
      <v-col
        v-for="(el, idx) in button_item_list"
        :key="idx"
        style="width: 100%; padding: 0 15px 0 0; display: flex; justify-content: flex-end;"
      >
        <v-btn
          :style="
            button_checker[idx]
              ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
              : 'background-color: rgba(255,255,255,255)'
          "
          x-large
          class="select_type_1"
          @click="select_type(idx)"
        >
          {{ el }}
        </v-btn>
      </v-col>
    </v-row>

    <v-col
      v-if="$mq === 'sm'"
      style="width: 100%; padding-top: 10px; padding-bottom: 50px;"
    >
      <v-row>
        <v-col style="width: 100%; padding: 0 15px 0 0; ">
          <v-btn
            :style="
              button_checker[0]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(0)"
          >
            {{ button_item_list[0] }}
          </v-btn>
        </v-col>
        <v-col style="width: 100%; padding: 0 15px 0 0; ">
          <v-btn
            :style="
              button_checker[1]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(1)"
          >
            {{ button_item_list[1] }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col style="width: 100%; padding: 0 15px 0 0; ">
          <v-btn
            :style="
              button_checker[2]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(2)"
          >
            {{ button_item_list[2] }}
          </v-btn>
        </v-col>
        <v-col style="width: 100%; padding: 0 15px 0 0; ">
          <v-btn
            :style="
              button_checker[3]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(3)"
          >
            {{ button_item_list[3] }}
          </v-btn>
        </v-col>
      </v-row>

      <!-- <v-row v-for="(el, idx) in button_item_list" :key="idx">
        <v-col
          v-if="idx === 0 || idx === 1"
          style="width: 100%; padding: 0 15px 0 0; "
        >
          <v-btn
            :style="
              button_checker[idx]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(idx)"
          >
            {{ el }}
          </v-btn>
        </v-col>

        <v-col style="width: 100%; padding: 0 15px 0 0;">
          <v-btn
            v-if="idx === 2 || idx === 3"
            :style="
              button_checker[idx]
                ? 'background-color: rgba(118,93,88,255); color: rgba(255,255,255,255)'
                : 'background-color: rgba(255,255,255,255)'
            "
            x-large
            class="select_type_1"
            @click="select_type(idx)"
          >
            {{ el }}
          </v-btn>
        </v-col>
      </v-row> -->
    </v-col>

    <v-col v-if="button_checker[0]">
      <div v-if="$mq !== 'sm'">
        <v-row v-for="(el, idx) in img_arr" :key="idx" class="justify-center">
          <img :src="el" class="pb-5" style="width: 1000px; height: auto;" />
          <div
            v-if="idx > 1"
            class="link_button"
            :class="[
              idx === 2 ? 'healing_link_1' : '',
              idx === 3 ? 'healing_link_2' : '',
              idx === 4 ? 'healing_link_3' : '',
              idx === 5 ? 'healing_link_4' : '',
              idx === 6 ? 'healing_link_5' : ''
            ]"
            @click="linked_page(idx)"
          ></div>
        </v-row>
      </div>
      <v-row
        v-else
        class="justify-center"
        v-for="(el, idx) in m_img_arr"
        :key="idx"
      >
        <img :src="el" class="pb-10" style="width: 100%; height: auto;" />
        <div
          v-if="idx > 1"
          class="link_button"
          :class="[
            idx === 2 ? 'healing_link_1' : '',
            idx === 3 ? 'healing_link_2' : '',
            idx === 4 ? 'healing_link_3' : '',
            idx === 5 ? 'healing_link_4' : '',
            idx === 6 ? 'healing_link_5' : ''
          ]"
          @click="linked_page(idx)"
        ></div>
      </v-row>
    </v-col>

    <div v-if="button_checker[1]">
      <div v-if="$mq !== 'sm'">
        <v-row
          v-for="(el, idx) in child_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-5" style="width: 1000px; height: auto;" />
          <div
            class="link_button"
            :class="[
              idx === 0 ? 'healing_link_child_1' : '',
              idx === 1 ? 'healing_link_child_2' : '',
              idx === 2 ? 'healing_link_child_3' : '',
              idx === 3 ? 'healing_link_child_4' : ''
            ]"
            @click="linked_page(idx + 7)"
          ></div>
        </v-row>
      </div>
      <div v-if="$mq === 'sm'">
        <v-row
          v-for="(el, idx) in m_child_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-10" style="width: 100%; height: auto;" />
          <div
            class="link_button"
            :class="[
              idx === 0 ? 'healing_link_child_1' : '',
              idx === 1 ? 'healing_link_child_2' : '',
              idx === 2 ? 'healing_link_child_3' : '',
              idx === 3 ? 'healing_link_child_4' : ''
            ]"
            @click="linked_page(idx + 7)"
          ></div>
        </v-row>
      </div>
    </div>

    <div v-if="button_checker[2]">
      <div v-if="$mq !== 'sm'">
        <v-row
          v-for="(el, idx) in elder_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-5" style="width: 1000px; height: auto;" />
          <div
            v-if="idx === 2"
            class="link_button healing_link_elder_1"
            @click="linked_page(idx + 9)"
          ></div>
        </v-row>
      </div>
      <div v-if="$mq === 'sm'">
        <v-row
          v-for="(el, idx) in m_elder_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-10" style="width: 100%; height: auto;" />
          <div
            v-if="idx === 2"
            class="link_button healing_link_elder_1"
            @click="linked_page(idx + 9)"
          ></div>
        </v-row>
      </div>
    </div>

    <div v-if="button_checker[3]">
      <div v-if="$mq !== 'sm'">
        <v-row
          v-for="(el, idx) in disabled_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-5" style="width: 1000px; height: auto;" />
          <div
            v-if="idx === 0"
            class="link_button healing_link_disabled_1"
            @click="linked_page(idx + 12)"
          ></div>
        </v-row>
      </div>
      <div v-if="$mq === 'sm'">
        <v-row
          v-for="(el, idx) in m_disabled_img_arr"
          :key="idx"
          class="justify-center"
        >
          <img :src="el" class="pb-10" style="width: 100%; height: auto;" />
          <div
            v-if="idx === 0"
            class="link_button healing_link_disabled_1"
            @click="linked_page(idx + 12)"
          ></div>
        </v-row>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data: function() {
    return {
      button_item_list: ["일반구민", "아동, 청소년", "노년", "장애인"],
      button_checker: [true, false, false, false],
      img_arr: [
        require("@/assets/healing_health/healing_health_normal01.png"),
        require("@/assets/healing_health/healing_health_normal02.png"),
        require("@/assets/healing_health/healing_health_normal03.png"),
        require("@/assets/healing_health/healing_health_normal04.png"),
        require("@/assets/healing_health/healing_health_normal05.png"),
        require("@/assets/healing_health/healing_health_normal06.png"),
        require("@/assets/healing_health/healing_health_normal07.png")
      ],
      m_img_arr: [
        require("@/assets/healing_health/m_healing_health_normal01.png"),
        require("@/assets/healing_health/m_healing_health_normal02.png"),
        require("@/assets/healing_health/m_healing_health_normal03.png"),
        require("@/assets/healing_health/m_healing_health_normal04.png"),
        require("@/assets/healing_health/m_healing_health_normal05.png"),
        require("@/assets/healing_health/m_healing_health_normal06.png"),
        require("@/assets/healing_health/m_healing_health_normal07.png")
      ],
      child_img_arr: [
        require("@/assets/healing_health/healing_health_child_1.png"),
        require("@/assets/healing_health/healing_health_child_2.png"),
        require("@/assets/healing_health/healing_health_child_3.png"),
        require("@/assets/healing_health/healing_health_child_4.png")
      ],
      m_child_img_arr: [
        require("@/assets/healing_health/m_healing_health_child_1.png"),
        require("@/assets/healing_health/m_healing_health_child_2.png"),
        require("@/assets/healing_health/m_healing_health_child_3.png"),
        require("@/assets/healing_health/m_healing_health_child_4.png")
      ],
      elder_img_arr: [
        require("@/assets/healing_health/healing_health_elder_1.png"),
        require("@/assets/healing_health/healing_health_elder_2.png"),
        require("@/assets/healing_health/healing_health_elder_3.png")
      ],
      m_elder_img_arr: [
        require("@/assets/healing_health/m_healing_health_elder_1.png"),
        require("@/assets/healing_health/m_healing_health_elder_2.png"),
        require("@/assets/healing_health/m_healing_health_elder_3.png")
      ],
      disabled_img_arr: [
        require("@/assets/healing_health/healing_health_disabled_1.png"),
        require("@/assets/healing_health/healing_health_disabled_2.png"),
        require("@/assets/healing_health/healing_health_disabled_3.png")
      ],
      m_disabled_img_arr: [
        require("@/assets/healing_health/m_healing_health_disabled_1.png"),
        require("@/assets/healing_health/m_healing_health_disabled_2.png"),
        require("@/assets/healing_health/m_healing_health_disabled_3.png")
      ]
    };
  },
  methods: {
    select_type(num) {
      for (let i = 0; i < this.button_checker.length; i++) {
        if (num === i) {
          this.$set(this.button_checker, i, true);
        } else {
          this.$set(this.button_checker, i, false);
        }
      }
    },
    linked_page(num) {
      if (num === 2) {
        window.open("https://gangnam1.org");
      } else if (num === 3) {
        window.open("https://life.gangnam.go.kr");
      } else if (num === 4) {
        window.open(
          "https://www.gangnam.go.kr/board/B_000001/1073909/view.do?mid=ID05_040101"
        );
      } else if (num === 5) {
        window.open("https://www.gangnam.go.kr/office/gngfamily/main.do");
      } else if (num === 6) {
        window.open("https://www.gangnam.go.kr/office/smilegn/main.do");
      } else if (num === 7) {
        window.open("http://www.gangnamyc.or.kr/");
      } else if (num === 8) {
        window.open("https://www.dreamstart.go.kr/gangnam/");
      } else if (num === 9) {
        window.open("https://www.gangnam.go.kr/office/psygn/main.do");
      } else if (num === 10) {
        window.open("https://app.gather.town/app/1cVMZBAoMzo5TXT5/gnyc");
      } else if (num === 11) {
        window.open(
          "https://www.gangnam.go.kr/board/cardnews/695/view.do?mid=ID01_0306"
        );
      } else if (num === 12) {
        window.open("https://www.gangnam.go.kr/office/gnsewoom");
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/common";
.bg_set {
  .select_type_1 {
    // display: flex;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 100%;
    padding: 0;
    font-size: 20px;
    border-radius: 10px !important;
  }

  .link_button {
    cursor: pointer;
    position: absolute;
    // background-color: rgba(0, 0, 255, 0.6); //TODO: test
    width: 200px;
    height: 70px;
    left: 0;
  }

  .healing_link_1 {
    top: 38.1%;
    left: 41%;
  }

  .healing_link_2 {
    top: 51.5%;
    left: 18%;
  }
  .healing_link_3 {
    top: 67.3%;
    left: 43%;
  }
  .healing_link_4 {
    top: 81.2%;
    left: 17%;
  }
  .healing_link_5 {
    top: 96.5%;
    left: 43.5%;
  }

  .healing_link_child_1 {
    top: 25.5%;
    left: 41.5%;
  }

  .healing_link_child_2 {
    top: 49%;
    left: 17.5%;
  }

  .healing_link_child_3 {
    top: 74.5%;
    left: 43%;
  }

  .healing_link_child_4 {
    top: 94.5%;
    left: 17%;
  }

  .healing_link_elder_1 {
    top: 91.8%;
    left: 46%;
  }

  .healing_link_disabled_1 {
    top: 36%;
    left: 44%;
  }
}

.sm {
  .select_type_1 {
    // display: flex;
    margin-top: 20px;
    margin-bottom: 0px;
    width: 100%;
    padding: 0;
    font-size: 20px;
    border-radius: 10px !important;
  }

  .link_button {
    cursor: pointer;
    position: absolute;
    width: 32vw;
    height: 11vw;
    left: 0;
  }

  .healing_link_1 {
    top: 41.2%;
    left: 5%;
  }
  .healing_link_2 {
    top: 54.3%;
    left: 5%;
  }
  .healing_link_3 {
    top: 68.4%;
    left: 5%;
  }
  .healing_link_4 {
    top: 82.2%;
    left: 5%;
  }
  .healing_link_5 {
    top: 96.9%;
    left: 5%;
  }

  .healing_link_child_1 {
    top: 28%;
    left: 4%;
  }

  .healing_link_child_2 {
    top: 51%;
    left: 4%;
  }

  .healing_link_child_3 {
    top: 75.1%;
    left: 4%;
  }

  .healing_link_child_4 {
    top: 94.9%;
    left: 4%;
  }

  .healing_link_elder_1 {
    top: 92.8%;
    left: 3.8%;
  }

  .healing_link_disabled_1 {
    top: 42%;
    left: 3.5%;
  }
}
</style>
