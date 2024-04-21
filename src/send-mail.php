<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php"
require "PHPMailer/src/Exception.php"

$mail = new PHPMailer(true);
$mail ->CharSet = "UTF-8"
$mail ->setLanguage('ru', 'phpmailer/language/') 
$mail ->isHTML(true)

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$body = $name . ' ',. $email . ' ' . $phone . ' ' . $message;

//от кого
$mail->setFrom('info@localhost', 'Заявка с сайта');
//кому
$mail->addAdress("maryana.lus@gmail.com");
$mail->Subject = "Заявка с формы MIRADA";
//тело письма
$mail->Body = $body;


if(!$mail->send()) {
    $message = "Ошибка";
} else {
    $message = "Данные отправлены";
}

$response = ['message' => $message];
echo json_encode($response)