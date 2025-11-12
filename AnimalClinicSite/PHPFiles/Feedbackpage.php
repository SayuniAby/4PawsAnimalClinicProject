<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch feedback
$sql = "SELECT user, rating, comment FROM feedback";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo '<div class="feedback-section">';
    while ($row = $result->fetch_assoc()) {
        echo '<div class="feedback-entry">';
        echo '<div class="user-icon">👤</div>';
        echo '<div class="stars">';
        for ($i = 0; $i < 5; $i++) {
            echo ($i < $row["rating"]) ? '★' : '☆';
        }
        echo '</div>';
        echo '<div class="comment">' . $row["comment"] . '</div>';
        echo '</div>';
    }
    echo '</div>';
} else {
    echo "No feedback available.";
}

$conn->close();
?>
