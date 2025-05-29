import Select from "react-select";
import { useState } from "react";

const Scheduler = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const startHour = 7;
  const endHour = 20;

  const getTimeSlots = () => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      const label = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${
        hour < 12 ? "AM" : "PM"
      }`;
      times.push(label);
    }
    return times;
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans overflow-auto">
      <div className="max-w-7xl mx-auto space-y-4">
        <header>
          <h1 className="text-3xl font-bold text-gray-800">
            Create a schedule for ...{}
          </h1>
          <p className="text-gray-500">
            Select course, teacher, and room to queue for automatic scheduling.
          </p>
        </header>

        {/* Form Section */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>

              <Select
                className="p-2"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true}
                placeholder={"Select an option"}
              />

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teacher
              </label>

              <Select
                className="p-2"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true}
                placeholder={"Select an option"}
              />

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room
              </label>

              <Select
                className="p-2"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true}
                placeholder={"Select an option"}
              />

            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition hover:cursor-pointer">
              Add to Queue
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition hover:cursor-pointer">
              Generate Schedule
            </button>
          </div>
        </section>

        {/* Queue Placeholder */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Queued Items
          </h2>
          <p className="text-gray-400 italic">
            Items added to the queue will appear here.
          </p>
        </section>

        {/* Weekly Calendar */}
        <section className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Weekly Calendar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-20 p-2 border border-gray-300 text-left text-sm">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="p-2 border border-gray-300 text-center text-sm"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getTimeSlots().map((time, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border border-gray-300 text-sm">
                      {time}
                    </td>
                    {days.map((day) => (
                      <td
                        key={day}
                        className="p-2 border border-gray-300 text-center text-sm"
                      >
                        {/* Placeholder for schedule block */}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scheduler;
