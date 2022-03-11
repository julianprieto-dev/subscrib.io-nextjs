import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 0.25rem;
  }
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;

  border: none;
  border-radius: 0.25rem;

  background-color: ${(props) => props.theme.colors.input.background};
  color: ${(props) => props.theme.colors.input.color};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.input.outline};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${(props) => props.theme.colors.input.background} inset !important;
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.colors.input.background} inset !important;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: ${(props) => props.theme.colors.input.color} !important;
  }
`;

const StyledLabel = styled.label`
  order: -1;
  padding-left: 0.5rem;
  margin-top: 1rem;

  transform: ${(props) =>
    props.hasValue ? "translate(0rem, -0.5rem)" : "translate(0.5rem, 2rem)"};
  pointer-events: none;

  transition: all 0.1s ease-out;

  ${StyledInput}:focus + & {
    transform: translate(0rem, -0.5rem);
  }
`;

const Input = ({ value, onChange, name, label, placeholder, type, ...props }) => {
  return (
    <Field>
      <StyledInput
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        {...props}
      />
      {!!label && (
        <StyledLabel hasValue={!!value} htmlFor={name}>
          {label}
        </StyledLabel>
      )}
    </Field>
  );
};

export default Input;
