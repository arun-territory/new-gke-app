import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';

const DevOpsGuidePage: React.FC = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleNavigateNext = (): void => {
    navigate('/devops-guide-page-2');
  };

  const handleNavigateBack = (): void => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
            
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            DevOps in Zomato's App for simple understanding
          </h1>
          <p className="text-xl text-center text-gray-100">
            A deep dive into modern DevOps practices through real-world scenarios and success stories
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/devopsgif.gif"
              
              alt="DevOps Architecture Diagram"
              className="w-full h-auto max-w-4xl mx-auto"
            />
            <p className="text-gray-600 text-center mt-4">
              Comprehensive overview of our DevOps architecture and workflow
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/images/beforeafter.gif"
              
              alt="DevOps Architecture"
              className="w-full h-auto max-w-4xl mx-auto"
            />
            <p className="text-gray-600 text-center mt-4">
              Comprehensive overview of our DevOps architecture
            </p>
          </div>
        

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction: What is DevOps? Why Does It Matter?
          </h2>
          <p className="text-gray-700 mb-6">
            <strong>DevOps</strong> is more than just a buzzword; it's a revolutionary way of building, testing, and deploying software. At its core, DevOps bridges the gap between <strong>development</strong> (developers writing code) and <strong>operations</strong> (teams ensuring that code runs smoothly in production). It fosters <strong>collaboration</strong>, <strong>automation</strong>, and <strong>continuous improvement</strong>—delivering software faster, more reliably, and at scale.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-700 italic text-lg">
              "In the fast food world of software, DevOps is the chef, the server, and the kitchen manager all in one—delivering your meal piping hot and error-free."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why DevOps?</h3>
          <p className="text-gray-700 mb-4">
            In today's fast-paced digital world, users demand instant updates and flawless experiences. Without DevOps, organizations face:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700"><strong>Slow releases</strong> riddled with bugs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700"><strong>Blame games</strong> between developers and operations teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700"><strong>Frequent outages</strong> and unhappy customers</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Wedding Planner Analogy</h3>
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Think of building software without DevOps like organizing a massive wedding without a planner:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700"><strong>Developers are like chefs:</strong> They create the dishes but don't set up the tables.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700"><strong>Operations teams are like the venue staff:</strong> They prepare the space but don't know the menu.</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Without coordination, guests (your users) get cold food and a chaotic experience.
            </p>
          </div>
        </div>

        {/* Chapter 1 Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 1: The Developer's Struggle Without DevOps
          </h2>
          
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Meet Sushmitha, a Zomato developer with big dreams and a tough job. One day, her manager says:
            </p>
            <blockquote className="italic border-l-4 border-blue-500 pl-4 my-4">
              "Sushmitha, we need a live order tracking feature so customers can see where their food is at all times!"
            </blockquote>
            <p className="text-gray-700 mb-4">
              Excited, Sushmitha jumps into action. She spends hours coding the feature and finally sends it to the testing team. That's where the nightmare begins.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Conflict</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Syntax Errors:</h4>
                <p className="text-gray-700">
                  "Sushmitha, your code doesn't even compile," says the testing lead, frustrated. Sushmitha realizes she missed a semicolon.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Dependency Issues:</h4>
                <p className="text-gray-700">
                  When the testing team tries to run the app, they find some libraries are missing. "It works on my laptop!" says Sushmitha.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Bug Overflow:</h4>
                <p className="text-gray-700">
                  The testers discover that live tracking crashes if a user switches from Wi-Fi to mobile data.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Back-and-Forth Hell:</h4>
                <p className="text-gray-700">
                  The testing team sends the app back to Sushmitha for fixes. She makes changes, only to find that new bugs have appeared.
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Testers feel like they're chasing a moving target.</li>
                  <li>Sushmitha feels like she's running in circles.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Operations Chaos:</h4>
                <p className="text-gray-700">
                  When the feature finally makes it to production, it crashes under heavy traffic. Users complain, and everyone blames each other.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg mb-8">
            <p className="text-red-800 font-semibold">
              👎 Result: Frustration, delays, and a toxic blame game between developers, testers, and operations teams.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">How the CI/CD Pipeline Changes Everything</h3>
            <p className="text-gray-700 mb-4">
              With a CI/CD pipeline, this chaos transforms into harmony. Here's how:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Developer's Safety Net:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Sushmitha pushes her code to GitHub.</li>
                  <li>The CI pipeline starts automatically:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Syntax errors? Caught immediately.</li>
                      <li>Missing dependencies? Fixed before reaching testers.</li>
                      <li>Bugs? Unit tests catch most of them.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Automated Testing Saves Time:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Integration tests check how Sushmitha's feature works with other parts of the app.</li>
                  <li>Performance tests simulate heavy traffic.</li>
                  <li>Security scans ensure no vulnerabilities are introduced.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Fast Feedback:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Within 15 minutes, Sushmitha knows what needs fixing.</li>
                  <li>She iterates quickly and confidently.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Testers Focus on What Matters:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Instead of wasting time on obvious bugs, testers focus on advanced scenarios.</li>
                  <li>The blame game disappears; collaboration improves.</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-6">
              <p className="text-green-800 font-semibold">
                👍 Result: A feature that took weeks now goes live in hours. Everyone's happy, especially Zomato's customers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/images/moderncicd.gif"
              
              alt="DevOps Architecture"
              className="w-full h-auto max-w-4xl mx-auto"
            />
            <p className="text-gray-600 text-center mt-4">
              Comprehensive overview of our DevOps architecture
            </p>
          </div>


        <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Chapter 3: Handling Big Sales Without Breaking a Sweat
        </h2>
        <p className="text-gray-700 mb-6">
        Let’s fast-forward to Zomato’s Big Billion Orders Sale. It’s a massive event—millions of orders flood the platform. Here's the challenge:        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">The Old Way: Manual Infrastructure Management</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Guessing Game:</h4>
            <p className="text-gray-700">The team tries to predict traffic and adds extra servers. Sometimes they overestimate and waste money. Other times, they underestimate and face crashes..</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Slow Response:</h4>
            <p className="text-gray-700">If traffic spikes unexpectedly, engineers scramble to add more servers manually. By the time they succeed, customers have already left.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">High Costs:</h4>
            <p className="text-gray-700">Servers stay active even when traffic drops, leading to unnecessary expenses.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The DevOps Way: Cloud + Automation</h3>
        {/* Add content here */}
        <div>
        <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">1.nfrastructure as Code:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Zomato defines its infrastructure needs in code. For example:</li>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Normal day = 1,000 servers.</li>
                      <li>Sale day = Automatically scales to 5,000 servers.</li>
                    <li>After the sale, it scales back down, saving money.</li>  
                      
                    </ul>
                </ul>
              </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">2.Real-Time Auto Scaling::</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Imagine it’s lunchtime:</li>
                    <ul className="list-disc pl-6 mt-2">
                      <li>11:00 AM: 100 servers handle normal traffic.</li>
                      <li>11:45 AM: Orders skyrocket. The system detects the load and spins up 200 more servers.</li>
                      <li>2:00 PM: Traffic decreases. The system removes extra servers.</li>  
                    </ul>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">3.No Downtime:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Imagine it’s lunchtime:</li>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Even during peak hours, Zomato delivers smoothly. Customers are happy, and the operations team sleeps peacefully.</li>
                    </ul>
                </ul>
              </div>
            
            
          </div>
      </div>

      {/* Chapter 4 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Chapter 4: The Docker Revolution – The Old Train vs. Metro Train
        </h2>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Before Docker: The Old Steam Train</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Different Tracks:</h4>
            <p className="text-gray-700">Developers build on Windows, testers use Linux, and production runs on another setup. Apps break because environments don’t match.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">High Maintenance:</h4>
            <p className="text-gray-700">Updating apps is a slow, error-prone process.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">No Flexibility:</h4>
            <p className="text-gray-700"> If one part of the app fails, the whole system crashes.</p>
          </div>           
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Enter Docker: The Modern Metro Train</h3>
        <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Same Track Everywhere:</h4>
            <p className="text-gray-700"> Developers, testers, and production all use the same container. What works on Sushmitha’s laptop works everywhere.</p>
        </div>

        <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Easy Upgrades:</h4>
            <p className="text-gray-700"> Each part of the app (frontend, backend, database) runs in its own container. Updating one part is like replacing a single metro car—quick and safe.</p>
        </div>

        <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Seamless Scaling:</h4>
            <p className="text-gray-700">Need more capacity? Just add more containers. Docker enables auto-scaling, a must for modern web apps.Add content here  </p>
        </div>

        <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Imagine Zomato without Docker:</h4>
            <p className="text-gray-700">  Updates take hours, with frequent crashes.</p>
            <p className="text-gray-700"> Modern apps like live tracking and instant notifications wouldn’t be possible. </p>
            
        </div>


        

      </div>

      {/* Chapter 5 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Chapter 5: Kubernetes – The Maestro of Orchestration 🎶
          <div> 


          <p className="text-gray-600"> Now that Zomato has thousands of containers running, who manages them? That’s where Kubernetes comes in. Think of it as a maestro conducting an orchestra, ensuring everything plays in harmony.</p>
          </div>
        
        </h2>     
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Scenarios</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Lunch Rush in Delhi:</h4>
            <p className="text-gray-700">Traffic spikes in Delhi. Kubernetes automatically adds more containers to handle the load.
            Users experience zero slowdowns.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Self Healing</h4>
            <p className="text-gray-700">A server crashes during peak hours. Kubernetes instantly moves the containers to healthy servers.
            No downtime, no manual intervention.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Zero Downtime Updates</h4>
            <p className="text-gray-700">Sushmitha deploys a new version of the live tracking feature.
            Kubernetes rolls it out gradually, monitoring for issues. If something breaks, it rolls back automatically.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/endtoend.gif"
              
              alt="DevOps Architecture"
              className="w-full h-auto max-w-4xl mx-auto"
            />
            <p className="text-gray-600 text-center mt-4">
              Comprehensive overview of our DevOps architecture
            </p>
          </div>


      {/* Chapter 6 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Chapter 6: Real-Life Scenarios with DevOps Tools
        </h2>
        
        <div className="space-y-4">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">New Payment Gateway:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>GitHub Actions: Automates testing and security scans.</li>
            <li>Docker: Ensures the payment service works consistently across environments.</li>
            <li>Kubernetes: Manages gradual rollout and rollback.</li>
          </ul>
        </div>



        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Festival Rush:</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Terraform: Defines infrastructure that scales automatically.</li>
            <li>Prometheus: Monitors traffic and sends alerts.</li>
            <li>Kubernetes: Balances regional traffic and optimizes resources.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Restaurant Partner App Update: </h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>GitHub Actions: Automates builds and tests.</li>
            <li>Docker: Enables fast, reliable updates.</li>
            <li>Kubernetes: Host and Manage entire app </li>
          </ul>
        </div>

        </div>
      </div>

      {/* Chapter 7 */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Chapter 7: The Future of DevOps – What's Next?
        </h2>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Operations:</h4>
            <p className="text-gray-700">Predicting traffic spikes before they happen.
            Automatically fixing bugs and optimizing performance.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Platform Engineering:</h4>
            <p className="text-gray-700">Developers get pre-configured environments with one click.
            Faster, more efficient deployments.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Serverless and Edge Computing:</h4>
            <p className="text-gray-700">Instant scaling with minimal costs.
            Services delivered closer to users for faster response times.</p>
          </div>

        </div>
      </div>

      {/* The Takeaway */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Takeaway</h2>
        <p className="text-gray-700">
        DevOps isn’t just a buzzword; it’s the backbone of modern apps like Zomato. By combining automation, collaboration, and cutting-edge tools, it transforms complex challenges into seamless solutions—ensuring every meal is delivered hot and on time. 🍕
        </p>
      </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={handleNavigateBack}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Previous Chapter
          </button>
          <button 
            onClick={handleNavigateNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Chapter →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevOpsGuidePage;