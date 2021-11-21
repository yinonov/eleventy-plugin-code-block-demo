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
	padding: 20px;
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
</style>
`;

export const getHtml = (demoStr: string, codeStr: string, i: number) => {
    const codeBlockId = `${CBD_CODE_BLOCK}-${i}`;
    return `
    <div class="${CBD_BASE}">
        <div class="${CBD_DEMO}">
            ${demoStr}
        </div>
        <details class="${CBD_DETAILS}">
            <summary>
                <button class="${CBD_BUTTON_SHOW}" aria-expanded="false" aria-controls="${codeBlockId}">
                    show code
                </button>
            </summary>
            <div class="${CBD_CODE_BLOCK}" role="region" id="${codeBlockId}">
                ${codeStr}
            </div>
        </details>
    </div>`;
}

export const script = `
<script>
    const toggleCodePanel = (event) => {
        const button = event.target;
        const details = button.closest('.${CBD_DETAILS}');
        details.open = !details.open;
        button.setAttribute('aria-expanded', details.open.toString());
    };

    const initShowCodeButtons = () => {
        document.querySelectorAll('.${CBD_BUTTON_SHOW}').forEach(button => {
            button.addEventListener('click', toggleCodePanel);
        });
    };

    window.addEventListener('DOMContentLoaded', initShowCodeButtons);
</script>
`;
