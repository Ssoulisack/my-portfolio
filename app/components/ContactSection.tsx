"use client";
import { useState } from "react";

import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../data/contact";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission - would connect to backend or email service
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <div>
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-input rounded-md bg-background" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-input rounded-md bg-background" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-input rounded-md bg-background resize-none" />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {contactInfo.social.map(platform => <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                  {platform.name === "GitHub" && <Github size={18} />}
                  {platform.name === "LinkedIn" && <Linkedin size={18} />}
                  {platform.name === "Twitter" && <Twitter size={18} />}
                  <span>{platform.name}</span>
                </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-1 flex-shrink-0" size={18} />
              <p>{contactInfo.location}</p>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground mt-2">
              <Mail className="mt-1 flex-shrink-0" size={18} />
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}