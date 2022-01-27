console.log(data.list);
  if (self.$store.state.counsel_write_init) {
    for (let i = 0; i < data.list.length; i++) {
      data.list[i].idx = "";
    }
    self.$store.state.counsel_write_init = false;
    self.$router.replace("/counsel_write");
  } else {}