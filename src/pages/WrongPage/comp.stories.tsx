/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import WrongPage from './index';

export default {
  title: `Example/WrongPage`,
  component: WrongPage,
  argTypes: {},
} as ComponentMeta<typeof WrongPage>;

const Template: ComponentStory<typeof WrongPage> = (args) => (
  <WrongPage {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
