
import Event from './Event';

const Calendar = ({ events, updateEvent, deleteEvent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
      {events.map(event => (
        <Event
          key={event.id}
          event={event}
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </div>
  );
};

export default Calendar;
