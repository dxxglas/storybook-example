import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export const Default = ({ ...args }) => <Button {...args} />;
Default.args = {
    children: 'Default',
    disabled: false,
};