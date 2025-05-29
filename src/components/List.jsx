const List = ({ takeArray, handleDelete, handleEdit, directName, addColor = "red" }) => {
  return (
    <>
      <div className="w-full max-w-4xl 2xl:max-w-5xl mx-auto">
        <hr className="text-white mb-4" />
        {takeArray.length === 0 ? (
          <div className="bg-white/90 rounded-lg shadow p-8 text-center text-xl text-gray-700 font-medium">
            No {directName} added yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-6">
            {takeArray.map((t, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 border border-${addColor}-300 hover:shadow-xl transition`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-blue-900">
                      {t.name}
                    </div>
                    <div className="text-blue-600 text-sm font-mono">
                      ID: {t.id}
                    </div>
                    <div className="text-blue-500 text-sm">
                      Department: {t.department}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded shadow text-xs font-semibold transition cursor-pointer"
                      onClick={() => handleEdit(idx)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow text-xs font-semibold transition cursor-pointer"
                      onClick={() => handleDelete(idx)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default List;
