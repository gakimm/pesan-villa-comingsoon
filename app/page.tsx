"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const launchDate = new Date("2025-12-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          mins: Math.floor((distance / (1000 * 60)) % 60),
          secs: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-green-50 to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-zinc-100 font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving clouds */}
        <motion.div
          className="absolute top-10 left-0 w-full opacity-50"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 200"
            className="w-[200%] h-40"
          >
            <path
              d="M100,60 Q150,30 200,60 Q250,90 300,60 Q350,30 400,60 Q450,90 500,60 Q550,30 600,60 Q650,90 700,60 Q750,30 800,60 V200 H0 Z"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Sun rising */}
        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 blur-md shadow-xl" />
        </motion.div>

        {/* Moving mountain layers */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-[300%]"
          animate={{ x: ["0%", "-66.6%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        >
          <path
            fill="#94d3ac"
            fillOpacity="1"
            d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,90.7C1120,85,1280,139,1360,165.3L1440,192V320H0Z"
          ></path>
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-[300%]"
          animate={{ x: ["0%", "-66.6%"] }}
          transition={{ repeat: Infinity, duration: 160, ease: "linear" }}
        >
          <path
            fill="#6cb4a0"
            fillOpacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,245.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192V320H0Z"
          ></path>
        </motion.svg>
      </div>

      {/* Foreground content */}
      <main className="relative z-20 flex flex-col items-center text-center px-6 py-24">
        <Image src="/pesan-villa-web-light.png" alt="Logo" width={260} height={20} className="mb-6 dark:invert" />

        <h1 className="text-4xl font-semibold mb-3 drop-shadow-md">
          Website Lagi di siapin dulu nih ^^
        </h1>

        <p className="text-lg font-bold text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
          Sementara itu, kamu bisa kepoin dulu admin kami di{" "}
          <a target="_blank" href="https://wa.me/6288901186618?text=Halo%20min,%20saya%20mau%20pesan%20villa" className="text-sky-600 font-medium hover:underline">
            WhatsApp
          </a>{" "},
          {" "} Atau liat juga sosial media kita di{" "}
          <a href="https://www.instagram.com/pesanvillaofficial" className="text-sky-600 font-medium hover:underline">
            Instagram 
          </a>
          {" "}
          atau{" "}
          <a href="https://www.tiktok.com/@pesanvillaofficial" className="text-sky-600 font-medium hover:underline">
            TikTok
          </a>
          {" "} yaa
          .
        </p>

        {/* Countdown */}
        <div className="flex gap-6 text-center mb-10">
          {["Hari", "Jam", "Menit", "Detik"].map((label, i) => (
            <div key={label}>
              <div className="text-4xl font-bold">
                {Object.values(timeLeft)[i].toString().padStart(2, "0")}
              </div>
              <div className="text-sm uppercase text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
            <a
            target="_blank"
            href="https://wa.me/6288901186618?text=Halo%20min,%20saya%20mau%20pesan%20villa"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 shadow-md transition font-medium"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.65 2.14 8.11L0 32l8.09-2.14A15.91 15.91 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.09c-3.02 0-5.98-.87-8.53-2.51l-.61-.37-4.81 1.27 1.28-4.7-.39-.62A13.03 13.03 0 0 1 2.91 16c0-7.02 5.71-12.73 12.73-12.73 7.02 0 12.73 5.71 12.73 12.73 0 7.02-5.71 12.73-12.73 12.73zm6.98-9.3c-.38-.19-2.25-1.11-2.6-1.24-.35-.13-.61-.19-.87.19-.26.38-1 1.24-1.23 1.49-.23.26-.45.28-.83.09-.38-.19-1.6-.59-3.05-1.88-1.12-.99-1.88-2.21-2.1-2.59-.22-.38-.02-.58.17-.77.18-.18.38-.45.57-.68.19-.23.25-.38.38-.64.13-.26.06-.48-.03-.67-.09-.19-.87-2.1-1.2-2.89-.32-.77-.65-.67-.87-.68-.22-.01-.48-.01-.74-.01-.26 0-.67.1-1.02.48-.35.38-1.33 1.3-1.33 3.17 0 1.87 1.36 3.68 1.55 3.93.19.26 2.67 4.08 6.47 5.73.91.39 1.62.62 2.17.79.91.29 1.74.25 2.4.15.73-.11 2.25-.92 2.57-1.81.32-.9.32-1.67.23-1.81-.09-.14-.35-.23-.74-.42z" />
            </svg>
            Chat WhatsApp
            </a>
            <a
            target="_blank"
            href="https://www.tiktok.com/@pesanvillaofficial"
            className="flex items-center justify-center gap-2 rounded-full bg-[#0c0214] hover:bg-[#2f213cf5] text-white px-6 py-3 shadow-md transition font-medium"
            >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12.707 2.003a.75.75 0 0 1 .793.106 4.87 4.87 0 0 0 3.082 1.113 4.84 4.84 0 0 0 .417 2.013 4.86 4.86 0 0 0 1.441 1.763 5.6 5.6 0 0 0 1.79.942v2.26a7.88 7.88 0 0 1-3.408-.775v5.546a5.78 5.78 0 1 1-5.781-5.781h.188V7.77a7.9 7.9 0 0 1-1.13-.081v6.32a3.52 3.52 0 1 0 3.52 3.52V2.75a.75.75 0 0 1 .588-.747z"/>
              </svg>
            @pesanvillaofficial
            </a>
            <a
              href="https://www.instagram.com/pesanvillaofficial"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 font-medium transition-all hover:opacity-90 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5zm5.25-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
              </svg>
              @pesanvillaofficial
            </a>

        </div>
      </main>
    </div>
  );
}
