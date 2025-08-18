import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Heart, Users, Sparkles } from "lucide-react";

const Members = () => {
  const coreMembers = [
    {
      name: "Chennakesava Goud",
      role: "Youth President",
      icon: Crown,
      description: "Leading our association with dedication to Ganesh Chaturthi celebrations",
      image: "/placeholder.svg",
      responsibilities: ["Strategic Planning", "Community Relations", "Event Coordination"]
    },
    {
      name: "Shekhar Yadav",
      role: "Vice-President", 
      icon: Heart,
      description: "Supporting our community initiatives and cultural preservation",
      image: "/placeholder.svg",
      responsibilities: ["Program Management", "Youth Mentoring", "Cultural Activities"]
    },
    {
      name: "Thirumalesh Goud",
      role: "Vice-President 2",
      icon: Sparkles,
      description: "Creative organizer behind our spectacular Ganesh celebrations",
      image: "/placeholder.svg",
      responsibilities: ["Event Planning", "Decoration", "Performance Management"]
    }
  ];

  const youthLeaders = [
    { name: "Balu Yadav", image: "/placeholder.svg" },
    { name: "Prashanth Goud", image: "/placeholder.svg" },
    { name: "Ravi Goud", image: "/placeholder.svg" },
    { name: "Shiva Chary", image: "/placeholder.svg" },
    { name: "Sai Yadav", image: "/placeholder.svg" },
    { name: "Praveen Chary", image: "/placeholder.svg" },
    { name: "Sathish Yadav", image: "/placeholder.svg" },
    { name: "Anil Chary", image: "/placeholder.svg" },
    { name: "Mahesh Yadav", image: "/placeholder.svg" },
    { name: "Chanti Yadav", image: "/placeholder.svg" },
    { name: "Bunny Rajak", image: "/placeholder.svg" },
    { name: "Ajay Yadav", image: "/placeholder.svg" },
    { name: "Akhil Yadav", image: "/placeholder.svg" },
    { name: "Laddu Yadav", image: "/placeholder.svg" },
    { name: "ManiKanta Yadav", image: "/placeholder.svg" }
  ];

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Youth Presidents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated leadership team and youth leaders from our growing community
          </p>
        </div>

        {/* Core Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={member.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10 animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-gradient-to-r from-primary/10 to-secondary/10">
                    {member.role}
                  </Badge>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Responsibilities:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.responsibilities.map((responsibility, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="text-xs bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-200"
                        >
                          {responsibility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Youth Leaders Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Youth Leaders and Members</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated youth leaders who make every celebration possible
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {youthLeaders.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10 animate-slide-up-fade"
                style={{ animationDelay: `${(index + 3) * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-gradient-to-r from-primary/10 to-secondary/10">
                    Youth Member
                  </Badge>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dedicated member contributing to our community celebrations
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Join Our Team!</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate youth who want to contribute to our community and help organize amazing celebrations. Be part of something meaningful!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Open Positions Available
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Volunteer Opportunities
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Members;