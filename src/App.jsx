import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  
  return(
     
    <>
     <header>
        <h1>Blog Title</h1>
      </header>

      <main>
        <section>
          <h2>Post List</h2>
          <ul>
            <li>1st post</li>
            <li>2nd podt</li>
            <li>3rd post</li>
            <li>4th post</li>
          </ul>
          
        </section>

        <section>
          <h2>Single Post</h2>
        </section>
      </main>

      <footer>
        <p>© 2025 Blog</p>
      </footer>
    </>
    
  );
 /*return (
   <div className="App">
    <h1>hello world</h1>
   </div>
  );
  */
}


export default App
