import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to DoneDesk</h1>
        <p>Master your time. Achieve your goals. Stay focused.</p>
        <Link to="/features" className="cta-button">Explore Features</Link>
      </section>

      <section className="benefits-section">
        <h2>Why DoneDesk?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>🎯 Set Specific Goals</h3>
            <p>Break big dreams into actionable goals.</p>
          </div>
          <div className="benefit">
            <h3>⏱️ Use the Pomodoro Timer</h3>
            <p>Stay productive with structured focus sessions.</p>
          </div>
          <div className="benefit">
            <h3>📊 Track Progress</h3>
            <p>Visualize your journey and celebrate milestones.</p>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <p>Made with ❤️ by the DoneDesk Team</p>
      </section>
    </div>
  );
}

export default Home;