import React, { Component } from 'react'
class Options extends Component {
    sorter = e => {
        this.props.sorter(e.target.value)
    }
    render() {
        return (
            <select onChange={this.sorter} defaultValue={this.props.sortType}>
                {this.props.categories.map(category => {
                    let categoryInLowerCase = category.toLowerCase()
                    return (
                        <option value={categoryInLowerCase}>
                            {category}
                        </option>
                    )
                })}
            </select>
        )
    }
}
export default Options