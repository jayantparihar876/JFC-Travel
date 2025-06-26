import React, { useState, useEffect } from 'react';
import { Plane, MapPin, CalendarDays, User, Mail, Sparkles } from 'lucide-react';

// RegistrationForm Component
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

// TravelPlanForm Component
const TravelPlanForm = ({ onGeneratePackage, userName, isLoading, initialDestination, initialDays }) => {
    const [destination, setDestination] = useState(initialDestination);
    const [days, setDays] = useState(initialDays);

    const handleSubmit = (e) => {
        e.preventDefault();
        onGeneratePackage({ destination, days });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Plan Your Adventure, {userName}!</h2>
            <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline-block w-4 h-4 mr-2 text-blue-500" /> Destination
                </label>
                <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g., Paris, Tokyo, Bali"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                    required
                />
            </div>
            <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-2">
                    <CalendarDays className="inline-block w-4 h-4 mr-2 text-blue-500" /> Number of Days
                </label>
                <input
                    type="number"
                    id="days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    placeholder="e.g., 3, 7, 10"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Plan...
                    </>
                ) : (
                    <>
                        <Sparkles className="w-5 h-5" /> Generate My Travel Plan
                    </>
                )}
            </button>
        </form>
    );
};

// TravelPackageDisplay Component
const TravelPackageDisplay = ({ userName, destination, days, travelPackage, onStartNewPlan }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Your JFC Travel Package to {destination}!</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-inner max-h-[60vh] overflow-y-auto custom-scrollbar">
                <p className="text-lg font-medium mb-3 text-blue-800">Hello {userName}, here is your personalized {days}-day travel plan:</p>
                {travelPackage ? (
                    // Render markdown content by converting newlines to <br> for basic formatting
                    <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: travelPackage.replace(/\n/g, '<br>') }} />
                ) : (
                    <p className="text-gray-600">No package generated yet. Please go back and try again.</p>
                )}
            </div>
            <button
                onClick={onStartNewPlan}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mt-6"
            >
                <Plane className="w-5 h-5" /> Plan Another Trip
            </button>
        </div>
    );
};


// Main App Component
const App = () => {
    // State to manage the current step in the application flow
    const [step, setStep] = useState(0); // 0: Registration, 1: Travel Plan Input, 2: Package Display

    // State for registration form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // State for travel plan form data
    const [destination, setDestination] = useState('');
    const [days, setDays] = useState('');

    // State for the generated travel package
    const [travelPackage, setTravelPackage] = useState('');
    // State for loading indicator during API call
    const [isLoading, setIsLoading] = useState(false);
    // State for error messages
    const [error, setError] = useState('');

    // Firebase configuration and auth global variables - used to satisfy canvas requirements
    // These variables are provided by the Canvas environment.
    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : '';

    // Effect to handle Firebase initialization and authentication
    useEffect(() => {
        // This block is primarily for satisfying the Canvas environment's Firebase requirements.
        // For this specific app, Firebase is not used for data persistence as per the user's request.
        // However, a basic setup is included to prevent potential Canvas-related errors if these globals are present.
        const initializeFirebase = async () => {
            try {
                // Dummy Firebase init for Canvas compliance, as it's not strictly used for data persistence here.
                // If you were to use Firestore, you'd initialize real Firebase services here.
                console.log("Firebase config:", firebaseConfig);
                console.log("App ID:", appId);
                console.log("Initial Auth Token exists:", !!initialAuthToken);
            } catch (e) {
                console.error("Error initializing Firebase (this might be expected if not using Firestore):", e);
            }
        };
        initializeFirebase();
    }, []); // Empty dependency array means this runs once on mount

    // Handles the submission of the registration form
    const handleRegister = (formData) => {
        const { name, email } = formData;
        if (name && email) {
            setName(name);
            setEmail(email);
            setStep(1); // Move to the next step (travel plan input)
            setError(''); // Clear any previous errors
        } else {
            setError('Please fill in both name and email.');
        }
    };

    // Handles the submission of the travel plan form
    const handleGeneratePackage = async (formData) => {
        const { destination, days } = formData;
        if (destination && days && parseInt(days) > 0) {
            setDestination(destination);
            setDays(days);
            setIsLoading(true);
            setError('');
            setTravelPackage(''); // Clear previous package

            try {
                // Construct the prompt for the Gemini API
                const prompt = `Create a ${days}-day travel itinerary for ${destination}.
                Include:
                - Hostel recommendations (1-2 per day if relevant, or overall suggestion)
                - Places to visit for each day with approximate times/schedule.
                - Daily activities and meal suggestions.
                - Make it detailed and engaging.`;

                // Retrieve API key from environment variable
                // In a Vite project, environment variables are accessed via import.meta.env
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

                if (!apiKey) {
                    throw new Error("Gemini API Key is not configured. Please set VITE_GEMINI_API_KEY environment variable.");
                }

                // Prepare the payload for the Gemini API call
                const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
                const payload = { contents: chatHistory };

                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                // Make the API call to Gemini
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                // Check if the response was successful
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                // Extract the generated text from the response
                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    setTravelPackage(text);
                    setStep(2); // Move to the package display step
                } else {
                    setError("Failed to generate package. No content received from AI.");
                }
            } catch (err) {
                console.error("Error generating travel package:", err);
                setError(`Failed to generate travel package: ${err.message}. Please try again.`);
            } finally {
                setIsLoading(false);
            }
        } else {
            setError('Please enter a valid destination and number of days (must be greater than 0).');
        }
    };

    // Function to restart the process
    const startNewPlan = () => {
        setStep(0);
        setName('');
        setEmail('');
        setDestination('');
        setDays('');
        setTravelPackage('');
        setError('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 font-sans text-gray-800">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-blue-200">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 flex items-center justify-center gap-3">
                    <Plane className="text-blue-500 w-9 h-9" />
                    JFC Travelers
                </h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6" role="alert">
                        {error}
                    </div>
                )}

                {step === 0 && (
                    <RegistrationForm
                        onRegister={handleRegister}
                        initialName={name}
                        initialEmail={email}
                    />
                )}

                {step === 1 && (
                    <TravelPlanForm
                        onGeneratePackage={handleGeneratePackage}
                        userName={name}
                        isLoading={isLoading}
                        initialDestination={destination}
                        initialDays={days}
                    />
                )}

                {step === 2 && (
                    <TravelPackageDisplay
                        userName={name}
                        destination={destination}
                        days={days}
                        travelPackage={travelPackage}
                        onStartNewPlan={startNewPlan}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
