'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const ProjectCard = ({ project, index, total }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <a
            ref={ref}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-950/30 hover:border-cyan-700/40 block sm:static
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{
                position: "sticky",
                top: 0,
                zIndex: total - index,
            }}
        >
            <div className="relative overflow-hidden">
                <Image
                    src={project.src}
                    alt={project.alt}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-sm md:text-base group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                </p>
            </div>

            {/* Hover effect indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
        </a>
    );
};