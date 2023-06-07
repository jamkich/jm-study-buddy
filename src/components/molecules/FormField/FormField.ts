import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = React.forwardRef(({ value, onChange, label, name, id, type = 'text', isTextarea, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}> {label}</Label>
      {isTextarea ? (
        <Input
          isTextarea
          as="textarea"
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          data-testid={label}
          checked={value}
          {...props}
          ref={ref}
        />
      ) : (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} checked={value} {...props} ref={ref} />
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
