import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Calendar, Award } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Divine Devotion",
      description: "Celebrating Lord Ganesha with pure hearts and unwavering faith"
    },
    {
      icon: Users,
      title: "Community Unity",
      description: "Bringing together youth from all backgrounds in the spirit of brotherhood"
    },
    {
      icon: Calendar,
      title: "Annual Celebrations",
      description: "Organizing magnificent Ganesh Chaturthi festivals every year"
    },
    {
      icon: Award,
      title: "Cultural Heritage",
      description: "Preserving and promoting our rich Indian traditions and values"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Hanuman Youth Association</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a vibrant community of dedicated youth committed to celebrating and preserving 
            the sacred traditions of Ganesh Chaturthi through devotion, service, and unity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 card-shadow animate-slide-up-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="primary-gradient p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 card-shadow border border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Hanuman Youth Association was founded with the sacred mission of bringing together 
                young devotees to celebrate Lord Ganesha's divine presence in our lives. Through our 
                annual Ganesh Chaturthi celebrations, we create lasting bonds, preserve cultural 
                traditions, and spread the message of unity and devotion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every year, we organize elaborate festivities that bring joy to our community while 
                maintaining the sanctity and traditional values of this auspicious festival. Our 
                gallery preserves these precious moments for generations to come.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/10 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years of Celebration</div>
              </div>
              <div className="text-center p-6 bg-accent/10 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="text-center p-6 bg-secondary/10 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Annual Events</div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Precious Memories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About