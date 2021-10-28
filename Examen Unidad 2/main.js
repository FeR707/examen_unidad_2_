
function agregar(){
    var nombre = document.getElementById("cliente").value;
    var computadora = parseInt(document.getElementById("agregar_compu").value);
    var tablet = parseInt(document.getElementById("agregar_tablet").value);

    var almacen_tablet = parseInt(document.getElementById("almacen_tablet").innerHTML);
    var almacen_compu = parseInt(document.getElementById("almacen_compu").innerHTML);
    
    if(nombre != ""){
        if(tablet <= almacen_tablet && computadora <= almacen_compu){
            document.getElementById("almacen_compu").innerHTML = almacen_compu - computadora;
            var prestado_compu = parseInt(document.getElementById("prestado_compu").innerHTML);
            document.getElementById("prestado_compu").innerHTML =prestado_compu + computadora;
    
            document.getElementById("almacen_tablet").innerHTML = almacen_tablet - tablet;
            var prestado_tablet = parseInt(document.getElementById("prestado_tablet").innerHTML);
            document.getElementById("prestado_tablet").innerHTML =prestado_tablet + tablet;
            


            var thead = document.getElementById("tabla_datos");

            let tr_nuevo = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");

            
            td1.innerHTML =nombre;
        
            td2.innerHTML = computadora;
        
            td3.innerHTML = tablet;
        
        
            tr_nuevo.appendChild(td1);
            tr_nuevo.appendChild(td2);
            tr_nuevo.appendChild(td3);
        
            thead.appendChild(tr_nuevo);
        }
        else{
            alert("Por favor verifique que los equipos deseados no sobrepase a los del almacen");
        }
    }
    else{
        alert("Ingrese un nombre o agrege los equipos")
    }
    
    document.getElementById("agregar_tablet").value = 0;
    document.getElementById('agregar_compu').value = 0;
    document.getElementById('cliente').value = "";

}
