const { JSDOM } = require("jsdom");
import { decode } from 'html-entities';
import { style, getHtml, generateScript, CBD_BASE } from './templates';

const ELEVENTY_HTML_CODE_BLOCK_SELECTOR = 'pre > code.language-html';

const generateCodeBlockDemo = (pre: HTMLPreElement, index: number) => {
    const code = pre.querySelector('code')?.innerHTML;
    const html = decode(code);
    const dom = new JSDOM(`<body>${getHtml(html, pre.outerHTML, index)}</body>`);
    
    return dom.window.document.querySelector(`.${CBD_BASE}`);
};

module.exports = (eleventyConfig: { addTransform: (arg0: string, arg1: (content: any, outputPath: any) => any) => void; }) => {
    eleventyConfig.addTransform("code-block-demo", (content, outputPath) => {
      
        if (!outputPath.endsWith(".html")) { 
            return content;
        }

        const { window: { document }} = new JSDOM(content);

        const codeBlocks = document.querySelectorAll(ELEVENTY_HTML_CODE_BLOCK_SELECTOR);

        let codeBlockCount = 1;

        codeBlocks.forEach((codeBlock: { closest?: any; innerHTML?: any; }) => { 
            const pre = codeBlock.closest('pre');
            const codeBlockDemo = generateCodeBlockDemo(pre, codeBlockCount++);
            generateScript(codeBlockDemo);
            pre.replaceWith(codeBlockDemo);
        });

        document.documentElement.querySelector('head')
            .insertAdjacentHTML('beforeend', style);

        return document.documentElement.outerHTML;
  });
}