
export const CBD_BASE = 'cbd-base';
export const CBD_DEMO = 'cbd-demo';
export const CBD_DETAILS = 'cbd-details';
export const CBD_BUTTON_SHOW = 'cbd-button-show';
export const CBD_CODE_BLOCK = 'cbd-code-block';

export const style = `
<style>
.${CBD_BASE} {
	border: 1px solid lightgray;
	border-radius: 6px;
	overflow: hidden;
}

.${CBD_DEMO} {
	display: flex;
	place-content: center;
	padding: 20px;
	display: flex;
	gap: 4px;
}

.${CBD_DETAILS} > summary {
  list-style: none;
	text-align: end;
	background-color: whitesmoke;
	padding: 10px;
	border-top: 1px solid lightgrey;
}

.${CBD_CODE_BLOCK} {
	border-top: 1px solid lightgrey;
}

.${CBD_CODE_BLOCK} > * {
	margin: 0;
}
</style>
`;

export const getHtml = (demoStr: string, codeStr: string, i: number) => `
<div class="${CBD_BASE}">
    <div class="${CBD_DEMO}">
        ${demoStr}
    </div>
    <details class="${CBD_DETAILS}">
        <summary>
            <button class="${CBD_BUTTON_SHOW}" aria-expanded="false" aria-controls="${CBD_CODE_BLOCK}-${i}">
                show code
            </button>
        </summary>
        <div class="${CBD_CODE_BLOCK}" role="region" id="${CBD_CODE_BLOCK}-${i}">
            ${codeStr}
        </div>
    </details>
</div>`;

export const generateScript = (baseEl: HTMLDivElement) => {
    const codeButton: HTMLButtonElement | null = baseEl.querySelector(`.${CBD_BUTTON_SHOW}`);

    const codeBlock: HTMLDivElement | null = baseEl.querySelector(`.${CBD_CODE_BLOCK}`);

    const details: HTMLDetailsElement | null = baseEl.querySelector(`.${CBD_DETAILS}`);

    //@ts-ignore
    codeButton.ariaExpanded = false;
    //@ts-ignore
    codeButton.ariaControlsElements = [codeBlock];

    if (details) {   
        codeButton?.addEventListener('click', () =>
            details.open = !details.open
        );
    }
};