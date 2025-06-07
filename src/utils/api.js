export const getEvents = async () => {
  try {
    // Replace with your actual API call
    const response = await fetch('/data/events.json'); // Example fetching from local JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be handled in App.js
  }
};