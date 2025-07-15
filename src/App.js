import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectList from "./components/ProjectList";
import ClientList from "./components/ClientList";
import ContactForm from "./components/ContactForm";  
import LoginForm from "./components/LoginForm"; 
import AdminDashboard from "./components/AdminDashboard";
import NewsletterSubscribe from "./components/NewsletterSubscribe"; 
import ClientSection from "./components/ClientSection";  
import Footer from "./components/Footer"; 




function App() {
  return (
    // <div style={{ padding: "2rem" }}>
    //    <div className="bg-white min-h-screen flex flex-col"></div>

    <>
      <h1>Flipr Landing Page</h1>
      <HeroSection />
      <ProjectList />
      <hr />
      <ClientList />
      <hr />
      <ContactForm />
      <hr />
      <hr />
      <LoginForm />
       <hr />
      <AdminDashboard/>
      <ClientSection />
      <NewsletterSubscribe />
       <Footer />  
    </>
  );
}

export default App;
