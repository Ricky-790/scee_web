import './Card.css'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (<div className="row">
  <div className="example-2 card">
    <div className="wrapper" style={{background:"url(https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=) ", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
      <div className="header">
        <ul className="menu-content">
          <li>
          <FontAwesomeIcon icon={faHouse} />
          </li>
          <li><FontAwesomeIcon icon={faVideoCamera} /></li>
          <li><FontAwesomeIcon icon={faVideo} /></li>
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author"><h1>Position</h1></span>
          <h3 className="title"><a href="#">Name of Member</a></h3>
          <br></br>
          <p className="text">Year, Stream</p>
        </div>
      </div>
    </div>
  </div>
</div>)
    
}



export default Card