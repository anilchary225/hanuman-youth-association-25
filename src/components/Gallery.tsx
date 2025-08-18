import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Users, Star, Calendar, FolderOpen } from "lucide-react"

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sacred <span className="text-gradient">Memories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our 2025 Ganesh Chaturthi celebration memories through our organized photo and video collections.
          </p>
        </div>

        {/* 2025 Gallery Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main 2025 Folder */}
          <Card 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade"
            onClick={() => window.open('https://drive.google.com/drive/folders/1GOtn_DybOUX1qzoCo5FE2er1lyywpyIl?usp=drive_link', '_blank')}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Calendar className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-center text-primary">2025</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">All Folders</p>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Complete collection of 2025 celebration memories
              </p>
            </CardContent>
          </Card>

          {/* Lord Ganesh Procession */}
          <Card 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade"
            onClick={() => window.open('https://drive.google.com/drive/folders/1le9eXr9st_z6vxWKjkjap3L0-kN6WIc6?usp=drive_link', '_blank')}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-t-lg flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FolderOpen className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-center text-orange-600">Lord Ganesh</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">Procession</p>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Sacred procession moments and divine blessings
              </p>
            </CardContent>
          </Card>

          {/* Festival Highlights */}
          <Card 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade"
            onClick={() => window.open('https://drive.google.com/drive/folders/12pWPYW5kK_5HeKT3vPnnvskCuAXLXt6J?usp=drive_link', '_blank')}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-t-lg flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Star className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-center text-green-600">Festival</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">Highlights</p>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Special celebration moments and cultural programs
              </p>
            </CardContent>
          </Card>

          {/* Youth Photos */}
          <Card 
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up-fade"
            onClick={() => window.open('https://drive.google.com/drive/folders/1V8CEqVTPDieo2w_14OR5ZSTIQUQ6E2Cp?usp=drive_link', '_blank')}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-t-lg flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Camera className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-center text-purple-600">Youth</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">Photos</p>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Our dynamic team in action and behind-the-scenes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upload Section */}
        {/* <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Share Your Memories</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Have photos or videos from our celebrations? Share them with us to be included in our gallery!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Submit Photos
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  )
}

export default Gallery