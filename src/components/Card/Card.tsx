import './Card.css'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (<div className="row">
  <div className="example-2 card">
    <div className="wrapper">
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
          <span className="author">Position</span>
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