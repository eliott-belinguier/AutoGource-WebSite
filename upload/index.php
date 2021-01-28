<?php
if (!isset($_COOKIE['session']) || !isset($_POST['gits'])) {
    include("session_error.php");
    return;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AutoGource</title>
    <link rel="stylesheet" href="assets/css/style.css"/>
    <script src="assets/js/main.js" type="module"></script>
</head>
<body>
    <h1 class="title">AutoGource</h1>
</form>
</body>
</html>