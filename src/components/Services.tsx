import { motion } from "framer-motion";
import { Globe, Smartphone, Wrench, Palette } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const services = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Bespoke, conversion-focused designs tailored to your brand. We craft every pixel to communicate trust and drive engagement.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites built with modern frameworks. Fast, responsive, and optimized for search engines from day one.",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    description:
      "Native Android applications that deliver seamless user experiences. From concept to Play Store, we handle every step.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, and performance monitoring. Your digital products stay fast, secure, and up-to-date.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <p className="label-caps text-muted-foreground mb-4">What We Do</p>
          <h2 className="text-[clamp(2rem,4vw+1rem,3rem)] leading-tight">
            Services Built for <span className="gradient-text">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="bg-card rounded-xl p-8 transition-shadow duration-200 shadow-[0_0_0_1px_hsl(224_15%_20%),0_2px_4px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_1px_hsl(224_15%_30%),0_8px_16px_-4px_rgba(0,0,0,0.2)]"
            >
              <service.icon
                className="w-6 h-6 mb-4 stroke-[1.5]"
                style={{
                  stroke: "url(#icon-gradient)",
                }}
              />
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(200, 100%, 65%)" />
                    <stop offset="100%" stopColor="hsl(280, 100%, 75%)" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
