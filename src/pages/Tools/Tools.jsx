import Reveal from '../../components/animations/Reveal'
import './Tools.css'

const tools = [
  { name: 'Figma', use: 'Interface & product design' },
  { name: 'VS Code', use: 'Development environment' },
  { name: 'Blender', use: '3D design & exploration' },
  { name: 'Git', use: 'Version control' },
]

export default function Tools() {
  return (
    <div className="page inner-page">
      <Reveal><p className="eyebrow">MY CREATIVE WORKSPACE</p><h1>Tools behind the <span>process.</span></h1><p className="page-lead">A selection of tools that help turn ideas into reality.</p></Reveal>
      <div className="tools-list">
        {tools.map((tool, index) => <Reveal key={tool.name}><div className="tool-row"><span>0{index + 1}</span><h3>{tool.name}</h3><p>{tool.use}</p></div></Reveal>)}
      </div>
    </div>
  )
}
