<template>
  
</template>
<script>
  export default {
    created() {
      var self = this;
      var api = "";
      var param = {};

      self.$store.dispatch("apiCall", { api, param }).then(() => {
        var data = self.$store.state.api_result;
        console.log(data);
        if (data == false || data == "err") {
          //error
          // alert("정보를 가져오는데 실패하였습니다. 새로 고침 후 다시 시도해 주세요.");
        } else {
          try {
            if (data.ret_code == "S") {
              // console.log(response);
              this.user_validation = true;
              this.user_name = data.name;
              this.user_phone = data.tel;
              this.user_counsel_count = data.counseling_count;
              this.user_apply_kit = data.kit_name;
              this.user_apply_address = data.address;
              this.user_kit_shipping_check = data.kit_send;
              this.user_healing_contents_list = data.my_content_list.slice(0, 4);
              this.user_healing_m_contents_list = data.my_content_list.slice(
                0,
                3
              );
            }
          } catch (e) {
            // alert("정보를 가져오는데 실패하였습니다. 새로 고침 후 다시 시도해 주세요.");
          }
        }
      });
    },
  }

</script>
<style>

</style>