import React from 'react';
import { Button } from './ui';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <header className="fixed top-0 w-full bg-white shadow z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Cognistone</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#platform" className="hover:text-blue-600">Platform</a>
          <a href="#industries" className="hover:text-blue-600">Industries</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <Button className="bg-blue-900 text-white">Request Demo</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Engineering Intelligence. Automating the Future.</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Cognistone builds domain-specific AI agents that automate operations across healthcare, marketing, logistics, and government.
        </p>
        <Button size="lg" className="bg-white text-blue-900 font-semibold">Explore Platform</Button>
      </section>

      <section id="platform" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our AI Platform</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
            <p>Pre-trained agents for record processing, email response, scheduling, and compliance tasks.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">LLM Integration</h3>
            <p>Integrate OpenAI, Claude, or open-source models tailored to client needs and policies.</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Compliance & Auditability</h3>
            <p>Enterprise-grade explainability, traceability, and data security by design.</p>
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left">
          <div className="border p-6 rounded-lg shadow-sm"><h4 className="font-semibold">🏥 Healthcare</h4><p>Automate patient records, test tracking, compliance workflows.</p></div>
          <div className="border p-6 rounded-lg shadow-sm"><h4 className="font-semibold">📢 Marketing</h4><p>Email campaigns, AI calling, strategy suggestions, CRM sync.</p></div>
          <div className="border p-6 rounded-lg shadow-sm"><h4 className="font-semibold">🚛 Logistics</h4><p>Smart routing, inventory updates, procurement automation.</p></div>
          <div className="border p-6 rounded-lg shadow-sm"><h4 className="font-semibold">🏛 Government</h4><p>Citizen grievance handling, benefit distribution, file tracking.</p></div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">Let’s automate your workflows. Drop us a line below.</p>
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input type="text" placeholder="Full Name" className="border p-3 w-full" />
          <input type="email" placeholder="Email Address" className="border p-3 w-full" />
          <textarea rows="4" placeholder="What would you like to automate?" className="border p-3 w-full"></textarea>
          <Button className="bg-blue-900 text-white w-full">Submit Inquiry</Button>
        </form>
      </section>

      <footer className="py-8 px-6 bg-gray-900 text-gray-300 text-center text-sm">
        © 2025 Cognistone, Inc. | hello@cognistone.com | All rights reserved
      </footer>
    </div>
  );
}
