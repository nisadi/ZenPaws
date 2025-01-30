import React, { useState } from 'react';
import './BookingTime.css';


const initialSchedule = [
  { day: "Monday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
  { day: "Tuesday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
  { day: "Wednesday", startTime: "12:00 PM", endTime: "06:00 PM", enabled: false },
  { day: "Thursday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
  { day: "Friday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
  { day: "Saturday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
  { day: "Sunday", startTime: "09:00 AM", endTime: "06:00 PM", enabled: false },
];

const timeOptions = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

function BookingTime() {
  const [schedule, setSchedule] = useState(initialSchedule);

  const handleToggle = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].enabled = !updatedSchedule[index].enabled;
    setSchedule(updatedSchedule);
  };

  const handleTimeChange = (index, type, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][type] = value;
    setSchedule(updatedSchedule);
  };

  return (
    <div className="page-wrapper ">
    <div className="booking-container p-2 max-w-xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Available Booking Time</h2>
      {schedule.map((item, index) => (
        <div key={item.day} className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={item.enabled}
            onChange={() => handleToggle(index)}
            className="mr-4"
          />
          <span className={`w-24 ${!item.enabled ? "text-gray-400" : ""}`}>
            {item.day}
          </span>
          <select
            value={item.startTime}
            disabled={!item.enabled}
            onChange={(e) => handleTimeChange(index, "startTime", e.target.value)}
            className="border rounded px-3 py-1 mr-2 disabled:bg-gray-100"
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <span className="mx-2">—</span>
          <select
            value={item.endTime}
            disabled={!item.enabled}
            onChange={(e) => handleTimeChange(index, "endTime", e.target.value)}
            className="border rounded px-2 py-1 disabled:bg-gray-100"
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      ))}

        <div className="button-group flex gap-4">

          <button className="booking-now bg-violet-500 text-white font-semibold py-4 px-5 rounded-xl h-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">Book now</button>

        </div>



    </div>
    </div>
  );
}

export default BookingTime;
