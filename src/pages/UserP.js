import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Products/Cards";
import Items from "../components/Carrito/Items";
import Form from "../components/NewProduct/Form";
import AddButton from "../components/NewProduct/AddButton";
import data from "../data/data.json";
export default function UserP() {
  const [productos, setProductos] = useState([]);
  const [id, setId] = useState(-1);
  const [carrito, setCarrito] = useState([]);

  //estado para notificaciones
  const [mostrar, setMostrar] = useState(false);
  //estado para el formulario
  const [soltar, setSoltar] = useState(false);
  //estado para el modo de los componentes (usuario o admin)
  const [modo, setModo] = useState(false);
  //estado para decidir agregar o editar
  const [operacion, setOperacion] = useState(false);

  const [producto, setProducto] = useState({
    imagen: "",
    nombre: "",
    precio: "",
  });

  //métodos para el usuario
  const agregarCarrito = (e) => {
    const nuevoProducto = carrito.find(
      (producto) => producto.nombre === productos[e.target.id].nombre
    );

    if (nuevoProducto) {
      nuevoProducto.cantidad++;
    } else {
      console.log("es nuevo");
      setCarrito([...carrito, { ...productos[e.target.id], cantidad: 1 }]);
    }
  };

  const eliminarCarrito = (e) => {
    if (carrito[e.target.id].cantidad > 1) {
      let arrNuevo = [...carrito];
      arrNuevo[e.target.id].cantidad--;
      setCarrito(arrNuevo);
    } else {
      setCarrito(
        carrito.filter(
          (producto) => carrito[e.target.id].nombre !== producto.nombre
        )
      );
    }
  };

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  //métodos del admin

  const eliminarProducto = (e) => {
    setProductos(
      productos.filter(
        (producto) => producto.nombre !== productos[e.target.id].nombre
      )
    );
    setCarrito(carrito.filter((articulo)=>articulo.nombre !== productos[e.target.id].nombre))
  };

  const agregarProducto = () => {
    productos.push(producto);
    setSoltar(false);
  };

  const editarProducto = (e) => {
    e.preventDefault();
    productos[id] = producto;
    setSoltar(false);
  };

  const agregar = (e) => {
    e.preventDefault();
    setSoltar(true);
    //Si es true se agrega
    setOperacion(true);
  };

  const editar = (e) => {
    e.preventDefault();
    setSoltar(true);
    setOperacion(false);
    setId(e.target.id);
  };

  async function handleInputChange({ target }) {
    const { name, value } = target;
    if (name === "imagen") {
      const file = target.files[0];
      const url = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.onerror = (e) => {
          reject(e);
        };
        reader.readAsDataURL(file);
      });
      
      setProducto((prevProducto) => ({
        ...prevProducto,
        [name]: url,
      }));
      return;
    }
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  }

  return (
    <>
      <Header
        mostrar={() => setMostrar(!mostrar)}
        cambiarModo={() => setModo(!modo)}
        modo={modo}
        cantidadCarrito={carrito.length <= 9 ? carrito.length : "9+"}
      />
      <Cards
        modo={modo}
        soltarForm={(e) => editar(e)}
        productos={productos}
        agregarCarrito={(e) => agregarCarrito(e)}
        eliminarProducto={(e) => eliminarProducto(e)}
      />
      {mostrar && (
        <Items carrito={carrito} eliminarCarrito={(e) => eliminarCarrito(e)} />
      )}
      {soltar && (
        <Form
          cerrarForm={() => setSoltar(false)}
          guardarDatos={(e) => handleInputChange(e)}
          agregarProducto={
            operacion ? agregarProducto : (e) => editarProducto(e)
          }
        />
      )}
      {modo && <AddButton soltarForm={(e) => agregar(e)} />}
    </>
  );
}
