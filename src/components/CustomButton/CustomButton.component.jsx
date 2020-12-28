import React from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

export default function CustomButton(props) {
	return (
		<CustomButtonContainer {...props}>
			{props.children}
		</CustomButtonContainer>
	);
}
