import "./pages.css"
import { project } from "../components/data"

const Project = () => {

  const projectList = project.map((item) => (
    <a key={item.id} target="_blank" href={item.url} className="card-project" rel="nope">
      <img src={item.img} alt={item.desc} />
      <h3>{item.desc}</h3>
    </a>
  ))

  return (
    <section className="project">
      <h1 className="header-project">My Project</h1>
      <div className="container-project">{projectList}</div>
    </section>
  )
}

export default Project