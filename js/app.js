let boton = document.getElementById('sumar');
let respuesta = d.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n1=parseFloat(document.getElementById('n2').value);
    let s=n1+n2;
    respuesta.innerHTML='La suma es ${s}';
}


/*function sumar(){
    let n1= Number(document.getElementById("n1").value);
    let n2= Number(document.getElementById("n2").value);
    document.getElementById("resultado").value="La suma es:"+(n1+n2);
}
*/
/*function hacerSuma() {
    let n1 = parseFloat(prompt(n1));
    let n2 = parseFloat(prompt(n2));
    let respuesta = n1 + n2; 
    console.log('La suma es'+ respuesta);
}
*/