const initialState = {
	tasksLoaded: [],
	tasks:[],
	message:null,
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case "UPDATE_TASK_TITLE":
			let newArray = Object.assign([], state.tasks);
			newArray[action.payload.index].title = action.payload.value
		  return Object.assign({}, state, {tasks: newArray, tasksLoaded: []});
		  break;
		case "DELETE_TASK_REJECTED":
		  return {...state, message: 'delete error'}
		  break;
		case "DELETE_TASK_FULLFILLED":
			let tasks = [...state.tasks];
			tasks.splice( action.payload, 1 );
			return {...state, tasks:tasks};
			break;
		case "ADD_TASK_REJECTED":
		  return {...state, message: 'add error'};
		  break;
		case "ADD_TASK_FULLFILLED":
			return {...state, tasks:[action.payload].concat([...state.tasks])};
			break;
		case "SAVE_TASKS_REJECTED":
		  return {...state, message: 'save error'}
		  break;
		case "SAVE_TASKS_FULLFILLED":
			return {...state, tasks:action.payload, tasksLoaded: action.payload, message:'loaded'}
			break;
		case "LOAD_TASKS_FULLFILLED":
			return {
				...state,
				tasks:action.payload,
				tasksLoaded: action.payload
			};
			break;
		case "LOAD_TASKS_REJECTED":
		  return {...state, message: 'loading error', };
		  break;
		case "REMOVE_MESSAGE":
		  return {...state, message: null};
		  break;
		default:
			return {...state};
			break;
	}

}