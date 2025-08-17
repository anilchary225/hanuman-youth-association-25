import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Timeline from "@/components/Timeline"
import Gallery from "@/components/Gallery"
import Members from "@/components/Members"
import Announcements from "@/components/Announcements"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import AnnouncementPopup from "@/components/AnnouncementPopup"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementPopup />
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <Members />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
