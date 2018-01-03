import React, { Component } from 'react';
import './list.css';
import { connect } from "react-redux";
import Task from '../task/task';
import { loadTasks, addTask, deleteTask, saveTasks, removeMessage, updateTitle } from '../../actions/taskActions'; 
import _ from 'underscore';

class List extends Component {
  componentDidMount () {
    this.props.loadTasks();
  };
   
  addTask(){
    // Give it a random title. The user can edit it right away.
    let task = { title: "TASK " + Math.floor((Math.random() * 1000) + 1)};
    this.props.addTask(task);
    let input = document.getElementsByTagName("input")[0]; 
    input.focus();
    setTimeout(function(){ input.setSelectionRange(0, input.value.length) },0);
  };

  saveTasks(){
    if( _.isEqual(this.props.tasksLoaded, this.props.tasks) === false ){
      this.props.saveTasks(this.props.tasks);
    };
  };

  checkChanges(){
    if ( _.isEqual(this.props.tasksLoaded, this.props.tasks) === true ){
      return true;
    }else{
      return false;
    };
  };

	tasks(){
    const tasks = this.props.tasks.map((item, index) =>
      <Task key={index} index={index} title={item.title} updateTitle={this.props.updateTitle} deleteTask={this.props.deleteTask}></Task>
    );
    return tasks;
  };

  responseMessage(){
    switch(this.props.message){
      case 'loaded':
        return(
          <div id="success-message" className="response-message">Tasks saved successfully <i className="remove-message fa fa-close" onClick={() => this.props.removeMessage()}></i></div> 
        );
      case 'save error':
        return(
          <div id="error-message" className="response-message">Tasks did not save <i className="remove-message fa fa-close" onClick={() => this.props.removeMessage()}></i></div> 
        );
      case 'loading error':
        return(
          <div id="error-message" className="response-message">The server is down. <span style={{cursor:'pointer'}} onClick={() => this.props.loadTasks()}>Click to try again</span></div> 
        );
    };
  };

  render() {
    return (      
    	<div id="list-container">
        <div id="list-header">
          <div id="title">Tasks</div>
          <div id="list-buttons">
            <button type="button" className="btn btn-default" onClick={() => this.addTask()}>Add Task</button>
            <button type="button" className="btn btn-success" disabled={this.checkChanges()} onClick={() => this.saveTasks()}>Save</button>
          </div>
        </div>	
        {this.tasks()}
        {this.responseMessage()}
		  </div>
    );
  };
};


const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    tasksLoaded: state.tasks.tasksLoaded,
    message:state.tasks.message,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTasks : () =>  dispatch(loadTasks()),
    addTask : (task) => dispatch(addTask(task)),
    deleteTask : (ind) => dispatch(deleteTask(ind)),
    saveTasks: (tasks) => dispatch(saveTasks(tasks)),
    removeMessage: () => dispatch(removeMessage()),
    updateTitle: (data) => dispatch(updateTitle(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);