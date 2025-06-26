import React, { useState } from 'react';
import { User, Mail, Sparkles } from 'lucide-react';

const RegistrationForm = ({ onRegister, initialName, initialEmail }) => {
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ name, email });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register Your Journey</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline-block w-4 h-4 mr-2 text-blue-500" /> Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline-block w-4 h-4 mr-2 text-blue-500" /> Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
                <Sparkles className="w-5 h-5" /> Start Planning
            </button>
        </form>
    );
};

export default RegistrationForm;
