<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

// La creación de instancias y pasar `true` habilita las excepciones
$mail = new  PHPMailer(true);

    $mail->SMTPOptions = array(
		'ssl' => array(
		'verify_peer' => false,
		'verify_peer_name' => false,
		'allow_self_signed' => true
		)
	);
  // Cuerpo html
  $nombre=$_POST['nombre'];
  $correo=$_POST['email'];
  $telf=$_POST['phone'];
  $mensaje=$_POST['message'];
  $asunto=$_POST['affair'];
    // Configuración del servidor
  $mail->SMTPDebug = 0;             // Habilita la salida de depuración detallada
  $mail->isSMTP();                                     // Enviar usando SMTP
  $mail->Host       ='smtp.gmail.com';                // Configure el servidor SMTP para enviar a través de smtp.gmail.com
  $mail->SMTPAuth   = true ;                           // Habilitar autenticación SMTP
  $mail->SMTPSecure = 'tls';    //PHPMailer :: ENCRYPTION_SMTPS
  $mail->Username   = 'edwardjhonatansalasmamani@gmail.com' ;  // correo
  $mail->Password   = 'salas1998' ;                   // Contraseña SMTP
  $mail->Port       = 587  ;              // Puerto TCP para conectarse, use 465 para `PHPMailer :: ENCRYPTION_SMTPS` arriba

  // Destinatarios
  $mail->setFrom('edwardjhonatansalasmamani@gmail.com','CV ~ Form Msj' );
  $mail->addAddress('cod.mobile.jhed@gmail.com','ReceiverName' );     // Agregar un destinatario

      // Contenido
      $mail->isHTML(true);                                  // Establezca el formato de correo electrónico en HTML
      $mail->Subject  =$asunto;
      $mail->Body     = '<h1 align=left> Nombre y Apellido :'.$nombre.'<br>Correo Electronico : '.$correo.'<br>Telefono :'.$telf.'<br>Mensaje :'.$mensaje.'</h1>' ;

      // Activo condificacción utf-8
      	$mail->CharSet = 'UTF-8';
        if(!$mail->Send()){
          echo json_encode('error');
        }else{
            echo json_encode($nombre);
        }

?>
