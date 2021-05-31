$(document).ready(function () {
    for( var i = 1; i <= 151; i++){
        $('#pokemones').append('<a href="#"><img id='+i+' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png"></a>'); 
    }
    $('#pokemones img').hover(function(){
        $(this).css('filter', 'drop-shadow(10px 5px 4px #6b594b)');
        }, function(){
        $(this).css('filter', 'none');
    });
    $('img').click(function () {
        $('#pokemones').addClass('col-sm-9');
        $('#pokedex').addClass('col-sm-3');
        $('#pokedex').css('border', 'solid 30px red');
        $('#pokedex').empty(); // Resetea el nuevo div, sin esta funcion aparecerían encima al volver a hacer click
        var q = $(this).attr('id');
        $.get('https://pokeapi.co/api/v2/pokemon/'+q+'/',function (valor) {
            $('#pokedex').append('<h2>'+valor.name+'</h2>');
            $('#pokedex').append("<img id="+q+" width='100px' height='100px' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+q+".png'>");
            $('#pokedex').append('<h3>Tipos</h3>');
            for(var w = 0; w < valor.types.length; w++){
                $('#pokedex').append('<ul><li><span>• </span>'+valor.types[w].type.name+'</li></ul>');
            }
            $('#pokedex').append('<h3>Altura</h3>');
            $('#pokedex').append('<p>'+valor.height+'</p>');
            $('#pokedex').append('<h3>Peso</h3>');
            $('#pokedex').append('<p>'+valor.weight+'</p>');
        },'json');
    })
});