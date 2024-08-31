"use client";

import { logo_1 } from "@/asset";
import Image from "next/image";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary dark:bg-secondary-500">
      {/* <h1 className="text-4xl font-bold text-black dark:text-white">Krepri-Service</h1> */}
      <Image src={logo_1} alt="Khepri service" priority quality={95} className="dark:invert"/>
    </div>
  );
};

export default SplashScreen;
