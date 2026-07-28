import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ImageReveal({
    src,
    alt,
    play = false,
    className = "",
}) {
    const containerRef = useRef(null);
    const revealRef = useRef(null);
    const lineRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        if (!play) return;

        const ctx = gsap.context(() => {
            const reveal = revealRef.current;
            const line = lineRef.current;
            const glow = glowRef.current;

            // الصورة مخفية
            gsap.set(reveal, {
                clipPath: "inset(0 0 100% 0)",
            });

            gsap.set(line, {
                top: 0,
                opacity: 1,
            });

            gsap.set(glow, {
                opacity: 0,
                scale: 0.9,
            });

            const progress = { value: 100 };

            gsap.to(progress, {
                value: 0,
                duration: 4,
                ease: "power2.inOut",

                onUpdate() {
                    gsap.set(reveal, {
                        clipPath: `inset(0 0 ${progress.value}% 0)`,
                    });

                    const h = reveal.offsetHeight;

                    gsap.set(line, {
                        top: `${((100 - progress.value) / 100) * (h - 4)}px`,
                    });
                },

                onComplete() {
                    gsap.to(line, {
                        opacity: 0,
                        duration: 0.4,
                    });

                    // ظهور الـ Glow
                    gsap.to(glow, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                    });

                    // نبض خفيف
                    gsap.to(glow, {
                        opacity: 0.75,
                        repeat: -1,
                        yoyo: true,
                        duration: 2,
                        ease: "sine.inOut",
                    });
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [play]);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
        >
            {/* Glow */}
            <div
                ref={glowRef}
                className="
          absolute
          -inset-6
          rounded-[40px]
          bg-cyan-400/40
          blur-[55px]
          -z-10
        "
            />

            {/* الجزء الذي يتم كشفه */}
            <div
                ref={revealRef}
                className="relative overflow-hidden rounded-3xl"
            >
                <img
                    src={src}
                    alt={alt}
                    className="
            block
            w-52
            sm:w-56
            md:w-60
            lg:w-64
            rounded-3xl
            object-cover
            border
            border-cyan-300/70
            shadow-[0_0_18px_rgba(34,211,238,.9)]
          "
                />

                {/* Scan Line */}
                <div
                    ref={lineRef}
                    className="absolute left-0 top-0 z-50 w-full h-1.25 rounded-full"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent 0%, #06B6D4 20%, #A5F3FC 50%, #06B6D4 80%, transparent 100%)",
                        boxShadow:
                            "0 0 12px #06B6D4, 0 0 30px #22D3EE, 0 0 60px #22D3EE",
                    }}
                />
            </div>
        </div>
    );
}