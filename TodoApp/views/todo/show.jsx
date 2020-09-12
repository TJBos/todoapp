const React = require("react");
const Layout = require("../Layout.jsx")

class Show extends React.Component {
    render() {
        return (
            <Layout title="Show">
                <h1>{this.props.todo}</h1>
                <form action={`/todo/${this.props.index}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
                <form action={`/todo/${this.props.index}/edit`} method="GET">
                    <input type="submit" value="edit"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Show;