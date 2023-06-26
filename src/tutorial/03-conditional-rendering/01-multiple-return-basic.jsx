import { useState, useEffect } from "react";

const MultipleReturnBasic = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Done fetching data
      setIsLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h1>Multi return basics</h1>;
};

export default MultipleReturnBasic;
