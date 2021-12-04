function estructuraProducto(producto) {
    const wrapperProducto = document.createElement('li');
    const cardWrapper = document.createElement('div');
    const nameProducto = document.createElement('h1');
    nameProducto.textContent = producto.nombre;
    const precioProducto = document.createElement('h3');
    precioProducto.textContent = `$ ${producto.precio}`;
    const existenciaProducto = document.createElement('h3');
    existenciaProducto.textContent = `existencias: ${producto.existencia}`;
    const wrapperActions = document.createElement('div');
    const agregarAction = document.createElement('button');
    agregarAction.textContent = 'Agregar';
    agregarAction.id = `agregar-${producto.id}`;
    agregarAction.addEventListener('click', obtenerProducto);
    const removerAction = document.createElement('button');
    removerAction.textContent = 'Quitar';
    wrapperActions.appendChild(agregarAction);
    wrapperActions.appendChild(removerAction);
    cardWrapper.appendChild(nameProducto);
    cardWrapper.appendChild(precioProducto);
    cardWrapper.appendChild(existenciaProducto);
    cardWrapper.appendChild(wrapperActions);
    wrapperProducto.appendChild(cardWrapper);
    return wrapperProducto;
}

function listaProducto(productos) {
    const ulProductos = document.createElement('ul')
    for (let producto of productos) {
        ulProductos.append(estructuraProducto(producto));
    }
    return ulProductos
}

function obtenerProducto(e) {
    const idProducto = e.target.id.split('-')[1];
    const productoBuscado = panaderia.filter( (producto) => producto.id === Number(idProducto))[0];
    const existeProducto = carritoCompras.filter( producto => producto.producto === productoBuscado.id);
    if (existeProducto.length === 0) {
        carritoCompras.push({
            producto: productoBuscado.id,
            precio: productoBuscado.precio,
            cantidad: 1
        });
    } else {
        carritoCompras = carritoCompras.reduce( (previous, current) => {
            if (current.producto === productoBuscado.id) {
                previous.push({ producto: productoBuscado.id,
                    precio: productoBuscado.precio,
                    cantidad: current.cantidad + 1 })
            } else {
                previous.push(current)
            }
            return previous
        }, []);
    }

    console.log(carritoCompras)
}