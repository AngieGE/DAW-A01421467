<?php
$target_dir = "uploads/";
//$try = $_FILES["fileToUpload"]["name"] != null;
if(isset($_POST["submit"])){
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            $uploadOk = 1;
        } else {
            $uploadOk = 0;
        }
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
//        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
//            echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
            $hasUploaded = 1;
        } else {
//            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>