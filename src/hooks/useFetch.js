import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([])

    const makeRequest = async()=>{
        try {
            const data = await axios(url)
            setData(data.data)
        } catch (error) {
            alert(error.message)
            console.log(error, "try catch")
        }
    }
    makeRequest()

    return data
}

export default useFetch