import React from 'react'

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">About Goal Tracker</h1>
      <p className="mb-2">
        Goal Tracker is a simple application designed to help you set and track your personal goals.
        Whether you're looking to improve your fitness, learn a new skill, or achieve any other personal milestone,
        this app provides a straightforward way to keep you motivated and organized.
      </p>
      <p className="mb-2">
        Features include:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Set and manage your goals</li>
        <li>Track your progress</li>
        <li>Simple and intuitive interface</li>
      </ul>
      <p>
        Start achieving your goals today!
      </p>
    </div>
  )
}

export default About