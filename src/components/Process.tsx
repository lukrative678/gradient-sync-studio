import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your goals, audience, and vision. A clear brief ensures we build exactly what you need.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "We create high-fidelity designs and interactive prototypes. You see and approve every detail before development begins.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "Clean, performant code brought to life. Rigorous testing across devices ensures a flawless launch.",
  },
  {
    number: "04",
    title: "Launch & Maintain",
    description:
      "We deploy your product and provide ongoing support. Updates, monitoring, and optimizations keep you ahead.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-spacing">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <p className="label-caps text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-[clamp(2rem,4vw+1rem,3rem)] leading-tight">
            A Proven <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="text-center sm:text-left"
            >
              <span className="gradient-text text-4xl font-bold mb-3 block">
                {step.number}
              </span>
              <h3 className="text-foreground font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
