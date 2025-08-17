import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Video, Download, Filter, Calendar, FolderOpen } from "lucide-react"

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  
  // Gallery data with Google Drive integration
  const galleryItems = [
    { 
      id: 1, 
      type: "folder", 
      year: "2025", 
      title: "Lord Ganesh Procession 2025", 
      thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=300&fit=crop",
      category: "procession",
      link: "https://drive.google.com/drive/folders/1CRhDwR9C70cXuXgcmlqgPdTAV2Cq7zB9?usp=drive_link"
    },
    { 
      id: 2, 
      type: "folder", 
      year: "2025", 
      title: "Festival Highlights 2025", 
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "celebration",
      link: "https://drive.google.com/drive/folders/1R4-rh207TD3eYaqcflSID_uFkU8p5c8N?usp=drive_link"
    },
    { 
      id: 3, 
      type: "folder", 
      year: "2025", 
      title: "Youth Photos 2025", 
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "youth",
      link: "https://drive.google.com/drive/folders/1jxmslx3yKk5HtFJs40csciaBxfCd2qr0?usp=drive_link"
    },
    { 
      id: 4, 
      type: "photo", 
      year: "2024", 
      title: "Ganesh Procession 2024", 
      thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=300&fit=crop",
      category: "procession"
    },
    { 
      id: 5, 
      type: "photo", 
      year: "2024", 
      title: "Community Prayers", 
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "prayer"
    },
    { 
      id: 6, 
      type: "video", 
      year: "2023", 
      title: "Festival Highlights 2023", 
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "celebration"
    },
    { 
      id: 7, 
      type: "photo", 
      year: "2023", 
      title: "Decoration Ceremony", 
      thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=300&fit=crop",
      category: "decoration"
    },
    { 
      id: 8, 
      type: "photo", 
      year: "2024", 
      title: "Youth Volunteers", 
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "volunteers"
    },
    { 
      id: 9, 
      type: "video", 
      year: "2024", 
      title: "Aarti Ceremony", 
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "prayer"
    }
  ]

  const years = ["all", "2025", "2024", "2023", "2022"]
  const categories = ["all", "procession", "prayer", "celebration", "decoration", "volunteers", "youth"]

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === "all") return true
    return item.year === activeFilter || item.category === activeFilter
  })

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sacred <span className="text-gradient">Memories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Relive the divine moments of our Ganesh Chaturthi celebrations through our cherished collection 
            of photos and videos, capturing the essence of devotion and community spirit.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up-fade">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[...years, ...categories.slice(1)].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`capitalize ${
                  activeFilter === filter 
                    ? "primary-gradient text-primary-foreground" 
                    : "border-primary/20 hover:bg-primary/10"
                }`}
              >
                {years.includes(filter) && <Calendar className="h-3 w-3 mr-1" />}
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id}>
              {item.type === "folder" ? (
                <Card 
                  className="group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 card-shadow border-primary/20 hover:border-primary/40 animate-slide-up-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <CardContent className="p-0 relative">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-4 right-4">
                          <FolderOpen className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="absolute bottom-4 right-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(item.link, '_blank')
                            }}
                          >
                            <FolderOpen className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {item.year}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className="text-xs capitalize bg-accent/10 text-accent border-0"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Card 
                      className="group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 card-shadow border-primary/20 hover:border-primary/40 animate-slide-up-fade"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-0 relative">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-4 right-4">
                              {item.type === "video" ? (
                                <Video className="h-6 w-6 text-white" />
                              ) : (
                                <Camera className="h-6 w-6 text-white" />
                              )}
                            </div>
                            
                            <div className="absolute bottom-4 right-4">
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle download
                                }}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                              {item.year}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className="text-xs capitalize bg-accent/10 text-accent border-0"
                            >
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full">
                <div className="aspect-video w-full">
                  {item.type === "video" ? (
                    <div className="w-full h-full bg-black/90 rounded-lg flex items-center justify-center">
                      <Video className="h-16 w-16 text-white/50" />
                      <span className="ml-4 text-white">Video Player Placeholder</span>
                    </div>
                  ) : (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline">{item.year}</Badge>
                    <Badge variant="secondary" className="capitalize">{item.category}</Badge>
                  </div>
                </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-slide-up-fade">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 text-primary"
          >
            Load More Memories
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Gallery