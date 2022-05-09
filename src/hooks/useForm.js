import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearInput: 'CLEAR INPUT',
  toggleConsent: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return { ...state, [action.field]: action.value };

    case actionTypes.clearInput:
      return action.initialValues;

    case actionTypes.toggleConsent:
      return { ...state, consent: !state.consent };

    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearInput, initialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: 'TOGGLE CONSENT' });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
