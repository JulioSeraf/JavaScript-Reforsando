<?php
//Executamos el codigo solo cuando la variable de tipo Post este definida, isset() es un metodo de php para detectar si la variabel existe

if(isset($_POST)){
    // guardamos todas la variables que viene en nustro form(name="") en variables de php() lambrando que para criar variables en php usamos $ al principio
    $name = $_POST["name"];
    $email = $_POST["email"];
    $about = $_POST["about"];
    $areText = $_POST["areaText"];
    // criamos la variable $domian para informar al remitente del form enviado para le enviarmos de donde viene la informacion, para isso usamos la variable $_SERVER["HTTP_HOST"] con este parametro host q recibe el domino de la pagina que enviar la info
    $domian = $_SERVER["HTTP_HOST"];
    // esta variabel recibe el destinatario
    $to = "juliodev26@gmail.com";
    $about = "Contacto desde el formulario del sitio $domian :$about";
    $message = "
    <p>Datos enviados desde el formulario del sitio $domian</p>
    <ul>
    <li>Nombre:<strong>$name</strong></li>
    <li>Email:<strong>$email</strong></li>
    <li>Asunto:<strong>$about</strong></li>
    <li>Comentarios:$areText</li>
    </ul>";
    $headers = "MIME-Version:1.0\r\n"."Content-Type:text/html;charset-utf-8\r\n"."From:Envio Automático No Responder <no-reply$domian>";
    

    $send_mail = mail($to,$about,$message,$headers);

    if($send_mail){
        $res =[
            "err"= false,
            "message"=> "Tus datos han sidos enviados"
        ];
    }else{
        $res =[
            "err" => true,
            "message" => "Error al enviar tus datos, intenta nuevamente"
        ];
    };
    header("Content-type:application/json");
    echo json-encode($res);
    exit;
};