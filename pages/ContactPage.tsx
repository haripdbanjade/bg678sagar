
import React from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-32 pb-16">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
                    <p className="text-slate-400 mb-12">
                        Have a question, a suggestion, or need support? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>
                
                <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                            <input type="text" id="subject" className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="What's this about?" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                            <textarea id="message" rows={5} className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your message..."></textarea>
                        </div>
                        <div className="text-center">
                            <Button type="submit">Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;