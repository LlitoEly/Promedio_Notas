

let promedio, num1, num2, num3, resul;

num1 = window.prompt("Ingreser la 1er Nota");
num2 = window.prompt("Ingreser la 2da Nota");
num3 = window.prompt("Ingreser la 3er Nota");
promedio= parseInt (num1,num2,num3);

promedio=(Number(num1)+Number(num2)+Number(num3))/3;

if (promedio > 7) {
    alert("Usted aprobado la materia FELICITACIONES " + promedio);
  } else {
    (promedio < 7)
  }
  alert("Usted  a reprobado la materia, esta es su nota:" + promedio);


/*document.getElementById(`salida`).innerHTML=(`El Promedio de su nota es ${promedio}`);
/*
document.write(`El Promedio de su nota es ${promedio}`);
*/