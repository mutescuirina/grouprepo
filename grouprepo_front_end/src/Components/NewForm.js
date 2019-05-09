import React from 'react'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
} else {
    baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            population: 0,
            coast: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.currentTarget.id]:
                event.currentTarget.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + '/towns', {
            method: 'POST',
            body: JSON.stringify({ name: this.state.name }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(resJson => {
                this.props.handleAddTown(resJson)
                this.setState({
                    name: ''
                })
            }).catch(error => console.error({ 'Error': error }))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>

                <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a town" />

                <label htmlFor="population"></label>

                <input type="number" id="population" name="population" onChange={this.handleChange} value={this.state.population} placeholder="add population" />
                <input type="submit" value="Add a Town" />
            </form>
        )
    }
}
export default NewForm