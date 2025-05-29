import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";
import PageHeader from "../components/PageHeader";
import FloatingButton from "../components/FloatingButton";
import FormPopup from "../components/FormPopup";
import List from "../components/List";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

const TeacherList = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: "", name: "", department: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.department) return;
    if (editIndex !== null) {
      const updated = [...teachers];
      updated[editIndex] = form;
      setTeachers(updated);
      setEditIndex(null);
    } else {
      setTeachers([...teachers, form]);
    }
    setForm({ id: "", name: "", department: "" });
    setShowForm(false);
  };

  const handleEdit = (idx) => {
    setForm(teachers[idx]);
    setEditIndex(idx);
    setShowForm(true);
  };

  const handleDelete = (idx) => {
    const confirmDeletion = confirm(
      "Are you sure you want to delete this teacher?"
    );
    if (confirmDeletion) {
      setTeachers(teachers.filter((_, i) => i !== idx));
      if (editIndex === idx && confirmDeletion) {
        setEditIndex(null);
        setForm({ id: "", name: "", department: "" });
        setShowForm(false);
      }
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const popupFields = [
    {
      label: "Teacher ID",
      name: "id",
      value: form.id,
      onChange: handleInputChange,
      placeholder: "Teacher ID",
    },
    {
      label: "Teacher Name",
      name: "name",
      value: form.name,
      onChange: handleInputChange,
      placeholder: "Teacher Name",
    },
    {
      label: "Department",
      name: "department",
      value: form.department,
      onChange: handleInputChange,
      placeholder: "Department",
    },
    {
      label: '(Full or Part) time',
      name: 'time',
      type: 'select',
      onChange: handleInputChange,
      options: [
        { value: 'fullTime', label: 'Full Time'},
        { value: 'partTime', label: 'Part Time' }
      ]
    }
  ];

  const teacherUniqueId = nextId(`teacher-id-`);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center p-0 md:p-8 overflow-auto">
        <PageHeader
          logoUrl={LOGO_URL}
          logoAlt="MSEUF-CI Logo"
          title="Manuel S. Enverga University Foundation Candelaria Inc."
          subtitle="Teacher Directory"
          borderColorClass="border-blue-300"
        />

        <List
          takeArray={teachers}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          directName="teachers"
        />
      </div>

      <FloatingButton
        onAddClick={() => {
          setShowForm(true);
          setEditIndex(null);
          setForm({ id: teacherUniqueId, name: "", department: "" }); // teacher unique id
        }}
        onHomeClick={handleGoHome}
        addLabel="Add Teacher"
      />

      <FormPopup
        show={showForm}
        onClose={() => {
          setShowForm(false);
          setEditIndex(null);
          setForm({ id: "", name: "", department: "" });
        }}
        onSubmit={handleSubmit}
        fields={popupFields}
        submitLabel={editIndex !== null ? "Update Teacher" : "Add Teacher"}
        color="blue"
        title={editIndex !== null ? "Edit Teacher" : "Add Teacher"}
      />
    </div>
  );
};

export default TeacherList;
