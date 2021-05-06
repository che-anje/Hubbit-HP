<?php
session_start();

error_reporting(-1);
ini_set('display_errors', 1);

mb_language("japanese");
mb_internal_encoding("UTF-8");

define('ADMIN_MAIL', 'support-all@hubbit.io');
define('FROM_MAIL', 'support-all@hubbit.io');


function h($string)
{
    return htmlspecialchars($string);
}

function errorMessage($errors)
{
    if (!$errors) {
        return false;
    }
    $message = '<span class="font-yugo alert-txt" role="alert">' . $errors . '</span>';
    return $message;
}

function send($to, $subject, $body, $from)
{
    $mail = new PHPMailer;

//    $mail->SMTPDebug = 3;
//    $mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str<br>";};

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Username = '46d598f85ec936';
    $mail->Password = '234878e6d02009';
    $mail->Port = 2525;
    $mail->Host = 'smtp.mailtrap.io';

    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";
    $mail->setFrom($from);
    $mail->addAddress($to);

    $mail->Subject = $subject;
    $mail->Body = $body;

    return $mail->send();

}


class Csrf
{
    public static function generate()
    {
        if ($_SESSION['csrf_token']) {
            return $_SESSION['csrf_token'];
        }

        $toke_byte = openssl_random_pseudo_bytes(16);
        $csrf_token = bin2hex($toke_byte);
        $_SESSION['csrf_token'] = $csrf_token;
        return $csrf_token;
    }

    public static function validate($token)
    {
        return $_SESSION['csrf_token'] === $token;
    }

}

