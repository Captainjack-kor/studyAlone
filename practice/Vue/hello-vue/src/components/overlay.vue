<template>
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
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "src/assets/css/common";
.main_title_1 {
  height: 186px;
  background: linear-gradient(
    0deg,
    $bg-color-contents-breath-gradient-start,
    $bg-color-contents-breath-gradient-end
  );
  margin: 0px;
  border: 1px solid $color-white;
}

.main_title_1.sub_0 {
  background: linear-gradient(
    0deg,
    $bg-color-contents-audio-gradient-start,
    $bg-color-contents-audio-gradient-end
  );
}

.main_title_1.sub_2 {
  background: linear-gradient(
    0deg,
    $bg-color-contents-exercise-gradient-start,
    $bg-color-contents-exercise-gradient-end
  );
}

.main_title_1.sub_3 {
  background: linear-gradient(
    0deg,
    $bg-color-contents-mind-gradient-start,
    $bg-color-contents-mind-gradient-end
  );
}

.main_title_1.sub_4 {
  background: linear-gradient(
    0deg,
    $bg-color-contents-audio-gradient-start,
    $bg-color-contents-audio-gradient-end
  );
}

.content_btn_bg {
  height: 80px;
  text-align: center;
  background: transparent
    linear-gradient(
      180deg,
      $bg-color-contents-btn-gradient-start 0%,
      $bg-color-contents-btn-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px $ft-color-shadow_4;
  border: 1px solid $bg-color-contents-btn-border;
  opacity: 0.9;
  font: normal normal bold 28px/30px Roboto;
  letter-spacing: 0px;
  color: $bg-color-btn-text;
  text-shadow: 0px 0px 3px $ft-color-shadow;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
}

.content_btn_bg.on_0 {
  background: transparent
    linear-gradient(
      110deg,
      $bg-color-contents-btn-04-on-gradient-start 0%,
      $bg-color-contents-btn-04-on-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  border: 1px solid $bg-color-contents-btn-01-on-border;
  color: $ft-color-contents-btn-on;
  text-shadow: none;
}

.content_btn_bg.on_1 {
  background: transparent
    linear-gradient(
      110deg,
      $bg-color-contents-btn-01-on-gradient-start 0%,
      $bg-color-contents-btn-01-on-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  border: 1px solid $bg-color-contents-btn-01-on-border;
  color: $ft-color-contents-btn-on;
  text-shadow: none;
}

.content_btn_bg.on_2 {
  background: transparent
    linear-gradient(
      107deg,
      $bg-color-contents-btn-02-on-gradient-start 0%,
      $bg-color-contents-btn-02-on-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  border: 1px solid $bg-color-contents-btn-02-on-border;
  color: $ft-color-contents-btn-on;
  text-shadow: none;
}

.content_btn_bg.on_3 {
  background: transparent
    linear-gradient(
      106deg,
      $bg-color-contents-btn-03-on-gradient-start 0%,
      $bg-color-contents-btn-03-on-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  border: 1px solid $bg-color-contents-btn-03-on-border;
  color: $ft-color-contents-btn-on;
  text-shadow: none;
}

.content_btn_bg.on_4 {
  background: transparent
    linear-gradient(
      107deg,
      $bg-color-contents-btn-04-on-gradient-start 0%,
      $bg-color-contents-btn-04-on-gradient-end 100%
    )
    0% 0% no-repeat padding-box;
  border: 1px solid $bg-color-contents-btn-04-on-border;
  color: $ft-color-contents-btn-on;
  text-shadow: none;
}

.content_btn_bg.left {
  border-radius: 0px 0px 0px 20px;
}

.content_btn_bg.right {
  border-radius: 0px 0px 20px 0px;
}

.icon {
  width: 180px;
  height: 180px !important;
  padding: 0px !important;
  margin: 12px 0px;
  border-radius: 90px;
  cursor: pointer;
  background-size: cover;
  background-position: center;

  font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: $ft-color-contents-icon-text;
}

.icon_skin {
  width: 180px;
  height: 180px;
  border-radius: 90px;
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
  text-shadow: 0px 0px 3px $ft-color-shadow;
}

.swiper-item {
  display: inline-block;
  margin: 45px 10px 0px 10px;
  width: 15px;
  height: 15px;
  border: 2px solid $bg-color-contents-swiper-item-border;
  border-radius: 5px;
  opacity: 0.6;
}

.swiper-item.sm {
  width: 10px;
  height: 10px;
}

.swiper-item.h-on {
  background: $bg-color-contents-swiper-item-border 0% 0% no-repeat padding-box;
  opacity: 1;
}

.content_btn_root {
  margin: -1px 1px 0px 1px;
}

.swiper_root_margin {
  margin: 0px 100px 0px 100px;
}

/* mobile */
.content_btn_root.sm {
  margin: -1px -2px 0px -2px;
}

.content_btn_bg.sm {
  height: 19vw;
  font: normal normal bold 4vw/5vw Roboto;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper_root_margin.sm {
  margin: 0px 12vw;
}

.icon.sm {
  width: 26vw;
  height: 26vw !important;
  border-radius: 13vw;
  margin: 2vw 0px;
}

.icon_skin.sm {
  width: 26vw;
  height: 26vw !important;
  border-radius: 13vw;
  margin: 2vw 0px;
}

.icon_text.sm {
  width: 23vw;
  height: 5vw;
  font: normal normal bold 3.4vw/4vw Roboto;
}

.common_btn.sm {
  height: 50px;
}
</style>
