let contactos = []

function agendarcontacto(){
    let nombre = prompt("Ingrese el nombre de su contacto")
    let numero = prompt("Ingrese el numero de telefono de su contacto")
    if(nombre !== "" && numero !== ""){
    contactos.push({nombre: nombre, numero: numero})
    } else{
        alert("Porfavor ingrese un nombre y un telefono")
    }
}

function buscarcontacto(nombre){
    if(nombre !== ""){
        let encontrado = false
        for(const contacto of contactos){
            if(contacto.nombre === nombre){
                console.log(`Se encontro el contacto: Nombre: ${contacto.nombre}, Telefono: ${contacto.numero}`);
                encontrado = true
                break
            }
        }
        if(encontrado === false){
            console.log("No se encontro el contacto")
              
        }
    }
    else if(nombre === ""){
        alert("debe ingresar un nombre")
    }
}

function mostrarcontactos(cantactos){
    for(const i of contactos){
        console.log(`Nombre: ${i.nombre}, Telefono: ${i.numero}`)
    }
}

let confirmar = true
while(confirmar = true){
    let menu = parseInt(prompt("Pulse 1 para agregar un nuevo contacto. Pulse 2 para buscar sus cantactos. Pulse 3 para mostrar todos sus contactos. Pulse cualquier otro numero para salir"))

    switch(menu){
        case 1: 
            agendarcontacto()
            alert("contacto agendado")
            break
        case 2:
            let nombre = prompt("Ingrese el nombre del contacto a buscar").toLowerCase()
            buscarcontacto(nombre)
            break
        case 3: 
            mostrarcontactos(contactos)
            break
        default:
            console.log("Gracias por utilizar nuestros servicios")
            break
    }
    let confirmacion = prompt("¿desea hacer otra consulta? si/no").toLowerCase()
    if (confirmacion === "no"){
        continuar = false
        console.log("Adios que tenga buen dia")
    }
}    


    

