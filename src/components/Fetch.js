import React, {useEffect, useState} from "react"
import axios from "axios"

const Fetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState([])
    useEffect(() => {
        axios
            .get("../data/homeData.json")
            .then((res) => setData(res.data))
            .catch((error) => {
                setError(error)
            })
    }, [url])

    return {data, error}
}

export default Fetch
