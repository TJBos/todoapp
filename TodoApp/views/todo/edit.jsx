const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <div>
        <form action={`/todo/${this.props.index}?_method=PUT`} method="post">
          <input type="text" name="todo" value={this.props.todo} />
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;