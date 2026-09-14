<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["error" => "Method not allowed"]);
    http_response_code(405);
    exit;
}

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    echo json_encode(["error" => "Invalid JSON data"]);
    http_response_code(400);
    exit;
}

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$org = htmlspecialchars(trim($data['org'] ?? ''));
$scope = htmlspecialchars(trim($data['scope'] ?? ''));
$objective = htmlspecialchars(trim($data['objective'] ?? ''));

if (empty($name) || empty($email) || empty($objective)) {
    echo json_encode(["error" => "Name, email, and objective are required"]);
    http_response_code(400);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["error" => "Invalid email format"]);
    http_response_code(400);
    exit;
}

// Hostinger SMTP configuration via PHPMailer is typically required for true SMTP.
// However, since we cannot easily install composer dependencies here, 
// we will use the native mail() function which works automatically on Hostinger 
// as long as the "From" header matches a valid domain email.

$to = "dropwinggroups@gmail.com";
$subject = "New Engagement from $name - " . ($scope ?: 'General Inquiry');

$message = "
<html>
<head>
    <title>New Engagement Protocol</title>
</head>
<body style='font-family: Arial, sans-serif; padding: 20px; color: #333;'>
    <h2 style='color: #7C3AED;'>New Engagement Protocol Submitted</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Organization:</strong> " . ($org ?: 'N/A') . "</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Scope of Engagement:</strong> " . ($scope ?: 'N/A') . "</p>
    <h3>Strategic Objective:</h3>
    <p style='background-color: #f4f4f5; padding: 15px; border-left: 4px solid #7C3AED; white-space: pre-wrap;'>$objective</p>
</body>
</html>
";

// Headers MUST match the Hostinger authenticated email to ensure delivery
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
// The From address MUST be a real email address hosted on your Hostinger account
$headers .= "From: test.persynix@dropwinggroups.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
    http_response_code(200);
} else {
    echo json_encode(["error" => "Failed to send email. Please check server mail configuration."]);
    http_response_code(500);
}
?>
