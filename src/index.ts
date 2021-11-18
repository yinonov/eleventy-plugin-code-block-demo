const { JSDOM } = require("jsdom");
import { decode } from 'html-entities';

const getDemo = (htmlStr: string) => {
  const dom = new JSDOM(`<body><div></div></body>`);
  const div = dom.window.document.querySelector("div")
  div.innerHTML = decode(htmlStr);
  return div;
};

module.exports = (eleventyConfig: { addTransform: (arg0: string, arg1: (content: any, outputPath: any) => any) => void; }) => {
  eleventyConfig.addTransform("code-block-demo", (content, outputPath) => {
    if (!outputPath.endsWith(".html")) { 
      return content
    }
    const dom = new JSDOM(content);
    const document = dom.window.document;

    const codeBlocks = document.querySelectorAll("pre code.language-html");
    codeBlocks.forEach((codeBlock: { closest?: any; innerHTML?: any; }) => { 
      const { innerHTML } = codeBlock;

      codeBlock.closest('pre').insertAdjacentHTML('afterend', `<div>${decode(innerHTML)}</div>`);

    });

    return document.documentElement.outerHTML;
  });
}