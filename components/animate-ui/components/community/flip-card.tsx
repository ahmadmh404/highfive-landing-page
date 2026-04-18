"use client";

import { Button } from "@/components/ui/button";
import { easeOut, motion } from "motion/react";
import * as React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn, getInitials } from "@/lib/utils";
import { CustomImage } from "@/components/shared";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface FlipCardData {
  name: string;
  role: string;
  image: string;
  bio: string;
  // stats: {
  //   following: number;
  //   followers: number;
  //   posts?: number;
  // };
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  const initials = getInitials(data.name);

  return (
    <div
      className="mt-2 relative w-full min-h-70 lg:h-140 perspective-1000 cursor-pointer mx-auto"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Profile */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-5 py-6 flex flex-col items-center justify-center bg-gradient-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Avatar className="size-20 md:size-24 rounded-full object-cover mb-4 border-2">
          <AvatarImage src={data.image} alt={data.name} className="grayscale" />
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-bold text-foreground">{data.name}</h2>
        <p className="text-sm text-muted-foreground">@{data.role}</p>
      </motion.div>

      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-md border-2 border-foreground/20 px-5 py-6 flex flex-col justify-center items-center gap-2 bg-gradient-to-tr from-muted via-background to-muted "
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <p className="md:text-sm text-muted-foreground text-center">
          {data.bio}
        </p>

        {/* <div className="px-6 flex items-center justify-between w-full">
          <div>
            <p className="text-base font-bold">{data.stats.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div>
            <p className="text-base font-bold">{data.stats.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          {data.stats.posts && (
            <div>
              <p className="text-base font-bold">{data.stats.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
          )}
        </div> */}

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4">
          {data.socialLinks?.linkedin && (
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Linkedin size={20} />
            </a>
          )}
          {data.socialLinks?.github && (
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Github size={20} />
            </a>
          )}
          {data.socialLinks?.twitter && (
            <a
              href={data.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Twitter size={20} />
            </a>
          )}
        </div>

        <Button>Reach Out!</Button>
      </motion.div>
    </div>
  );
}
