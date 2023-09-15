/** @format */

import React, { useState } from 'react';
import { Select } from './components';
import COLOR from './assets/theme/color.json';
import './App.css';
import { convertCurrency } from './utils/helper';

const rose = {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#fecdd3',
  300: '#fda4af',
  400: '#fb7185',
  500: '#f43f5e',
  600: '#e11d48',
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
  950: '#4c0519',
};

function App() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [selectedPerson, setSelectedPerson] = useState(people[0]);

  // function toggleNav() {
  //   // Toggle: Hamburger Open/Close
  //   hamburgerMenu.classList.toggle('active');
  //   //   Toggle: Menu Active
  //   overlay.classList.toggle('overlay-active');
  //   if (overlay.classList.contains('overlay-active')) {
  //     // Animate In - Overlay
  //     overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  //     // Animate In - Nav Items
  //     navAnimation('out', 'in');
  //   } else {
  //     // Animate Out - Overlay
  //     overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  //     // Animate Out - Nav Items
  //     navAnimation('in', 'out');
  //   }
  // }

  return (
    <div className="App">
      <div className="text-gray-600">teádasdsadadst</div>

      <div className="main ">
        <div className="btn-config">
          <i className="bx bx-cog bx-spin" />
        </div>
        {/* MENU OVERLAY */}
        <div className="overlay overlay-slide-left" id="overlay">
          {/* MENU ITEMS */}
          <nav>
            <ul>
              <li id="nav-1" className="slide-out-1 center">
                <a href="#home" className="center">
                  Home
                </a>
              </li>
              <li id="nav-2" className="slide-out-2 center">
                <a href="#about" className="center">
                  About
                </a>
              </li>
              <li id="nav-3" className="slide-out-3 center">
                <a href="#skills" className="center">
                  Skills
                </a>
              </li>
              <li id="nav-4" className="slide-out-4 center">
                <a href="#projects" className="center">
                  Projects
                </a>
              </li>
              <li id="nav-5" className="slide-out-5 center">
                <a href="#contact" className="center">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* HAMBURGER MENU */}
        <div className="hamburger-menu" id="hamburger-menu">
          <div className="menu-bar1" />
          <div className="menu-bar2" />
          <div className="menu-bar3" />
        </div>
        {/* SECTIONS */}
        <section className='homePage overflow-auto'>
          <h1 className="task-header-title">Mon Sep 11 2023</h1>

          <Select />

          <div className=' bg-slate-300 rounded m-5'>
            <div className='flex flex-row px-5 py-2'>
              <span className='self-center'>18</span>
              <div className='w-full mx-5'>
                <div className=''>Hôm nay</div>
                <div className=''>15/09</div>
              </div>
              <span className='self-center'>{convertCurrency(1000000)}</span>
            </div>
          </div>

          {/* {Object.entries(COLOR).map(([key, value], index) => (
            <div key={index}>
              {key}
              <div className="grid grid-cols-12 gap-12">
                {Object.entries(value).map(([colorKey, colorValue], indexColor) => (
                  <div key={indexColor} className={`w-10 h-10 me-5 rounded`} style={{ backgroundColor: colorValue }}>
                    1
                  </div>
                ))}
              </div>
            </div>
          ))} */}

          {/* <form className="task-form">
            <input className="task-input" placeholder="Add a new task..." autofocus="true" />
            <button className="task-button">Add Task</button>
          </form> */}
          <div className="task-list">
            <div className="task-item">
              <input className="task-status" type="checkbox" data-id={-4} />
              <label className="task-name">Task 1</label>
              <button className="task-delete" data-id={-4} />
            </div>
            <div className="task-item">
              <input className="task-status" type="checkbox" data-id={-5} />
              <label className="task-name">Task 2</label>
              <button className="task-delete" data-id={-5} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
