# Assignment

## Description

Develop a feature to manage participant sessions. Each session should have a list of participants, and each participant should have an associated note. Additionally, each session should include a start date and an end date.

## Tasks

1. **Implement Routes:**

   - Add routes for sessions and individual session details using React Router DOM.
   - Create corresponding pages for the routes:
     - **Sessions Page:** `/sessions`
     - **Session Details Page:** `/sessions/:session_id`

2. **Sessions Page:**

   - Design a table to display all created sessions with the following columns:
     - **Session Name**
     - **Start Date**
     - **End Date**
     - **Number of Participants**
     - **Actions:** Include a button to view the details of each session.

3. **Session Details Page:**

   - Design a table to display the participants of a specific session with the following columns:
     - **Participant Name**
     - **Participant Email**
     - **Participant Note**

4. **Add Session Form:**
   - Optionally, include a form to add a new session along with its participants. The form should collect necessary information such as session name, start date, end date, and participant details.

## Requirements

- Use React and React Router DOM for implementing the routes and navigation.
