import { BsHeartFill } from "react-icons/bs";
import { FaCommentDots, FaShare } from "react-icons/fa";
import "./index.css";

export function IconsLeft({ elm }) {
  return (
    <div className="nav">
      <span className="nav-item">
        <BsHeartFill className="nav-item-icon" />
        <br />
        {elm.likes}
      </span>
      <span className="nav-item">
        <FaCommentDots className="nav-item-icon" />
        <br />
        {elm.comments}
      </span>
      <span className="nav-item">
        <FaShare className="nav-item-icon" />
        <br />
        {elm.shares}
      </span>
    </div>
  );
}
