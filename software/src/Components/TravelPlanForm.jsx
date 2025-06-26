import React, { useState } from 'react';
import { MapPin, CalendarDays, Sparkles } from 'lucide-react';

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

export default TravelPlanForm;
