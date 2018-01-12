import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { headerColor } from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  UIManager,
  findNodeHandle,
  StyleSheet,
  TouchableOpacity,
}from 'react-native';

class OverflowMenu extends Component {
  handleShowPopupError = () => {
    <Text>There is an error trying to open the overflow menu.</Text>
  };

  handleMenuPress = () => {
    const { labels, onPress } = this.props;
    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      labels,
      this.handleShowPopupError,
      (result, index) => {
        if (onPress) {
          onPress({ action: 'menu', result, index });
        }
      },
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleMenuPress}>
          <Icon
            name="md-more"
            size={30}
            color={headerColor}
            ref="menu"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

OverflowMenu.propTypes = {
  labels: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default OverflowMenu;
