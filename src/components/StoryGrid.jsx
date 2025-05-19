import React from "react";

const STATUS_COLORS = {
  "Published": "text-blue-500",
  "In Progress": "text-yellow-500",
 "Draft": "text-green-500",
};


const StoryGrid = ({ stories }) => (
  <main className="px-8 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {stories.map((story, index) => (
      <div
        key={index}
        className="bg-indigo-800 rounded-2xl overflow-hidden shadow-lg border-2 border-purple-400"
      >
        <img src={story.Image[0]} alt={story.Title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{story.Title}</h3>
          <span
            className={`inline-block px-3 py-1 text-sm bg-white rounded-full m-auto w-full text-center font-bold ${STATUS_COLORS[story.Status]} `}
          >
            {story.Status}
          </span>
        </div>
      </div>
    ))}
  </main>
);

export default StoryGrid;
