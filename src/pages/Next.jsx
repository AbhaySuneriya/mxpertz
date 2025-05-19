import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Next = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mxpertztestapi.onrender.com/api/sciencefiction");
        const data = await res.json();
        console.log(data)
        const remainingStories = data.slice(80); // Show only stories after page 8 (i.e., 81+)
        setStories(remainingStories);
        console.log(stories.Title)
        setSelectedStory(remainingStories[0]);
      } catch (err) {
        console.error("Failed to fetch stories:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0420] to-[#1D143A] text-white font-sans px-8 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          The <span className="text-purple-400">Lost City</span> of <span className="text-blue-300">Future Earth</span>
        </h1>
        <button className="border border-purple-400 px-4 py-2 rounded-full hover:bg-purple-700 transition">Sign Out</button>
      </div>

      {/* Game Mode Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">Word Explorer</button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">Story Adventure</button>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">Brain Quest</button>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Left Vocab Box */}
        {selectedStory && (
          <div className="w-1/3 p-4 border-2 border-dashed border-purple-400 rounded-lg">
            <h2 className="text-teal-400 text-xl font-bold mb-2">{selectedStory.Title} <span className="text-sm text-gray-300">(Noun)</span></h2>
            <p className="text-sm text-gray-200 mb-2">{selectedStory.Description}</p>
            <img src={selectedStory.Image} alt={selectedStory.Title} className="w-full h-40 object-cover rounded mb-2" />
            {console.log(selectedStory.Image)}
            <div className="text-sm mt-2">
              <p><strong>Synonyms:</strong> hustle, rise, joy, step forward</p>
              <p><strong>Antonyms:</strong> hustle-free, joy, step forward</p>
            </div>
          </div>
        )}

        {/* Right Grid */}
        <div className="w-2/3 grid grid-cols-5 gap-4">
          {stories.slice(0, 10).map((story, i) => (
            <div
              key={i}
              onClick={() => setSelectedStory(story)}
              className="bg-white bg-opacity-10 p-2 rounded-lg hover:scale-105 transition cursor-pointer border border-blue-500"
            >
              <img src={story.Image} alt={story.Title} className="w-full h-32 object-cover rounded" />
              <p className="text-[13px] mt-2 text-center text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cum.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mt-8 gap-4">
        <Link to="/"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-800"
        >
          &#8592;
        </Link>
        <button
          onClick={() => alert("End of content")}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-800"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Next;
