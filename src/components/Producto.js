import { Component } from "react";
import Button from "./Button";

const styles = {
  producto: {
    border: "1px solid #eee",
    boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    with: "100%",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    //console.log(this.props);
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al Carro
        </Button>
      </div>
    );
  }
}

export default Producto;