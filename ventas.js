const VENTAS_BASE=5;


function calcularComision(numeroVentas, precioProducto){
    let comision = 0;
     
    if(numeroVentas>VENTAS_BASE){
        let ventasExtras=numeroVentas-VENTAS_BASE;
        comision= ventasExtras*(precioProducto*0.1);
        
    }
    return comision;


}

function calcular(){
    //let componenteSueldoBase= document.getElementById("txtSueldoBase");
    //let componenteVenta= document.getElementById("txtVentas");
    //let componentePrecio= document.getElementById("txtPrecio");

    //let sueldoBaseStr=componenteSueldoBase.value;

    //let sueldoBaseStr= recuperarTexto("txtSueldoBase");
    //let numeroVentasStr= recuperarTexto("txtVentas");
    //let preciProductoStr= recuperarTexto("txtPrecio");

    //let numeroVentasStr=componenteVenta.value;
    //let preciProductoStr=componentePrecio.value;

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let preciProducto=recuperarFloat("txtPrecio");


    let comision= calcularComision(numeroVentas, preciProducto);

    let total = parseFloat(sueldoBase) + comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=parseFloat(sueldoBase);
    spComision.textContent=comision;
    spTotal.textContent=total;



}