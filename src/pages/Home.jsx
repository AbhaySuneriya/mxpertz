import React, { useEffect, useState } from "react";

import Filters from "../components/Filter";
import StoryGrid from "../components/StoryGrid";
import { Link } from "react-router-dom";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState(null);
  const maxStories = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mxpertztestapi.onrender.com/api/sciencefiction");
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error("Failed to fetch stories:", err);
      }
    };
    fetchData();
  }, []);

  const filteredStories = filter
    ? stories.filter((story) => story.status === filter)
    : stories;

  const displayedStories = filteredStories.slice(0, maxStories);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 text-white font-sans">
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      <StoryGrid stories={displayedStories} />

      {/* Link to Next Page */}
      <div className="flex justify-around my-6">
       <Link
          to="/next"
          className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition"
        >
         Previous
        </Link>
        <Link
          to="/next"
          className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition"
        >
         Next
        </Link>
      </div>

     
    </div>
  );
};

export default Home;
