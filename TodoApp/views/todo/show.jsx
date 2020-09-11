const React = require("react");

class Show extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.todo}</h1>
                <form action={`/todo/${this.props.index}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
            </div>
        )
    }
}

module.exports = Show;