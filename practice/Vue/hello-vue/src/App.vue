<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        width= "500"
        v-model="drawer"
        app
        @click="turnoffChecker()"
      >
        <div class="drawerMenu">
          <img class="coddingCat" width="200" height="200" src="@/assets/coding_cat.gif" />
          
           <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content style="">
                <v-list-item-title style="font-size: 2.5rem; padding: 2rem" class="menuList">{{ item.title }}</v-list-item-title> 
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>

      <v-app-bar
        class="appbarTest"
        height="100"
        app
        color="#ffffff"
      >
          <v-row class="align-center" no-gutters>
            
              <v-app-bar-nav-icon class="headerIcon" @click="drawerChecker()" src="@/assets/menu_x.png"> 
                <img width="55" src="@/assets/menu_x.png" />
              </v-app-bar-nav-icon>
            
            <v-btn
              color="#ffffff"
              elevation="0"
              style="width: 130px; height: 80px; margin-right: 30px;"
              v-on:click="go_home()"
              class="hi"
            >
              <img width="120" aspect-ratio="1" src="@/assets/logo_x.png" />
            </v-btn>
              <v-spacer></v-spacer>
            <img
              width="210"
              
              src="@/assets/ci_x.png"
              v-on:click="go_home()"
            />
            <v-spacer></v-spacer>

            <v-btn
              color="#ffffff"
              elevation="0"
              style="height: 80px; width: 80px;"
            >
              <img
                width="55"
                src="@/assets/login_x.png"
              />
            </v-btn>
            <v-btn
              color="#ffffff"
              elevation="0"
              style="height: 80px; width: 80px;"
              v-on:click="sideMenuToggle()"
            >
              <img width="55" src="@/assets/menu_x.png" />
            </v-btn>
          </v-row>
      </v-app-bar>

      <v-main class="mainBG" >
        <v-container @click="turnoffChecker()">
          <v-overlay v-if="drawer">
          </v-overlay>
          
          <v-row align="center" justify="center">
            <v-img
              src="@/assets/icon_character_icheon_x.png"
              max-width="265"
              max-height="102"
              style="margin-top: 95px; margin-left:316px;"
              class="animation_big"
              contain
            />
            <v-img src="@/assets/click_icon_x.png" 
              max-width="222"
              max-height="242"
              style="margin-left: 40px; margin-top: 25px;"
            />

            <v-img
              src="@/assets/main_title_x.png"
              max-width="500"
              max-height="102" 
            />
          </v-row>


          <!-- <v-row>
            <v-col
              v-for="n in 5"
              :key="n"
              cols="0"
            >
              <v-card height="200">
                TEST TEST TEST
              </v-card>
            </v-col>

          
          </v-row> 
          
          객체안에 src이미지 태그랑 연동했으면 모든 태그를연동할수 있겠다 !!!!
          -->
          
          <v-row class="rowTest" style="flex-wrap: nowrap">
            <v-col class="colcol col1"> 
              <v-card class="cardEffect" height="200px" color="#fff9c4">
                <div style="text-align:center; font-size:1.5rem; padding-top:40px">
                  서비스 소개
                </div>
                <img src="@/assets/gif_01_img.png" style="width: 150px; heigth: 150px; "/>
              </v-card>
            </v-col>
            <v-col class="colcol col2"> 
              <v-card height="200px" color="#fff9c4">
                <div style="text-align:center; font-size:1.5rem; padding-top:40px">
                  자가 검진
                </div>
                <img src="@/assets/gif_02_img.png" style="width: 150px; heigth: 150px;"/>
              </v-card>
            </v-col>
            <v-col class="colcol col3">
              <v-card height="200px" color="#fff9c4">
                <div style="text-align:center; font-size:1.5rem; padding-top:40px">
                  마음소통창구
                </div>
                <img src="@/assets/gif_03_img.png" style="width: 150px; heigth: 150px;"/>
              </v-card>
            </v-col>
            <v-col class="colcol col4"> 
              <v-card height="200px" color="#fff9c4">
                <div style="text-align:center; font-size:1.5rem; padding-top:40px">
                  힐링콘텐츠 보기
                </div>
                <img src="@/assets/gif_04_img.png" style="width: 150px; heigth: 150px;"/>
              </v-card>
            </v-col>
            <v-col class="colcol col5"> 
              <v-card height="200px" color="#fff9c4">
                <div style="text-align:center; font-size:1.5rem; padding-top:40px">
                  사용후기
                </div>
                <img src="@/assets/gif_06_img.png" style="width: 150px; heigth: 150px;"/>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>


      <v-footer @click="turnoffChecker()">
        testtes
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { EventBus } from "./components/EventBus.js";
export default {
  name: 'App',
  data: () => ({
    message: 're-rendering!!!',
    drawer: null,
    turnoff: null,
    items: [
      { title: '홈', icon: 'mdi-view-dashboard' },
      { title: '자가 검진', icon: 'mdi-image' },
      { title: '마음소통창구', icon: 'mdi-help-box' },
      { title: '힐링콘텐츠', icon: 'mdi-help-box' },
      { title: '사용후기', icon: 'mdi-help-box' },
      { title: '협업기관', icon: 'mdi-help-box' },
    ],
    right: null,
    
  }),
  created() {
    console.log(EventBus); 
    EventBus.$on('triggerTest', function(value) {
      console.log("received value: ", value);
    })
  }, 
  components: {

  },
  methods: { 
    drawerChecker() {
        // this.turnoff = !this.turnoff;
      if(!this.drawer) {
        this.drawer = !this.drawer;
        console.log("drawer가 열렸습니다.")
      } else {
        this.drawer = !this.drawer;
      }
      
    },
    turnoffChecker() {
      if(this.drawer) {
        this.drawer = !this.drawer;
      }
    },
    printText() {
      console.log("received an event !");
      // alert("mini test");
    },
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  },

  computed: {
    count() {
      return this.$store.state.count;
      // return console.log(this.$store);
      // return this.$store.state.count;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Gugi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
  body {
    /* margin: 0rem; */
  }

  /* .v-overlay--active .theme--dark {
    opacity: 0.45 !important; 
  } */

  .v-app {
    justify-content: center;
  }

  .appbarTest {
    /* height: 10px; */
  }

  .headerRow {
    /* background-color: rgb(226, 43, 98); */
  } 

  .header_dot {
    /* margin-top: 48px;  */
  }

  .hi{
    margin-left: 2.5rem;
  }

  .headerIcon {
    /* position: relative; */
    /* margin-left: 0.5rem; */
    
    /* color: red; */
    
    /* background-color: lightgray; */
  }

  .cardEffect {
    background-color: lightgray;
  }

  .cardEffect:hover {
    background: linear-gradient(0deg, #FFE7D0, #FFBE7E);
  }

  .coddingCat {
    margin-top: 5rem;
    width: 100%;
    margin-bottom: 2rem;
    object-fit: cover;
  }

  .v-main {
  }

  div {
    font-family: 'Poor Story', cursive;
  }

  .menuList {
    font-family: 'Nanum Pen Script', cursive;
  }

  .colcol {
    /* background-color: red; */
    margin: 1rem;
    /* background-color: #f3e5f5; */

    /* margin: 0px auto; */
  }

  .colcol img {
    display: block;
    margin: 0px auto;
    /* align-content: center; */
  }

  .rowTest {
    /* margin: 0 4rem 0 4rem; */
    /* display: flex;
    flex-direction: row; */
    /* margin-left: 3rem;
    margin-right: 3rem; */
  }

  .colcol:hover {
    cursor: pointer;
  }


  .col2:hover {

  }


  .mainBG {
    background: linear-gradient(15deg, #f8bbd0, #ffc1e3);;
  }

</style>
