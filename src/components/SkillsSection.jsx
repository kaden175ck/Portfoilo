
import { useState } from "react"
import { cn } from "../lib/utils"
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSass,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGo,
  SiGit,
  SiDocker,
  SiFigma,
  SiVite
} from "react-icons/si"
import { Code2 } from "lucide-react"

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#000000" },
  { name: "SCSS", category: "frontend", icon: SiSass, color: "#CC6699" },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs, color: "#339933" },
  { name: "SQL", category: "backend", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, color: "#47A248" },
  { name: "Go", category: "backend", icon: SiGo, color: "#00ADD8" },

  // Tools
  { name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
  { name: "Docker", category: "tools", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", category: "tools", icon: SiFigma, color: "#F24E1E" },
  { name: "VS Code", category: "tools", icon: Code2, color: "#007ACC" },
  { name: "Webpack/Vite", category: "tools", icon: SiVite, color: "#646CFF" },
]


const categories=["all", "frontend", "backend", "tools"]

export const SkillsSection = ()=>{

    const [activeCategory, setActiveCategory] = useState ("all")

    const filterSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Tech<span className="text-primary"> Stack</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key)=>(
                        <button 
                            key={key} 
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" :"bg-secondary/70 text-foreground hover: bg-secondary"
                            )} 
                            onClick={()=>setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filterSkills.map((skill, key)=>{
                        const Icon = skill.icon
                        return (
                            <div
                                key={key}
                                className="group relative bg-card p-5 rounded-xl shadow-sm border border-border hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(to bottom right, ${skill.color}10, transparent)`
                                    }}
                                />
                                <div className="relative flex flex-col items-center justify-center gap-3">
                                    <div className="p-3 rounded-lg bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7" style={{ color: skill.color }} />
                                    </div>
                                    <span className="font-medium text-sm text-center text-foreground transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}