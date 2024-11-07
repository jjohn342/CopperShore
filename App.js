// src/App.js
import React from 'react';

function App() {
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
        </section>

        <section>
          <h2>Xenomorph</h2>
          <p>October 5, 2024</p>
          <p>Details about the Xenomorph project go here...</p>
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
