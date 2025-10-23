import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Nitor Infotech",
      role: "Senior Software Engineer", 
      period: "Nov 2024 - Present",
      location: "Pune",
      description: [
        "Delivered multiple full-stack projects using Angular, .NET Core, and SQL Server",
        "Built reusable UI components using Angular Material and PrimeNG",
        "Improved backend performance by implementing caching and gzip compression",
        "Actively engaged in agile ceremonies and team collaboration",
        "Earned recognition for timely deliveries and high-quality work"
      ],
      technologies: ["Angular", ".NET Core", "SQL Server"]
    },
    {
      company: "Krios Info Solution PVT Ltd.",
      role: "Associate Level 3",
      period: "Jan 2018 - Sep 2021", 
      location: "Pune",
      description: [
        "Developed full-stack features for automobiles and service-based apps",
        "Interfaced with clients to gather requirements and clarify expectations",
        "Participated in sprint planning and contributed to task estimations",
        "Acted as the communication bridge between clients and the dev team"
      ],
      technologies: ["Full Stack Development", "Automobiles Apps", "PDF Generation", "Client Management"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 years of professional growth across leading technology companies, delivering scalable solutions.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="bg-gradient-card border-border/40 shadow-card hover:shadow-glow/20 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-primary mb-2">
                      {exp.role}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-2 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};