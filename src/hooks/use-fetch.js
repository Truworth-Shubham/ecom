import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([])

    const makeRequest = async () => {
        try {
            const data = await axios(url)
            setData(data.data)
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    makeRequest()

    return data
}

export default useFetch;