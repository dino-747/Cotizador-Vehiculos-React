export function calcularTotal(rango, tarifa, precio){

    let total = 300;
    const valorAño = rango
    total -= ((valorAño * 3) * total) / 100;
    
    let tarifas;
    tarifas = tarifa * precio ;

    return total + tarifas;
    
}
