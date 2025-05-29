const ListFull = ({ takeArray, description }) => {
  return (
    <div className="w-full max-w-4xl 2xl:max-w-5xl mx-auto">
      {takeArray.length === 0 ? (
        <div className="bg-white/90 rounded-lg shadow p-8 text-center text-lg text-gray-700 font-medium">
          {description}
        </div>
      ) : (
        takeArray.map((dept, i) => (
          <div
            key={i}
            className="relative mb-6 cursor-pointer bg-gray-50 hover:bg-gray-100/90 rounded-lg transition"
            title={`Create a schedule for ${dept}`}
            // onClick={() => navigate(`/courses/${encodeURIComponent(dept)}`)}
          >
            <div className="flex items-center gap-2 p-4">
              <img
                className="size-12 mr-2"
                // src="https://cdn-icons-png.flaticon.com/512/3652/3652267.png"
                src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
                alt=""
              />
              <h2 className="text-xl font-semibold text-gray-900">{dept}</h2>
            </div>
            <p className="absolute right-2 top-1 text-gray-600 font-serif">0 - time blocks</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ListFull;
