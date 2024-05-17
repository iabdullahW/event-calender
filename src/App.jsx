import { useState } from 'react';
import Calendar from './components/Calendar';
import EventForm from './components/EventForm';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => setEvents([...events, event]);

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  const deleteEvent = (id) => setEvents(events.filter(event => event.id !== id));

  return (
    <div className="w-full h-full min-h-screen bg-gray-950 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 mt-8 text-white hover:text-teal-500">
        "Event Calendar
      </h1>
      <EventForm addEvent={addEvent} />
      <Calendar events={events} updateEvent={updateEvent} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
