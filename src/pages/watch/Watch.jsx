import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://i.ytimg.com/vi/rThHfQhaLUs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi-d6Zu4O0wfEo3XX5VVFrnK-Dvw"
      />
    </div>
  );
}
