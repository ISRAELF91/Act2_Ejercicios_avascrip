function ejecutar(id) {
    let problema = "";
    let solucion = "";

    switch(id) {
        case 1:
            problema = "Sumar dos números (15 y 8) definidos en el código.";
            solucion = "La suma de 15 + 8 es: " + (15 + 8);
            break;
        case 2:
            problema = "Verificar si el número 12 es par o impar.";
            solucion = "El número 12 es: " + (12 % 2 === 0 ? "Par" : "Impar");
            break;
        case 3:
            problema = "Calcular el promedio de las notas: 14, 16 y 18.";
            solucion = "El promedio es: " + ((14 + 16 + 18) / 3).toFixed(2);
            break;
        case 4:
            problema = "Evaluar si una persona de 20 años es mayor de edad.";
            solucion = "Resultado: " + (20 >= 18 ? "Es Mayor de edad" : "Es Menor de edad");
            break;
        case 5:
            problema = "Calcular el área de un rectángulo (Base: 10, Altura: 5).";
            solucion = "El área es: " + (10 * 5);
            break;
        case 6:
            problema = "Convertir 25°C a Fahrenheit.";
            solucion = "25°C equivale a: " + (25 * 9/5 + 32) + "°F";
            break;
        case 7:
            problema = "Calcular precio final de S/ 100 con 20% de descuento.";
            solucion = "Precio final: S/ " + (100 - (100 * 0.20));
            break;
        case 8:
            problema = "Mostrar la tabla de multiplicar del 7.";
            let tabla = "";
            for(let i=1; i<=10; i++) {
                tabla += `7 x ${i} = ${7*i}\n`; // \n crea el salto de línea en la ventana
            }
            solucion = "\n" + tabla;
            break;
        case 9:
            problema = "Contar pares en la lista: 4, 7, 10, 13, 16, 21.";
            let lista = [4, 7, 10, 13, 16, 21];
            let pares = lista.filter(n => n % 2 === 0).length;
            solucion = "Cantidad de números pares: " + pares;
            break;
        case 10:
            problema = "Evaluar nivel de rendimiento para un promedio de 17.";
            let prom = 17;
            let nivel = prom >= 17 ? "Excelente" : prom >= 14 ? "Bueno" : "Regular";
            solucion = "Nivel de rendimiento: " + nivel;
            break;
    }

    // Muestra la ventana emergente combinando problema y solución
    alert("EJERCICIO " + id + "\n\nPROBLEMA: " + problema + "\n\nSOLUCIÓN: " + solucion);
}