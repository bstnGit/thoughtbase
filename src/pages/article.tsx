import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator"

const Article = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-center my-8 lg:space-x-4 mx-5">
      {/* Left Section */}
      <div className="w-full lg:w-1/4 md:mb-0">
        <Card>
          <div className="min-h-[200px]"></div>
        </Card>
      </div>

      {/* Middle Section */}
      <Separator orientation = "vertical"/>
      <div className="w-full lg:w-2/4 mt-4 lg:mt-0 mb-4 max-w-[1000px]">
        <Card>
          <CardHeader>
            <CardTitle>Middle Section</CardTitle>
          </CardHeader>
          <CardContent>



          </CardContent>
        </Card>
      </div>
      <Separator orientation = "vertical"/>

      {/* Right Section */}
      <div className="w-full lg:w-1/4">
        <Card>
          <div className="min-h-[200px]"></div>
        </Card>
      </div>
    </div>
  );
};

export default Article;
