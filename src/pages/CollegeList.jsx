import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ListFull from "../components/ListFull";
import FloatingButton from "../components/FloatingButton";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

const CollegeList = () => {
  //   const [colleges, setCollege] = useState([]);

  const colleges = [
    "College of Accountancy",
    "College of Business Administration",
    "College of Computer Engineering",
    "College of Computer Science",
    "College of Education",
    "College of Hospitality Management",
    "College of Nursing",
    "College of Psychology",
    // Add more departments as needed
  ];

  const handleEdit = () => {
    return;
  };

  const handleDelete = () => {
    return;
  };

  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    // <div className="h-dvh bg-gray-200 overflow-auto">
    <div className="h-dvh flex bg-gray-200">
      <div className="flex flex-1 flex-col items-center p-0 md:p-8 overflow-auto">
        <PageHeader
          logoUrl={LOGO_URL}
          logoAlt="MSEUF-CI Logo"
          title="MSEUF-CI College List Directory"
          subtitle="Find College Department Schedules"
          borderColorClass="border-blue-300"
        />

        <ListFull
          takeArray={colleges}
          description="No college department added yet."
        />

        <FloatingButton addLabel="Add College" onHomeClick={onHomeClick} />
      </div>
    </div>
  );
};

export default CollegeList;
