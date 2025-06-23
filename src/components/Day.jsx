import { useState } from 'react';

const Day = ({ date, isMarked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-20 h-20 border border-gray-300 flex items-center justify-center cursor-pointer relative bg-white hover:bg-gray-50 transition"
    >
      <span className="text-sm font-medium">{date}</span>
      {isMarked && (
        <span className="absolute text-red-500 text-3xl font-bold pointer-events-none">
          X
        </span>
      )}
    </div>
  );
};

export default Day;