const ProgressBar = ({ count, data }) => {
  const progressPersentage = (((count + 1) / data.length) * 100).toFixed(0);
  return (
    <div className="w-full h-8 bg-[#DCF0C3] mb-2 rounded-2xl overflow-hidden">
      <div
        style={{ width: `${progressPersentage}%` }}
        className="h-8 bg-[#5C766D] text-white flex items-center justify-center transition-all duration-300 rounded-2xl"
      >
        {count + 1} / {data.length}
      </div>
    </div>
  );
};

export default ProgressBar;
