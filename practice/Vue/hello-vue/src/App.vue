<template>
  <div id="app">
    <v-app>

      
      
      <!-- <v-navigation-drawer
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
      </v-navigation-drawer> -->
    
      <v-app-bar
        class="appbarTest"
        :class="$mq"
        height="100"
        app
        color="#ffffff"
      >
      
      
          <v-row class="align-center" no-gutters>
              <!-- <v-app-bar-nav-icon 
                class="headerIcon" 
                @click="drawerChecker()"
                default
              >
            

              </v-app-bar-nav-icon> -->
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
            <v-spacer></v-spacer>
            <!-- <v-btn
              color="#ffffff"
              elevation="0"
              style="height: 80px; width: 80px;"
              @click="go_Login()"
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
            </v-btn> -->
          </v-row>
      </v-app-bar>

      <v-main class="mainBG" >
        <v-container >
          <Compressor />
          <!-- <NewDiallogs /> -->
          <v-col 
            width="300" 
            height="300" 
            style="background-color:red;"
          >
            <input ref="input" />
          </v-col>

          <i class="icon ion-md-create"> </i>
          <Test />
          <!-- <i class="ion-md-create"> </i> -->
          <!-- <v-overlay v-if="drawer" /> -->

          <v-btn @click="countTest[0]++">
            올라가: {{ countTest[0] }}
          </v-btn>
          <v-btn @click="countTest[1]++">
            올라가2: {{ countTest[1] }}
          </v-btn>
          <v-btn @click="countTest[2]++">
            올라가3: {{ countTest[2] }}
          </v-btn>

            <v-row class="justify-center align-center  mt-10 mb-10">
              <v-row class="justify-center align-center" v-for="(el, index) in products" :key="index">
                <v-row class="justify-center align-center mt-5 mb-5">
                  {{ el }}   
                </v-row>
                신고수: {{ reportCount[index] }} &nbsp;
                <v-btn width="100" height="50" @click="reportCounter(index)"> 허위매물신고버튼 </v-btn>
              </v-row>
            </v-row>
          <router-view />
        </v-container>
      </v-main>

      <v-footer @click="turnoffChecker()">
        testtes
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import NewDiallogs from "../src/components/NewDiallogs.vue";
import { EventBus } from "./components/EventBus.js";
import Compressor from "../src/components/Compressor.vue";
import Test from "../src/components/Test.vue";

export default {
  name: 'App',
  data: () => ({
    message: 're-rendering!!!',
    drawer: null,
    items: [
      { title: '홈', icon: 'mdi-view-dashboard' },
      { title: '자가 검진', icon: 'mdi-image' },
      { title: '마음소통창구', icon: 'mdi-help-box' },
      { title: '힐링콘텐츠', icon: 'mdi-help-box' },
      { title: '사용후기', icon: 'mdi-help-box' },
      { title: '협업기관', icon: 'mdi-help-box' },
    ],
    right: null,
    products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    price: ["100만원", "50만원", "200만원"],
    reportCount: [0,0,0],
    countTest: [0,0,0],
  }),
  created() {
    console.log(EventBus); 
    EventBus.$on('triggerTest', function(value) {
      console.log("received value: ", value);
    })
  }, 
  // renderTriggered() {
  //   console.log(this.countTest);
  // },
  components: {
    // NewDiallogs,
    Compressor,
    Test,
  },

  methods: {
    reportCounter(index) {
      // const newArr = Object.assign([], this.reportCount);
      const newArr = this.reportCount.slice();
      newArr[index]++;
      this.reportCount = newArr;
      // this.reportCount[index] += 1;
      console.log(this.reportCount);
    },
    focusInput() {
      this.$refs.input.focus()
    },
    go_home() {
      console.log("go home plz");
      if(this.$router.currentRoute.path === "/") {
        this.$router.go(this.$router.currentRoute);
      } else {
        this.$router.push("/");
      }

      // this.$router.push("/");
    }, 

    go_Login() {
      console.log("go loginpage plz");
      // console.log(this.$router.currentRoute.path)
      if(this.$router.currentRoute.path === "/login") {
         this.$router.go(this.$router.currentRoute);
      } else {
        this.$router.replace("/login");
      }
    },

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
      // if(this.drawer) {
      //   this.drawer = !this.drawer;
      // }
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
    },
  },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Gugi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
 
  ::-webkit-scrollbar { 
    width: 7px; /*스크롤바의 너비*/ 
    height: 5px /* 가로 스크롤 수정 */
  } 

  ::-webkit-scrollbar-thumb { 
    background-color: rgb(243, 94, 119); /*스크롤바의 색상*/ 
  } 

  ::-webkit-scrollbar-track { 
    background-color: white; /*스크롤바 트랙 색상*/ 
  }

  .hi{
    margin-left: 2.5rem;
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

  div {
    font-family: 'Poor Story', cursive;
  }

  .menuList {
    font-family: 'Nanum Pen Script', cursive;
  }

  .colcol {
    margin: 1rem;
  }

  .colcol img {
    display: block;
    margin: 0px auto;
  }

  .colcol:hover {
    cursor: pointer;
  }

  .mainBG {
    /* background: linear-gradient(#f8bbd0, #ff6090);; */
  }

  .appbarTest.sm {
    background-color: red;
  }

</style>
