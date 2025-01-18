import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './Card';
import { Button } from './Button';
import { Alert, AlertDescription } from './alert';
import { 
  ChevronRight, 
  Terminal, 
  Code, 
  Box, 
  Play, 
  Upload, 
  Globe, 
  Search,
  ExternalLink 
} from 'lucide-react';

const EnhancedCodingDemo = () => {
  const [isDemoStarted, setIsDemoStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Your repository URL
  const repoUrl = 'https://github.com/arun-territory/demo-live-project';
  const gitpodUrl = `https://gitpod.io/#${repoUrl}`;

  const steps = [
    {
      title: "Creating React App Structure",
      code: `# First, create a new React app
npx create-react-app weather-dashboard
cd weather-dashboard

# Install required dependencies
npm install axios @material-ui/core @material-ui/icons`,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Writing Weather Dashboard Component",
      code: `// src/components/WeatherDashboard.js
import React, { useState } from 'react';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  
  const handleSearch = () => {
    // Weather API integration will go here
    console.log('Searching for:', city);
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <div className="search-box">
        <input 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}`,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Creating Dockerfile",
      code: `# Step 1: Build the React app
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
      icon: <Box className="w-6 h-6" />
    },
    {
      title: "Pushing to GitHub Repository",
      code: `# Initialize git repository
git init

# Add files to git
git add .

# Commit changes
git commit -m "Initial commit: Weather Dashboard App"

# Add GitHub repository as remote
git remote add origin https://github.com/username/weather-dashboard.git

# Push to GitHub
git push -u origin main`,
      icon: <Upload className="w-6 h-6" />
    },
    {
      title: "Creating GitHub Actions Workflow",
      code: `# .github/workflows/deploy.yml
name: Build and Deploy to GKE

on:
  push:
    branches: [ main ]

env:
  PROJECT_ID: my-project
  GKE_CLUSTER: weather-cluster
  GKE_ZONE: us-central1-c
  IMAGE: weather-dashboard

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Set up Cloud SDK
      uses: google-github-actions/setup-gcloud@v0
      with:
        service_account_key: \${{ secrets.GKE_SA_KEY }}
        project_id: \${{ env.PROJECT_ID }}

    - name: Build Docker image
      run: |
        docker build -t gcr.io/\$PROJECT_ID/\$IMAGE:$GITHUB_SHA .
        
    - name: Push to Google Container Registry
      run: |
        gcloud auth configure-docker
        docker push gcr.io/\$PROJECT_ID/\$IMAGE:$GITHUB_SHA

    - name: Deploy to GKE
      run: |
        gcloud container clusters get-credentials \$GKE_CLUSTER
        kubectl set image deployment/weather-app \\
          weather-app=gcr.io/\$PROJECT_ID/\$IMAGE:$GITHUB_SHA`,
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "GitHub Actions Pipeline Running",
      code: `✓ Build and Deploy to GKE workflow
├─ Build Docker image
│  └─ Successfully built gcr.io/my-project/weather-app
├─ Push to Container Registry
│  └─ Image pushed successfully
└─ Deploy to GKE
   └─ Deployment "weather-app" successfully rolled out

Pipeline completed successfully!`,
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Deploying to GKE",
      code: `# Apply Kubernetes deployment
kubectl apply -f k8s/deployment.yaml

# Verify deployment
kubectl get deployments
kubectl get pods`,
      icon: <Globe className="w-6 h-6" />,
      showPreview: true
    }
  ];

  const highlightCode = (code: string): string => {
    const lines = code.split('\n');
    return lines.map((line: string) => {
      if (line.startsWith('#')) {
        return `<div class="text-gray-400">${line}</div>`;
      }
      if (line.startsWith('git') || line.startsWith('docker') || line.startsWith('npm') || line.startsWith('kubectl')) {
        return `<div class="text-cyan-400">${line}</div>`;
      }
      if (line.startsWith('//')) {
        return `<div class="text-gray-400">${line}</div>`;
      }
      if (line.includes('name:') || line.includes('on:') || line.includes('env:') || line.includes('jobs:')) {
        return `<div class="text-purple-400">${line}</div>`;
      }
      if (line.includes('✓') || line.includes('successfully')) {
        return `<div class="text-green-400">${line}</div>`;
      }
      return `<div class="text-white">${line}</div>`;
    }).join('');
  };

  const currentCode = steps[currentStep].code.slice(0, typeIndex);

  useEffect(() => {
    if (isDemoStarted && isTyping && typeIndex < steps[currentStep].code.length) {
      const timer = setTimeout(() => {
        setTypeIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timer);
    }
    if (isDemoStarted && steps[currentStep].showPreview) {
      const timer = setTimeout(() => {
        setShowPreview(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typeIndex, isTyping, currentStep, isDemoStarted]);

  const handleStart = () => {
    setIsDemoStarted(true);
    setIsTyping(true);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setTypeIndex(0);
      setIsTyping(true);
      setShowPreview(false);
    }
  };

  const handleStartWorkspace = () => {
    setIsLoading(true);
    window.open(gitpodUrl, '_blank');
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!isDemoStarted ? (
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">GKE Application Deployment Demo</h2>
            <p className="mb-6 text-gray-600">Learn how to build and deploy a React app to Google Kubernetes Engine</p>
            <Button 
              onClick={handleStart}
              className="flex items-center mx-auto"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Project
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {steps[currentStep].icon}
                <h2 className="text-xl font-bold ml-2">{steps[currentStep].title}</h2>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg font-mono">
                <div dangerouslySetInnerHTML={{ __html: highlightCode(currentCode) }} />
              </div>
              
              {showPreview && (
                <div className="mt-4">
                  <div className="border rounded-lg shadow-lg">
                    <div className="bg-gray-100 p-2 rounded-t-lg flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-white rounded flex items-center px-3 py-1 gap-2">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">https://weather-app.example.com</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6">
                      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-bold text-center mb-4">Weather Dashboard</h1>
                        <div className="flex gap-2">
                          <input 
                            className="flex-1 p-2 border rounded"
                            placeholder="Enter city name"
                          />
                          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Step {currentStep + 1} of {steps.length}
                </div>
                {currentStep < steps.length - 1 && (
                  <Button 
                    onClick={handleNext}
                    className="flex items-center"
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Live Demo Section */}
          {currentStep === steps.length - 1 && (
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-bold">Try it yourself - Live Coding Environment</h2>
                  
                  <Alert>
                    <AlertDescription className="text-sm">
                      Click the button below to launch a full development environment where you can code and run the project.
                    </AlertDescription>
                  </Alert>

                  <div className="flex flex-col items-center gap-4">
                    <Button 
                      onClick={handleStartWorkspace}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      <Code className="w-5 h-5 mr-2" />
                      Open in GitPod
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="text-sm text-gray-600">
                      First time? You'll need to sign in with GitHub (it's free!)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
                    <div>
                      <h3 className="font-semibold mb-2">What you'll get:</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Full VS Code environment</li>
                        <li>• Live preview of your app</li>
                        <li>• Real terminal access</li>
                        <li>• Pre-installed dependencies</li>
                        <li>• Automatic setup</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Getting Started:</h3>
                      <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-4">
                        <li>Click "Open in GitPod"</li>
                        <li>Sign in with GitHub if prompted</li>
                        <li>Wait for the environment to load</li>
                        <li>Start coding!</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default EnhancedCodingDemo;