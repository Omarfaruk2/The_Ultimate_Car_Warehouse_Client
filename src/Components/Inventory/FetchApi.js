import axios from "axios"


const FetchApi = async () => {

    const { data } = await axios.get("https://no-problem.onrender.com/inventory")
    // const { data } = await axios.get("products.json")
    return data
}


export default FetchApi