import axios from "axios"

const GetData = async (params, setLoaded) => {

    var date = params.date

    if (!date) return

    const data = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=Nn3JGKPtPU2mcF6GpoFS5DpZ6HJu7toDreJejZV7')
        .then((resp) => {
            if (!resp.data.photos) return
            return resp.data.photos
        })
        .catch((error) => {
            console.log('an error occurred processing your request.' + error)
        }
        )

    if (data) setLoaded(true)

    return data
}

export default GetData