class App extends React.Component {
    state = {
        value: '',
        tasks: [],
    }
    handleAreaValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleAddTask = () => {
        const value = this.state.value
        const tasks = [...this.state.tasks]
        if (!value) {
            return alert('You have to add something')
        }
        tasks.push(value)
        this.setState({
            value: '',
            tasks
        })
    }
    render() {
        const item = this.state.tasks.map(item => <Item item={item} />)
        return (
            <div className='task'>
                <textarea value={this.state.value} onChange={this.handleAreaValue} cols="30" rows="5"></textarea><br />
                <button className='addTask' onClick={this.handleAddTask}>Add task</button>
                {item}
            </div>
        );
    }
}