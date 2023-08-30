import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';


interface AreaOfInterestProp {
  fileName: string;
  className?: string;
  children?: React.ReactNode;
}

// TODO: Make dark theme possible
const AreaOfInterest: React.FC<AreaOfInterestProp> = ({ fileName, className, children }) => {
  return (
    <div className={`flex flex-col max-w-[450px] w-1/2 sm:w-1/3 ${className}`}>
      <Card className="w-full bg-white min-w-[250px] justify-items-center">
        <CardContent>
          <div className="min-w-[200px] flex justify-center">
            <Image
              src={ fileName }
              width={280}
              height={280}
              alt=""
            />
          </div>
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
  <h3 className={cn('mt-4', className)}>
    {children}
  </h3>
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
