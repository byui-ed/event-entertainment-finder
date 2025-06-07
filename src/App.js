import React, { useState, useEffect } from 'react';
import './styles/App.css';
import EventCard from './components/EventCard';
import SearchBar from './components/SearchBar';
import { getEvents } from './utils/api'; // Import the API function


function App() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error (e.g., display an error message)
      }
    };

    fetchEvents();
  }, []);


  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Entertainment Finder</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </main>
      <footer>
         {/* Footer component */}
      </footer>
    </div>
  );
}

export default App;