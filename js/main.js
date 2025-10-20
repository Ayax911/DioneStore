const productos = [
    {
        id: "shirt-1",
        titulo : "Shirt 1",
        imagen : "./img/camisetas/shirt-1.jpeg",
        categoria : {
            nombre : "Camisetas",
            id : "camisetas"
        },
        precio : 75000

    },
    {
        id: "shirt-2",
        titulo : "Shirt 2",
        imagen : "./img/camisetas/shirt-2.jpeg",
        categoria : {
            nombre : "Camisetas",
            id : "camisetas"
        },
        precio : 50000

    },
    {
        id: "shirt-3",
        titulo : "Shirt 3",
        imagen : "./img/camisetas/shirt-3.jpeg",
        categoria : {
            nombre : "Camisetas",
            id : "camisetas"
        },
        precio : 60000

    },
    {
        id: "shirt-4",
        titulo : "Shirt 4",
        imagen : "./img/camisetas/shirt-4.jpeg",
        categoria : {
            nombre : "Camisetas",
            id : "camisetas"
        },
        precio : 70000

    },
    {
        id: "shirt-5",
        titulo : "Shirt 5",
        imagen : "./img/camisetas/shirt-5.jpeg",
        categoria : {
            nombre : "Camisetas",
            id : "camisetas"
        },
        precio : 65000

    }, 

    //pantalones 
    {
        id: "jean-1",
        titulo : "Jean 1",
        imagen : "./img/pantalones/jean-1.jpeg",
        categoria : {
            nombre : "Pantalones",
            id : "pantalones"
        },
        precio : 90000

    }, 
    {
        id: "jean-2",
        titulo : "Jean 2",
        imagen : "./img/pantalones/jean-2.jpeg",
        categoria : {
            nombre : "Pantalones",
            id : "pantalones"
        },
        precio : 120000

    }, 
    {
        id: "jean-3",
        titulo : "Jean 3",
        imagen : "./img/pantalones/jean-3.jpeg",
        categoria : {
            nombre : "Pantalones",
            id : "pantalones"
        },
        precio : 140000

    }, 
    {
        id: "jean-4",
        titulo : "Jean 4",
        imagen : "./img/pantalones/jean-4.jpeg",
        categoria : {
            nombre : "Pantalones",
            id : "pantalones"
        },
        precio : 110000

    }, 
    {
        id: "jean-5",
        titulo : "Jean 5",
        imagen : "./img/pantalones/jean-5.jpeg",
        categoria : {
            nombre : "Pantalones",
            id : "pantalones"
        },
        precio : 100000

    }, 

    //ACCESORIOS
    {
        id: "accesorio-1",
        titulo : "accesorio 1",
        imagen : "./img/accesorios/accesorio-1.jpeg",
        categoria : {
            nombre : "Accesorios",
            id : "accesorios"
        },
        precio : 90000

    }, 
     {
        id: "accesorio-2",
        titulo : "accesorio 2",
        imagen : "./img/accesorios/accesorio-2.jpeg",
        categoria : {
            nombre : "Accesorios",
            id : "accesorios"
        },
        precio : 50000

    }, 
     {
        id: "accesorio-3",
        titulo : "accesorio 3",
        imagen : "./img/accesorios/accesorio-3.jpeg",
        categoria : {
            nombre : "Accesorios",
            id : "accesorios"
        },
        precio : 35000

    }, 
     {
        id: "accesorio-4",
        titulo : "accesorio 4",
        imagen : "./img/accesorios/accesorio-4.jpeg",
        categoria : {
            nombre : "Accesorios",
            id : "accesorios"
        },
        precio : 70000

    }, 
     {
        id: "accesorio-5",
        titulo : "accesorio 5",
        imagen : "./img/accesorios/accesorio-5.jpeg",
        categoria : {
            nombre : "Accesorios",
            id : "accesorios"
        },
        precio : 200000

    }
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos) {

     contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    });
}


cargarProductos(productos);

//CATEGORIAS DE LOS PRODUCTOS
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){

            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        }else{

            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);

        }
        

    })
})
