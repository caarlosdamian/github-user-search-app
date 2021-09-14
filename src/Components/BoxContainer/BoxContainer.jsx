import "./BoxContainer.css";

const BoxContainer = () => {
  return (
    <div className="BoxContainer">
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/6474358?v=4"
          alt=""
          className="avatar"
        />
      </div>
      <div className="boxWrapper">
        <div className="top">
          <div className="userContainer">
            <h1 className="name">Carlos Damian</h1>
            <span className="username">Caarlosdamian</span>
            <span className="userBio">
              "Hello, I am a programmer trying to stand out in this crazy world,
              if you like my projects do not forget to leave your little star",
            </span>
          </div>
          <div className="userJoin">
            <span className="userJoinSpan">Joined 25 Jan 2011</span>
          </div>
        </div>
        <div className="middle">
          <div className="repos">
            <span className="spanLight">Repos</span>
            <span className="spanBold">8</span>
          </div>
          <div className="folowers">
            <span  className="spanLight">Followers</span>
            <span className="spanBold">3654</span>
          </div>
          <div className="following">
            <span  className="spanLight">Following</span>
            <span className="spanBold">10</span>
          </div>
        </div>
        <div className="center"></div>
      </div>
    </div>
  );
};

export default BoxContainer;
