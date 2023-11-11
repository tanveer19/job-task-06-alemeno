import React, { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://job-task-06-alemeno-server.vercel.app/allclasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  return [classes, loading];
};

export default useClasses;
