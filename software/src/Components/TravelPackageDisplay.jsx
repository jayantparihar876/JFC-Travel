import React from 'react';
import { Plane } from 'lucide-react';

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

export default TravelPackageDisplay;
