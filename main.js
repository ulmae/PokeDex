//----------------------------------------------------------
// Inicializar variables
//----------------------------------------------------------

var caja = document.getElementById('caja-de-tarjetas');
var modalName = document.getElementById('pokemonModalLabel');
var modalImg = document.getElementById('modal-img');
var modalType1 = document.getElementById('type-modal-1');
var modalType2 = document.getElementById('type-modal-2');
var modalDescription = document.getElementById('description-modal');
var tri1 = document.getElementById('tri1');
var tri2 = document.getElementById('tri2');
var tri3 = document.getElementById('tri3');
var tri4 = document.getElementById('tri4');
var tri5 = document.getElementById('tri5');
var tri6 = document.getElementById('tri6');

//----------------------------------------------------------
// Funcion que asocia los tipos de Pokemon con un color hex
//----------------------------------------------------------
function mapThemColors(currentType) {
    var bg;
    var bgLight;

    switch (currentType) {
        case pokemon_colors[0].name:
            bg = pokemon_colors[0].color;
            bgLight = pokemon_colors[0].light;
            break;
        case pokemon_colors[1].name:
            bg = pokemon_colors[1].color;
            bgLight = pokemon_colors[1].light;
            break;
        case pokemon_colors[2].name:
            bg = pokemon_colors[2].color;
            bgLight = pokemon_colors[2].light;
            break;
        case pokemon_colors[3].name:
            bg = pokemon_colors[3].color;
            bgLight = pokemon_colors[3].light;
            break;
        case pokemon_colors[4].name:
            bg = pokemon_colors[4].color;
            bgLight = pokemon_colors[4].light;
            break;
        case pokemon_colors[5].name:
            bg = pokemon_colors[5].color;
            bgLight = pokemon_colors[5].light;
            break;
        case pokemon_colors[6].name:
            bg = pokemon_colors[6].color;
            bgLight = pokemon_colors[6].light;
            break;
        case pokemon_colors[7].name:
            bg = pokemon_colors[7].color;
            bgLight = pokemon_colors[7].light;
            break;
        case pokemon_colors[8].name:
            bg = pokemon_colors[8].color;
            bgLight = pokemon_colors[8].light;
            break;
        case pokemon_colors[9].name:
            bg = pokemon_colors[9].color;
            bgLight = pokemon_colors[9].light;
            break;
        case pokemon_colors[10].name:
            bg = pokemon_colors[10].color;
            bgLight = pokemon_colors[10].light;
            break;
        case pokemon_colors[11].name:
            bg = pokemon_colors[11].color;
            bgLight = pokemon_colors[11].light;
            break;
        case pokemon_colors[12].name:
            bg = pokemon_colors[12].color;
            bgLight = pokemon_colors[12].light;
            break;
        case pokemon_colors[13].name:
            bg = pokemon_colors[13].color;
            bgLight = pokemon_colors[13].light;
            break;
        case pokemon_colors[14].name:
            bg = pokemon_colors[14].color;
            bgLight = pokemon_colors[14].light;
            break;
        case pokemon_colors[15].name:
            bg = pokemon_colors[15].color;
            bgLight = pokemon_colors[15].light;
            break;
        case pokemon_colors[16].name:
            bg = pokemon_colors[16].color;
            bgLight = pokemon_colors[16].light;
            break;
        case pokemon_colors[17].name:
            bg = pokemon_colors[17].color;
            bgLight = pokemon_colors[17].light;
            break;
        case pokemon_colors[18].name:
            bg = pokemon_colors[18].color;
            bgLight = pokemon_colors[18].light;
            break;
        default:
            bg = "000000";
    };
    return ["#" + bg ,"#" + bgLight];
};

//----------------------------------------------------------
// Funcion que crea las tarjetas de los pokemon a partir
// del objeto currentPokemon
//----------------------------------------------------------

