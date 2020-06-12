// @flow

import { Platform } from 'react-native';

import variable from './../variables/platform';
import { PLATFORM } from './../variables/common';

export default (variables /* : * */ = variable) => {
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign:  Platform.OS === PLATFORM.IOS ? 'center' : 'left',
    paddingLeft: Platform.OS === PLATFORM.IOS ? 4 : 0,
    marginLeft: Platform.OS === PLATFORM.ANDROID ? -3 : undefined
  };

  return subtitleTheme;
};
