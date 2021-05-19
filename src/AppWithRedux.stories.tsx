import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AppWithRedux from './AppWithRedux';
import { ReduxStoreProviderDecorator } from './stories/ReduxStoreProviderDecorator';

export default {
  title: 'Todolist/AppWithRedux',
  component: AppWithRedux,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = (args) => <AppWithRedux />;

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {};
