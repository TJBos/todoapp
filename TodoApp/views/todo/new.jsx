const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/todo/" method="post">
          <label>
            New Todo <input type="text" name="todo" />
          </label>
          <input type="submit" value="new todo"></input>
        </form>
      </div>
    );
  }
}

module.exports = New;
