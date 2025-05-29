import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="container-fluid h-dvh grid py-10 px-20 2xl:py-25 2xl:px-50">
      <div className="grid grid-cols-6 grid-rows-2 gap-3">
        <Link to="master" className="mainOptions col-span-3">
          College List
        </Link>
        <Link to="/scheduler" className="mainOptions col-span-3">
          Generate Schedule
        </Link>
        <Link
          to="courses"
          className="mainOptions col-span-2"
        >
          Course List
        </Link>
        <Link
          to="teachers"
          className="mainOptions col-span-2"
        >
          Teacher List
        </Link>
        <Link
          to="rooms"
          className="mainOptions col-span-2"
        >
          Room List
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;

// <div className="container-fluid h-dvh grid p-5">
//   <div className="grid grid-cols-10 grid-rows-6 gap-3">
//     <div className="col-span-4 row-span-3 bg-gray-100 rounded-xl">div 1</div>
//     <div className="col-span-3 row-span-3 bg-gray-400 rounded-xl">div 2</div>
//     <div className="col-span-3 row-span-5 bg-gray-300 rounded-xl">div 3</div>
//     <div className="col-span-3 row-span-3 bg-gray-400 rounded-xl">div 4</div>
//     <div className="col-span-4 row-span-3 bg-gray-300 rounded-xl">div 5</div>
//     <div className="col-span-3 bg-gray-200 rounded-xl">div 6</div>
//   </div>
// </div>