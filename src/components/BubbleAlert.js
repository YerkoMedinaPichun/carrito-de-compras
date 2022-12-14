import { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#e9725a",
    color: "#fff",
    borderRadius: "15px",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  getNumber(number) {
    if (!number) return "";
    return number > 9 ? "9+" : number;
  }

  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}
export default BubbleAlert;
