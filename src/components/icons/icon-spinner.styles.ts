import { css } from "lit";

export const iconLoadingStyles = css`
	:host {
		width: 1.6em;
		height: 1.6em;
	}

	svg {
		color: var(--ur-color-gray-dark);
		transform-origin: center;
		animation: loading-step 1s steps(8, end) infinite;
	}

	@keyframes loading-step {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
