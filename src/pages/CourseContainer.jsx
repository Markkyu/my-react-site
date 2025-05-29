import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

// mock values for departments list
const departments = [
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

const CourseContainer = () => {

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col items-center p-0 md:p-8 overflow-auto">
        <button
          className="mt-8 px-4 py-2 bg-red-800 font-medium text-white rounded hover:bg-red-900 cursor-pointer"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <PageHeader
          logoUrl={LOGO_URL}
          logoAlt="MSEUF-CI Logo"
          title="College Deparment Courses Directory"
          subtitle="Manage, access, and edit courses from existing college list"
          borderColorClass="border-blue-300"
        />

        <div className="w-full max-w-4xl 2xl:max-w-5xl mx-auto">
          {departments.length === 0 ? (
            <div className="bg-white/90 rounded-lg shadow p-8 text-center text-lg text-gray-700 font-medium">
              No college folder found. To access a college folder, Add (+) a
              college in the college list.
            </div>
          ) : (
            departments.map((dept, i) => (
              <div
                key={i}
                className="mb-6 cursor-pointer hover:bg-gray-100/90 rounded-lg transition"
                onClick={() => navigate(`/courses/${encodeURIComponent(dept)}`)}
              >
                <div className="flex items-center gap-2 p-4">
                  <img
                    className="size-10 mr-2"
                    src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                    alt=""
                  />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {dept}
                  </h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
