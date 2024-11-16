import React, { useState } from 'react';

function App() {
  // State for saved posts and tags
  const [savedPosts, setSavedPosts] = useState([]);
  const [tags, setTags] = useState({});

  const savePost = (title) => {
    setSavedPosts((prev) => [...prev, title]);
    alert(`Saved: ${title}`);
  };

  const addTag = (title) => {
    const newTag = prompt(`Enter a tag for ${title}:`);
    if (newTag) {
      setTags((prev) => ({
        ...prev,
        [title]: [...(prev[title] || []), newTag],
      }));
      alert(`Added tag "${newTag}" to ${title}`);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>CopperShore</h1>
        <nav>
          <a href="#blog">Blog</a>
          <a href="#forum">Forum</a>
          <a href="#account">Account</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section>
          <h2>KNIGHT ARMOR: BLOG #3</h2>
          <p>October 4, 2024</p>
          <img src="path_to_image.jpg" alt="Knight Armor" />
          <p>This armor is probably the best armor you have ever seen...</p>
          <button onClick={() => savePost('KNIGHT ARMOR: BLOG #3')}>Save Post</button>
          <button onClick={() => addTag('KNIGHT ARMOR: BLOG #3')}>Add Tag</button>
        </section>

        <section>
          <h2>Xenomorph</h2>
          <p>October 5, 2024</p>
          <p>Details about the Xenomorph project go here...</p>
          <button onClick={() => savePost('Xenomorph')}>Save Post</button>
          <button onClick={() => addTag('Xenomorph')}>Add Tag</button>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 CopperShore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
