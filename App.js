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
    handleRemoveTask = (item) => {
        const tasks = [...this.state.tasks].filter(task => task !== item)
        this.setState({
            tasks
        })
    }
    render() {
        const item = this.state.tasks.map(item => <Item item={item} key={item} remove={this.handleRemoveTask} />)
        return (
            <div className='task'>
                <textarea placeholder='What task do you want to add?' value={this.state.value} onChange={this.handleAreaValue} cols="28" rows="5"></textarea><br />
                <button className='addTask' onClick={this.handleAddTask}>Add task</button>
                <ul>
                    {item}
                </ul>
            </div>
        );
    }
}