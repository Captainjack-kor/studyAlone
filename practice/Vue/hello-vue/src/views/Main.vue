<template>
  <div style="">
    <div style="font-family: serif; color: white; text-align: center; font-size: 50px; margin-bottom: 50px;">
      Stack
    </div>

    <v-row style="height: 100px;">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 0 : 12"
        >
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

    <form @submit.prevent="exec_func()" style="margin-top: 100px;">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" 
          v-model="username"
        />
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" 
          v-model="password"
        />
      </div>
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { testAPI } from '@/api/index.js';

export default {
  data() {
    return {
      username: "",
      password: "",
      info: {},
    }
  },

  created() {
  },

  methods: {
    stop() {},
    go_Login() {
      console.log("go loginpage plz");
      if(this.$router.currentRoute.path === "/login") {
        this.$router.go(this.$router.currentRoute);
      } else {
        this.$router.replace("/login");
      }
    },

    async exec_func() {
      const userData = {
        username: this.username,
        password: this.password,
      }
      const response = await testAPI(userData);
      console.log(response);
      this.username = "";
      this.password = "";
    },
  },



}
</script>


<style>

  .on-hover {
    cursor: pointer;
    /* test */
  }
  
  .dangdangTest.sm {
    background-color: red;
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

  #username, 
  #password {
    border: 1px solid black;
  }
</style>