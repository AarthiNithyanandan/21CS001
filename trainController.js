// Define searchTrains controller method
const trainController = {
    // Search for available trains
    searchTrains: (req, res) => {
      // Extract parameters from request query
      const { origin, destination, date } = req.query;
  
      // Validate parameters
      if (!origin || !destination || !date) {
        return res.status(400).json({ error: 'Origin, destination, and date are required' });
      }
  
      // Perform search logic (dummy data for demonstration)
      const availableTrains = [
        {
          id: 1,
          name: 'Express Train',
          origin: 'Station A',
          destination: 'Station B',
          departureTime: '08:00 AM',
          arrivalTime: '12:00 PM',
          availableSeats: 100
        },
        {
          id: 2,
          name: 'Local Train',
          origin: 'Station B',
          destination: 'Station C',
          departureTime: '10:00 AM',
          arrivalTime: '01:00 PM',
          availableSeats: 50
        }
      ];
  
      // Filter available trains based on origin, destination, and date
      const filteredTrains = availableTrains.filter(train =>
        train.origin === origin && train.destination === destination
      );
  
      // Respond with the filtered trains
      res.json({ trains: filteredTrains });
    }
  };
  