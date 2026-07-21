"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Equirectangular projection                                         */
/* ------------------------------------------------------------------ */
const LON_MIN = -180;
const LON_MAX = 180;
const LAT_MAX = 83;
const LAT_MIN = -58;
const W = 1000;
const H = (W * (LAT_MAX - LAT_MIN)) / (LON_MAX - LON_MIN);

function project(lon: number, lat: number) {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H;
  return { x, y };
}

/* ------------------------------------------------------------------ */
/*  Simplified continent outlines as [lon, lat] polygons.              */
/*  Rendered as a dot-matrix (halftone) world map — recognisable       */
/*  without any external map data or images.                           */
/* ------------------------------------------------------------------ */
const LAND: number[][][] = [
  // North America
  [
    [-168, 65], [-160, 71], [-140, 70], [-125, 70], [-100, 68], [-80, 66],
    [-60, 60], [-55, 52], [-65, 45], [-70, 42], [-75, 37], [-81, 31],
    [-81, 25], [-90, 29], [-97, 26], [-105, 22], [-112, 24], [-114, 30],
    [-124, 34], [-125, 40], [-124, 48], [-130, 54], [-140, 60], [-150, 60],
    [-165, 60], [-168, 65],
  ],
  // Central America
  [
    [-92, 18], [-88, 15], [-84, 10], [-79, 8], [-77, 8], [-83, 12],
    [-88, 17], [-92, 18],
  ],
  // Greenland
  [
    [-45, 60], [-30, 60], [-20, 70], [-25, 78], [-40, 80], [-55, 78],
    [-58, 70], [-50, 62], [-45, 60],
  ],
  // South America
  [
    [-80, 8], [-70, 10], [-60, 10], [-50, 5], [-48, -2], [-40, -5],
    [-35, -8], [-38, -15], [-48, -25], [-55, -35], [-58, -40], [-65, -45],
    [-70, -50], [-73, -52], [-75, -45], [-72, -35], [-71, -25], [-70, -18],
    [-75, -12], [-80, -5], [-81, 0], [-80, 8],
  ],
  // Africa
  [
    [-16, 15], [-16, 20], [-10, 28], [0, 32], [10, 34], [20, 32],
    [30, 31], [33, 28], [43, 12], [51, 12], [48, 5], [42, -2],
    [40, -10], [35, -18], [32, -26], [25, -34], [18, -35], [12, -18],
    [9, -5], [8, 4], [-5, 5], [-12, 8], [-16, 15],
  ],
  // Madagascar
  [
    [43, -13], [50, -15], [50, -25], [45, -25], [43, -18], [43, -13],
  ],
  // Europe
  [
    [-10, 36], [-9, 43], [-2, 44], [0, 49], [-5, 50], [-2, 58],
    [5, 60], [10, 64], [20, 70], [28, 70], [30, 60], [40, 58],
    [45, 50], [40, 45], [28, 41], [20, 40], [15, 38], [10, 44],
    [5, 43], [-2, 36], [-10, 36],
  ],
  // United Kingdom & Ireland
  [
    [-8, 50], [-2, 50], [0, 53], [-3, 58], [-8, 57], [-7, 53], [-8, 50],
  ],
  // Asia (main landmass, incl. Middle East, India, Siberia, China, Indochina)
  [
    [30, 60], [45, 55], [50, 45], [45, 40], [45, 30], [55, 26],
    [60, 25], [66, 25], [66, 30], [72, 20], [76, 8], [80, 8],
    [83, 20], [90, 22], [92, 15], [98, 10], [105, 1], [108, 15],
    [110, 20], [120, 22], [122, 30], [122, 40], [130, 43], [135, 48],
    [142, 54], [155, 60], [165, 62], [178, 66], [175, 72], [160, 72],
    [140, 73], [120, 73], [100, 77], [80, 76], [60, 70], [45, 68],
    [35, 66], [30, 60],
  ],
  // Japan
  [
    [130, 33], [136, 35], [141, 40], [142, 45], [140, 38], [135, 34],
    [130, 31], [130, 33],
  ],
  // Sumatra
  [
    [95, 5], [100, 3], [106, -6], [102, -6], [96, 2], [95, 5],
  ],
  // Java
  [
    [105, -6], [114, -8], [114, -9], [105, -8], [105, -6],
  ],
  // Borneo
  [
    [109, 4], [118, 4], [119, -3], [110, -4], [108, 0], [109, 4],
  ],
  // Sulawesi
  [
    [119, 1], [125, 1], [125, -5], [120, -5], [119, 1],
  ],
  // New Guinea
  [
    [131, -1], [150, -6], [150, -9], [138, -9], [131, -4], [131, -1],
  ],
  // Philippines
  [
    [120, 18], [126, 18], [126, 6], [122, 6], [120, 10], [120, 18],
  ],
  // Australia
  [
    [114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -18],
    [150, -22], [153, -28], [150, -37], [143, -39], [138, -35], [129, -32],
    [120, -34], [115, -33], [113, -26], [114, -22],
  ],
  // Tasmania
  [
    [145, -41], [148, -41], [148, -43], [145, -43], [145, -41],
  ],
  // New Zealand — North Island
  [
    [173, -35], [178, -38], [177, -41], [174, -40], [173, -35],
  ],
  // New Zealand — South Island
  [
    [167, -44], [172, -42], [174, -46], [168, -47], [167, -44],
  ],
];