function crearTarjeta(currentPokemon) {

    var attToggle = document.createAttribute("data-toggle");
attToggle.value = "modal";
var attTarget = document.createAttribute("data-target");
attTarget.value = "#pokemonModal";
var attClick = document.createAttribute("onclick");
attClick.value = "updateModal("+currentPokemon.pkdx_id+")";

    // Crear la tarjeta
    var card = document.createElement('div');
    card.className = "card text-center pokemon-card m-2";
    card.setAttributeNode(attToggle);
    card.setAttributeNode(attTarget);
    card.setAttributeNode(attClick);
    card.id = currentPokemon.pkdx_id;

    // Ubicar la tarjeta
    caja.appendChild(card);

    //Imagen
    var imagen = document.createElement('img');
    imagen.className = "card-img-top p-5 pokemon-image";
    imagen.alt = currentPokemon.name; // reemplazar
    imagen.style.width = "230px";
    imagen.style.height = "230px";
    imagen.src = currentPokemon.art_url; // reemplazar
    card.appendChild(imagen);

    //Card Body
    var cardBody = document.createElement('div');
    cardBody.className = "card-body p-2 bg-light pokemon-body";
    card.appendChild(cardBody);

    // Nombre
    var numerito = document.createElement('h6');
    numerito.className = "card-title text-center mt-2 mb-2 pokemon-num px-2";
    numerito.innerHTML = "#"+currentPokemon.pkdx_id; //reemplazar
    cardBody.appendChild(numerito);

    var nombre = document.createElement('h6');
    nombre.className = "card-title text-center mt-2 mb-2 pokemon-name px-3";
    nombre.innerHTML = currentPokemon.name; //reemplazar
    cardBody.appendChild(nombre);

    //Contenedor Grid
    var contTipo = document.createElement('div');
    contTipo.className = "container";
    cardBody.appendChild(contTipo);


    if (currentPokemon.types.length === 2) { //Si es de tipo dual, hacer dos columnas

        var typeColor1 = mapThemColors(currentPokemon.types[0]);
        var typeColor2 = mapThemColors(currentPokemon.types[1]);

        //Row
        var rowTipo = document.createElement('div');
        rowTipo.className = "row";
        contTipo.appendChild(rowTipo);

        //col 1
        var colTipo1 = document.createElement('div');
        colTipo1.className = "col p-0";
        rowTipo.appendChild(colTipo1);

        //Col2
        var colTipo2 = document.createElement('div');
        colTipo2.className = "col p-0";
        rowTipo.appendChild(colTipo2);

        // Botón 1
        var buttonTipo1 = document.createElement('div');
        buttonTipo1.className = "btn disabled m-1 tipo-pokemon btn-dark p-1";
        buttonTipo1.innerHTML = currentPokemon.types[0].charAt(0).toUpperCase() + currentPokemon.types[0].slice(1); //reemplazar
        buttonTipo1.style.backgroundColor = typeColor1[0];
        colTipo1.appendChild(buttonTipo1);

        // Botón 2
        var buttonTipo2 = document.createElement('div');
        buttonTipo2.className = "btn disabled m-1 tipo-pokemon btn-dark p-1";
        buttonTipo2.innerHTML = currentPokemon.types[1].charAt(0).toUpperCase() + currentPokemon.types[1].slice(1); //reemplazar
        buttonTipo2.style.backgroundColor = typeColor2[0];
        colTipo2.appendChild(buttonTipo2);

        //Colorear fondo de imagen
        imagen.style.backgroundImage = "linear-gradient(to bottom right,"+typeColor1[1]+","+typeColor2[1]+")";

    } else { //Si es de un solo tipo, hacer tres columnas

        var typeColor1 = mapThemColors(currentPokemon.types[0]);

        //Row
        var rowTipo = document.createElement('div');
        rowTipo.className = "row";
        contTipo.appendChild(rowTipo);

        //Col2
        var colTipo2 = document.createElement('div');
        colTipo2.className = "col-3 p-0";
        rowTipo.appendChild(colTipo2);

        //col 1
        var colTipo1 = document.createElement('div');
        colTipo1.className = "col-6 p-0";
        rowTipo.appendChild(colTipo1);

        //Col2
        var colTipo2 = document.createElement('div');
        colTipo2.className = "col-3 p-0";
        rowTipo.appendChild(colTipo2);

        // Botón 1
        var buttonTipo1 = document.createElement('div');
        buttonTipo1.className = "btn disabled m-1 tipo-pokemon btn-dark p-1";
        buttonTipo1.innerHTML = currentPokemon.types[0].charAt(0).toUpperCase() + currentPokemon.types[0].slice(1); //reemplazar
        buttonTipo1.style.backgroundColor = typeColor1[0];
        colTipo1.appendChild(buttonTipo1);

        //Colorear imagen de fondo
        imagen.style.backgroundColor = typeColor1[1];
    };

};



//----------------------------------------------------------
// Corre la funcion crearTarjeta para alimentarla con
// el "json" que contiene pokemon_data
//----------------------------------------------------------


for (i = 0; i < pokemon_data.length; i++) {
    crearTarjeta(pokemon_data[i]);
};

function desaparece() {
    var goAway = document.getElementById('pokeball');
    goAway.style.display = "none";
};


//----------------------------------------------------------
// Funcion que actualiza el modal
//----------------------------------------------------------

function updateModal(cardId) {
    modalName.innerHTML = "#" + pokemon_data[cardId-1].pkdx_id + " " + pokemon_data[cardId-1].name;
    modalImg.src = pokemon_data[cardId-1].art_url;
    var color1 = mapThemColors(pokemon_data[cardId-1].types[0]);
    modalType1.style.backgroundColor = color1[0];
    modalType1.innerHTML = pokemon_data[cardId-1].types[0].charAt(0).toUpperCase() + pokemon_data[cardId-1].types[0].slice(1);
    modalDescription.innerHTML = pokemon_data[cardId-1].description;

    if(pokemon_data[cardId-1].types.length === 2) {
        var color2 = mapThemColors(pokemon_data[cardId-1].types[1]);
        modalType2.style.backgroundColor = color2[0];
        modalType2.innerHTML = pokemon_data[cardId-1].types[1].charAt(0).toUpperCase() + pokemon_data[cardId-1].types[1].slice(1);
        modalType2.style.opacity = "1";
    } else {
        modalType2.style.backgroundColor = "black";
        modalType2.style.opacity = "0.4";
        modalType2.innerHTML = "-";
    }

    // Maths to generate my pseudo chart

    tri1.style.transform = "rotate(30deg) scaleX("+
    (pokemon_stats[cardId-1].base.HP*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base.HP*(1/255))+")";

    tri2.style.transform = "rotate(90deg) scaleX("+
    (pokemon_stats[cardId-1].base.Attack*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base.Attack*(1/255))+")";

    tri3.style.transform = "rotate(150deg) scaleX("+
    (pokemon_stats[cardId-1].base.Defense*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base.Defense*(1/255))+")";

    tri4.style.transform = "rotate(210deg) scaleX("+
    (pokemon_stats[cardId-1].base["Sp. Attack"]*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base["Sp. Attack"]*(1/255))+")";

    tri5.style.transform = "rotate(270deg) scaleX("+
    (pokemon_stats[cardId-1].base["Sp. Defense"]*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base["Sp. Defense"]*(1/255))+")";

    tri6.style.transform = "rotate(330deg) scaleX("+
    (pokemon_stats[cardId-1].base.Speed*(1/255))+") scaleY("+(pokemon_stats[cardId-1].base.Speed*(1/255))+")";
    
};

// Bye
window.setTimeout(desaparece,3000);