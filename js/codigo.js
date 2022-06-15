
//CON VALORES YA PREDEFINIDOS EN ARRAYS (NOTAS DE ALUMNOS)

const alumnos = [[9, 8, 2], [7, 10, 5], [9, 8, 6]];
const promedios = alumnos.map((alumno) => {
    let suma = alumno.reduce((a, b) => a + b);
    return suma / alumno.length;
})

alert(promedios); 




//USANDO EL PROMPT
alert("Ingrese una fruta")

const frutas = (prompt([""]));
if (frutas.includes("manzana")){
    alert ("La " + frutas + " es una excelente fruta");
} else{
    alert("La " + frutas + " es re  fea!!!")
}