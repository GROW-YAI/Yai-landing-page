import React, { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink, CheckCircle, Send } from "lucide-react";

const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formState);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="contacts">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] text-center mb-2">Get In Touch</h2>
        <div className="w-24 h-1 bg-[#2E2668] mx-auto mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto text-xl">
        Have questions or want to learn more? Drop us a message and our team will get back to you faster than you can say "impressive response time!".
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <div className="bg-white rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group  h-86 w-65 mx-auto max-md:h-65 max-md:w-90 max-md:p-3">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-[#2E2668] rounded-full flex items-center justify-center">
              <Phone className="text-white w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h3>
          <a
            href="tel:+1234567890"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center justify-center gap-2 group z"
          >
            +123 456 7890
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center h-86 w-65 max-md:h-65 max-md:w-90 max-md:p-3 mx-auto transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-green-100 rounded-full transform transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-[#027D00] rounded-full flex items-center justify-center">
              <Mail className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">mail Us</h3>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarah@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            sarah@gmail.com
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Address */}
        <div className="bg-white rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group  h-86 w-65 max-md:h-65 max-md:w-90 max-md:p-3 mx-auto">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-100 rounded-full transform transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-[#62027D] rounded-full flex items-center justify-center">
              <MapPin className="text-white w-10 h-10" />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4 max-md:mb-5">Visit Us</h3>
          <a
            href="https://maps.google.com/?q=123+Main+Street,City,Country"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-500 transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            123 Main Street, City, Country
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start mt-9">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
          <div className="bg-gradient-to-r from-[#2E2668] to-[#027D00] py-4 px-6">
            <h3 className="text-white font-semibold text-xl flex items-center">
              <Send className="mr-2 h-5 w-5" /> Send Us a Message
            </h3>
          </div>
          
          <form action="mailto:sarah@gmail.com" method="post" onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center text-green-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="How can we help you today?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2E2668] to-[#027D00] text-white py-2 px-4 rounded-md hover:opacity-90 transition-colors flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
        
        {/* Office Hours */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:shadow-lg hover:-translate-y-1">
            <h4 className="font-semibold text-[#2E2668] text-xl mb-4">Hours Available</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Monday - Friday:
                </span>
                <span className="text-gray-800 font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Saturday:
                </span>
                <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  Sunday:
                </span>
                <span className="text-gray-800 font-medium">Closed</span>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-gradient-to-br from-[#2E2668] to-[#027D00] rounded-lg p-6 text-white">
            <h4 className="font-semibold text-xl mb-4">Need Urgent Help?</h4>
            <p className="mb-4">Our support team is available for emergency assistance during business hours.</p>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center bg-white text-[#2E2668] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Support
            </a>
          </div> */}
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