function pointInPolygon(lon: number, lat: number, poly: number[][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    const intersect =
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function isLand(lon: number, lat: number) {
  for (const poly of LAND) {
    if (pointInPolygon(lon, lat, poly)) return true;
  }
  return false;
}

/* ------------------------------------------------------------------ */
/*  Client locations — real coordinates [lon, lat].                    */
/* ------------------------------------------------------------------ */
const CLIENTS: [number, number][] = [
  // Java, Indonesia
  [106.8, -6.2], [107.6, -6.9], [110.4, -7.0], [112.7, -7.2],
  [110.4, -7.8], [112.6, -7.98], [108.55, -6.7], [106.8, -6.6],
  // Bali
  [115.2, -8.65], [115.26, -8.5], [115.13, -8.65], [115.27, -8.7],
  // Southeast Asia
  [103.8, 1.35], [101.7, 3.14], [100.5, 13.75], [120.98, 14.6], [106.7, 10.78],
  // Europe
  [-0.1, 51.5], [2.3, 48.8], [13.4, 52.5], [-3.7, 40.4],
  [12.5, 41.9], [4.9, 52.4], [21.0, 52.2], [-9.1, 38.7],
  // Russia
  [37.6, 55.75], [30.3, 59.93], [82.9, 55.03],
  // United States
  [-74.0, 40.7], [-118.2, 34.0], [-87.6, 41.8], [-80.2, 25.8],
  [-122.3, 47.6], [-97.7, 30.3], [-104.99, 39.7], [-71.06, 42.36],
  // South America
  [-46.6, -23.55], [-58.4, -34.6], [-74.1, 4.6], [-77.0, -12.05],
  // South Africa
  [28.05, -26.2],
  // Australia
  [151.2, -33.9], [145.0, -37.8], [153.0, -27.5], [115.9, -31.9],
  [138.6, -34.9], [153.4, -28.0], [149.1, -35.3], [147.3, -42.9],
  [151.75, -32.9], [130.85, -12.46], [150.9, -34.4], [153.1, -26.65],
];

export default function ClientMap() {
  const landDots = useMemo(() => {
    const dots: { x: number; y: number }[] = [];
    const step = 5; // px between dots
    for (let px = 0; px <= W; px += step) {
      for (let py = 0; py <= H; py += step) {
        const lon = (px / W) * (LON_MAX - LON_MIN) + LON_MIN;
        const lat = LAT_MAX - (py / H) * (LAT_MAX - LAT_MIN);
        if (isLand(lon, lat)) dots.push({ x: px, y: py });
      }
    }
    return dots;
  }, []);

  const clientDots = useMemo(
    () => CLIENTS.map(([lon, lat]) => project(lon, lat)),
    []
  );

  return (
    <section className="border-t border-white/5 bg-[#080808] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Global Reach.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              Local Precision.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We help you find your audience, targeted to your specific region and niche.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            role="img"
            aria-label="World map showing the locations of our clients"
          >
            <defs>
              <radialGradient id="dotGlowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fdba74" stopOpacity={0.55} />
                <stop offset="45%" stopColor="#fb923c" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#fb923c" stopOpacity={0} />
              </radialGradient>
            </defs>

            {/* Land dots (halftone continents) */}
            <g fill="#ffffff" opacity={0.1}>
              {landDots.map((d, i) => (
                <circle key={i} cx={d.x} cy={d.y} r={1.4} />
              ))}
            </g>

            {/* Client locations */}
            {clientDots.map((d, i) => (
              <g key={`c-${i}`}>
                {/* soft glow field */}
                <circle cx={d.x} cy={d.y} r={13} fill="url(#dotGlowGradient)" />
                {/* glow core — same glow recipe as the Contact Us button, toned down */}
                <motion.circle
                  cx={d.x}
                  cy={d.y}
                  r={5}
                  fill="#fb923c"
                  opacity={0.5}
                  style={{
                    filter: "drop-shadow(0 0 14px rgba(251,146,60,0.3))",
                  }}
                  whileHover={{
                    scale: 1.3,
                    filter: "drop-shadow(0 0 22px rgba(251,146,60,0.45))",
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* animated pulse ring */}
                <motion.circle
                  cx={d.x}
                  cy={d.y}
                  fill="#fb923c"
                  initial={{ r: 4, opacity: 0.4 }}
                  animate={{ r: [4, 10], opacity: [0.4, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: (i % 6) * 0.35,
                  }}
                />
                {/* core dot */}
                <circle cx={d.x} cy={d.y} r={3.2} fill="#fdba74" />
                <circle cx={d.x} cy={d.y} r={1.4} fill="#fff7ed" />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
