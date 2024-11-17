// src/Forum.js
import React from 'react';
import './Forum.css'; // Import Forum-specific CSS if you create it

function Forum() {
  // Sample data for forum topics
  const topics = [
    { id: 1, title: "Props", date: "October 4, 2024", author: "User1" },
    { id: 2, title: "Functional Item", date: "October 5, 2024", author: "User2" },
    { id: 3, title: "CopperShore Design Updates", date: "October 6, 2024", author: "User3" },
  ];

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum</h1>
      <p className="forum-description">
        Welcome to the CopperShore forum! Discuss projects, share ideas, and connect with other users.
      </p>
      
      <div className="forum-topics">
        {topics.map((topic) => (
          <div key={topic.id} className="forum-topic">
            <h3>{topic.title}</h3>
            <p>Posted by {topic.author} on {topic.date}</p>
            <button className="view-button">View Discussion</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
