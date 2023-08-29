export const notas = ()=>{
    let notas = [];
    let promedio= 0;

    for (let i= 1; i< 4; i++){
        notas.push(parseFloat(prompt(`Ingresa tu nota ${i}`)))
    };
    for(let i=0; i<3; i++){
        promedio += notas[i]/3
    };

    console.log("Tus notas son: ",notas);
    console.log("Tu promedio es: ", promedio.toFixed(2));

    if (promedio <= 3.9){
        console.log("Estudie (ㆆ_ㆆ)");
    } else{
        console.log("Becado ʕ•́ᴥ•̀ʔっ")
    }

}
