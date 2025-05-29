import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator"
import PageHeader from "../components/PageHeader";
import FloatingButton from "../components/FloatingButton";
import List from "../components/List";
import FormPopup from "../components/FormPopup";

const LOGO_URL =
  "https://mseufcandelaria.neolms.com/files/6191249/euC.png?lmsauth=6b113bc54de2f357d219b0c3ca81063c295c6955";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", department: "" });
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.department) return;
    if (editIndex !== null) {
      const updated = [...rooms];
      updated[editIndex] = form;
      setRooms(updated);
      setEditIndex(null);
    } else {
      setRooms([...rooms, form]);
    }
    setForm({ name: "", department: "" });
    setShowForm(false);
  };

  const handleEdit = (idx) => {
    setForm(rooms[idx]);
    setEditIndex(idx);
    setShowForm(true);
  };

  const handleDelete = (idx) => {
    const confirmDeletion = confirm(
      "Are you sure you want to delete this room?"
    );
    if (confirmDeletion) {
      setRooms(rooms.filter((_, i) => i !== idx));
      if (editIndex === idx) {
        setEditIndex(null);
        setForm({ name: "", department: "" });
        setShowForm(false);
      }
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const popupFields = [
    {
      label: "Room Name",
      name: "name",
      value: form.name,
      onChange: handleInputChange,
      placeholder: "Room Name",
    },
    {
      label: "Used by (what) Deparment",
      name: "department",
      value: form.department,
      onChange: handleInputChange,
      placeholder: "College Department",
    },
  ];

  const roomUniqueId = nextId("room-id-")

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center p-0 md:p-8 overflow-auto">
        <PageHeader
          logoUrl={LOGO_URL}
          logoAlt="MSEUF-CI Logo"
          title="Room Directory"
          subtitle="List of Rooms and Departments"
          borderColorClass="border-green-300"
        />

        <List
          takeArray={rooms}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          directName="rooms"
          addColor="green"
        />
      </div>

      <FloatingButton
        onAddClick={() => {
          setShowForm(true);
          setEditIndex(null);
          setForm({ id: roomUniqueId, name: "", department: "" });
        }}
        onHomeClick={handleGoHome}
        addLabel="Add Room"
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
        submitLabel={editIndex !== null ? "Update Room" : "Add Room"}
        color="blue"
        title={editIndex !== null ? "Edit Room" : "Add Room"}
      />
    </div>
  );
};

export default RoomList;
