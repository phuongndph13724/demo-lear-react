import instance from "./instance";

export const Signin = (data) => {
    const url = `/signin`
    return instance.post(url, data);
}