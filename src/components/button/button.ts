import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../spinner";
import { btnStyles } from "./button.styles";

export const BUTTON_TYPES = ["primary", "secondary"] as const;

@customElement("ur-button")
export class Button extends LitElement {
	@property({ type: Function }) onClick?: (e: MouseEvent) => void;

	@property({ type: String, reflect: true })
	variant: (typeof BUTTON_TYPES)[number] = "primary";

	@property({ type: Boolean }) disabled: boolean = false;

	@property({ type: Boolean, reflect: true }) fullWidth = false;

	@property({ type: Boolean }) loading: boolean = false;

	static styles = btnStyles;

	private _handleClick(e: MouseEvent) {
		if (this.onClick) {
			this.onClick(e);
		}
	}

	render() {
		return html`
			<button
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
