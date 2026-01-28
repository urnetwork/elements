import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../spinner";

export const BUTTON_TYPES = ["primary", "secondary"] as const;

@customElement("ur-button")
export class Button extends LitElement {
	@property({ type: Function }) onClick?: (e: MouseEvent) => void;

	@property({ type: String, reflect: true })
	variant: (typeof BUTTON_TYPES)[number] = "primary";

	@property({ type: Boolean }) disabled: boolean = false;

	@property({ type: Boolean, reflect: true }) fullWidth = false;

	@property({ type: Boolean }) loading: boolean = false;

	static styles = css`
		button {
			font-family: "PpNeueBitBold", system-ui, sans-serif;
			font-size: 1.2rem;
			padding: 0.8rem 1.6rem;
			border-radius: 0.8rem;
			border: none;
			cursor: pointer;
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			transition:
				background 0.1s ease,
				border-color 0.1s ease;
		}
		:host([variant="primary"]) button {
			background: var(--color-blue-electric);
			color: var(--color-white);
			border: 1px solid var(--color-blue-electric);
		}
		:host([variant="primary"]) button:disabled {
			background: color-mix(in srgb, var(--color-blue-electric) 70%, white 30%);
			color: var(--color-white);
			border: 1px solid
				color-mix(in srgb, var(--color-blue-electric) 70%, white 30%);
			cursor: not-allowed;
		}
		:host([variant="primary"]) button:hover:not(:disabled) {
			background: color-mix(in srgb, var(--color-blue-electric) 85%, white 15%);
			border: 1px solid
				color-mix(in srgb, var(--color-blue-electric) 85%, white 15%);
		}
		:host([variant="secondary"]) button {
			background: transparent;
			color: var(--color-gray-dark);
			border: 1px solid var(--color-gray-dark);
		}
		:host([variant="secondary"]) button:hover:not(:disabled) {
			background: color-mix(in srgb, var(--color-gray-dark) 10%, white 90%);
			border-color: color-mix(in srgb, var(--color-gray-dark) 80%, black 20%);
			color: color-mix(in srgb, var(--color-gray-dark) 80%, black 20%);
		}
		:host([fullwidth]) button {
			width: 100%;
			display: block;
		}
		.button-content {
			/* Hide when loading, but preserve space */
			visibility: visible;
		}
		.button-spinner {
			display: none;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
		:host([loading]) .button-content {
			visibility: hidden;
		}
		:host([loading]) .button-spinner {
			display: block;
		}
	`;

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
				<span class="button-spinner"><ur-spinner size=${8}></ur-spinner></span>
			</button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ur-button": Button;
	}
}
