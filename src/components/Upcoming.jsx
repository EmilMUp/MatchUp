import React, { useState } from 'react';

const Upcoming = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const matches = [
    { id: 1, team1: 'Team A', team2: 'Team B', date: '2025-04-25', time: '18:00'},
    { id: 2, team1: 'Team C', team2: 'Team D', date: '2025-04-26', time: '20:00'},
    { id: 3, team1: 'Team E', team2: 'Team F', date: '2025-04-27', time: '15:00'},
    { id: 4, team1: 'Team G', team2: 'Team H', date: '2025-04-28', time: '17:00'},
    { id: 5, team1: 'Team I', team2: 'Team J', date: '2025-04-29', time: '19:00'},
  ];

  const nextMatch = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  return (
   <div>

   </div>
  );
};

export default Upcoming;