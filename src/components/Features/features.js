import React from 'react';
import {useState} from 'react'
import './features.css'

function Features() {
    const [goals, setGoals] = useState([]);
    const [goalTitle, setGoalTitle] = useState('');
    const [goalDescription, setGoalDescription] = useState('');
    const [goalDeadline, setGoalDeadline] = useState('');

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
        <h1 className="features-title">Key Features of Progressly</h1>
  
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
                </li>
              ))}
            </ul>
          ) : (
            <p>No goals yet. Start adding some!</p>
          )}
        </div>
  
      </div>
    );
}

export default Features;