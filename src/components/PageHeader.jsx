const PageHeader = ({
  logoUrl,
  logoAlt,
  title,
  subtitle,
  borderColorClass,
}) => {
  return (
    <div className="sticky top-0 w-full max-w-4xl 2xl:max-w-5xl flex items-center bg-white shadow-lg rounded-xl p-6 mt-8 mb-6 mx-auto z-5">
      <img
        className={`2xl:absolute h-16 w-16 rounded-full border-2 ${borderColorClass} shadow`}
        src={logoUrl}
        alt={logoAlt}
      />
      <div className="flex-1 text-center">
        <h1 className="text-2xl 2xl:text-3xl font-bold text-gray-800 tracking-tighter">
          {title}
        </h1>
        <p className="text-gray-800 text-xl mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
