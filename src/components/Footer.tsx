import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 primary-gradient rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <div className="text-center md:text-left">
              <div className="font-bold text-primary text-sm">VARAHI YOUTH ASSOCIATION</div>
              <div className="text-xs text-muted-foreground">Celebrating Divine Traditions</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse-glow" />
            <span>for Lord Ganesha</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary/10 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Varahi Youth Association. All rights reserved.</p>
          <p className="mt-1">गणपति बप्पा मोरया | मंगलमूर्ति मोरया</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer