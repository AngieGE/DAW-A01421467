	//CODIGO EXTRAIDO Y MOFICADO DE: http://michelletorres.mx/validar-formularios-con-javascript/
	var nombre, edad, correo, fecha;

	function validarFormulario(){
		var txtNombre = document.getElementById('nombre').value;
		var txtEdad = document.getElementById('edad').value;
		var txtCorreo = document.getElementById('correo').value;
		var txtFecha = document.getElementById('fecha').value;
 	
		if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
			alert('ESPERA. Debes escribir un nombre');
			return false;
		}else{ nombre = txtNombre;}
 
		if(txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)){
			alert('ESPERA. Tu edad debe ser un numero existente mayor a 0');
			return false;
		} else{ edad = txtEdad;}
 
		if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
			alert('ESPERA. Escribe un correo valido');
			return false;
		} else{ correo = txtCorreo;}
 
		if(!isNaN(txtFecha)){
			alert('ESPERA. Debes seleccionar una fecha');
			return false;
		} else{ fecha = txtFecha;}

		return true;
	}

	function hola(){
		if(validarFormulario()==true){
			console.log('entro al if');
			alert('¡GRACIAS! ' + nombre + ' de ' + edad + 'años. Te estaremos enviando informacion sobre pandas al correo ' + correo);
		}
	}