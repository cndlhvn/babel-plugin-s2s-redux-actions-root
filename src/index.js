import globby from 'globby'
import {
  getImportPath,
} from 's2s-utils'


module.exports = (babel) => {
  var t = babel.types;

  const defaultExport = (source) => t.ExportAllDeclaration( t.stringLiteral(source))

  return {
    name: "s2s-redux-actions-root",
    visitor: {
      Program: {
        exit(path, state) {
	        const { input, output } = state.opts
          if (!input) {
            throw new Error('require input option')
          }

          if (!output) {
            throw new Error('require output option')
          }

          const files = globby.sync(input)
          const index = files.indexOf(output)

          if (index > -1) {
            files.splice(index, 1);
          }

          const imports = files.map(f => defaultExport(getImportPath(output, f)))

          path.node.body = [
            ...imports
          ]
        }
      }
    }
  }
}
