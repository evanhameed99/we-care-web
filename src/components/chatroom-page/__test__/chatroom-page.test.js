// const add = (x, y) => x + y;

// const add = jest.fn(() => 3);

// test('add', () => {
//   const value = add(1, 2);
//   expect(add).toHaveBeenCalledTimes(1);
//   expect(value).toBe(3);
// });

// const total = (subTotal, total) => {
//   return '$' + add(subTotal, total);
// };

// test('total', () => {
//   expect(total(5, 20)).toBe('$25');
// });

// import React from 'react';
// import ChatroomPage from './../chatroom-page';
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const component = renderer.create(<ChatroomPage />).toJSON();
//   expect(component).toMatchSnapshot();
// });