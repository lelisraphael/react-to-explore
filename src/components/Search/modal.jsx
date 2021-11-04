import '../../assets/css/modal.css'
const Modal = (props) => {

    return (
        <div className="modal fade" id={`exampleModal${props.data.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">#{props.data.id}  {props.data.rover.status ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Disabled</span>}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6>
                            Earth Date: {props.data.earth_date} |
                            <br /> Camera Name: {props.data.camera.name} |
                            Camera Full Name: {props.data.camera.full_name} |
                            Rover Id: #{props.data.rover.id} |
                            Rover Name: {props.data.rover.name} |
                            Landing Date: {props.data.rover.landing_date} |
                            Launch Data: {props.data.rover.launch_date} |
                        </h6>
                        <img src={props.data.img_src} alt={props.data.rover.name} width="100%" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add to my favorite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal