import * as React from "react";
import { createComponent } from "@lit/react";
import {
	Button as UrButtonElement,
	BUTTON_TYPES,
} from "../../components/button/button.js";

// Create the React component wrapper
export const Button = createComponent({
	tagName: "ur-button",
	elementClass: UrButtonElement,
	react: React,
	events: {
		onClick: "click",
	},
});

export interface ButtonProps {
	variant?: (typeof BUTTON_TYPES)[number];
	disabled?: boolean;
	fullWidth?: boolean;
	loading?: boolean;
	onClick?: (e: Event) => void;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

// Typed wrapper component
export const UrButton = React.forwardRef<UrButtonElement, ButtonProps>(
	(props, ref) => {
		return <Button ref={ref} {...props} />;
	},
);

UrButton.displayName = "UrButton";

export { UrButtonElement, BUTTON_TYPES };
export default UrButton;
