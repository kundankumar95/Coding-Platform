import React from 'react'
import './Explore.css'
import image1 from '../assets/image(c1).png'
import image2 from '../assets/image(c2).png'
import image3 from '../assets/image(c3).png'
import image4 from '../assets/image(c4).png'
import image5 from '../assets/image(c5).png'
import image6 from '../assets/image(c6).png'
import image7 from '../assets/image(c7).png'
import image8 from '../assets/image(c8).png'
import image9 from '../assets/image(c9).png'
import image10 from '../assets/image(c10).png'
import image11 from '../assets/image(c11).png'
import image12 from '../assets/image(c12).png'
import image13 from '../assets/image(c13).png'
import image14 from '../assets/image(c14).png'
import image15 from '../assets/image(c15).png'
import image16 from '../assets/image(c16).png'
import image17 from '../assets/image(c17).png'
import image18 from '../assets/image(c18).png'


const Explore = () => {
  return (
     <div className="explore-container">
      <h1>Engineering Subjects and Videos</h1>

      {/* Interview Preparation Row */}
      <div className="branch-row">
        <h2>Interview Preparation</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image1} alt="#" />
            <h3>Common Coding Questions</h3>
            <a href="/videos/coding-questions">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image2} alt="#" />
            <h3>System Design</h3>
            <a href="/videos/system-design">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image3} alt="#" />
            <h3>Behavioral Questions</h3>
            <a href="/videos/behavioral-questions">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="/videos/behavioral-questions">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="/videos/behavioral-questions">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence</h3>
            <a href="/videos/behavioral-questions">Watch Videos</a>
          </div>
        </div>
      </div>

      {/* Existing Branch Rows */}
      <div className="branch-row">
        <h2>Computer Science Engineering</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image8} alt="#" />
            <h3>Data Structures & Algorithm</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image7} alt="#" />
            <h3>Blockchain</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image10} alt="#" />
            <h3>Data Science</h3>
            <a href="/videos/algorithms">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image9} alt="#" />
            <h3>Python</h3>
            <a href="/videos/machine-learning">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image12} alt="#" />
            <h3>Java</h3>
            <a href="/videos/machine-learning">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image11} alt="#" />
            <h3>Web Development</h3>
            <a href="/videos/machine-learning">Watch Videos</a>
          </div>
        </div>
      </div>

      <div className="branch-row">
        <h2>Electrical Engineering</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image13} alt="#" />
            <h3>Circuit Theory</h3>
            <a href="/videos/circuits">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image14} alt="#" />
            <h3>Electromagnetic Fields</h3>
            <a href="/videos/circuits">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image15} alt="#" />
            <h3>Control Systems</h3>
            <a href="/videos/circuits">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image16} alt="#" />
            <h3>Power Systems</h3>
            <a href="/videos/circuits">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image17} alt="#" />
            <h3>Digital Signal Processing (DSP)</h3>
            <a href="/videos/circuits">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image18} alt="#" />
            <h3>Electrical Machines</h3>
            <a href="/videos/control-systems">Watch Videos</a>
          </div>
        </div>
      </div>

      

      <div className="branch-row">
        <h2>Notes</h2>
        <div className="subject-row">
          <div className="subject-card">
            <img src={image8} alt="#" />
            <h3>Data Structures & Algorithm</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image4} alt="#" />
            <h3>DataBase Management System</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image5} alt="#" />
            <h3>Operating System</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image6} alt="#" />
            <h3>Artificial Intelligence</h3>
            <a href="/videos/behavioral-questions">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image7} alt="#" />
            <h3>Blockchain</h3>
            <a href="/videos/data-structures">Watch Videos</a>
          </div>
          <div className="subject-card">
            <img src={image10} alt="#" />
            <h3>Data Science</h3>
            <a href="/videos/algorithms">Watch Videos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
