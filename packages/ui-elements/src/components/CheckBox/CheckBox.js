import React, { forwardRef, useState, useId } from 'react';
import PropTypes from 'prop-types';
import useComponentOverrides from '../../hooks/useComponentOverrides';
import { Icon } from '../Icon';
import { Box } from '../Box';
import { useTheme } from '../../hooks';
import { appendClassNames } from '../../lib/appendClassNames';
import getCheckBoxStyles from './CheckBox.styles';

const CheckBox = forwardRef(
  (
    {
      id,
      checked,
      defaultChecked = false,
      disabled = false,
      onChange,
      className = '',
      style = {},
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    const generatedId = useId();
    const inputId = id || generatedId;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? Boolean(checked) : internalChecked;

    const styles = getCheckBoxStyles(theme, { checked: isChecked, disabled });
    const { classNames, styleOverrides } = useComponentOverrides('CheckBox');

    const handleChange = (e) => {
      if (disabled) return;
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e);
    };

    const handleKeyDown = (e) => {
      if (disabled) return;
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.click();
      }
      props.onKeyDown?.(e);
    };

    return (
      <label
        htmlFor={inputId}
        css={styles.main}
        className={appendClassNames('ec-check-box', classNames, className)}
        style={{ ...styleOverrides, ...style }}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          css={styles.input}
          {...props}
        />
        <Box is="span" css={styles.box}>
          {isChecked && <Icon name="check" size="1rem" />}
        </Box>
      </label>
    );
  }
);

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CheckBox;
