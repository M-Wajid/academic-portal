import "../../styles/style.css";

const Info = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="Main">
      <h1 className="Heading">User Profile</h1>
      <div className="Data2">
        <div className="Data">
          <p className="heading">Name:</p>
          <p className="value">{user.name}</p>
        </div>
        <div className="Data">
          <p className="heading">Email:</p>
          <p className="value">{user.email}</p>
        </div>
        <div className="Data">
          <p className="heading">Role:</p>
          <p className="value">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
