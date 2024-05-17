import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Event = ({ event, updateEvent, deleteEvent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(new Date(event.date));

  const handleUpdate = () => {
    updateEvent({ ...event, title, date });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded bg-gray-800 text-white">
      {isEditing ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded mb-2 text-gray-900"
          />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="border p-2 rounded mb-2 text-gray-900"
          />
          <button onClick={handleUpdate} className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 mb-2">
            Update
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p>{date.toDateString()}</p>
          <button onClick={() => setIsEditing(true)} className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 mr-2">
            Edit
          </button>
          <button onClick={() => deleteEvent(event.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Event;
