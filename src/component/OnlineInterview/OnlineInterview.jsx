import React, { useState, useEffect, useRef } from 'react';
import './OnlineInterview.css';

const OnlineInterview = () => {
  const questions = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Array', company: 'Google',
      description: 'Find two numbers that add up to a target.',
      examples: [
        { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' },
        { input: '[3, 2, 4], target = 6', output: '[1, 2]' }
      ]
    },
    { id: 2, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', topic: 'String', company: 'Amazon',
      description: 'Find the longest substring without repeating characters.',
      examples: [
        { input: '"abcabcbb"', output: '3' },
        { input: '"bbbbb"', output: '1' }
      ]
    },
    { id: 3, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', topic: 'Binary Search', company: 'Facebook',
      description: 'Find the median of two sorted arrays.',
      examples: [
        { input: '[1, 3], [2]', output: '2.0' },
        { input: '[1, 2], [3, 4]', output: '2.5' }
      ]
    },
    { id: 4, title: 'Merge Intervals', difficulty: 'Medium', topic: 'Sorting', company: 'Microsoft',
      description: 'Merge overlapping intervals.',
      examples: [
        { input: '[[1,3], [2,6], [8,10], [15,18]]', output: '[[1,6], [8,10], [15,18]]' },
        { input: '[[1,4], [4,5]]', output: '[[1,5]]' }
      ]
    },
    { id: 5, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', topic: 'Dynamic Programming', company: 'Apple',
      description: 'Find the maximum profit from a single transaction.',
      examples: [
        { input: '[7,1,5,3,6,4]', output: '5' },
        { input: '[7,6,4,3,1]', output: '0' }
      ]
    },
    { id: 6, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', topic: 'Tree', company: 'Tesla',
      description: 'Perform inorder traversal of a binary tree.',
      examples: [
        { input: '[1,null,2,3]', output: '[1,3,2]' },
        { input: '[1]', output: '[1]' }
      ]
    },
    { id: 7, title: 'Valid Parentheses', difficulty: 'Easy', topic: 'Stack', company: 'Netflix',
      description: 'Determine if parentheses are valid.',
      examples: [
        { input: '"()[]{}"', output: 'true' },
        { input: '"([)]"', output: 'false' }
      ]
    },
    { id: 8, title: 'Reverse Linked List', difficulty: 'Easy', topic: 'Linked List', company: 'Google',
      description: 'Reverse a singly linked list.',
      examples: [
        { input: '[1,2,3,4,5]', output: '[5,4,3,2,1]' },
        { input: '[1,2]', output: '[2,1]' }
      ]
    },
    { id: 9, title: 'Maximal Rectangle', difficulty: 'Hard', topic: 'Dynamic Programming', company: 'Amazon',
      description: 'Find the largest rectangle containing only 1s in a binary matrix.',
      examples: [
        { input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', output: '6' },
        { input: '[["0"]]', output: '0' }
      ]
    },
    { id: 10, title: 'Design Twitter', difficulty: 'Medium', topic: 'Design', company: 'Facebook',
      description: 'Design a Twitter-like system with tweet posting and followers.',
      examples: [
        { input: 'No specific input', output: 'Functionality not defined for example' }
      ]
    },
    { id: 11, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', topic: 'Binary Search', company: 'Google',
      description: 'Find the minimum element in a rotated sorted array.',
      examples: [
        { input: '[3,4,5,1,2]', output: '1' },
        { input: '[4,5,6,7,0,1,2]', output: '0' }
      ]
    },
    { id: 12, title: 'Add Two Numbers', difficulty: 'Medium', topic: 'Linked List', company: 'Microsoft',
      description: 'Add two numbers represented by linked lists.',
      examples: [
        { input: '[2->4->3] + [5->6->4]', output: '[7->0->8]' },
        { input: '[0] + [0]', output: '[0]' }
      ]
    },
    { id: 13, title: 'Rotate Image', difficulty: 'Medium', topic: 'Matrix', company: 'Apple',
      description: 'Rotate an n x n matrix by 90 degrees clockwise.',
      examples: [
        { input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' },
        { input: '[[5]]', output: '[[5]]' }
      ]
    },
    { id: 14, title: 'Climbing Stairs', difficulty: 'Easy', topic: 'Dynamic Programming', company: 'Facebook',
      description: 'Count the number of distinct ways to climb to the top of a staircase.',
      examples: [
        { input: '2', output: '2' },
        { input: '3', output: '3' }
      ]
    },
    { id: 15, title: 'Kth Largest Element in an Array', difficulty: 'Medium', topic: 'Sorting', company: 'Amazon',
      description: 'Find the kth largest element in an unsorted array.',
      examples: [
        { input: '[3,2,1,5,6,4], k = 2', output: '5' },
        { input: '[3,2,3,1,2,4,5], k = 4', output: '4' }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [code, setCode] = useState('// Start coding here...');
  const [isFocused, setIsFocused] = useState(false);
  const [time, setTime] = useState(900);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleQuestionChange = (question) => {
    setCurrentQuestion(question);
    setCode('// Start coding here...');
    setIsFocused(false);
    setTime(900);
    setIsRunning(false);
  };

  const handleFocus = () => {
    if (!isFocused) {
      setCode('');
      setIsFocused(true);
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(900);
    setIsRunning(false);
  };

  return (
    <div className="online-interview-container">
      <div className="question-list">
        <h2>Practice Questions</h2>
        <ul>
          {questions.map((question) => (
            <li
              key={question.id}
              className={`question-item ${currentQuestion.id === question.id ? 'active' : ''}`}
              onClick={() => handleQuestionChange(question)}
            >
              {question.title} ({question.difficulty})
            </li>
          ))}
        </ul>
      </div>

      <div className="coding-area">
        <h2>{currentQuestion.title}</h2>
        <p>{currentQuestion.description}</p>
        <div className="examples">
          <h3>Examples:</h3>
          <ul>
            {currentQuestion.examples && currentQuestion.examples.length > 0 ? (
              currentQuestion.examples.map((example, index) => (
                <li key={index}>
                  <strong>Input:</strong> {example.input} <br />
                  <strong>Output:</strong> {example.output}
                </li>
              ))
            ) : (
              <li>No examples available</li>
            )}
          </ul>
        </div>
        <textarea
          className="code-editor"
          value={code}
          onFocus={handleFocus}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="interview-footer">
          <button className="submit-btn">Submit Solution</button>
          <span className="timer">Time Left: {formatTime(time)}</span>
          <div className="timer-controls">
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineInterview;
