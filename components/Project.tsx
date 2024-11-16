"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <Link href={link} rel="noopener noreferrer" target="_blank">
        <section className="relative max-w-[42rem] overflow-hidden rounded-xl border border-black/15 bg-stone-100 transition hover:border-stone-400 hover:bg-stone-200 dark:bg-stone-600 dark:text-stone-50 dark:hover:bg-stone-500 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-stone-700 dark:text-stone-100">
              {description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
                  key={index}
                >
                  {tag}{" "}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt="Project I made"
            quality={90}
            className="absolute -right-40 top-8 hidden w-[28.5rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </section>
      </Link>
    </motion.div>
  );
}
