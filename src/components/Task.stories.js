import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

export default {
 component: Task,
 title: 'Task',
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Task },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Task v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};