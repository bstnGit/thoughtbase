import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "./ui/card";
import ThemedImage from './ui/themed-image';

interface AreaOfInterestProp {
  fileName: string;
  className?: string;
  children?: React.ReactNode;
}

const AreaOfInterest: React.FC<AreaOfInterestProp> = ({ fileName, className, children }) => {
  return (
    <div className={`flex flex-col max-w-[450px] flex-shrink-0 w-1/2 sm:w-1/3 ${className}`}>
      <Card className="w-full px-10">
        <CardContent>
          <ThemedImage
            fileName={ fileName }
            width={300}
            height={300}
            alt=""
          />
        </CardContent>
      </Card>
      { children }
    </div>
  );
};

interface AreaOfInterestHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const AreaOfInterestHeader: React.FC<AreaOfInterestHeaderProps> = ({ className, children }) => (
  <div className={cn('mt-2 font-bold text-1xl lg:text-2xl text-primary', className)}>
    {children}
  </div>
);

interface AreaOfInterestDescriptionProps {
  className?: string;
  children?: React.ReactNode; 
}

const AreaOfInterestDescription: React.FC<AreaOfInterestDescriptionProps> = ({ className, children }) => (
  <p className={cn('mt-1 text-sm md:text-base w-[400px]', className)}>
    {children}
  </p>
);

export { AreaOfInterest, AreaOfInterestHeader, AreaOfInterestDescription };
