// RoadmapSection.tsx
import { LucideIcon } from 'lucide-react';

interface RoadmapSectionProps {
  number: number;
  title: string;
  subtitle: string;
  details: string[];
  learningObjectives?: string[];
  icon: LucideIcon;
}

export function RoadmapSection({ 
  number, 
  title, 
  subtitle,
  details,
  learningObjectives,
  icon: Icon 
}: RoadmapSectionProps) {
  return (
    <div className="mb-12 p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl shrink-0">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
        <div>
          <div className="text-sm font-semibold text-blue-600 mb-1">Module {number}</div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">{subtitle}</p>
        </div>
      </div>

      {learningObjectives && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives:</h3>
          <ul className="space-y-2 ml-4">
            {learningObjectives.map((objective, index) => (
              <li key={`objective-${index}`} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Module Content:</h3>
        <ul className="space-y-4 ml-4">
          {details.map((detail, index) => (
            <li key={`content-${index}`} className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}