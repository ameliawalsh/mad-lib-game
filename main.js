function madLib(){

    //get inputs by id

    var alienNameInput = document.getElementById('alien-name');
    var planetNameInput = document.getElementById('planet-name');
    var noticedInput = document.getElementById('noticed');
    var noticedDoingInput = document.getElementById('noticed-doing');
    var alienReactionInput = document.getElementById('alien-reaction');

    //get values from inputs

    var alienName = alienNameInput.value;
    var planetName = planetNameInput.value;
    var noticed = noticedInput.value;
    var noticedDoing = noticedDoingInput.value;
    var alienReaction = alienReactionInput.value;

    //make the mad-lib

    var madLib = 'An alien named ' + alienName + ' arrives on planet earth after a long trip from planet ' + planetName + ' . After leaving the spaceship they look up in the sky and notice a ' + noticed + ' ' + noticedDoing + '. After seeing that for the first time the alien ' + alienReaction + 's.';

    console.log(madLib);


    //display the mad-lib


}