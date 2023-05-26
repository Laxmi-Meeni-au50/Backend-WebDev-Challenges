// Create a Nudge:-

// Endpoint: /nudges
// Request Type: POST
// Payload:{
//     "eventTag": "string",
//     "title": "string",
//     "coverImage": "string (URL)",
//     "scheduledTime": "string (ISO 8601 datetime)",
//     "description": "string",
//     "icon": "string (URL)",
//     "invitation": "string"
//   }
  
// Description: This endpoint allows users to create a new nudge by providing the necessary details in the payload. The eventTag field is used to tag the event associated with the nudge. The coverImage field represents the URL of the image to be used as the nudge cover. The scheduledTime field specifies the desired time for sending the nudge. The icon field represents the URL of the nudge icon. The invitation field contains the one-line invitation text.

// Retrieve a Nudge:-

// Endpoint: /nudges/{nudgeId}
// Request Type: GET
// Description: This endpoint retrieves the details of a specific nudge based on the provided nudgeId. The response will include all the fields mentioned in the payload of the create request.

// Update a Nudge:-

// Endpoint: /nudges/{nudgeId}
// Request Type: PUT
// Payload:
// {
//     "title": "string",
//     "coverImage": "string (URL)",
//     "scheduledTime": "string (ISO 8601 datetime)",
//     "description": "string",
//     "icon": "string (URL)",
//     "invitation": "string"
//   }
// Description: This endpoint allows users to update the details of a specific nudge identified by nudgeId. The payload should contain the fields to be updated.


// Delete a Nudge:-

// Endpoint: /nudges/{nudgeId}
// Request Type: DELETE
// Description: This endpoint deletes a specific nudge identified by nudgeId. Once deleted, the nudge will no longer be available.
// Note: Replace {nudgeId} in the endpoint URLs with the actual identifier of the nudge.


// CRUD Functionalities:

// Create:
// To create a new nudge, send a POST request to the /nudges endpoint with the required payload.

// Read:
// To retrieve the details of a specific nudge, send a GET request to the /nudges/{nudgeId} endpoint, where {nudgeId} is the identifier of the nudge.

// Update:
// To update the details of a specific nudge, send a PUT request to the /nudges/{nudgeId} endpoint with the desired changes provided in the payload.

// Delete:
// To delete a specific nudge, send a DELETE request to the /nudges/{nudgeId} endpoint, where {nudgeId} is the identifier of the nudge to be deleted.

//The sample code looks like this:-
 const fetch = require('node-fetch');


// Base URL for the API
const baseURL = 'https://api.example.com';

// Function to create a nudge
async function createNudge(nudgeData) {
  try {
    const response = await fetch(`${baseURL}/nudges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nudgeData),
    });
    const data = await response.json();
    console.log('Nudge created:', data);
    return data;
  } catch (error) {
    console.error('Error creating nudge:', error);
    throw error;
  }
}

// Function to retrieve a nudge
async function getNudge(nudgeId) {
  try {
    const response = await fetch(`${baseURL}/nudges/${nudgeId}`);
    const data = await response.json();
    console.log('Retrieved nudge:', data);
    return data;
  } catch (error) {
    console.error('Error retrieving nudge:', error);
    throw error;
  }
}

// Function to update a nudge
async function updateNudge(nudgeId, updatedData) {
  try {
    const response = await fetch(`${baseURL}/nudges/${nudgeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    console.log('Nudge updated:', data);
    return data;
  } catch (error) {
    console.error('Error updating nudge:', error);
    throw error;
  }
}
//calling the functions with required parameters:-
const nudgeData = {
    eventTag: 'event123',
    title: 'My Nudge',
    coverImage: 'https://example.com/nudge-image.jpg',
    scheduledTime: '2023-05-27T10:00:00Z',
    description: 'This is my nudge description.',
    icon: 'https://example.com/nudge-icon.jpg',
    invitation: 'Join the event now!'
  };
  
  createNudge(nudgeData)
    .then(createdNudge => {
      // Perform actions with the created nudge
      const nudgeId = createdNudge.id;
      // Retrieve the nudge
      getNudge(nudgeId)
        .then(retrievedNudge => {
          // Update the nudge
          const updatedData = {
            title: 'Updated Nudge',
            description: 'This is an updated description.'
          };
          updateNudge(nudgeId, updatedData)
            .then(updatedNudge => {
              // Perform actions with the updated nudge
            })
            .catch(error => {
              // Handle error while updating nudge
            });
        })
        .catch(error => {
          // Handle error while retrieving nudge
        });
    })
    .catch(error => {
      // Handle error while creating nudge
    });
  
  