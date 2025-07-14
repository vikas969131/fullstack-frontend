import React from "react";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import ClientList from "./components/ClientList";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm"; 
// import SubscribeForm from "./components/SubscribeForm"; // 
import LoginForm from "./components/LoginForm"; 
import AdminDashboard from "./components/AdminDashboard";
import NewsletterSubscribe from "./components/NewsletterSubscribe"; 
import ClientSection from "./components/ClientSection";   




function App() {
  return (
    <div style={{ padding: "2rem" }}>
       <div className="bg-white min-h-screen flex flex-col"></div>
      <h1>Flipr Landing Page</h1>
      <HeroSection />
      <ProjectList />
      <hr />
      <ClientList />
      <hr />
      <ContactForm />
      <hr />
      {/* <SubscribeForm /> */}
      <hr />
      <LoginForm />
       <hr />
      <AdminDashboard/>
      <ClientSection />
      <NewsletterSubscribe />
       <Footer />  
    </div>
  );
}

export default App;
