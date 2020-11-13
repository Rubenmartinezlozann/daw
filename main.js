const ej1 = () => {
    document.title = 'Ahora trabajando con DOM dinámico';
}

const ej2 = () => {
    let secciones = document.getElementsByTagName('section');
    [...secciones].forEach((elem, index) => elem.id = "seccion_" + index);
}

const ej3 = () => {
    let p = document.getElementsByTagName('p');
    [...p].forEach(elem => elem.style.fontSize = 22);
}

const ej4 = () => {
    let enlace = document.getElementsByTagName('a');
    [...enlace].forEach(e => {
        e.addEventListener('focus', () => {
            if (!e.focus) {
                e.style = "";
                e.classList = "";
            }
        });
    });
}

const ej5 = () => {
    let check = document.createElement('input');
    check.type = "checkbox";
    check.value = "Cambiar imagen";
    let boton = document.getElementById('boton');
    check.addEventListener('change', () => {
        check.checked ? boton.disabled = false : boton.disabled = true;
    });
    let foto = document.getElementById('foto');
    //document.insertBefore(check);

    boton.addEventListener('click', () => {
        if (!check.disabled) {
            check.disabled = true;
            foto.src = "https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2015/05/logotipo-google.jpg?w=666&quality=100&strip=all&ssl=1";
        }
    });
}

ej1();
ej2();
ej3();
ej4();
ej5();