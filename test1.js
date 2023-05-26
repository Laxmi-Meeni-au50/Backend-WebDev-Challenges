const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3330;

app.use(bodyParser.json());

// GET /api/v3/app/events?id=:event_id
app.get('/api/v3/app/events', (req, res) => {
    const eventId = req.query.id;
    // Fetch event by event ID from the database
    // Replace the following code with your database query or logic
    const event = {
      id: eventId,
      name: 'Event Name',
      tagline: 'Event Tagline',
      schedule: '2023-05-27T10:00:00Z',
      description: 'Event Description',
      moderator: 'John Doe',
      category: 'Category',
      sub_category: 'Subcategory',
      rigor_rank: 5,
      attendees: ['user1', 'user2']
    };
  
    res.json(event);
  });
  
  // GET /api/v3/app/events?type=latest&limit=5&page=1
  app.get('/api/v3/app/events', (req, res) => {
    const type = req.query.type;
    const limit = req.query.limit;
    const page = req.query.page;
    // Fetch events by type, limit, and page from the database
    // Replace the following code with your database query or logic
    const events = [
      // Sample event objects
      // Replace with actual events fetched from the database
      { id: 1, name: 'Event 1' },
      { id: 2, name: 'Event 2' },
      { id: 3, name: 'Event 3' },
      { id: 4, name: 'Event 4' },
      { id: 5, name: 'Event 5' }
    ];
  
    res.json(events);
  });
  
  // POST /api/v3/app/events
  app.post('/api/v3/app/events', (req, res) => {
    const eventData = req.body;
    // Create event in the database using eventData
    // Replace the following code with your database insertion or logic
    const eventId = 12345; // Replace with the actual ID of the created event
  
    res.json({ id: eventId });
  });
  
  // PUT /api/v3/app/events/:id
  app.put('/api/v3/app/events/:id', (req, res) => {
    const eventId = req.params.id;
    const eventData = req.body;
    // Update event in the database using eventId and eventData
    // Replace the following code with your database update or logic
  
    res.sendStatus(204); // Send success status without content
  });
  
  // DELETE /api/v3/app/events/:id
  app.delete('/api/v3/app/events/:id', (req, res) => {
    const eventId = req.params.id;
    // Delete event from the database using eventId
    // Replace the following code with your database deletion or logic
  
    res.sendStatus(204); // Send success status without content
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
