import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../spinner";
import { btnStyles } from "./button.styles";

export const BUTTON_VARIANTS = ["primary", "secondary"] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_TYPES = ["button", "submit", "reset"] as const;
export type ButtonType = (typeof BUTTON_TYPES)[number];

@customElement("ur-button")
export class Button extends LitElement {
	static formAssociated = true;

	@property({ type: Function }) onClick?: (e: MouseEvent) => void;

	@property({ type: String, reflect: true })
	variant: ButtonVariant = "primary";

	@property({ type: Boolean }) disabled: boolean = false;

	@property({ type: Boolean, reflect: true }) fullWidth = false;

	@property({ type: Boolean }) loading: boolean = false;

	@property({ type: String }) buttonType: ButtonType = "button";

	static styles = btnStyles;

	private _handleClick(e: MouseEvent) {
		if (this.onClick) {
			this.onClick(e);
		}
	}

	render() {
		return html`
			<button
				type=${this.buttonType}
				@click=${this._handleClick}
				?disabled=${this.disabled || this.loading}
			>
				<span class="button-content"><slot></slot></span>
				<span class="button-spinner"
					><ur-spinner size=${8} color="white"></ur-spinner
				></span>
			</button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ur-button": Button;
	}
}
