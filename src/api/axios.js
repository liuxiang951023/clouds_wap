import axios from "axios";
import { Toast } from "vant";
import router from "@/router";

//token GET请求---------------------------------------
export function authorGet(url, options, show = true) {
  let token = window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo")).token
    : "";
  if (show) {
    Toast.loading({
      mask: false,
      forbidClick: true,
      message: "加载中...",
    });
  }
  axios.defaults.headers["token"] = token;
  //返回promise
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: options,
      })
      .then((res) => {
        if (res.headers.token) {
          resetToken(res.headers);
        }
        if (show) {
          Toast.clear();
        }
        if (res.data.code == "SUCCESS") {
          resolve(res);
        } else if (res.data.code == "EXPIRED") {
          window.localStorage.removeItem("userInfo");
          Toast(res.data.message + "2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else if (res.data.code == "INVALID") {
          window.localStorage.removeItem("userInfo");
          Toast(res.data.message + "2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          Toast.fail(res.data.message);
          reject(res.data.message);
        }
      })
      .catch(() => {
        if (show) {
          Toast.fail("网络出错");
        }
      });
  });
}

//开放openGET请求
export function openGet(url, options, show = true) {
  if (show) {
    Toast.loading({
      mask: false,
      forbidClick: true,
      message: "加载中...",
    });
  }
  //返回promise
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: options,
      })
      .then((res) => {
        //console.log(res)
        if (show) {
          Toast.clear();
        }
        if (res.data.code == "SUCCESS") {
          resolve(res);
        } else if (res.data.code == "EXPIRED") {
          window.localStorage.removeItem("userInfo");

          Toast(res.data.message + "2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else if (res.data.code == "INVALID") {
          window.localStorage.removeItem("userInfo");

          Toast(res.data.message + "2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          Toast.fail(res.data.message);
          reject(res.data.message);
        }
      })
      .catch(() => {
        if (show) {
          Toast.fail("网络出错");
        }
      });
  });
}

//加token，authorPOST请求---------------------------------------
export function authorPost(url, options, show = true) {
  let token = window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo")).token
    : "";
  if (show) {
    Toast.loading({
      mask: false,
      forbidClick: true,
      message: "加载中...",
    });
  }
  axios.defaults.headers["token"] = token;
  //返回promise
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: options,
      transformRequest: [
        (data) => {
          // 对 data 进行任意转换处理
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          ret = ret.substr(0, ret.length - 1);
          return ret;
        },
      ],
    })
      .then((res) => {
        if (res.headers.token) {
          resetToken(res.headers);
        }
        if (show) {
          Toast.clear();
        }
        if (res.data.code == "SUCCESS") {
          resolve(res);
        } else if (res.data.code == "EXPIRED") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录页面");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else if (res.data.code == "INVALID") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录页面");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          reject(res.data.message);
          Toast.fail(res.data.message);
        }
      })
      .catch(() => {
        if (show) {
          Toast.fail("网络出错");
        }
      });
  });
}

//开放openPOST请求
export function openPost(url, options, show = true) {
  if (show) {
    Toast.loading({
      mask: false,
      forbidClick: true,
      message: "加载中...",
    });
  }
  //返回promise
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      // data:options,
      params: options,
    })
      .then((res) => {
        if (show) {
          Toast.clear();
        }
        if (res.data.code == "SUCCESS") {
          resolve(res);
        } else if (res.data.code == "EXPIRED") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else if (res.data.code == "INVALID") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          Toast.fail(res.data.message);
          reject(res.data.message);
        }
      })
      .catch(() => {
        if (show) {
          Toast.fail("网络出错");
        }
      });
  });
}

//图片上传接口
export function uploadFile(url, formData, show = true) {
  let token = window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo")).token
    : "";
  axios.defaults.headers["token"] = token;
  if (show) {
    Toast.loading({
      mask: false,
      forbidClick: true,
      message: "加载中...",
    });
  }
  return new Promise((resolve, reject) => {
    axios
      .post(url, formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        if (show) {
          Toast.clear();
        }
        if (res.data.code == "SUCCESS") {
          resolve(res);
        } else if (res.data.code == "EXPIRED") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else if (res.data.code == "INVALID") {
          window.localStorage.removeItem("userInfo");
          Toast("未登录，2秒后跳转至登录");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          Toast.fail(res.data.message);
          reject(res.data.message);
        }
      })
      .catch(() => {
        if (show) {
          Toast.fail("网络出错");
        }
      });
  });
}

function resetToken(header) {
  let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  delete userInfo["token"];
  userInfo["token"] = header.token;
  window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
