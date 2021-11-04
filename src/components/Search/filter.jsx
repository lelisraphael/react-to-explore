import '../../assets/css/filter.css'

const Filter = ({ setDate }) => {

    return (

        <div className="container filter">
            <div className="row justify-content-md-center">
                <p>Select a date to get the martian photos</p>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <input className="form-control form-control-lg text-center" type="date" onChange={e => setDate({ date: e.target.value })} />
                </div>
            </div>
        </div>
    )
}

export default Filter