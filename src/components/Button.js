import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#87E88B",
    border: "none",
    padding: "15px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
