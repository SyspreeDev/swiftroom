"use client";
import { useAnimationFrame } from "framer-motion";
import { useRef, useEffect } from "react";
import { BgSvg1, BgSvg2 } from "@/components/Icons";

const MOUSE_RADIUS = 200;
const MOUSE_FORCE = 0.06;
const MAX_SPEED = 1.2;
const FRICTION = 0.95;
const MIN_SPEED = 0.06;

// Each particle has a fixed anchor it floats around
const PARTICLES_CONFIG = [
  // Left side — BgSvg1, large, top-left, partially off screen
  {
    id: 0,
    Component: BgSvg1,
    width: 250,
    height: 250,
    anchorX: -40, // partially off left edge
    anchorY: -30, // partially off top edge
    initRotate: 42,
    rotateSpeed: 0.03,
    floatRadius: 18, // how far it drifts from anchor
  },
  // Left side — BgSvg1, large, top-left, partially off screen
  {
    id: 1,
    Component: BgSvg2,
    width: 250,
    height: 250,
    anchorX: -40, // partially off left edge
    anchorY: 300, // partially off top edge
    initRotate: 42,
    rotateSpeed: 0.03,
    floatRadius: 18, // how far it drifts from anchor
  },
  // Left side — BgSvg1, large, top-left, partially off screen
  {
    id: 2,
    Component: BgSvg1,
    width: 250,
    height: 250,
    anchorX: -40, // partially off left edge
    anchorY: 400, // partially off top edge
    initRotate: 42,
    rotateSpeed: 0.03,
    floatRadius: 18, // how far it drifts from anchor
  },

  // Right side — BgSvg2 (top), large, partially off right edge
  {
    id: 3,
    Component: BgSvg2,
    width: 250,
    height: 250,
    anchorX: null, // null = relative to right edge
    anchorXRight: -280, // offset from right edge
    anchorY: 50,
    initRotate: 15,
    rotateSpeed: 0.025,
    floatRadius: 14,
  },
  // Right side — BgSvg2 (top), large, partially off right edge
  {
    id: 4,
    Component: BgSvg1,
    width: 250,
    height: 250,
    anchorX: null, // null = relative to right edge
    anchorXRight: -280, // offset from right edge
    anchorY: 120,
    initRotate: 15,
    rotateSpeed: 0.025,
    floatRadius: 14,
  },
  // Right side — BgSvg2 (bottom), overlapping the top one
  {
    id: 5,
    Component: BgSvg2,
    width: 250,
    height: 250,
    anchorX: null,
    anchorXRight: -280, // more to the right, partially clipped
    anchorY: 250,
    initRotate: -20,
    rotateSpeed: -0.02,
    floatRadius: 16,
  },
  // Right side — BgSvg2 (bottom), overlapping the top one
  {
    id: 6,
    Component: BgSvg1,
    width: 250,
    height: 250,
    anchorX: null,
    anchorXRight: -280, // more to the right, partially clipped
    anchorY: 300,
    initRotate: -20,
    rotateSpeed: -0.08,
    floatRadius: 16,
  },
];

export default function ParallaxBackground() {
  const stateRef = useRef(null);
  const domRefs = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  // Initialise particle state once on client
  if (typeof window !== "undefined" && !stateRef.current) {
    stateRef.current = PARTICLES_CONFIG.map((cfg) => {
      const anchorX =
        cfg.anchorX !== undefined && cfg.anchorX !== null
          ? cfg.anchorX
          : window.innerWidth + cfg.anchorXRight;

      // Random float phase so they don't all move in sync
      const phase = Math.random() * Math.PI * 2;

      return {
        ...cfg,
        anchorX,
        anchorY: cfg.anchorY,
        x: anchorX,
        y: cfg.anchorY,
        vx: 0,
        vy: 0,
        rotate: cfg.initRotate,
        phase,
        time: 0,
      };
    });
  }

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  useAnimationFrame((t) => {
    if (!stateRef.current) return;
    const mouse = mouseRef.current;

    stateRef.current.forEach((p, i) => {
      p.time += 0.008;

      const fadeOpacity = 0.2 + (Math.sin(p.time * 1.2 + p.phase) + 1) * 0.15;

      // Gentle organic float around the anchor point
      const targetX = p.anchorX + Math.sin(p.time + p.phase) * p.floatRadius;
      const targetY =
        p.anchorY + Math.cos(p.time * 0.7 + p.phase) * p.floatRadius;

      // Soft spring pull back toward the floating target
      const springX = (targetX - p.x) * 0.015;
      const springY = (targetY - p.y) * 0.015;

      p.vx += springX;
      p.vy += springY;

      // Mouse repulsion
      const cx = p.x + p.width / 2;
      const cy = p.y + p.height / 2;
      const dx = cx - mouse.x;
      const dy = cy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        p.vx += (dx / dist) * force * MOUSE_FORCE * 3;
        p.vy += (dy / dist) * force * MOUSE_FORCE * 3;
      }

      // Friction & speed cap
      p.vx *= FRICTION;
      p.vy *= FRICTION;

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > MAX_SPEED) {
        p.vx = (p.vx / speed) * MAX_SPEED;
        p.vy = (p.vy / speed) * MAX_SPEED;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.rotate += p.rotateSpeed;

      const el = domRefs.current[i];
      if (el) {
        // el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`;
        el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`;
        el.style.opacity = fadeOpacity; // This creates the "breathing" effect
      }
    });
  });

  if (typeof window === "undefined" || !stateRef.current) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
      {stateRef.current.map((p, i) => {
        const Comp = p.Component;
        return (
          <div
            key={p.id}
            ref={(el) => (domRefs.current[i] = el)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: p.width, // Explicitly set width
              height: p.height, // Explicitly set height
              transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`,
              transformOrigin: "center center", // Ensures rotation on its own axis
              willChange: "transform, opacity",
              display: "flex", // Centers SVG if it's smaller than 250px
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
            }}
            className="opacity-[0.4] text-[#007969]"
          >
            <Comp width="100%" height="100%" />
          </div>
        );
      })}
    </div>
  );
}
