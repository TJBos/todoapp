const React = require("react");
const Layout = require("../Layout.jsx")

class New extends React.Component {
  render() {
    return (
      <Layout title="New">
        <form action="/todo/" method="POST">
          <label>
            New Todo <input type="text" name="todo" />
          </label>
          <input type="submit" value="new todo"></input>
        </form>
        </Layout>
    );
  }
}

module.exports = New;
