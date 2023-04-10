import ShowAllLeaves from "./showAllLeaves";
import AddNewLeave from "./addNewLeave";

const AddLeave = () => {

  return (
    <div className="Main">
      <h1 className="Heading">Leave</h1>
      <div className="Data3">
        <AddNewLeave />
        <ShowAllLeaves />
      </div>
    </div>
  );
};

export default AddLeave;
