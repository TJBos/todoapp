const React = require("react");
const Layout = require("../Layout.jsx")

class Index extends React.Component {
  render() {
    return (
      <Layout title="Index">
        <a href="/todo/new">
          <button>New Todo</button>
        </a>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
            <a href={`/todo/${index}`}>
                <li key={index}>{todo}</li>
            </a>
            );
          })}
        </ul>
        </Layout>
    );
  }
}

module.exports = Index;