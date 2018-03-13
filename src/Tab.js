import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

/**
 * A react component that is rendered from Tabs, its children contains the content visible when active.
 * Each Tab passes its index back to Tabs for it to be re-rendered with appropriate active / disabled styles.
 */

class Tab extends Component {
	/**
	 * Function that passes the tab index to the handler within Tabs that determines its
	 * next state e.g active and executes onTabChange callback when passed
	 */
	handleTabChange = e => {
	  const { onClick, tabIndex } = this.props;
	  e.preventDefault();
	  onClick(tabIndex);
	  if (this.props.onTabChange) {
	    this.onTabChangeCallback();
	  }
	};

	/**
	 * Function that invokes the onTabChange function passed as a prop from Tabs
	 */
	onTabChangeCallback = () => this.props.onTabChange();

	/**
	 * Function that renders the Tab with appropriate styling depending on its active state
	 * @param { object } styles an object with the styles applied to the tab markup
	 * @returns { node } markup that will be rendered to the DOM
	 */
	renderTab = () => {
	  const { className, isActive, activeClassName } = this.props;
	  return (
	    <div className={`${className} ${isActive ? activeClassName : ''}`}>
	      <a onClick={this.handleTabChange}>
	        <span>{this.props.title}</span>
	      </a>
	    </div>
	  );
	};

	render() {
	  return this.renderTab();
	}
}

Tab.defaultProps = {
  title: 'Tab Title',
};

Tab.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  onTabChange: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  title: PropTypes.string,
};

export default Tab;
