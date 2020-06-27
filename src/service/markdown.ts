import { Converter } from 'showdown'

const converter = new Converter({

})

function markdownToHtml(markdown: string):string {
  return converter.makeHtml(markdown)
}

export {
  markdownToHtml
}
