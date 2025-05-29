import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import nextId from "react-id-generator";
import List from "../components/List";
import FloatingButton from "../components/FloatingButton";
import FormPopup from "../components/FormPopup";
import PageHeader from "../components/PageHeader";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

const CourseList = () => {
  const { department } = useParams();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    department: decodeURIComponent(department),
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name) return;
    if (editIndex !== null) {
      const updated = [...courses];
      updated[editIndex] = form;
      setCourses(updated);
      setEditIndex(null);
    } else {
      setCourses([...courses, form]);
    }
    setForm({ id: "", name: "", department: decodeURIComponent(department) });
    setShowForm(false);
  };

  const handleEdit = (idx) => {
    setForm(courses[idx]);
    setEditIndex(idx);
    setShowForm(true);
  };

  const handleDelete = (idx) => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmDeletion) {
      setCourses(courses.filter((_, i) => i !== idx));
      if (editIndex === idx) {
        setEditIndex(null);
        setForm({
          id: "",
          name: "",
          department: decodeURIComponent(department),
        });
        setShowForm(false);
      }
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const popupFields = [
    {
      label: "Course ID",
      name: "id",
      value: form.id,
      onChange: handleInputChange,
      placeholder: "Course ID",
    },
    {
      label: "Course Name",
      name: "name",
      value: form.name,
      onChange: handleInputChange,
      placeholder: "Course Name",
    },
    {
      label: "Department",
      name: "department",
      value: form.department,
      onChange: () => {},
      placeholder: "Department",
      type: "text",
      disabled: true,
    },
    {
      label: "Hours per Week",
      name: "hours",
      type: "number",
      value: form.hours,
      onChange: handleInputChange,
      placeholder: "Hours",
    },
  ];

  const uniqueIdGen = nextId(`course-id-`); //re-renders everytime an action is made in this particular pages component

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center p-0 md:p-8 overflow-auto">
        
        <button
          className="mt-8 px-4 py-2 bg-red-800 font-medium text-white rounded hover:bg-red-900 cursor-pointer"
          onClick={() => navigate("/courses")}
        >
          ← Back to Departments
        </button>

        <PageHeader
          logoUrl={LOGO_URL}
          logoAlt="MSEUF-CI Logo"
          title={`Courses in ${decodeURIComponent(department)}`}
          subtitle="Available courses"
          borderColorClass="border-green-300"
        />

        <List
          takeArray={courses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          directName="courses"
          addColor="blue"
        />
      </div>

      <FloatingButton
        onAddClick={() => {
          setShowForm(true);
          setEditIndex(null);
          setForm({
            id: uniqueIdGen, //auto id generator
            name: "",
            department: decodeURIComponent(department),
          });
        }}
        onHomeClick={handleGoHome}
        addLabel="Add Course"
        addColor="blue"
      />

      <FormPopup
        show={showForm}
        onClose={() => {
          setShowForm(false);
          setEditIndex(null);
          setForm({
            id: "",
            name: "",
            department: decodeURIComponent(department),
          });
        }}
        onSubmit={handleSubmit}
        fields={popupFields}
        submitLabel={editIndex !== null ? "Update Course" : "Add Course"}
        color="red"
        title={editIndex !== null ? "Edit Course" : "Add Course"}
      />
    </div>
  );
};

export default CourseList;
