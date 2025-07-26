// Features.js
import React, { useState, useEffect } from 'react';
import './features.css';

function Features() {
  const [goals, setGoals] = useState([]);
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const [goalDeadline, setGoalDeadline] = useState('');

  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStartPause = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      title: goalTitle,
      description: goalDescription,
      deadline: goalDeadline,
    };
    setGoals([...goals, newGoal]);
    setGoalTitle('');
    setGoalDescription('');
    setGoalDeadline('');
  };

  return (
    <div className="features-page">
      <h1 className="features-title">Key Features of DoneDesk</h1>

      <div className="features-container">
        <div className="main-content">
          <div className="goal-setting">
            <h2>Create a New Goal</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Goal Title"
                value={goalTitle}
                onChange={(e) => setGoalTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Goal Description"
                value={goalDescription}
                onChange={(e) => setGoalDescription(e.target.value)}
                required
              />
              <input
                type="date"
                value={goalDeadline}
                onChange={(e) => setGoalDeadline(e.target.value)}
                required
              />
              <button type="submit">Add Goal</button>
            </form>
          </div>

          <div className="goals-list">
            <h2>Your Goals</h2>
            {goals.length > 0 ? (
              <ul>
                {goals.map((goal, index) => (
                  <li key={index}>
                    <h3>{goal.title}</h3>
                    <p>{goal.description}</p>
                    <small>Deadline: {goal.deadline}</small>

                    <div className="progress-wrapper">
                      <div className="progress-bar" style={{ width: '40%' }}></div>
                    </div>
                    <small>Progress: 40%</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No goals yet. Start adding some!</p>
            )}
          </div>
        </div>

        <div className="pomodoro-timer-fixed">
          <h2>Pomodoro Timer</h2>
          <div className="timer-display">{formatTime(timeLeft)}</div>
          <div className="timer-buttons">
            <button onClick={handleStartPause}>
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
