import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import heroImage from "@/assets/ganesh-hero.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="animate-slide-up-fade">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">HANUMAN YOUTH</span>
            <span className="block text-accent animate-glow">ASSOCIATION</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium">
            गणेश चतुर्थी उत्सव
          </div>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Celebrating the divine blessings of Lord Ganesha through unity, devotion, and community spirit. 
            Preserving our cherished memories and traditions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-fade">
          <Button 
            size="lg" 
            className="primary-gradient text-primary-foreground font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform duration-300 primary-shadow"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full primary-gradient opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 rounded-full secondary-gradient opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}

export default Hero