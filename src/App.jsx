import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'

const Home = () => (
  <Layout>
    <About />
  </Layout>
)

const ProjectsPage = () => (
  <Layout>
    <Projects />
  </Layout>
)

const NotFound = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
