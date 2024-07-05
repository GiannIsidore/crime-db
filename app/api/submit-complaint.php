<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


include 'connection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'] ?? '';
    $defendantName = $_POST['defendantName'] ?? '';
    $yourAddress = $_POST['yourAddress'] ?? '';
    $defendantAddress = $_POST['defendantAddress'] ?? '';
    $email = $_POST['email'] ?? '';
    $complaintType = $_POST['complaintType'] ?? '';
    $otherComplaintType = $_POST['otherComplaintType'] ?? '';
    $date = $_POST['date'] ?? '';
    $details = $_POST['details'] ?? '';
echo $name;
echo $defendantName;
    // Prepare SQL statement to insert form data into the database
    $sql = "INSERT INTO complaints_form (name, defendant_name, complainant_address, defendant_address, email, complaint_type, other_complaint_type, date, details) VALUES (:name, :defendantName, :yourAddress, :defendantAddress, :email, :complaintType, :otherComplaintType, :date, :details)";

    try {
        // Prepare the statement
        $stmt = $conn->prepare($sql);

        // Bind parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':defendantName', $defendantName);
        $stmt->bindParam(':yourAddress', $yourAddress);
        $stmt->bindParam(':defendantAddress', $defendantAddress);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':complaintType', $complaintType);
        $stmt->bindParam(':otherComplaintType', $otherComplaintType);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':details', $details);

        // Execute the statement
        $stmt->execute();

        // Success response
        echo "Complaint submitted successfully";
    } catch (PDOException $e) {
        // Error response
        echo "Error: " . $e->getMessage();
    }
} else {
    // Not a POST request
   http_response_code(400); // Bad Request
    echo "Invalid request. This endpoint only supports POST requests.";

}
?>