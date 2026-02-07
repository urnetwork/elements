import { css } from "lit";

export const locationListStyles = css`
	:host {
		display: list-item;
		width: 100%;
		box-sizing: border-box;
	}

	.location-list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border-top: 1px solid var(--ur-color-border);
		cursor: pointer;
		/*transition: background-color 0.3s;*/
	}

	.location-list-item:hover {
		/*background-color: #f5f5f5;*/
	}

	.leading-list-item-content {
		display: flex;
		align-items: center;
		/*flex-flow: column;*/
	}

	.location-text-content {
		display: flex;
		flex-flow: column;
		align-items: start;
	}

	.color-circle {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		margin-right: var(--ur-space-sm);
	}
`;
