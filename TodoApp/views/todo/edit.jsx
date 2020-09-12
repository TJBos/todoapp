const React = require("react");
const Layout = require("../Layout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <Layout title="Edit">
        <form action={`/todo/${this.props.index}?_method=PUT`} method="post">
          <input type="text" name="todo" value={this.props.todo} />
          <input type="submit" value="Update" />
        </form>
    </Layout>
    );
  }
}

module.exports = Edit;