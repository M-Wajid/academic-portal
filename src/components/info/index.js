import "./info.css";

const Info = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="infoMain">
      <h1 className="infoHeading">USER DATA</h1>
      <div className="infoData">
        <div>
          <p1 className="heading">Name: </p1>
          <p1 className="value">{user.name}</p1>
        </div>
        <div>
          <p1 className="heading">Email: </p1>
          <p1 className="value">{user.email}</p1>
        </div>
        <div>
          <p1 className="heading">Role: </p1>
          <p1 className="value">{user.role}</p1>
        </div>
      </div>
    </div>
  );
};

export default Info;
