import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";

const Article = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-8 md:space-x-4 mx-5">
      {/* Left Section */}
      <div className="w-full md:w-1/4 md:mb-0">
        <Card>
          <div className="min-h-[200px]"></div>
        </Card>
      </div>

      {/* Middle Section */}
      <div className="w-full md:w-2/4 mb-4 max-w-[1000px]">
        <Card>
          <CardHeader>
            <CardTitle>Middle Section</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is the middle section content.</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/4">
        <Card>
          <div className="min-h-[200px]"></div>
        </Card>
      </div>
    </div>
  );
};

export default Article;
