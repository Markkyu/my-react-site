const FloatingButton = ({ onAddClick, onHomeClick, addLabel = "Add _______" }) => {
  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-3 z-50">
        <div className="relative flex justify-end items-center w-26">
          <div className="absolute left-0 text-lg font-medium font-sans">
            Home
          </div>
          <button
            onClick={onHomeClick}
            className={`bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center border-2 cursor-pointer`}
            title="Back to Home"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex justify-end items-center w-42">
          <div className="absolute left-0 text-lg font-medium font-sans">
            {addLabel}
          </div>
          <button
            onClick={onAddClick}
            className={`bg-white border-2 shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-4xl transition cursor-pointer`}
            title={addLabel}
          >
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
