// PricingCard.tsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  buttonAction?: () => void;
  enrollUrl?: string;
}

export function PricingCard({ 
  title, 
  price, 
  features, 
  recommended,
  buttonUrl,
  buttonText = "Get Started",
  buttonAction,
  enrollUrl
}: PricingCardProps) {
  const handleClick = () => {
    if (buttonAction) {
      buttonAction();
    } else if (buttonUrl) {
      window.open(buttonUrl, '_blank');
    }
  };

  const handleEnroll = () => {
    if (enrollUrl) {
      window.open(enrollUrl, '_blank');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "p-6 rounded-2xl shadow-xl border",
        recommended ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        <Button
          variant={recommended ? "default" : "outline"}
          className="w-full"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
        {enrollUrl && (
          <Button
            variant="default"
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={handleEnroll}
          >
            Enroll
          </Button>
        )}
      </div>
    </motion.div>
  );
}


