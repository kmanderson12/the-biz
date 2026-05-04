import fs from 'fs'
import path from 'path'

const dist = path.resolve('dist')

const routes = [
  {
    dir: '',
    title: 'Home',
    description: 'Web Design and Development in Cookeville, TN.',
  },
  {
    dir: 'projects',
    title: 'Projects',
    description:
      'Web projects by Kyle Anderson - full-stack applications, React apps, and more.',
  },
  {
    dir: '404',
    title: '404: Not found',
    description: 'Page not found.',
  },
]

for (const route of routes) {
  const dirPath = route.dir ? path.join(dist, route.dir) : dist
  if (route.dir && !fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  const filePath = path.join(dirPath, 'index.html')
  let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
  
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title} | Kyle Anderson | Web Design &amp; Development in Cookeville, TN</title>`)
  html = html.replace(/(<meta name="description" content=").*?"/, `$1${route.description}"`)
  html = html.replace(/(<meta property="og:title" content=").*?"/, `$1${route.title} | Kyle Anderson"`)
  html = html.replace(/(<meta property="og:description" content=").*?"/, `$1${route.description}"`)
  
  fs.writeFileSync(filePath, html)
  console.log(`Injected meta for /${route.dir || ''}`)
}

const redirects = `/*    /index.html   200\n`
fs.writeFileSync(path.join(dist, '_redirects'), redirects)
console.log('Created _redirects for SPA fallback')
