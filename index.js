let tabla=[{ID:"1002162",nombre:"rodrigo",apellido:"herrera",direccion:"calle 51b"
,telefono:"3013204727",correo:"rodrigoherre12@gmail.com"
},
{ID:"544540",nombre:"mariela",apellido:"salazar",direccion:"calle 53c"
,telefono:"3014667785",correo:"mariela06@gmail.com"
},
{ID:"10423546",nombre:"rafael",apellido:"vesga",direccion:"calle 2"
,telefono:"3014056542",correo:"rafaelvesga@gmail.com"}
]


function cargar(){
let elemento =document.getElementById("user")
tablallena=""
for (let i = 0; i< tabla.length;i++) {
	tablallena+=`<tr><td>${tabla[i].ID}</td><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].direccion}</td><td>${tabla[i].telefono}</td><td>${tabla[i].correo}</td></tr>`
}
elemento.innerHTML=tablallena
}
function Uregistrado(x) {
	let e = false;
	for (let i = 0; i < tabla.length; i++) {
		if (tabla[i].ID==x) {
			e = true;
		}
	}
	return e;
}


function registrar() {
	
	let identificacion=document.getElementById("ID").value
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let direccion=document.getElementById("direccion").value
	let telefono=document.getElementById("telefono").value
	let correo=document.getElementById("correo").value
	let elemento =document.getElementById("user")
	
     
   if (ID=="" || nombre=="" || apellido=="" || direccion=="" || telefono=="" || correo=="") {
    	alert("Favor llenar todos los campos");
    
     }
     else if (Uregistrado(ID) == true) {
        alert("ID registro,por favor ingresar otro");
    }
    

else {
     let usertabla={ID,nombre,apellido,direccion,telefono,correo}
     tabla.push(usertabla)
     elemento.innerHTML+=`<tr><td>${ID}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td><td>${telefono}</td><td>${correo}</td></tr>`
}
}