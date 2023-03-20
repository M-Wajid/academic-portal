import "../../styles/style.css";

const Info = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="Main">
      <h1 className="Heading">DATA</h1>
      <div className="Data2">
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
