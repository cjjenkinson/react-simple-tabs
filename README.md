[![npm version](https://badge.fury.io/js/react-simple-tabs.svg)](https://badge.fury.io/js/react-simple-tabs)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/cjjenkinson/react-simple-tabs)
[![Build Status](https://travis-ci.org/vidocco/react-simple-tabs.svg?branch=master)](https://travis-ci.org/cjjenkinson/react-simple-tabs)
[![codecov](https://codecov.io/gh/cjjenkinson/react-simple-tabs/branch/master/graph/badge.svg)](https://codecov.io/gh/cjjenkinson/react-simple-tabs)
[![Maintainability](https://api.codeclimate.com/v1/badges/ea7372ff90130497dc1f/maintainability)](https://codeclimate.com/github/cjjenkinson/react-simple-tabs/maintainability)
[![NSP Status](https://nodesecurity.io/orgs/cameron-jenkinson-public-repos/projects/7f2d001b-c750-42cc-9b9f-f4ec3e08250c/badge)](https://nodesecurity.io/orgs/cameron-jenkinson-public-repos/projects/7f2d001b-c750-42cc-9b9f-f4ec3e08250c)
[![Inline docs](http://inch-ci.org/github/vidocco/react-popup.svg?branch=master)](http://inch-ci.org/github/cjjenkinson/react-simple-tabs)

# React Simple Tabs

A simple customizable tabs component for React applications.

## Installation

```shell
yarn add react-simple-tabs
```
or with NPM

```shell
npm install --save react-simple-tabs
```

## Useage

```js
import { Tabs, Tab } from 'react-simple-tabs';
```

## Basic Example

The basic example out of the box looks like this:

Add instances of tabs as children to the Tabs component wrapper and add the content (including React components) within each Tab instance.

Change the starting default Tab index by updating the ```defaultTabIndex```

The ```onTabChange``` prop accepts a callback function which is executed every time a tab has changed.

Pass the associated ```title``` as a prop to each Tab and it will render within a ```<span>``` tag for each instance.

```js
import React from 'react';
import { Tabs, Tab } from 'react-simple-tabs';

class MyComponent extends React.Component {
  render() {
    return (
      <Tabs
        defaultTabIndex={1}
        onTabChange={onTabChangeCallback}>
        <Tab title="Apps">
          <h2>Apps</h2>
          <p>
            Here, you’ll find the apps that you’ve built yourself or have installed and authorised.
          </p>
        </Tab>
        <Tab title="Notifications">
          <h2>Notifications</h2>
          <p>
            Update your notification preferences.
          </p>
        </Tab>
        <Tab title="Billing">
          <h2>Billing</h2>
          <p>
            Change your credit card and address we have on file.
          </p>
        </Tab>
    )
  }
}
```

## Customised Example

Add custom CSS classes to overide the style of the components, in-inline styles are not currently supported.

```js
import React from 'react';
import { Tabs, Tab } from 'react-simple-tabs';

class MyComponent extends React.Component {
  render() {
    return (
      <Tabs
        defaultTabIndex={1}
        onTabChange={onTabChangeCallback}
        wrapperClassName="modified-wrapper-class-name"
        className="modified-tabs-class-name"
        currentContentClassName="modified-content-section-class-name"
        tabClassName="modified-tab-class-name"
        tabActiveclassName="modified-active-tab-class-name"
      >
        <Tab
          title="Apps"
        >
          <h2>Apps</h2>
          <p>
            Here, you’ll find the apps that you’ve built yourself or have installed and authorised.
          </p>
        </Tab>
        <Tab title="Notifications">
          <h2>Notifications</h2>
          <p>
            Update your notification preferences.
          </p>
        </Tab>
        <Tab title="Billing">
          <h2>Billing</h2>
          <p>
            Change your credit card and address we have on file.
          </p>
        </Tab>
    )
  }
}
```

## Todo

- Add support for additional styling overrides (inline, CSS Modules, Functional etc)
- Add default accent colour as HEX / RGBA
- Add disabled tab index and associated style overides
- Add before tab change callback
- Add aria properties to Tag instances e.g aria-current: false / true


