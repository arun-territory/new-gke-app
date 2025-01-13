import React from 'react';

const DevOpsGuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The DevOps Story: A Journey from Chaos to Harmony
          </h1>
          <p className="text-xl text-center text-gray-100">
            Transform your career with hands-on DevOps experience. Learn the tools, practices,
            and mindset needed to excel in modern software development.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Chapter 1: The Old World */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 1: The Old World of Software
          </h2>
          <p className="text-gray-700 mb-6">
            Picture yourself walking into a busy restaurant in Mumbai. The kitchen is bustling with chefs 
            preparing delicious dishes, while waiters rush around taking orders and serving customers. But 
            there's a problem - the kitchen and serving staff barely talk to each other. The chefs cook 
            beautiful dishes but have no idea how long customers are waiting. The waiters promise quick 
            delivery but don't know how complex each dish is to prepare.
          </p>
          <p className="text-gray-700 mb-6">
            This was exactly how software companies worked not too long ago. Let me tell you the story 
            of Rajesh, a developer at a large tech company in Bangalore...
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-700 italic">
              "It works perfectly on my machine!" Rajesh would say.
              "But it's crashing on our servers!" the operations team would reply.
            </p>
          </div>
        </div>

        {/* Chapter 2: The Birth of DevOps */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 2: The Birth of DevOps
          </h2>
          <p className="text-gray-700 mb-6">
            Now, imagine if that restaurant changed its way of working. The chefs and waiters started 
            communicating constantly. Chefs would know exactly how many orders were coming in, and 
            waiters would understand how long each dish takes to prepare...
          </p>
        </div>

        {/* Chapter 3: A Day in Modern Software Development */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 3: A Day in Modern Software Development
          </h2>
          <p className="text-gray-700 mb-6">
            Let's revisit Rajesh's story, but now in a company that has embraced DevOps...
          </p>
        </div>

        {/* Chapter 4: The Magic Behind the Scenes */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 4: The Magic Behind the Scenes
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700">
              Remember the transition from old Nokia phones to smartphones? It wasn't just about 
              adding a touchscreen - it was a complete revolution in how we use phones. DevOps 
              brought a similar revolution to software development...
            </p>
          </div>
        </div>

        {/* Chapter 5: Real Stories of Transformation */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 5: Real Stories of Transformation
          </h2>
          <p className="text-gray-700 mb-6">
            Let me tell you about a small startup in Pune. They were struggling to release new 
            features for their e-commerce app...
          </p>
        </div>

        {/* Chapter 6: Your Role in This Revolution */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 6: Your Role in This Revolution
          </h2>
          <p className="text-gray-700 mb-6">
            This is where you come in. The world needs more DevOps engineers - people who can bridge 
            the gap between development and operations...
          </p>
        </div>

        {/* Chapter 7: Starting Your Journey */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 7: Starting Your Journey
          </h2>
          <p className="text-gray-700 mb-6">
            Your journey begins with understanding both the kitchen (development) and service 
            (operations) aspects of software...
          </p>
        </div>

        {/* Chapter 8: A Day in the Life */}
        <div className="prose prose-lg max-w-none mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 8: A Day in the Life of a DevOps Engineer
          </h2>
          <p className="text-gray-700 mb-6">
            Let's spend a day with Priya, a DevOps engineer at a growing startup in Bangalore...
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Morning Stand-up (10:00 AM)</h3>
            <p className="text-gray-700">
              Priya joins the daily stand-up meeting with multiple teams...
            </p>
          </div>
        </div>

        {/* Inspiring Conclusion */}
        <div className="prose prose-lg max-w-none mt-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Road Ahead
          </h2>
          <p className="text-gray-700">
            As you start this journey, you're not just learning a new skill - you're becoming part 
            of a revolution in how software is built and delivered...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevOpsGuidePage;