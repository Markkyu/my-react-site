const AboutPage = () => {
  return (
    <div className="h-dvh bg-white text-gray-800 font-sans overflow-auto">
      <header className="bg-maroon-700  py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl font-bold">Timelyfy</h1>
        <p className="text-lg mt-2 italic">
          A Web-based Automatic Scheduling System using Greedy Algorithm For
          MSEUF-CI
        </p>
        <p className="mt-4 text-md font-light">
          "Creating your time takes time"
        </p>
      </header>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-maroon-700 mb-4">
          About Timelyfy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Timelyfy is a web-based platform designed to simplify the process of
          creating optimized class schedules for MSEUF-CI. Timelyfy helps
          administrators manage their time efficiently. Whether it's detecting
          overlaps, suggesting the best time slots, or providing a user-friendly
          timetable interface, Timelyfy takes the stress out of scheduling.
        </p>
      </section>

      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-maroon-700 mb-6">
            Meet the Developers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6 border border-maroon-200">
              <img
                className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"
                src="https://cdn.pixilart.com/images/user/profile/large/7ad5a882722beee.png?v=1660092107"
                alt=""
              />
              <h4 className="font-medium text-lg text-maroon-800">
                Marc Joel Baldoz
              </h4>
              <p className="text-sm text-gray-600">
                Front end Developer
              </p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 border border-maroon-200">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
              <h4 className="font-medium text-lg text-maroon-800">
                Emmanuel Genaro Ona
              </h4>
              <p className="text-sm text-gray-600">
                Back end Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-maroon-700 text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Timelyfy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
