import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ur-spinner")
export class Spinner extends LitElement {
	@property({ type: Number }) size: number = 40;
	@property({ type: String }) color: "white" | "gray-dark" = "gray-dark";

	static styles = css`
		.spinner {
			border: 3px solid var(--ur-color-white);
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

	get borderColor() {
		return this.color === "white"
			? "var(--ur-color-white, #f8f8f8)"
			: "var(--ur-color-gray-dark, #909090)";
	}

	render() {
		return html`<div
			class="spinner"
			style="
				width: ${this.size}px;
				height: ${this.size}px;
				border-color: ${this.borderColor};
				border-top-color: transparent;
			"
		></div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ur-spinner": Spinner;
	}
}
