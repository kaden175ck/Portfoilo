import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects=[
    {
        id:1,
        title:"Hangman",
        description: "A Hangman game (a word guessing game)",
        image:"/projects/hangman.png",
        tags: ["Typescript"],
        demoUrl: "https://kaden175ck.github.io/HangMan/",
        githubUrl:"https://github.com/kaden175ck/HangMan",
    },
    {
        id:2,
        title: "Markdown Supported Note Taking Tool",
        description: "A web-based note-taking app with category management, markdown editing, and flexible filtering.",
        image:"/projects/notetaking.png",
        tags: ["Typescript","Bootstrap","React Router V7"],
        demoUrl: "https://kaden175ck.github.io/Noted/",
        githubUrl:"https://github.com/kaden175ck/Noted",
    },

    {
        id:3,
        title:"Resume Analyzer",
        description: "Serverless AI-powered Resume Analyzer for automated job matching. Think of it as your personal job searching assistant.",
        image:"/projects/resumeproject.png",
        tags: ["Typescript","Tailwind CSS","React Router V7","Puter.js","Zustand"],
        demoUrl: "https://resume-analyzer-37-fce13.puter.site",
        githubUrl:"https://github.com/kaden175ck/Resume-Analyzer",
    },


    {
        id:4,
        title:"Countries Explorer",
        description: "A cool, interactive web application that lets you explore country data.",
        image:"/projects/country.png",
        tags: ["Typescript","React Router V7","Tailwind CSS"],
        demoUrl: "https://kaden175ck.github.io/Countries-Explorer/",
        githubUrl:"https://github.com/kaden175ck/Countries-Explorer",
    },

    {
        id:5,
        title:"Inventory Management System",
        description: "A full-stack inventory management dashboard featuring stock alerts, search, filtering, and data visualization charts.",
        image:"/projects/inventory.png",
        tags: ["Typescript", "Next.js 15", "Tailwind CSS", "Prisma", "PostgreSQL", "Stack Auth"],
        demoUrl: "https://kaden175ck.github.io/inventory-management-system/",
        githubUrl:"https://github.com/kaden175ck/inventory-management-system",
    },    
    
    {
        id:6,
        title:"Forum",
        description: "A basic forum that can be extended and customized in many ways to fit your needs.",
        image:"/projects/forum.png",
        tags: ["Typescript", "Next.js 15", "Tailwind CSS", "MongoDB", "React Query"],
        demoUrl: "https://forum-g9nm.vercel.app/",
        githubUrl:"https://github.com/kaden175ck/Forum",
    },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail,
          performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover flex flex-col"
            >
              {/* 图片区域 */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 内容区：用 flex 切成 上部(文字) + 底部(icons) */}
              <div className="p-4 flex flex-col flex-1">
                {/* 上半部：tags + 标题 + 描述 */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  {/* 让描述高度更一致，可选其一：line-clamp 或 min-h line-climp要单独安装tailwind插件，我没装*/}
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-3 min-h-[60px]">
                    {project.description}
                  </p>
                </div>

                {/* 底部：始终贴底 */}
                <div className="mt-auto flex justify-between items-center pt-3">
                  <div className="flex gap-3">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label="Live demo" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <a
            className="cosmic-button min-w-[200px] w-fit flex items-center justify-center gap-2"
            href="https://github.com/kaden175ck?tab=repositories"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>

          <a
            className="cosmic-button min-w-[200px] w-fit flex items-center justify-center gap-2"
            href="https://kaden175ck.github.io"
            target="_blank"
          >
            Check My Blog <ArrowRight size={16} />
          </a>
        </div>


      </div>
    </section>
  );
};



        // <div className="text-center mt-12">
        //     <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/kaden175ck?tab=repositories" target="_blank">
        //         Check My Github <ArrowRight size={16} />
        //     </a>
        // </div>