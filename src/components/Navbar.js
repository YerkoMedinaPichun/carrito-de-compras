import { Component } from "react";
import Carrito from "./Carrito";
import Logo from "./Logo";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100px",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

class Navbar extends Component {
  render() {
    const { carrito, carritoVisible, mostrarCarrito } = this.props;
    console.log(carritoVisible, mostrarCarrito);
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carrito
          carrito={carrito}
          carritoVisible={carritoVisible}
          mostrarCarrito={mostrarCarrito}
        />
      </nav>
    );
  }
}

export default Navbar;
