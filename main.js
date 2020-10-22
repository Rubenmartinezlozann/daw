document.title = 'Ahora trabajando con DOM dinámico';

let secciones = document.getElementsByTagName('section');
[...secciones].forEach((elem, index) => elem.id = "seccion_" + index);

let p = document.getElementsByTagName('p');
[...p].forEach(elem => elem.style.fontSize = "7");


let enlace = document.getElementsByTagName('a');
[...enlace].forEach(e => {
    e.addEventListener('focus', () => {
        if (!e.focus) {
            e.style = {};
            e.classList = "";
        }
    })
})


let check = document.createElement('input');
check.type = "checkbox";
check.value = "Cambiar imagen";
let boton = document.getElementById('boton');
check.addEventListener('change', () => {
    check.checked ? boton.disabled = false : boton.disabled = true;
});
let foto = document.getElementById('foto');
foto.insertAdjacentElement(beforeend, check);


boton.addEventListener('click', () => {
    if (!check.disabled) {
        check.disabled = true
        foto.src = "https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2015/05/logotipo-google.jpg?w=666&quality=100&strip=all&ssl=1";
    }
})
