import React, { Component } from 'react';
import './task.css'

class Task extends Component {
  render() {
    return (
    	<div className="task-item">
    	  <i className="task-remove fa fa-trash-o" onClick={() => this.props.deleteTask(this.props.index)}></i>
    	  <input type="text" className="task-title" value={this.props.title}  onChange={(e) => this.props.updateTitle({index: this.props.index, value: e.target.value})}  />
    	</div>
    );
  }
}

export default Task;