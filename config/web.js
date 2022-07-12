import { toast } from "@/common/toast";
import { commonConfig } from "./index";
import { OpenIMSDK } from "open-im-sdk";
import store from "@/src/store";
const openIM = new OpenIMSDK();
//初始化platform
function init_platform() {
  const systemInfo = uni.getSystemInfoSync();
  store.commit("user/set_systemInfo", systemInfo);
  store.commit("user/set_operationID", systemInfo.deviceId);
  store.commit("user/set_platform", 5);
}
function init() {
  const config = {
    userID: store.getters.userID,
    token: store.getters.token,
    url: commonConfig.ws_addr,
    platformID: store.getters.platform,
  };
  openIM
    .login(config)
    .then((res) => {
      console.log("login suc...");
    })
    .catch((err) => {
      console.log("login failed...");
    });
}
export function login() {}
init_platform();
export default openIM;
