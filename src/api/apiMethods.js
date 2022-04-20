import { runBaseApi } from "./baseApi";

export async function postApi(url, data){
   const result = await runBaseApi("post", url, data);
   return result;
}

export async function getApi(url, data){
   const result =  await runBaseApi("get", url, {});
   return result;
}
