<template>
  <div style="">
    <div style="font-family: serif; color: white; text-align: center; font-size: 50px; margin-bottom: 50px;">
      Stack
    </div>
    <!-- 클릭하면 진행한 프로젝트 나오게 하기? -->
    <v-row style="background-color: black; height: 100px;">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 0 : 12"
        >
            <v-col class="main_stack_logo">
              <v-img src="@/assets/javascript.png" ></v-img>
            </v-col>
        </v-card>
      </v-hover>
      <v-col class="main_stack_logo">
        <v-img src="@/assets/javascript.png" ></v-img>
      </v-col>
      <v-col class="main_stack_logo">
        <v-img src="@/assets/vue.png" ></v-img>
      </v-col>
      <v-col class="main_stack_logo">
        <v-img src="@/assets/react.png" ></v-img>
      </v-col>
      <v-col class="main_stack_logo">
        <v-img src="@/assets/swift.png" ></v-img>
      </v-col>
      <v-col class="main_stack_logo">
        <v-img src="@/assets/typescript.png" ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import $ from 'jquery';

// $('a.stop-video').click(function(){
//     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
// });

export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {
    stop() {
      // console.log("click")
      // $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
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
  },
}
</script>


<style>

  .on-hover {
    cursor: pointer;
  }
  
  .dangdangTest.sm {
    background-color: red;
  }

  .mainBelowContents:hover {
  }

  .stop {
    border: 1px black solid;
    margin: 1rem;
    padding: 1rem;
    background-color: lightyellow;
  }

  .main_stack_logo .v-image {
    width: 100px;
    height: 100px;
  }
</style>