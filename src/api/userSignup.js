import { postApi } from "./apiMethods";

export async function userLogin(data) {
    const result = await postApi("login", data)
    return result;
}

export async function userSignup(data) {
    const result = await postApi("register", data)
    return result;
}