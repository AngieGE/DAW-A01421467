//******************Código extraido de codeacademy.com y minimamente modificado
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text("Respuesta Vista");
	});
}

$(document).ready(main);