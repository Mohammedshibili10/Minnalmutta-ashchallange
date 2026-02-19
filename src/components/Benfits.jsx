import React from 'react'
import { Brain, Dumbbell, Zap, Heart, Eye, Shield } from "lucide-react";

export default function Benfits() {
    const features = [
        {
            title: "Boost IQ",
            value: "147mg",
            label: "Choline/egg",
            description:
                "Choline in eggs enhances memory, focus, and cognitive function for sharper thinking.",
            icon: Brain,
        },
        {
            title: "Build Muscle",
            value: "13g",
            label: "Protein/egg",
            description:
                "Complete protein with all 9 essential amino acids for optimal muscle growth and recovery.",
            icon: Dumbbell,
        },
        {
            title: "Fuel Energy",
            value: "72",
            label: "Calories/egg",
            description:
                "B-vitamins and healthy fats provide sustained energy without the crash.",
            icon: Zap,
        },
        {
            title: "Heart Health",
            value: "225mg",
            label: "Omega-3",
            description:
                "Omega-3 fatty acids support cardiovascular health and reduce inflammation.",
            icon: Heart,
        },
        {
            title: "Eye Health",
            value: "252µg",
            label: "Lutein/egg",
            description:
                "Lutein and zeaxanthin protect your eyes from age-related degeneration.",
            icon: Eye,
        },
        {
            title: "Immunity",
            value: "22µg",
            label: "Selenium/egg",
            description:
                "Selenium, zinc, and vitamins A & D strengthen your immune system naturally.",
            icon: Shield,
        },
    ];

    return (
        <div id='benfits' className='max-w-7xl mx-auto relative min-h-screen overflow-hidden mt-8 px-4 sm:px-6 lg:px-8'>
            {/* Header */}
            <div className='font-playfair space-y-5 max-w-3xl mx-auto text-center'>
                <h2 className='text-md text-[#F9BC06] mt-20 mb-5 tracking-widest'>WHY EGGS?</h2>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
                    Supercharge Your <span className='text-[#F9BC06]'>Body & Mind</span>
                </h1>
                <p className='text-gray-500 text-sm sm:text-base'>
                    One egg. Six incredible benefits. The most nutrient-dense food nature ever created.
                </p>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-10">
                {features.map((feature, index) => (
                    <div key={index} className='border border-gray-200 hover:border-[#F9BC06] transition-all hover:shadow-lg rounded-lg p-5 shadow-lg flex flex-col h-full'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='bg-[#F9BC06]/20 p-3 rounded-lg flex items-center justify-center'>
                                <feature.icon className="w-10 h-10 text-[#F9BC06]" />
                            </div>
                            <div className='text-right'>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#F9BC06]">
                                    {feature.value} <br />
                                    <span className="text-gray-400 text-sm font-normal">{feature.label}</span>
                                </h2>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className="text-xl sm:text-2xl font-semibold font-playfair">{feature.title}</h1>
                            <p className="text-sm sm:text-md text-gray-500 mt-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
