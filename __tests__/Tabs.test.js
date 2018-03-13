import React from 'react';
import { Tabs, Tab } from '../src';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const TabsComponent = () => {
  return (
    <Tabs>
      <Tab title="Billing">
        <h1>Billing</h1>
      </Tab>
      <Tab title="Notifications">
        <h1>Notifications</h1>
      </Tab>
      <Tab title="Apps">
        <h1>Apps</h1>
      </Tab>
    </Tabs>
  );
};

describe('React Simple Tabs', () => {
  it('Should render in the DOM correctly', () => {
    const component = mount(<TabsComponent />);
    expect(component.html()).toMatchSnapshot();
    expect(component.find(Tabs).exists()).toBe(true);
    expect(component.find(Tab).exists()).toBe(true);
  });

  it('Should render tabs as children correctly', () => {
    const component = mount(<TabsComponent />);
    expect(component.html()).toMatchSnapshot();
    expect(component.find(Tab).length).toBe(3);
  });

  it('Should render content at 0 by default', () => {
    const component = mount(<TabsComponent />);
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.tabs--current-content').text()).toEqual('Billing');
  });

  it('Should render content at specified default index if passed as props', () => {
    const component = mount(
      <Tabs defaultTabIndex={1}>
        <Tab>
          <h1>Billing</h1>
        </Tab>
        <Tab>
          <h1>Notifications</h1>
        </Tab>
        <Tab>
          <h1>Apps</h1>
        </Tab>
      </Tabs>
    );
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.tabs--current-content').text()).toEqual(
      'Notifications'
    );
  });

  it('Should change content to the selected tab from index', () => {
    const component = mount(<TabsComponent />);
    expect(component.html()).toMatchSnapshot();

    expect(component.find('.tabs--current-content').text()).toEqual('Billing');

    component
      .find('span')
      .last()
      .simulate('click', {
        preventDefault: () => {},
      });

    expect(component.find('.tabs--current-content').text()).toEqual('Apps');
  });

  it('Should modify wrapper styling if passed as prop', () => {
    const component = mount(
      <Tabs wrapperClassName="modified-wrapper-class">
        <Tab>
          <h1>Billing</h1>
        </Tab>
        <Tab>
          <h1>Notifications</h1>
        </Tab>
        <Tab>
          <h1>Apps</h1>
        </Tab>
      </Tabs>
    );
    expect(component.find('.modified-wrapper-style')).toBeTruthy();
  });

  it('Should modify tabs styling if passed as props', () => {
    const component = mount(
      <Tabs className="modified-class-styles">
        <Tab>
          <h1>Billing</h1>
        </Tab>
        <Tab>
          <h1>Notifications</h1>
        </Tab>
        <Tab>
          <h1>Apps</h1>
        </Tab>
      </Tabs>
    );
    expect(component.find('.modified-class-style')).toBeTruthy();
  });

  it('Should modify content styling if passed as props', () => {
    const component = mount(
      <Tabs currentContentClassName="modified-content-style">
        <Tab>
          <h1>Billing</h1>
        </Tab>
        <Tab>
          <h1>Notifications</h1>
        </Tab>
        <Tab>
          <h1>Apps</h1>
        </Tab>
      </Tabs>
    );
    expect(component.find('.modified-content-style')).toBeTruthy();
  });
});
