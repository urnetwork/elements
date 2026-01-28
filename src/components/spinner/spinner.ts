import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ur-spinner")
export class Spinner extends LitElement {
	@property({ type: Number }) size: number = 40;

	static styles = css`
		.spinner {
			border: 3px solid var(--color-white);
			border-top: 3px solid transparent;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	`;

	render() {
		return html`<div
			class="spinner"
			style="width: ${this.size}px; height: ${this.size}px;"
		></div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ur-spinner": Spinner;
	}
}
