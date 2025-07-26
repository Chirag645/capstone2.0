import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-wrapper">
      <header className="about-hero">
        <h1>About <span className="highlight">DoneDesk</span></h1>
        <p>Your partner in staying focused, tracking goals, and mastering time.</p>
      </header>

      <section className="about-section mission">
        <h2>🚀 Our Mission</h2>
        <p>
          We built DoneDesk with one goal in mind — to help people take control of their time, 
          reduce overwhelm, and achieve what truly matters. Whether you're a student, a freelancer, 
          or a lifelong learner, DoneDesk empowers you to plan better, stay consistent, and feel accomplished.
        </p>
      </section>

      <section className="about-section vision">
        <h2>✨ Why DoneDesk?</h2>
        <ul>
          <li><strong>Clarity:</strong> Set meaningful goals with deadlines.</li>
          <li><strong>Focus:</strong> Use Pomodoro to work distraction-free.</li>
          <li><strong>Momentum:</strong> Track progress and build habits that stick.</li>
        </ul>
      </section>

      <section className="about-section team">
        <h2>👨‍💻 Meet the Creator</h2>
        <div className="team-card">
          <h3>Chirag Lalwani</h3>
          <p>Developer • Designer • Student @ Newton School of Technology</p>
          <p>“I created DoneDesk for people like me who love freedom but thrive in structure.”</p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Made with ❤️ by Chirag. Let's get things <span className="highlight">done</span>.</p>
      </footer>
    </div>
  );
}

export default About;