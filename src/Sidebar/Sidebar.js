import "./Sidebar.css";
import Catagory from "./Catagory/Catagory";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
function Sidebar({ handleChange }) {
  console.log(handleChange, "sidebar");
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🔥</h1>
        </div>
        <Catagory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
