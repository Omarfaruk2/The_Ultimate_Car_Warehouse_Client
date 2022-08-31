import axios from "axios"


const FetchApi = async () => {

    const { data } = await axios.get("https://warm-taiga-97321.herokuapp.com/inventory")
    // const { data } = await axios.get("products.json")
    return data
}


export default FetchApi