import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "Akanpally Village, Maheshwaram Mandal, Ranga Reddy District, Telangana - 509325",
      link: "#"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@varahiyouth.org",
      link: "mailto:contact@varahiyouth.org"
    }
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "#", color: "hover:text-pink-500" },
    { icon: Facebook, label: "Facebook", link: "#", color: "hover:text-blue-600" },
    { icon: Youtube, label: "YouTube", link: "#", color: "hover:text-red-500" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our sacred mission or share your precious memories with us. 
            We welcome everyone who wishes to be part of our devotional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up-fade">
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="primary-gradient p-3 rounded-full">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <a 
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Follow Our Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`border-primary/20 hover:scale-110 transition-all duration-300 ${social.color}`}
                      asChild
                    >
                      <a href={social.link} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Stay updated with our latest events, celebrations, and community activities.
                </p>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Interactive Map Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-primary/20 card-shadow animate-slide-up-fade">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Share Your Memories</CardTitle>
              <p className="text-muted-foreground">
                Submit your photos or videos from our celebrations, or just say hello!
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input 
                    placeholder="Your Name" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="What's this about?" 
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Share your thoughts, memories, or media links..." 
                  rows={5}
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                className="w-full primary-gradient text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 primary-shadow"
                size="lg"
              >
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Your submissions will be reviewed before being added to our gallery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact