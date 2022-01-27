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
        height="70"
        app
        color="#ffffff"
      >
        <v-row class="align-center" no-gutters>
          <v-btn
            color="#ffffff"
            elevation="0"
            style="margin-left: 100px; width: 130px; height: 70px; margin-right: 30px;"
            v-on:click="go_home()"
            class="logo_btn"
          >
            CaptainJack
            <!-- <img width="120" aspect-ratio="1" src="@/assets/logo_x.png" /> -->
          </v-btn>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-row>
      </v-app-bar>

      <v-main class="mainBG" style="margin-left: 100px; margin-right: 100px;">
        <v-container style="margin-top: 30px;">
          <!-- <Compressor /> -->
          <!-- <NewDiallogs /> -->
          <!-- <i class="icon ion-md-create"> </i> -->
          <!-- <Test /> -->
          <!-- <diallogtest /> -->
          <router-view />

          <v-btn @click="get_title()"> api call </v-btn>
          <div> 
            display value here : {{ title }} 
          </div>

          <v-spacer></v-spacer>
          <v-btn @click="addNewVideoToLocalStorage()"> api call </v-btn>
          <div> 
            여기에 값이 표시 됨
           {{ new_title }} 
          </div>

          <!-- <v-select
            cols="12"
            sm="3"
            class=""
            @change="setD"
            :items="products"
            outlined
            label="Select Category"
          ></v-select> -->

          <!-- <input v-if="checked" class="check" type="checkbox" :checked="true" v-model="checked"/> -->

          <!-- <div v-for="(el, index) in Object.values(people[0])" :key="index">
            <div v-if="typeof(el) === 'string' ">
              <div> {{ el }} </div>
            </div>
            <div v-else >
              <div v-if="init < newIndex">
                {{ el[index].text }}
              </div>
            </div>
          </div> -->

           <div id="mySidenav" class="sidenav" style="background-color: black;">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                <p style=color:white>TESEST
                TEST TEST TEST TEST</p>
            
            </div>

            <span @click="openNav()"><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" width="40px" style="padding-top: 40px; padding-left: 40px;"></span>

            <div id="main">
          </div>



        </v-container>
      </v-main>

      <v-footer @click="turnoffChecker()">
        footer
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import NewDiallogs from "../src/components/NewDiallogs.vue";
import { EventBus } from "./components/EventBus.js";
// import Compressor from "../src/components/Compressor.vue";
// import Test from "../src/components/Test.vue";
// import diallogtest from "./components/diallogtest.vue";

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
    title: "",
    new_title: "",
  }),
  created() {
    // console.log(EventBus); 
    EventBus.$on('triggerTest', function(value) {
      console.log("received value: ", value);
    })
  }, 
  // renderTriggered() {
  //   console.log(this.countTest);
  // },
  components: {
    // NewDiallogs,
    // Compressor,
    // Test,
    // diallogtest,
  },

  methods: {
    testfunc() {
      // this.people[0].messaggi[this.newIndex].text;
      // this.newIndex++;
    },
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
    },

    // addNewVideoToLocalStorage() {
    //   let id = getIdFromURL(this.videosUrl[0].url);
    //   let title = await getYoutubeTitle(id, async (e, t) => await t);
    // }

    async get_title() {
      var getYoutubeTitle = require('get-youtube-title');
      let id = 'QR1jRM4XTyc';
      await getYoutubeTitle(id, (e, t) => {
        return this.title = t
      })
      console.log(this.title);
    },

    async addNewVideoToLocalStorage() {
      var getYoutubeTitle = require('get-youtube-title');
      let id = 'QR1jRM4XTyc';
      this.new_title = await getYoutubeTitle(id, async (e, t) => await t);
      console.log("checked: " + this.new_title);
    },
    

    /* Set the width of the side navigation to 250px */
    openNav() {
      document.getElementById("mySidenav").style.width = "400px";
    },

    /* Set the width of the side navigation to 0 */
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
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

  .logo_btn{
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
    font-family: Georgia, serif;
    /* font-family: 'Poor Story', cursive; */
  }

  .menuList {
    /* font-family: 'Nanum Pen Script', cursive; */
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


  /* The side navigation menu */
  .sidenav {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #111; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* The navigation menu links */
  .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      font-family: Gotham;
      color: #818181;
      display: block;
      transition: 0.3s
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover, .offcanvas a:focus{
      color: #f1f1f1;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
      transition: margin-left .5s;
      padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
  }

</style>
