<template>
  <div>
      <v-row align="center" justify="center">
        <v-img
          src="@/assets/icon_character_icheon_x.png"
          max-width="265"
          max-height="102"
          style="margin-top: 50px; margin-left:176px;"
          class="animation_big"
          contain
        />
        <v-img src="@/assets/click_icon_x.png" 
          max-width="222"
          max-height="242"
          style="margin-left: 40px; margin-top: 60px;"
        />

        <v-img
          src="@/assets/main_title_x.png"
          max-width="500"
          max-height="102" 
          style="margin-top: 50px; margin-bottom: 50px;"
        />
      </v-row>

      <v-row class="rowTest" style="flex-wrap: nowrap">
        <v-col md="200" class="colcol col1"> 
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


      <v-row align="center" justify="center">
        <v-card 
          width="1000%" height="1000px"
          style="margin-top: 100px; margin-bottom: 100px"
        >
          <v-row>
            hihi
          </v-row>

          <v-col>
            byebye
          </v-col>
        </v-card>
      </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  created() {
  }
}
</script>


<style>

  .animation_big.sm {
  }
</style>