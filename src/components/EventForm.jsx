import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ id: uuidv4(), title, date });
    setTitle('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        className="border p-2 rounded mr-2 text-gray-900"
        required
      />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="border p-2 rounded mr-2 text-gray-900"
      />
      <button type="submit" className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
