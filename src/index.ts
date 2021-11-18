const { JSDOM } = require("jsdom");
import { decode } from 'html-entities';

const getDemo = (pre: HTMLPreElement) => {
    const code = pre.querySelector('code')?.innerHTML;
    const html = decode(code);
    const dom = new JSDOM(`<body>
        <div class="demo">
            ${html}
            <details>
                <summary>show code</summary>
                ${pre.outerHTML}
            </details>
        </div>
    </body>`);
    
    return dom.window.document.querySelector(".demo");
};

module.exports = (eleventyConfig: { addTransform: (arg0: string, arg1: (content: any, outputPath: any) => any) => void; }) => {
    eleventyConfig.addTransform("code-block-demo", (content, outputPath) => {
      
        if (!outputPath.endsWith(".html")) { 
        return content
        }

        const { window: { document }} = new JSDOM(content);

        const codeBlocks = document.querySelectorAll("pre code.language-html");

        codeBlocks.forEach((codeBlock: { closest?: any; innerHTML?: any; }) => { 
            const pre = codeBlock.closest('pre');
            pre.replaceWith(getDemo(pre));
        });

        return document.documentElement.outerHTML;
  });
}