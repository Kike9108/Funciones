// Ejercicio 1

function ejercicio1() {
    let colors = ["🔴","🟢","🟡","🔴"];

    for(let i=0; i<=3; i++) {
       alert(`${colors[i]}`);
       console.log(`${colors[i]}`);
    }
}

// Ejercicio 2

function rojo() {
    document.body.innerHTML = "";
    document.write(`<img src='imagenes/rojo.png' alt='rojo' width='400px'>
        <button type="submit" onclick="verde()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function verde() {
    document.body.innerHTML = "";
    document.write(`<img src='imagenes/verde.png' alt='verde' width='400px'>
        <button type="submit" onclick="amarillo()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function amarillo() {
    document.body.innerHTML = "";
    document.write(`<img src='imagenes/amarillo.png' alt='amarillo' width='400px'>
        <button type="submit" onclick="rojo()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function ejercicio2() {
    rojo();
}


// Ejercicio 3

function ejercicio3() {
    let colors = ['rojo', 'verde', 'amarillo', 'rojo'];

    for(let i=0; i<colors.length; i++) {
        setTimeout(function() {
            document.body.innerHTML = "";
            document.write(`<img src='imagenes/${colors[i]}.png' alt='${colors[i]}' width='400px'>`);
        }, 2000*i);
    }
    
    setTimeout(function() {
        document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
    }, 8000);
}
