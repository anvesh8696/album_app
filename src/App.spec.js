/* global describe, it, before */
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount } from 'enzyme'
import { spy } from 'sinon';
import React from 'react' // eslint-disable-line
chai.use(chaiEnzyme())
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App Component', function () {
    describe('Component ', () => {
        it('renders the div', () => {
            const wrapper = mount(<App />);
            expect(wrapper.find('div')).to.have.length()
        })
        // it('renders the label', () => {
        //     expect(defaultComponent.find('label')).to.have.length(1)
        // })
        // it('renders the default label class', () => {
        //     expect(defaultComponent.find('label')).to.have.className('switch')
        // })
        // it('returns checked switch ', () => {
        //     defaultComponent.setProps({ checked: true })
        //     expect(defaultComponent.find('label')).to.have.className('switch-checked')
        // })
        // it('returns disabled switch ', () => {
        //     defaultComponent.setProps({ disabled: true })
        //     expect(defaultComponent.find('label')).to.have.className('switch-disabled')
        // })
        // it('calls the handle change onClick function', () => {
        //     defaultComponent.setProps({ className: '', tabIndex: -1, style: {}, defaultChecked: false, label: {on: 'On', off: 'Off'}, handleChange: () => { } })
        //     let change = sinon.spy(props.onClick)
        //     defaultComponent.find('input').simulate('click')
        //     expect(change).to.have.been.calledOnce
        //     expect(defaultComponent.find(Switch)).to.have.length(1)
        // })
    })
})