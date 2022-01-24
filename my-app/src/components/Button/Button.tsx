import { Button as MUIButton, ButtonProps } from '@mui/material';
import PropTypes from 'prop-types';

export const Button = ({ variant, size, ...props}: ButtonProps) => {
    return <MUIButton variant={variant} size={size} {...props} />
};

Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
};

Button.defaultProps = {
    variant: 'contained',
    size: 'large',
}