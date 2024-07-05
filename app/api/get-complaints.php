<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
// Database configuration
$host = 'localhost';
$dbName = 'crime-db';
$username = 'root';
$password = '';

try {
    // Connect to the database
    $pdo = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
    
    // Prepare and execute the query
    $query = "SELECT * FROM complaints_form";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    
    // Fetch all complaints as an associative array
    $complaints = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Output the complaints as JSON
    header('Content-Type: application/json');
    echo json_encode($complaints);
    
} catch (PDOException $e) {
    // Handle database connection errors
    echo "Database connection failed: " . $e->getMessage();
}