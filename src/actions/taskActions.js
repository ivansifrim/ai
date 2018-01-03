import axios from "axios";

export function removeMessage(){
	return function(dispatch){
		dispatch({type: "REMOVE_MESSAGE", payload: null })
	}
}

export function addTask(task){
	return function(dispatch){
		dispatch({type: "REMOVE_MESSAGE", payload: null })
		dispatch({type: "ADD_TASK_FULLFILLED", payload: task })
	}
}

export function loadTasks(){
	return function(dispatch) {
		dispatch({type: "REMOVE_MESSAGE", payload: null })
		axios.get("http://cfassignment.herokuapp.com/yeswecan/tasks")
			.then((response) => {
				dispatch({type:"LOAD_TASKS_FULLFILLED", payload: response.data.tasks});
			})
			.catch((err) => {
				dispatch({type:"LOAD_TASKS_REJECTED", payload: null});
			})
	};
}

export function deleteTask(ind){
	return function(dispatch){
		dispatch({type: "REMOVE_MESSAGE", payload: null })
		dispatch({type: "DELETE_TASK_FULLFILLED", payload: ind })
	}
}

export function saveTasks(tasks){
	return function(dispatch){
		dispatch({type: "REMOVE_MESSAGE", payload: null })
		axios.post("http://cfassignment.herokuapp.com/yeswecan/tasks", {
	    tasks: tasks
	  })
	  .then((response) => {
			dispatch({type:"SAVE_TASKS_FULLFILLED", payload: response.data.tasks})
		})
	  .catch((err) => {
			console.log('the error');
			console.log(err);
			dispatch({type:"SAVE_TASKS_REJECTED", payload: null});
		})
	}
}

export function updateTitle(p){
	return function(dispatch){
		dispatch({type: "UPDATE_TASK_TITLE", payload: p })
	}
}


