const FormPopup = ({ show, onClose, onSubmit, fields, submitLabel, color, title }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 w-80 relative border-2 animate-fadeIn`}
      >
        <button
          className="absolute top-0 right-2 hover:text-red-500 text-2xl hover:cursor-pointer"
          onClick={onClose}
          title="Close"
        >
          &times;
        </button>
        <h3 className={`text-xl font-bold mb-4 text-${color}-700 text-center`}>
          {title}
        </h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              {field.label && (
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
              )}

              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  className="border-2 rounded px-3 py-2 transition"
                  required
                >
                  {field.options?.map((option, optIdx) => (
                    <option key={optIdx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  className="border-2 rounded px-3 py-2 transition"
                  min="2" // Check this if you find some bugs
                  max="8"
                  required
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className={`bg-red-800 hover:bg-red-900 text-white rounded-lg px-4 py-2 mt-2 font-semibold shadow-md`}
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
