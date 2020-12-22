import React from 'react';

import './CustomButton.styles.sass';

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`
      ${inverted ? 'inverted ' : ''}
      ${isGoogleSignIn ? 'google-sign-in ' : ''}
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
