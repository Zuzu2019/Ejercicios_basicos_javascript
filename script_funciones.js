
//SISTEMA DE FACTURACION
let facturacion = (monto, pago) => {
    let descuento = 0
    let total = 0
    if(monto <= 200) {
        console.log("No se aplica descuento")
    } else if(monto > 200 && monto < 400 && pago === 'E'){
        console.log("Aplicar descuento del 30%")
        descuento = monto * 0.30
        total = monto - descuento
        // console.log(descuento)
        // console.log(total)
    } else if(monto > 200 && monto < 400 && pago === 'D') {
        console.log("Aplicar descuento del 20%")
        descuento = monto * 0.20
        total = monto - descuento
    } else if(monto > 200 && monto < 400 && pago === 'C') {
        console.log("Aplicar descuento del 10%")
        descuento = monto * 0.10
        total = monto - descuento
    } else {
        console.log("Descuento del 40%")
        descuento = monto * 0.40
        total = monto - descuento
    }
    return total
}



