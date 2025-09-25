import { ArrowUp } from "lucide-react"

export const Footer =()=>{
    return(
        <footer className="py-2 px-2 bg-card relative border-t border-border mt-20 pt-2 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">{" "}&copy; {new Date().getFullYear()} Haoyang.co. All rights reserved.</p>
        <a href="#hero" className="rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <ArrowUp size={20}/>
        </a>
        </footer>
    )
}