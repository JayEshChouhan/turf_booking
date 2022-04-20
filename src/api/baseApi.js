import axios from "axios";
const baseUrl = "https://turfbooks.herokuapp.com/"

export async function runBaseApi(method, url, data) {
    var status = "";

    var config = {
        method: method,
        url: baseUrl + url,
        data: data,
    };
    console.log(config);

    await axios(config)
        .then((res) => {
            console.log(res);
            status = res.status
        })
        .catch((err) => {
            console.log(err);
        });
    return status;
}