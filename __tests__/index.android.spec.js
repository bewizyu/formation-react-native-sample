import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index.android';

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

it('renders correctly', () => {
  renderer.create(
    <Index />,
  );
});
