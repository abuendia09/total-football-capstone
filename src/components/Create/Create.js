//imports
import Navbar2 from "../Navbar/Navbar2";
import Sidebar from "../Sidebar/Sidebar";

//styles
import "./Create.css";

export default function Create() {
  return (
    <div className="create-container">
      <Sidebar />
      <div className="create-content-title">
        <Navbar2 />
        <div>
          <div className="create-content">
            <h3 className="page-title">Let's build that Ultimate Team!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
