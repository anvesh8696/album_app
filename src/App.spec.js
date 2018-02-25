import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
    //const items = ['Learn react', 'rest', 'go out'];

    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <App />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should pass a selected value to the onChange function', () => {
        const component = shallow(<App />);
        component.find('input').simulate('change', { target: {
            value: 'Change function' }
        });

        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render one <ThumbnailComp /> components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});