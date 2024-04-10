import View from '../../View/index';
import ExpandTxt from '../index';
import {render, fireEvent} from '@testing-library/react-native';

it('ExpandTxt props', () => {
  const {getByTestId} = render(
    <ExpandTxt numberOfLines={5} content={'用于文本过长，超出长度显示'} />,
  );
  const component = getByTestId('RNE__ExpandTxt__text');
  expect(component.props.numberOfLines).toBe(5);
  expect(component.props.children).toBe('用于文本过长，超出长度显示');
});

it('ExpandTxt props', () => {
  const {getByTestId} = render(
    <ExpandTxt
      numberOfLines={1}
      content={
        '用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示'
      }
      expandLabel={'查看更多'}
    />,
  );
  const component = getByTestId('RNE__ExpandTxt__view');
  expect(
    component.props?.children[1].props?.children?.props.numberOfLines,
  ).toBe(1);
  expect(component.props?.children[1].props?.children?.props.testID).toBe(
    'RNE__ExpandTxt__text',
  );
});

// it('ExpandTxt props', () => {
//   const {getByTestId} = render(
//     <View cssStr={'w-50'}>
//       <ExpandTxt numberOfLines={1} content={'用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示用于文本过长，超出长度显示'} expandLabel={'查看更多'}/>,
//     </View>
//   );
//   const component = getByTestId('RNE__ExpandTxt__view');
//   console.log('2222', component);
//   // expect(component.props?.children[1].props?.children?.props.numberOfLines).toBe(1);
//   // expect(component.props?.children[1].props?.children?.props.testID).toBe('RNE__ExpandTxt__text');
// });
