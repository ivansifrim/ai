import React from 'react'
import Task from './task'
// setup file
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Task />', () => {
	it('has an input element', () => {
		const task = shallow(<Task />);
		expect( task.find('input').length).toEqual(1);
	});

	it('has an i element', () => {
		const task = shallow(<Task />);
		expect( task.find('i').length).toEqual(1);
	});

	it('renders the basic structure', () => {
		const task = shallow(<Task  />);
		const expectedOutput = '<div class="task-item"><i class="task-remove fa fa-trash-o"></i><input type="text" class="task-title"/></div>';
		const realOutput = task.find('div.task-item').html();
		expect( realOutput.indexOf(expectedOutput) > -1 ).toEqual(true);
	});

	it('renders the title as the input value', () => {
		const task = shallow(<Task key={0} index={0} title='Play'></Task>);
		const expectedOutput = '<div class="task-item"><i class="task-remove fa fa-trash-o"></i><input type="text" class="task-title" value="Play"/></div>';
		const realOutput = task.find('div.task-item').html();
		expect( realOutput.indexOf(expectedOutput) > -1 ).toEqual(true);
	});

});

