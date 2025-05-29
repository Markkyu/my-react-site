import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className="flex relative bg-red-800 text-white text-xl z-1 p-2">
        <Link to="/" className="hover:text-gray-200">
          <img
            className="invert h-8 inline"
            src="https://static.vecteezy.com/system/resources/previews/019/879/196/non_2x/passage-of-time-icon-on-transparent-background-free-png.png"
            alt="Timelyfy Logo"
          />
          <b>Timelyfy</b>: Automated Scheduler
        </Link>
        <div className="absolute flex content-center right-0">
          {props.guest}
          <img
            className="h-8"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt="account"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
