export const getEvents = async () => {
  // Replace with your actual API call.  For example, using fetch:
  try {
    const response = await fetch('/data/events.json'); // Replace with your data endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the calling function
  }
};