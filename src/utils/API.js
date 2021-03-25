import axios from "axios";

export default {
    getEmployeesList: function () {

        return axios.get("https://randomuser.me/api/?results=20")

    }
}