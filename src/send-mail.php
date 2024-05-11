<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php'; 

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);
$mail->isSMTP(); // Указываем использование SMTP
$mail->Host = 'mail.mirada.by'; // Указываем хост SMTP-сервера
$mail->SMTPAuth = true; // Включаем аутентификацию на SMTP-сервере
$mail->Username = 'mirada@mirada.by'; // Указываем имя пользователя SMTP
$mail->Password = 'b0ma2e8k5w5s'; // Указываем пароль SMTP
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // Указываем порт SMTP-сервера

$selectedValue = $_POST['nominal_value'];
$senderName = $_POST["sender-name"];
$senderTelegram = $_POST["sender_telegram"];
$senderWatsapp = $_POST["sender_watsapp"];
$senderPhone = $_POST["sender_phone"];

$recipientName = $_POST["recipient-name"];
$recipientTelegram = $_POST["recepient_telegram"];
$recipientWatsapp = $_POST["recepient_watsapp"];
$recipientEmail = $_POST["recepient_email"];
$recipientMessage = $_POST["message"];

// Кому отправить письмо
$mail->setFrom('mirada@mirada.by', 'Заявка с сайта');
$mail->addAddress("mirada@mirada.by");

// Тема письма
$mail->Subject = "Заявка с формы MIRADA";

// Тело письма
$body = "<table border='1'>";
$body .= "<tr><td colspan='2'><b>Информация о заказчике</b></td></tr>";
$body .= "<tr><td>Имя</td><td>$senderName</td></tr>";
$body .= "<tr><td>Выбранный номинал</td><td>$selectedValue</td></tr>";
if (!empty($senderTelegram)) {
    $body .= "<tr><td>Со мной можно связаться через Telegram</td><td>$senderTelegram</td></tr>";
}
if (!empty($senderWatsapp)) {
    $body .= "<tr><td>Со мной можно связаться через Watsapp</td><td>$senderWatsapp</td></tr>";
}
if (!empty($senderPhone)) {
    $body .= "<tr><td>Со мной можно связаться через Телефон</td><td>$senderPhone</td></tr>";
}

$body .= "</table>";

$body .= "<br>";

$body .= "<table border='1'>";
$body .= "<tr><td colspan='2'><b>Информация о получателе</b></td></tr>";
$body .= "<tr><td>Имя</td><td>$recipientName</td></tr>";

if (!empty($recipientEmail)) {
    $body .= "<tr><td>Отправить сертфикат на Email</td><td>$recipientEmail</td></tr>";
}
if (!empty($recipientTelegram)) {
    $body .= "<tr><td>Отправить сертфикат через Telegram</td><td>$recipientTelegram</td></tr>";
}
if (!empty($recipientWatsapp)) {
    $body .= "<tr><td>Отправить сертфикат через Watsapp</td><td>$recipientWatsapp</td></tr>";
}
$body .= "<tr><td>Сообщение для получателя сертификата</td><td>$recipientMessage</td></tr>";
$body .= "</table>";

$mail->Body = $body;

// Отправка письма
if(!$mail->send()) {
  $response = ['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo];
} else {
  $response = ['success' => true, 'message' => 'Спасибо! Мы свяжемся с вами как можно скорее'];
}

echo json_encode($response);
?>
