import React from 'react'
import List from './list'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../../store"

configure({ adapter: new Adapter() });

describe('<List />', () => {
	it('renders the basic structure', () => {
		const list = shallow(<List store={store} />);
		const expectedOutput = '<div id="list-container"><div id="list-header"><div id="title">Tasks</div><div id="list-buttons"><button type="button" class="btn btn-default">Add Task</button><button type="button" class="btn btn-success" disabled="">Save</button></div></div></div>';
		const realOutput = list.html();
		expect( realOutput.indexOf(expectedOutput) > -1 ).toEqual(true);
	});
});

