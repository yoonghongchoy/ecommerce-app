import {TextStyle} from 'react-native';

const typography: {[key: string]: TextStyle} = {
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'System',
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  subheadline: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
} as const;

export default typography;
