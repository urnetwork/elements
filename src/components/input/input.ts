import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { inputStyles } from "./input.styles";
import "../spinner";

export const INPUT_TYPES = [
	"text",
	"email",
	"password",
	"search",
	"tel",
	"url",
	"number",
] as const;
export type InputType = (typeof INPUT_TYPES)[number];

@customElement("ur-input")
export class Input extends LitElement {
	static styles = inputStyles;

	@property({ type: String }) value = "";
	@property({ type: String }) placeholder = "";
	@property({ type: String }) type: InputType = "text";
	@property({ type: Boolean, reflect: true }) disabled = false;
	@property({ type: Boolean, reflect: true }) readonly = false;
	@property({ type: Boolean, reflect: true }) loading = false;
	@property({ type: String }) name = "";
	@property({ type: String }) label = "";
	@property({ type: String }) error = "";
	@property({ type: Boolean, reflect: true }) required = false;

	// Event handler for input changes
	private handleInput(e: InputEvent) {
		const target = e.target as HTMLInputElement;
		this.value = target.value;

		// Dispatch a custom event that bubbles up
		this.dispatchEvent(
			new CustomEvent("ur-input", {
				detail: { value: target.value },
				bubbles: true,
				composed: true,
			}),
		);
	}

	// Event handler for native change event
	private handleChange(e: Event) {
		const target = e.target as HTMLInputElement;

		this.dispatchEvent(
			new CustomEvent("ur-change", {
				detail: { value: target.value },
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		return html`
			<div class="input-wrapper">
				${this.label
					? html`<label class="input-label">
							${this.label}
							${this.required ? html`<span class="required">*</span>` : ""}
						</label>`
					: ""}

				<div class="input-container">
					<input
						type=${this.type}
						.value=${this.value}
						placeholder=${this.placeholder}
						?disabled=${this.disabled || this.loading}
						?readonly=${this.readonly}
						?required=${this.required}
						name=${this.name}
						class="input-field ${this.error ? "error" : ""}"
						@input=${this.handleInput}
						@change=${this.handleChange}
					/>

					${this.loading
						? html`<ur-spinner class="input-spinner" size="8"></ur-spinner>`
						: ""}
				</div>

				${this.error
					? html`<span class="error-message">${this.error}</span>`
					: ""}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ur-input": Input;
	}
}
