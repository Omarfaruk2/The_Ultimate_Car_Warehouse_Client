import axios from "axios"


const FetchApi = async () => {

    // const { data } = await axios.get("http://localhost:5000/inventory")
    const { data } = await axios.get("products.json")
    return data
}


export default FetchApi