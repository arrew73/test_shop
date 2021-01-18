import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000"
})

export const ShopAPI = {
    getItems() {
        return instance.get("/TV")
            .then(response => {
                return response.data
            })
    }
}