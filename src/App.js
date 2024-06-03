import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import Services from './Components/Services';
import Layout from './layout';
import Property from './Components/Property';
import StorySection from './Components/StorySection';
import FindPlace from './Components/FindPlace';
import LearnMore from './Components/LearnMore';
import TeamSection from './Components/TeamSection';
import BlogSection from './Components/BlogSection';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className='overflow-hidden'>  
      <Layout>
      <HeroSection/>
      <AboutSection />
      <Services />
      <Property/>
      <StorySection />
      <FindPlace/>
      <LearnMore />
      <TeamSection />
      <BlogSection />
       <ContactUs />

      </Layout>

    </div>
  );
}

export default App;
