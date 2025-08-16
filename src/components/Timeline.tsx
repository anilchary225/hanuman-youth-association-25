import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Timeline = () => {
  const events = [
    {
      year: "2024",
      title: "Ganesh Chaturthi Celebration",
      date: "September 7-17, 2024",
      location: "Community Hall, Varahi",
      participants: "150+ Youth Members",
      highlights: [
        "Grand Ganesh idol installation ceremony",
        "10-day cultural program with daily activities",
        "Traditional dance and music performances",
        "Community feast and prasadam distribution",
        "Eco-friendly visarjan procession"
      ],
      image: "/placeholder.svg"
    },
    {
      year: "2023",
      title: "Ganesh Chaturthi Celebration",
      date: "August 19-31, 2023",
      location: "Community Hall, Varahi",
      participants: "120+ Youth Members",
      highlights: [
        "Sustainable celebration with clay idol",
        "Youth talent showcase program",
        "Social service drives during festival",
        "Cultural workshops for children",
        "Grand finale with traditional procession"
      ],
      image: "/placeholder.svg"
    },
    {
      year: "2022",
      title: "Ganesh Chaturthi Celebration",
      date: "August 31 - September 9, 2022",
      location: "Community Hall, Varahi",
      participants: "100+ Youth Members",
      highlights: [
        "First post-pandemic celebration",
        "Digital participation options",
        "Health safety protocols maintained",
        "Virtual darshan live streaming",
        "Eco-conscious celebration theme"
      ],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Celebration Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through our yearly Ganesh Chaturthi celebrations and witness the growing spirit of devotion
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center gap-8 animate-slide-up-fade`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Year badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {event.year}
                </div>

                {/* Event card */}
                <Card className={`flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-12' : 'md:ml-auto md:mr-12'
                }`}>
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.participants}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;