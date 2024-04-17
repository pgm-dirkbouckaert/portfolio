<?php

require 'vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set("allow_url_fopen", true);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");

use Rakit\Validation\Validator;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use SendGrid\Mail\Mail;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

// $_POST = [
//   "firstname" => "Piet",
//   "lastname" => "Pieters",
//   "email" => "piet@pieters.com",
//   "message" => "Dit is mijn bericht.",
// ];

// Create validation
$validator = new Validator;
$validation = $validator->make($_POST, [
  'firstname'   => 'required',
  'lastname'    => 'required',
  'email'       => 'required|email',
  'message'     => 'required|max:2000',
]);

// Set error messages
$validation->setMessages([
  'firstname'         => 'Voornaam is verplicht.',
  'lastname'          => 'Familienaam is verplicht.',
  'email:required'    => 'E-mail is verplicht.',
  'email:email'       => 'Vul een geldige e-mail in.',
  'message:required'  => 'Vul a.u.b. een bericht in.',
  'message:max'       => 'Jouw bericht mag uit maximum 2000 tekens bestaan.',
]);

// Validate
$validation->validate();

if ($validation->fails()) {
  // Handle errors
  $errors = $validation->errors();
  echo json_encode(["errors" => $errors->all()]);
  exit;
}

// Sanitize form data
$formData = [];
foreach ($_POST as $key => $value) {
  $formData[$key] = sanitize($value);
}

// Create htmlBody for email
$htmlBody = "A user left the following message on your portfolio site:<br><br>";
foreach ($formData as $key => $value) {
  $key = ucfirst($key);
  $htmlBody .= "<div><strong>{$key}</strong>: {$value}</div>";
}

// Send email with PHPMailer (to Mailtrap)
// ---------------------------------------
// $phpmailer = new PHPMailer(true); // passing `true` enables exceptions
// // Server settings
// $phpmailer->isSMTP();
// $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
// $phpmailer->SMTPAuth = true;
// $phpmailer->Port = 2525;
// $phpmailer->Username = $_ENV['MAILTRAP_USERNAME'];
// $phpmailer->Password = $_ENV['MAILTRAP_PASSWORD'];

// // Recipients
// $phpmailer->setFrom('mailer@portfolio.com');
// $phpmailer->addAddress('admin@portfolio.com');

// // Content
// $phpmailer->isHTML(true);
// $phpmailer->Subject = 'A message from your portfolio site';
// $phpmailer->Body = $htmlBody;

// // Send the message, check for errors
// try {
//   $phpmailer->send();
//   echo json_encode(['status' => 200]);
// } catch (Exception $e) {
//   echo json_encode(["errors" => [$e->errorMessage()]]);
//   // echo json_encode(["errors" => [$phpmailer->ErrorInfo]]);
// }

// Send email with SendGrid
// ------------------------
$email = new Mail();
$email->setFrom("text@example.com", "Support");
$email->setSubject("A message from your portfolio website");
$email->addTo("test@example.com", "Someone");
$email->addContent("text/html", $htmlBody);
$sendgrid = new \SendGrid($_ENV['SENDGRID_API_KEY']);
try {
  $response = $sendgrid->send($email);
  // print $response->statusCode() . "\n";
  // print_r($response->headers());
  // print $response->body() . "\n";
  echo json_encode(['status' => $response->statusCode()]);
} catch (Exception $e) {
  echo json_encode(["errors" => [$e->getMessage()]]);
}

// Utility: sanitize
function sanitize($item)
{
  $item = trim($item);
  $item = stripslashes($item);
  $item = htmlspecialchars($item);
  return $item;
}
