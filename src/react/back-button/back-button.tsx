import * as React from "react";
import { createComponent } from "@lit/react";
import { BackButton as UrBackButtonElement } from "../../components/back-button/back-button.js";

// Create the React component wrapper
export const BackButton = createComponent({
	tagName: "ur-back-button",
	elementClass: UrBackButtonElement,
	react: React,
	events: {
		onClick: "click",
	},
});

export interface BackButtonProps {
	label?: string;
	onClick?: (e: Event) => void;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

// Typed wrapper component
export const UrBackButton = React.forwardRef<
	UrBackButtonElement,
	BackButtonProps
>((props, ref) => {
	return <BackButton ref={ref} {...props} />;
});

UrBackButton.displayName = "UrBackButton";

export { UrBackButtonElement };
export default UrBackButton;
