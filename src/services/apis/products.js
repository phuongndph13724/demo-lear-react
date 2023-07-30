import instance from "./instance";

export const apiGetAllProduct = () => {
    const url = `/products`
    return instance.get(url)
}

export const apiAddProduct = (data) => {
    const url = `/products`
    return instance.post(url,data)
}

export const apiEditProduct = (data) => {
    const url = `/products/${data?.id}`
    return instance.put(url,data)
}
export const apiRemoveProduct = (id) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const apiReadDetailProduct = (id) => {
    const url = `/products/${id}`
    return instance.get(url)
}