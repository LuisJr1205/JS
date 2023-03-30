<?php
if(isset($_POST)){
    // Para que php no mande erroes aunque los tenga
    error_reporting(0);
    // Variables del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    // Variables de peticion
    $domain = $_SERVER["HTTP_HOST"];
    $to = "vomit35528@cyclesat.com";
    $subject_mail = "Contacto desde el formulario del sitio $domain.";
    $message = "
    <p>
    Datos enviados desde <b>$domain</b>
    </p>
    <ul>
     <li>Nombre: $name</li>
     <li>Email: $email</li>
     <li>Asunto: $subject</li>
     <li>Comentarios: $comments</li>
    </ul>
    "; 
    $headers = "MIME-Version:1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From:Envio Automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to,$subject_mail,$message,$headers);

    if ($send_mail) {
        $res = [
            "err"=>false,
            "message" => "Tus datos han sido enviados"
        ];

    }else {
        $res = [
            "err"=>true,
            "message" => "Error al enviar los datos"
        ];
    }
    // Permisos para acceder al servidor y poder mandar la informacion
    header("Access-Control-Allow-Origin:*"); //Aqui perimte acceder a todos y se desperdician recursos del servidor
    header("Access-Control-Allow-Origin:https://direccion.com");//Aqui solo s especifica de quien se puede acceder y de quien no
    header(`Content-type:application/json`);
    echo json_encode($res);
    exit;
}