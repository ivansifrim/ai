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
		 
		case "DELETE_TASK_REJECTED":
			return {...state, message: 'delete error'}
		case "DELETE_TASK_FULLFILLED":
			let tasks = [...state.tasks];
			tasks.splice( action.payload, 1 );
			return {...state, tasks:tasks};
		case "ADD_TASK_REJECTED":
			return {...state, message: 'add error'};
		case "ADD_TASK_FULLFILLED":
			return {...state, tasks:[action.payload].concat([...state.tasks])};
		case "SAVE_TASKS_REJECTED":
			return {...state, message: 'save error'}
		case "SAVE_TASKS_FULLFILLED":
			return {...state, tasks:action.payload, tasksLoaded: action.payload, message:'loaded'}
		case "LOAD_TASKS_FULLFILLED":
			return {
				...state,
				tasks:action.payload,
				tasksLoaded: action.payload
			};
		case "LOAD_TASKS_REJECTED":
			return {...state, message: 'loading error', };
		case "REMOVE_MESSAGE":
			return {...state, message: null};
		default:
			return {...state};
	}

}