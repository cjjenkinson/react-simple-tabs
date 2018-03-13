import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

/**
 * A react component that renders instances of the <Tab /> component as children. When a Tab is changed
 * the Tabs component will keep track of the current tab index and update the content rendered within each Tab.
 */

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: this.props.defaultTabIndex,
    };
  }

	/**
	 * Function that sets the state of the active tab
	 * @param { number } tabIndex index passed from the onClick function
	 */
	handleTabChange = tabIndex => {
	  this.setState({
	    currentTabIndex: this.nextTabIndex(tabIndex),
	  });
	};

	/**
	 * Conditionally checks that the tabIndex is not equal to the current index and updates it accordingly.
	 * @param { number } tabIndex index to check
	 * @returns { number } the next index determined by the current index in state
	 */
	nextTabIndex = tabIndex => {
	  const { currentTabIndex } = this.state;
	  const { defaultTabIndex } = this.props;
	  return tabIndex === currentTabIndex ? defaultTabIndex : tabIndex;
	};

	/**
	 * Function that renders each Tab passing provided props
	 */
	renderTabs() {
	  const { currentTabIndex } = this.state;
	  const { children, onTabChange } = this.props;
	  return React.Children.map(children, (child, index) => {
	    return React.cloneElement(child, {
	      onClick: this.handleTabChange,
	      tabIndex: index,
	      isActive: index === currentTabIndex,
	      onTabChange,
	    });
	  });
	}

	/**
	 * Function that renders the current content from the active Tab
	 */
	renderCurrentTabContent() {
	  const { children } = this.props;
	  const { currentTabIndex } = this.state;
	  if (children[currentTabIndex]) {
	    // render the content inside the instances of <Tab />
	    return children[currentTabIndex].props.children;
	  }
	}

	render() {
	  const { wrapperClassName, className, currentContentClassName } = this.props;
	  return (
	    <div>
	      <div className={wrapperClassName}>
	        <div className={className}>{this.renderTabs()}</div>
	      </div>
	      <section>
	        <div className={currentContentClassName}>
	          {this.renderCurrentTabContent()}
	        </div>
	      </section>
	    </div>
	  );
	}
}

Tabs.defaultProps = {
  defaultTabIndex: 0,
  wrapperClassName: 'tabs--outer-wrapper',
  className: 'tabs',
  currentContentClassName: 'tabs--current-content',
  onTabChange: () => {},
};

Tabs.propTypes = {
  defaultTabIndex: PropTypes.number,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  currentContentClassName: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default Tabs;
