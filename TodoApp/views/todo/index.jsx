const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <a href="/todo/new">
          <h3>New Todo</h3>
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
      </div>
    );
  }
}

module.exports = Index;