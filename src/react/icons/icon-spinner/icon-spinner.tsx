import * as React from "react";
import { createComponent } from "@lit/react";
import { IconSpinner as UrIconSpinnerElement } from "../../../components/icons/icon-spinner";

// Create the React component wrapper
export const IconSpinner = createComponent({
	tagName: "ur-icon-spinner",
	elementClass: UrIconSpinnerElement,
	react: React,
});

export interface IconSpinnerProps {
	iconTitle?: string;
	className?: string;
	style?: React.CSSProperties;
}

// Typed wrapper component
export const UrIconSpinner = React.forwardRef<
	UrIconSpinnerElement,
	IconSpinnerProps
>((props, ref) => {
	return <IconSpinner ref={ref} {...props} />;
});

UrIconSpinner.displayName = "UrIconSpinner";

export { UrIconSpinnerElement };
export default UrIconSpinner;
