import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tab } from '../src';

import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('React Simple Tabs: Tab', () => {
  it('Should render in the DOM correctly', () => {
    const component = mount(
      <Tab>
        <h1>Billing</h1>
      </Tab>
    );
    expect(component.html()).toMatchSnapshot();
    expect(component.find(Tab).exists()).toBe(true);
  });

  it('should call onClick handler when tab is changed', () => {
    const onClickCb = jest.fn();
    const component = mount(
      <Tab onClick={onClickCb}>
        <h1>Billing</h1>
      </Tab>
    );
    expect(component.html()).toMatchSnapshot();
    component.find('a').simulate('click', { preventDefault: () => {} });
    expect(onClickCb).toHaveBeenCalledWith(component.props().tabIndex);
  });

  it('Should render title passed as props', () => {
    const component = mount(
      <Tab title="Billing" />
    );
    expect(component.html()).toMatchSnapshot();
    expect(component.contains(<span>Billing</span>)).toBeTruthy()
  });

  it('Should invoke onTabChange if passed as props', () => {
    const onClickCb = jest.fn();
    const onTabChangeCb = jest.fn();
    const component = mount(
      <Tab onClick={onClickCb} onTabChange={onTabChangeCb}>
        <h1>Billing</h1>
      </Tab>
    );
    expect(component.html()).toMatchSnapshot();
    component.find('a').simulate('click', { preventDefault: () => {} });
    expect(onClickCb).toHaveBeenCalledWith(component.props().tabIndex);
    expect(onTabChangeCb).toHaveBeenCalled();
  });

  it('Should contain is-active class if active', () => {
    const component = mount(
      <Tab isActive={true} title="Billing">
        <h1>Billing</h1>
      </Tab>
    );
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.is-active').exists()).toBe(true);
  });

  it('Should not contain is-active class if not active', () => {
    const component = mount(
      <Tab isActive={false} title="Billing">
        <h1>Billing</h1>
      </Tab>
    );
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.is-active').exists()).toBe(false);
  });
});
