import * as React from 'react';
import BottomNavigation from 'react-native-paper/src/components/BottomNavigation';

import { createTabNavigator } from 'react-navigation-tabs';

class BottomNavigationView extends React.Component {
  _getColor = ({ route }) => {
    const { descriptors } = this.props;
    const descriptor = descriptors[route.key];
    const options = descriptor.options;

    return options.tabBarColor;
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { activeTintColor, navigation, descriptors, theme, ...rest } = this.props;

    return <BottomNavigation {...rest} navigationState={navigation.state} getColor={this._getColor} theme={
    /* $FlowFixMe */
    activeTintColor ? { ...theme, colors: { ...theme.colors, primary: activeTintColor } } : theme} />;
  }
}

export default createTabNavigator(BottomNavigationView);