import axios from 'axios'

const getRouteData = async () => {
    const response = await axios.post("http://localhost:5000/api/wx")
    return response
}

const locationService = {
    getRouteData
}

export default locationService