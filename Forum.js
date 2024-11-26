// src/Forum.js
import React, { useState } from 'react';
import './Forum.css';

function Forum() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: '3D Printing',
      description: 'Discuss all things 3D printing.',
      topics: [
        { id: 1, title: 'Best Filament for Beginners', description: 'Tips for choosing filament.', date: 'October 4, 2024', author: 'User1' },
        { id: 2, title: 'Troubleshooting Prints', description: 'How to troubleshoot print issues.', date: 'October 5, 2024', author: 'User2' },
      ],
    },
    {
      id: 2,
      name: 'Software',
      description: 'Share software tips and tools.',
      topics: [],
    },
    {
      id: 3,
      name: 'Engineering',
      description: 'Explore engineering solutions.',
      topics: [],
    },
  ];

  // Handle category selection
  const handleCategoryClick = (category) => setSelectedCategory(category);

  // Handle back to categories
  const handleBackClick = () => setSelectedCategory(null);

  // Filter topics based on the search query
  const filteredTopics = selectedCategory
    ? selectedCategory.topics.filter((topic) =>
        `${topic.title} ${topic.description}`.toLowerCase().includes(query.toLowerCase())
      )
    : categories.filter((category) =>
        `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum</h1>

      {/* Search Bar */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search forum..."
        className="search-input"
      />

      {!selectedCategory ? (
        // Render Categories
        <div className="forum-categories">
          {filteredTopics.map((category) => (
            <div
              key={category.id}
              className="forum-category"
              onClick={() => handleCategoryClick(category)}
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Render Topics
        <div className="forum-topics">
          <button className="back-button" onClick={handleBackClick}>
            Back to Categories
          </button>
          <h2>{selectedCategory.name}</h2>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div key={topic.id} className="forum-topic">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <p>Posted by {topic.author} on {topic.date}</p>
              </div>
            ))
          ) : (
            <p>No topics match your search.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Forum;
