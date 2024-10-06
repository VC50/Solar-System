// server.* {
    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, 'public')));
    
    // Define a route to serve the main page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
    
    // Start the server
    app.listen(PORT, () =>  {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    
        
    // Sample planet data
    const planets = [
        { name: "Mercury", color: "#D2691E" },
        { name: "Venus", color: "#FF7F50" },
        { name: "Earth", color: "#00FFFF" },
        { name: "Mars", color: "#B22222" },
        { name: "Jupiter", color: "#DEB887" },
        { name: "Saturn", color: "#FFA07A" },
        { name: "Uranus", color: "#87CEFA" },
        { name: "Neptune", color: "#6495ED" },
    ];
    
    // API endpoint for planets
    app.get('/api/planets', (req, res) => {
        res.json(planets);
    });