import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arvejas", price: 2500, img: "/productos/arvejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carrito: [],
    carritoVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carrito } = this.state;

    if (carrito.find((el) => el.name === producto.name)) {
      const newCarrito = carrito.map((el) =>
        el.name === producto.name ? { ...el, cantidad: el.cantidad + 1 } : el
      );
      return this.setState({ carrito: newCarrito });
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarrito = () => {
    if (!this.state.carrito.length) return;
    this.setState({ carritoVisible: !this.state.carritoVisible });
  };

  render() {
    const { carritoVisible } = this.state;
    console.log(carritoVisible);
    return (
      <div>
        <Navbar
          mostrarCarrito={this.mostrarCarrito}
          carritoVisible={carritoVisible}
          carrito={this.state.carrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
