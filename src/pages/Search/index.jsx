import { useState, useEffect } from "react"
import '../../assets/css/search.css'
import Modal from '../../components/Search/modal.jsx'
import Filter from '../../components/Search/filter'
import '../../services/getdata.jsx'
import GetData from "../../services/getdata"
import Loader from '../../assets/img/loader.gif'


const Search = () => {
    const [photos, setPhotos] = useState([])
    const [date, setDate] = useState({ date: '2021-06-06' })
    const [loaded, setLoaded] = useState(false)

    useEffect(
        async () => {

            setLoaded(false)
            setPhotos(await GetData(date, setLoaded))

        }, [date]
    )

    return (
        <div>
            <Filter setDate={setDate} />
            <section className="container flex flex-wrap">
                {!loaded && <h1> Loading data .... <br /><img src={Loader} width="300px" /> </h1>}
                {photos.length === 0 && <h1> There is no data recorded for the selected date </h1>}
                {console.log(photos)}
                {loaded && photos.map((item, index) => (
                    <div className="item" key={item.id}>
                        <div>
                            <h4>#{item.id}</h4>
                        </div>
                        <div>
                            <h2>{item.rover.name}</h2>
                        </div>
                        <div>
                            <img src={item.img_src} width="200px" height="150px" />
                        </div>
                        <div>
                            {item.camera.full_name}
                        </div>
                        <div>
                            {item.rover.status ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Disabled</span>}
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModal${item.id}`}>
                                More info...
                            </button>
                        </div>
                        <Modal data={item} />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Search