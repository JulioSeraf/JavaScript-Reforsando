<?php
// echo "HOLA BRO";
// var_dump($_FILES);
 // el metodo isset() en PHP valida se una variabel existe
if(isset($_FILES["file"])){
    // criamos un variabel en PHP usando el ($), no usamosconst o let
    $name = $_FILES["file"]["name"];
    $file = $_FILES["file"]["tmp_name"];
    $erro = $_FILES["file"]["error"];
    $destination = "assets/files/$name";
    $uploand = move_uploaded_file($file,$destination);
     var_dump($destination)

   if($uploand){
    $res = array(
        "err" => false,
        "status"=> http_response_code(400),
        "statusText" => "Archivo $name subido con éxito",
        "files" => $_FILES["file"]
    );
   }else{
    $res = array(
        "err" => true,
        "status"=> http_response_code(200),
        "statusText" => "Error al subir el archivo $name",
        "files" => $_FILES["file"]
    );
   }

   echo json_encode($res)

}