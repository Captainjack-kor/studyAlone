export const getCookie = function(name) {
  name = new RegExp(name + "=([^;]*)");
  return name.test(document.cookie) ? unescape(RegExp.$1) : "";
};

export const removeCookie = function(name) {
  document.cookie = name + "=" + escape("");
};

export const getSearchParams = function(k) {
  var p = {};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) {
    p[k] = v;
  });
  return k ? p[k] : p;
};

//1 - 숫자만
//2 - 한글만
//3 - 이메일
//4 - 숫자와 영문
export const regexCheck = function(type, value) {
  var regex;

  if (type == 1) {
    //숫자만
    regex = /[^0-9]/g;
  } else if (type == 2) {
    //한글만
    regex = /[a-z0-9]|[ []{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g;
  } else if (type == 3) {
    //이메일
    regex = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
  } else if (type == 4) {
    //숫자와 영문
    regex = /[^A-Za-z0-9]/g;
  }

  if (regex.exec(value)) {
    return false;
  } else {
    return true;
  }
};

export const numberWithCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const smooth_scroll_to = function(element, target, duration) {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject("bad duration");
  }
  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  var start_time = Date.now();
  var end_time = start_time + duration;

  var start_top = element.scrollTop;
  var distance = target - start_top;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  var smooth_step = function(start, end, point) {
    if (point <= start) {
      return 0;
    }
    if (point >= end) {
      return 1;
    }
    var x = (point - start) / (end - start); // interpolation
    return x * x * (3 - 2 * x);
  };

  return new Promise(function(resolve, reject) {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    var previous_top = element.scrollTop;

    // This is like a think function from a game loop
    var scroll_frame = function() {
      if (element.scrollTop != previous_top) {
        reject("interrupted");
        return;
      }

      // set the scrollTop for this frame
      var now = Date.now();
      var point = smooth_step(start_time, end_time, now);
      var frameTop = Math.round(start_top + distance * point);

      element.scrollTop = frameTop;

      // check if we're done!
      if (now >= end_time) {
        resolve();
        return;
      }

      /*
          // If we were supposed to scroll but didn't, then we
          // probably hit the limit, so consider it done; not
          // interrupted.
          if(element.scrollTop === previous_top
              && element.scrollTop !== frameTop) {
              resolve();
              return;
          }
          */
      previous_top = element.scrollTop;

      // schedule next frame for execution
      setTimeout(scroll_frame, 0);
    };

    // boostrap the animation process
    setTimeout(scroll_frame, 0);
  });
};

export const YMDFormatter = function(num) {
  if (!num) return "";
  var formatNum = "";

  // 공백제거
  num = num.replace(/\s/gi, "");

  try {
    if (num.length == 8) {
      formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    }
  } catch (e) {
    formatNum = num;
  }
  return formatNum;
};
