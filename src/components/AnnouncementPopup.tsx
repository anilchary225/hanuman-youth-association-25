import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Megaphone, X } from "lucide-react";

const AnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown today
    const lastShown = localStorage.getItem('announcementShown');
    const today = new Date().toDateString();
    
    if (lastShown !== today) {
      setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      localStorage.setItem('announcementShown', today);
    }
  }, []);
  const getTomorrowDate = () => {
    const tomorrow = new Date(2025, 7, 20); // August 20, 2025
    return tomorrow.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-transparent dark:from-red-950 animate-slide-up-fade">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
                <Megaphone className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <CardTitle className="text-lg leading-tight text-red-800 dark:text-red-200">
                  Logo Inauguration - 2025 Ganesh Festival Works
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    URGENT
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Inauguration
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed text-red-700 dark:text-red-300">
            గుర్తు ప్రారంభోత్సవం - Our 2025 Ganesh festival works are beginning! 
            We invite all kind-hearted youth members to gather at our Mandapam for this auspicious occasion.
          </CardDescription>
          
          <div className="space-y-2 text-sm text-red-600 dark:text-red-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{getTomorrowDate()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Ganesh Mandapam, RachaBanda, BC Colony, Akanpally village</span>
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <Button 
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setIsVisible(false)}
            >
              Got It!
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsVisible(false)}
            >
              Remind Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnouncementPopup;