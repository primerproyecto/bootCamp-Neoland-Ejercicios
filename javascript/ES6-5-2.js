const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const $input = document.querySelector('[data-function="toFilterStreamers"]');
const $boton = document.querySelector('[data-function="toShowFilterStreamers"]');
const $resetBtn = document.querySelector('#resetBtn');
const $body = document.body;

$boton.addEventListener('click', function(e){
    console.log('desd el boton ', $input.value);
    const cadenaAbuscar = $input.value;
    streamers.filter( streamer => {
        if(streamer.name.includes(cadenaAbuscar)){
            const $p = document.createElement('p');
            $p.innerHTML = streamer.name;
            $body.append($p);
        }
    })
});

$resetBtn.addEventListener('click', function(e){
    e.preventDefault();
    $input.value = '';
    document.querySelectorAll('p').forEach(p => {
        p.remove();
    })
});