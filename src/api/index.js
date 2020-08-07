import { openGet, openPost, authorGet, authorPost, uploadFile } from "./axios";
//获取广告列表
export function adList(options, show = false) {
  let URL = "/shop/h5/open/cms/ad/find/list";
  return new Promise((resolve) => {
    openPost(URL, options, show).then((res) => {
      resolve(res);
    });
  });
}
