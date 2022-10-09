/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click */

    const $boton = document.createElement('button');
    $boton.innerText = 'Botón dinámico';
    $boton.id = 'btnToClick';

    $boton.addEventListener('click', function(e){
        e.preventDefault();
        console.log('este es el click', e);
    });

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
    $boton.addEventListener('focus', function(e){
        e.preventDefault();
        console.log('desde el evento focus', e);
    });
/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

    const $inputs = document.querySelectorAll('input');
    for (const elementos of $inputs){
        elementos.addEventListener('input', updateValue)
    }
    const $log = document.getElementById('values');

    function updateValue(e) {
        console.log('desde el evento focus', e);
        $log.textContent = e.target.value + ' ';
    }
    //agrego boton al body
    document.body.append($boton);