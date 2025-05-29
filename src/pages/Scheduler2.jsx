import React, { useState } from "react";

const Scheduler2 = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const startHour = 7;
  const endHour = 20;

  const getTimeSlots = () => {
    const times = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      const label = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${
        hour < 12 ? "AM" : "PM"
      }`;
      times.push({ hour, label });
    }
    return times;
  };

  const timeSlots = getTimeSlots();

  // Queue & Schedule State
  const [queue, setQueue] = useState([]);
  const [schedule, setSchedule] = useState({}); // { "Monday-8": { course, teacher, room } }

  // Form State
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("Prof. Smith");
  const [room, setRoom] = useState("Room A");

  const handleAddToQueue = () => {
    setQueue([...queue, { course, teacher, room }]);
  };

  const handleAutoAllocate = () => {
    const newSchedule = { ...schedule };
    const remainingQueue = [...queue];

    timeSlots.forEach(({ hour }) => {
      for (const day of days) {
        if (remainingQueue.length === 0) break;

        const key = `${day}-${hour}`;
        if (!newSchedule[key]) {
          const nextItem = remainingQueue.shift();
          newSchedule[key] = nextItem;
        }
      }
    });

    setSchedule(newSchedule);
    setQueue([]); // clear queue after allocation
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold text-gray-800">
            College Scheduler
          </h1>
          <p className="text-gray-500">
            Select course, teacher, and room to queue for scheduling.
          </p>
        </header>

        {/* Selection Form */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Course Input - always visible */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              >
                <option value="">Select a Course</option>
                <option>Math 101</option>
                <option>Physics 201</option>
                <option>English Lit</option>
              </select>
            </div>

            {/* Show the rest only if a course is selected */}
            {course && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teacher
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                  >
                    <option>Prof. Smith</option>
                    <option>Dr. Johnson</option>
                    <option>Ms. Davis</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  >
                    <option>Room A</option>
                    <option>Room B</option>
                    <option>Room C</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          {course && (
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAddToQueue}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Add to Queue
              </button>
              <button
                onClick={handleAutoAllocate}
                className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
              >
                Auto Allocate
              </button>
            </div>
          )}
        </section>

        {/* Queue Display */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Queued Items
          </h2>
          {queue.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {queue.map((item, idx) => (
                <li key={idx}>
                  {item.course} - {item.teacher} - {item.room}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 italic">No items in queue.</p>
          )}
        </section>

        {/* Weekly Calendar */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Weekly Calendar
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-24 p-2 border border-gray-300 text-left">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="p-2 border border-gray-300 text-center"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(({ hour, label }) => (
                  <tr key={hour}>
                    <td className="p-2 border border-gray-300">{label}</td>
                    {days.map((day) => {
                      const key = `${day}-${hour}`;
                      const slot = schedule[key];
                      return (
                        <td
                          key={key}
                          className="p-2 border border-gray-300 text-center"
                        >
                          {slot ? (
                            <div className="bg-blue-100 text-blue-800 p-1 rounded-md">
                              <div className="font-semibold">{slot.course}</div>
                              <div className="text-xs">{slot.teacher}</div>
                              <div className="text-xs">{slot.room}</div>
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
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

export default Scheduler2;
