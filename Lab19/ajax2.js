function showUser(str) {
  console.log("ENTRO JS");

  if (str=="") {
    document.getElementById("txtHint").innerHTML="No hay datos";
    return;
 }

 //Hago la una instanca de la conexión
 if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET","getuser.php?q="+str,true);
xmlhttp.send();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  }
 
}


