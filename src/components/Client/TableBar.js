import React, { Component } from 'react'
// import '../styles/TableBar.css'
class TableBar extends Component {
    handleClick = e => {
        this.props.sorter(e.target.innerHTML.toLowerCase())
    }
    render() {
        return (
            <div className="client-table" id="table-top" >
                {this.props.categories.map(category => (
                    <span key={category} onClick={this.handleClick}>
                        {category}
                    </span>
                ))}
            </div>
        )
    }
}
export default TableBar