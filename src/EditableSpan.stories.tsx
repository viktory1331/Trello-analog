import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { EditableSpan, EditableSpanPropsType } from './EditableSpan';

export default {
  title: 'Todolist/Editable span',
  component: EditableSpan,
  argType: {
    onChange: {
      description: 'Value EditableSpan changed',
    },
    value: {
      defaultValue: 'HTML',
      description: 'Start Value EditableSpan ',
    },
  },
} as Meta;

const Template: Story<EditableSpanPropsType> = (args) => (
  <EditableSpan {...args} />
);

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
  onChange: action('Value EditableSpan changed'),
};
