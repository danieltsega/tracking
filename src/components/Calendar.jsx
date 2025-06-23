import { useState } from 'react';
import Day from './Day';

const Calendar = () => {
  const [markedDays, setMarkedDays] = useState(new Set());

  // Get current month (June 2025) details
  const today = new Date(2025, 5, 1); // June 1, 2025
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Handle day click
  const handleDayClick = (day) => {
    const newMarkedDays = new Set(markedDays);
    if (newMarkedDays.has(day)) {
      newMarkedDays.delete(day);
    } else {
      newMarkedDays.add(day);
    }
    setMarkedDays(newMarkedDays);
  };

  // Generate calendar days
  const days = [];
  // Add empty slots for days before the 1st
  for (let i = 0; i < startingDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-16 h-16 border border-gray-300 bg-gray-200"></div>);
  }
  // Add actual days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <Day
        key={day}
        date={day}
        isMarked={markedDays.has(day)}
        onClick={() => handleDayClick(day)}
      />
    );
  }

  return (
    <>
    <div className='flex flex-col'>
        <div className='w-full mx-auto text-start'>
            <h1 className="text-2xl font-bold mb-4">
            {today.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h1>
        </div>
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {/* Calendar days */}
        {days}
      </div>
    </div>
    </div>
    </>
  );
};

export default Calendar;