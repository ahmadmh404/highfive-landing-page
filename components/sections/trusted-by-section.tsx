"use client";

import { motion } from "framer-motion";

interface TrustedBySectionProps {
  t: {
    title: string;
  };
}

export function TrustedBySection({ t }: TrustedBySectionProps) {
  const logos = [
    { name: "TechCorp", width: 160 },
    { name: "GlobalSoft", width: 180 },
    { name: "InnovateLabs", width: 170 },
    { name: "DataSystems", width: 165 },
    { name: "CloudWorks", width: 175 },
    { name: "AIFirst", width: 155 },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative border-y border-border bg-background py-20 overflow-hidden">
      {/* --- Ambient Glow Blobs --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] left-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] right-[10%] h-[250px] w-[250px] rounded-full bg-blue-500/20 blur-[80px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/50"
        >
          {t.title}
        </motion.p>

        {/* --- Infinite Marquee --- */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex flex-none gap-8 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                style={{ width: logo.width }}
                className="group relative flex h-28 items-center justify-center"
              >
                {/* --- Glass Card --- */}
                <div
                  className="flex h-full w-full items-center justify-center 
                                rounded-2xl border border-white/10 
                                bg-white/[0.03] backdrop-blur-[12px] 
                                shadow-2xl transition-all duration-500
                                group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:scale-105"
                >
                  <span className="text-lg font-bold tracking-tight text-white/40 transition-colors group-hover:text-white">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
