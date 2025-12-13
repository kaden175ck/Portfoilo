import { Mail, MapPin } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* 标题与说明 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* contact info */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl space-y-8">
            <h3 className="text-2xl font-semibold text-center">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium leading-none mb-1">Email</h4>
                <a
                  href="mailto:kadenshihaoyang@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  kadenshihaoyang@gmail.com
                </a>
              </div>
            </div>

            {/* Location（含响应式小地图） */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left w-full">
                <h4 className="font-medium leading-none mb-2">Location</h4>
                <span className="text-muted-foreground block mb-3">
                  Xi&apos;an, Shaanxi, China
                </span>

                {/* 16:9 自适应容器不依赖插件 OSM全球可访问*/}
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md">
                    <iframe
                        title="Map of Xi'an"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=108.90%2C34.32%2C108.96%2C34.36&layer=mapnik&marker=34.3416%2C108.9398"
                    />
                </div>
              </div>
            </div>

            {/* Discord */}
            {/* <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <SiDiscord className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium leading-none mb-1">Discord</h4>
                <a
                  href="https://discord.gg/Nn8kW7a2we"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Join My Discord
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};




// ContactSection
//  └─ section
//      └─ container (居中 + 限宽)
//          ├─ h2 标题
//          ├─ p 简介
//          └─ flex (居中)
//              └─ max-w-xl 内容块
//                  ├─ Email
//                  ├─ Location + Map
//                  └─ Discord
