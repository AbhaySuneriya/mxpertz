import React from "react";

const STATUS_COLORS = {
  New: "bg-blue-500",
  "In Progress": "bg-yellow-500",
  Completed: "bg-green-500",
};

const Filters = ({ filter, setFilter }) => (
  <div className="text-center py-6">
    <h2 className="text-4xl font-bold mb-4">Science Fiction Stories</h2>
    <div className="flex justify-center gap-4 flex-wrap">
      {Object.keys(STATUS_COLORS).map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`text-white px-4 py-2 rounded-full font-medium ${STATUS_COLORS[status]}`}
        >
          {status}
        </button>
      ))}
      <button
        onClick={() => setFilter(null)}
        className="bg-purple-500 px-4 py-2 rounded-full text-white font-medium"
      >
        Clear All
      </button>
    </div>
  </div>
);

export default Filters;
