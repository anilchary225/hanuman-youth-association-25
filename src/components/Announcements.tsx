import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Megaphone, Star, BellRing,Bell  } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      type: "urgent",
      title: "Lord Ganesh Chaturthi Pooja ceremony🙏🏻",
      description: "భక్తి శ్రద్ధలతో హనుమాన్ యూత్ అసోసియేషన్ ఆధ్వర్యంలో శ్రీ వినాయక స్వామి పూజా కార్యక్రమం 27 ఆగస్టు 2025 న జరగబోతోంది. అందరూ విచ్చేసి, శ్రీ గణేశుడి ఆశీర్వాదాలు పొంది, ఈ శుభకార్యానికి భాగస్వాములు కావాలని మనవి. 🙏✨  ఈ పూజా కార్యక్రమం ద్వారా మన సమాజంలో ఐక్యత, సాంస్కృతిక వారసత్వం, మరియు ఆధ్యాత్మిక విలువలను పెంపొందించుకోవాలని లక్ష్యంగా పెట్టుకున్నాం. ఈ కార్యక్రమంలో పాల్గొని, మీ కుటుంబ సభ్యులు, స్నేహితులు అందరూ ఆహ్వానించబడతారు.",
      date: "27 Aug 2025",
      time: "6:00 PM onwards",
      location: "Ganesh Mandapam, RachaBanda, BC Colony, Akanpally village",
      category: "Pooja Announcement",
      priority: "high",
      icon: Megaphone
    },
    {
      id: 2,
      type: "urgent",
      title: "Volunteer Registration Open",
      description: "We need enthusiastic volunteers for decoration, food service, cultural programs, and crowd management. Register now to be part of the celebration team!",
      date: "Ongoing",
      time: "Register Anytime",
      location: "Online/Community Hall",
      category: "Volunteer",
      priority: "high",
      icon: Megaphone
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "border-l-red-500 bg-gradient-to-r from-red-50 to-transparent dark:from-red-950";
      case "upcoming":
        return "border-l-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950";
      case "event":
        return "border-l-green-500 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950";
      default:
        return "border-l-purple-500 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950";
    }
  };

  return (
    <section id="announcements" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Latest Updates & Announcements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about upcoming events, meetings, and opportunities to get involved with our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => {
            const IconComponent = announcement.icon;
            return (
              <Card 
                key={announcement.id}
                className={`border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up-fade ${getTypeColor(announcement.type)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{announcement.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant="secondary" 
                            className={getPriorityColor(announcement.priority)}
                          >
                            {announcement.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {announcement.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {announcement.description}
                  </CardDescription>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{announcement.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{announcement.location}</span>
                    </div>
                  </div>

                  {/* <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Stay Updated!</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Never miss important announcements! Follow us on Instagram and Youtube Channel for real-time updates about events, meetings, and opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-primary to-secondary"
                  onClick={() => window.open('https://www.instagram.com/_team_hya__', '_blank')}
                >
                  <Megaphone className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
                <Button variant="outline"
                onClick={() => window.open('https://www.youtube.com/@HANUMANYOUTHASSOCIATION', '_blank')}

                >
                  <BellRing className="h-4 w-4 mr-2" />
                  Subscribe to YouTube
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Announcements;