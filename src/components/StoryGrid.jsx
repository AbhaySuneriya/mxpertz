import React from "react";

const STATUS_COLORS = {
  "Published": "text-blue-500",
  "In Progress": "text-yellow-500",
 "Draft": "text-green-500",
 "Completed": "text-green-500"
};


const StoryGrid = ({ stories }) => (
  <main className="px-10 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {stories.map((story, index) => (
      <div
        key={index}
        className=" bg-gradient-to-r from[#5928C0] to-[#259AC5]  rounded-2xl overflow-hidden shadow-lg border-2 border-purple-400"
      >
        <img src={story.Image} alt={story.Title} className="w-[90%] mt-2 m-auto rounded-2xl border-1 h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{story.Title || "The Galactic time traveler"}</h3>
          <span
            className={`inline-block px-3 py-1 text-sm bg-white rounded-full m-auto w-full text-center font-bold text-green-500 ${STATUS_COLORS[story.Status]} `}
          >
            {story.Status || "Completed"}
          </span>
        </div>
      </div>
    ))}
  </main>
);

export default StoryGrid;
