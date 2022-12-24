import {defineConfig} from 'vite'
import path from 'path'
import glob from 'glob'

function fp(name: string) {
  return path.resolve(__dirname, name)
}

function getEntryFiles() {
  const result: any = {}
  glob.sync(path.resolve(__dirname,'src/*')).forEach((p) => {
    const name = p.split('/')[p.split('/').length-1]
      result[name] = path.resolve(__dirname,'src/', name === 'index.ts'?'index.ts':`${name}/${name.slice(0,1).toUpperCase()}${name.slice(1)}.tsx`)
  })
  return result
}

console.log(getEntryFiles())

export default defineConfig({
  build: {
    lib: {
      entry: getEntryFiles(),
      formats: ['cjs']
    },
    outDir: "dist",
    cssCodeSplit: true
  },
})