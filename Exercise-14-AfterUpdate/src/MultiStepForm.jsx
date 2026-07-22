import React, { useReducer } from 'react';
import { formReducer, initialState } from './formReducer';

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const nextStep = () => dispatch({ type: 'NEXT_STEP' });
  const prevStep = () => dispatch({ type: 'PREV_STEP' });
  const resetForm = () => dispatch({ type: 'RESET_FORM' });

  const handleSubmit = () => {
    // Potentially submit data to an API
    alert('Form submitted successfully!');
    resetForm();
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Multi-Step Registration</h2>
        {state.step === 1 && (
          <div>
            <h3>Step 1: Profile</h3>
            <div className="form-group">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="button-row">
              <button className="button-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {state.step === 2 && (
          <div>
            <h3>Step 2: Contact</h3>
            <div className="form-group">
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="button-row">
              <button className="button-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="button-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {state.step === 3 && (
          <div>
            <h3>Step 3: Review</h3>
            <div className="summary-item">
              <p>
                <strong>First Name:</strong> {state.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {state.lastName}
              </p>
              <p>
                <strong>Email:</strong> {state.email}
              </p>
              <p>
                <strong>Phone:</strong> {state.phone}
              </p>
            </div>
            <div className="button-row">
              <button className="button-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="button-primary" onClick={handleSubmit}>
                Confirm
              </button>
            </div>
          </div>
        )}
        {state.step > 3 && (
          <div>
            <h3>Form Completed</h3>
            <div className="button-row">
              <button className="button-primary" onClick={resetForm}>
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
