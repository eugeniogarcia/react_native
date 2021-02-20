export default function reverse() {
  //Hace el merge del estado
  this.setState(this.state.items.reverse());
}
