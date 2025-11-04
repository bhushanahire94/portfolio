import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "SymphonyAI Platform",
      period: "Jan 2022 - Oct 2024",
      description: "Revedia digital is the business intelligence platform that can help to calculate projection revenue based on trends and historical data.",
      highlights: [
        "25% increase in customer engagement",
        "Development of Web API in .Net Core",
        "Database design and writing stored procedure",
        "Writing Xunit Test cases asper functionality."
      ],
      technologies: ["Angular JS", , "SQL Server", ".NET Core", "Xunit"],
      type: "Product Platform"
    },
    {
      title: "UNIDO DIPS",
      period: "Sep 2021 - Aug 2022",
      description: "Full-stack web application with comprehensive features including multi-language support, external surveys, and JWT authentication. Led a team of 3 developers and 1 QA.",
      highlights: [
        "Multi-language support implementation",
        "Survey.js integration for external surveys",
        "JWT authentication in web APIs",
        "Unit testing and project delivery"
      ],
      technologies: ["Angular", ".NET Core", "Survey.js", "JWT", "Multi-language"],
      type: "Enterprise Application"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of impactful projects spanning enterprise platforms, open source contributions, and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/40 shadow-card hover:shadow-glow/20 transition-all duration-500 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                  <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5 text-xs px-2 py-1 w-fit">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.period}
                  </div>
                </div>
                
                <CardTitle className="text-xl md:text-2xl text-primary mb-3">
                  {project.title}
                </CardTitle>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-2 text-xs">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="bg-secondary/20 text-secondary-foreground border border-secondary/30 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge 
                        variant="outline" 
                        className="border-muted text-muted-foreground text-xs px-2 py-1"
                      >
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  {/* Show all technologies on larger screens */}
                  <div className="hidden lg:flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="bg-secondary/20 text-secondary-foreground border border-secondary/30 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};