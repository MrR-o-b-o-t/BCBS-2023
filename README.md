<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <h1>BCBS Application</h1>

  <p>
    <img src="https://your-image-url.com" alt="Application Screenshot">
  </p>

  <h2>Description</h2>

  <p>
    This is an application built for Blue Cross Blue Shield as part of challenge. It was built with React, Express, Node, Axios, Typescript, & ReactBootstrap. It pulls data fromo https://reqres.in to view, add, and delete users.
  </p>

  <h2>Features</h2>

  <ul>
    <li>View a list of users with their name and job title.</li>
    <li>Add a new user by providing their name, job title.</li>
    <li>Delete a user from the list.</li>
  </ul>

  <h2>Installation</h2>

  <ol>
    <li>Clone the repository:</li>
  </ol>

  <pre><code>git clone https://github.com/MrR-o-b-o-t/BCBS-2023</code></pre>

  <ol start="2">
    <li>Navigate to the project directory:</li>
  </ol>

  <pre><code>cd bcbs-2023</code></pre>

  <ol start="3">
    <li>Install the dependencies for the server:</li>
  </ol>

  <pre><code>cd server
npm install</code></pre>

  <ol start="4">
    <li>Install the dependencies for the client:</li>
  </ol>

  <pre><code>cd client
npm install</code></pre>

  <ol start="5">
    <li>Start the development server:</li>
  </ol>

  <pre><code>
    cd server 
    npm run start
    cd ..
    cd client
    npm run start
  </code></pre>

  <ol start="6">
    <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to access the application.</li>
  </ol>

  <h2>API Routes</h2>

  <ul>
    <li><code>GET /api/users</code>: Get a list of users.</li>
    <li><code>POST /api/users</code>: Add a new user.</li>
    <li><code>DELETE /api/users/:id</code>: Delete a user by ID.</li>
  </ul>

  <h2>Technologies Used</h2>

  <ul>
    <li>React</li>
    <li>Express</li>
    <li>Node</li>
    <li>Axios</li>
    <li>Bootstrap</li>
    <li>React Bootstrap</li>
  </ul>

  <h2>Contributing</h2>

  <p>Contributions are welcome! Here's how you can contribute to this project:</p>

  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b feature/your-feature</code>.</li>
    <li>Commit your changes: <code>git commit -m "Add some feature"</code>.</li>
    <li>Push to the branch: <code>git push origin feature/your-feature</code>.</li>
    <li>Submit a pull request.</li>
  </ol>

  <h2>License</h2>

  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

  <h2>Future features</h2>
    <ol>
    <li>Update application to store avatar files locally and match returned api cards.</li>
    <li>Add client-side authentication for optimization and usability.</li>
    <li>Add authentication to "deleteUser" functionality.</li>
    <li>Add unit testing.</li>
  </ol>
</body>
</html>
