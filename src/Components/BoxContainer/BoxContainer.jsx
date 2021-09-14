import "./BoxContainer.css";
import { FiMapPin, FiLink, FiTwitter } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

const BoxContainer = ({ data }) => {
  return (
    <div className="BoxContainer">
      <div>
        <img src={data.avatar_url} alt="" className="avatar" />
      </div>
      <div className="boxWrapper">
        <div className="top">
          <div className="userContainer">
            <h1 className="name">{data.name}</h1>
            <span className="username">{data.login}</span>
            <span className="userBio">{data.bio}</span>
          </div>
          <div className="userJoin">
            <span className="userJoinSpan">{data.created_at}</span>
          </div>
        </div>
        <div className="middle">
          <div className="repos">
            <span className="spanLight">Repos</span>
            <span className="spanBold">{data.public_repos}</span>
          </div>
          <div className="folowers">
            <span className="spanLight">Followers</span>
            <span className="spanBold">{data.followers}</span>
          </div>
          <div className="following">
            <span className="spanLight">Following</span>
            <span className="spanBold">{data.following}</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="bottomSpan">
              {" "}
              <FiMapPin className="bottomIcon" />
              {data.location}
            </span>
            <span className="bottomSpan">
              <FiLink className="bottomIcon" />
              {data.html_url}
            </span>
          </div>
          <div className="right">
            <span className="bottomSpan">
              <FiTwitter className="bottomIcon" />

              {data.twitter_username
                ? data.twitter_username
                : "No twitter Account"}
            </span>
            <span className="bottomSpan">
              <BsBuilding className="bottomIcon" />
              {data.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
