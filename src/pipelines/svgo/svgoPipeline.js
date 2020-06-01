const SVGO = require('svgo/lib/svgo')
const configs = require('./configs')

function decodeStr(str) {
  str = str.replace(/&apos;/g, "'")
  str = str.replace(/&quot;/g, '"')
  str = str.replace(/&gt;/g, '>')
  return str
}

async function svgoPipeline(mdContent) {
  const svgo = new SVGO(configs)
  const regex = /<svg.*>.+<\/svg>/g
  let m;
  let temp = mdContent
  while ((m = regex.exec(mdContent)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    for (let i= 0; i < m.length; i++) {
      const match = m[i];
      const optsvg = await svgo.optimize(match, {})
      // fixed the <br /> convert into <br></br>
      // other the browser will treat it as <br><br> double link breaks
      temp = temp.replace(match, decodeStr(optsvg.data.replace(/<br><\/br>/g, "<br>")))
    }
  }


  return temp
}

module.exports = svgoPipeline
