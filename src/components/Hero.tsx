import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const Hero = () => {
  return (
    <section className="min-h-svh flex items-center justify-center section-spacing">
      <div className="container-main text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="label-caps text-muted-foreground mb-6"
        >
          Web & App Development Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          From Concept to Launch.{" "}
          <span className="gradient-text">Expertly Crafted</span> Websites and
          Apps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-normal"
        >
          We design, build, and maintain high-performance digital products that
          drive results. Full-stack web development and native Android apps,
          delivered with precision and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="p-px rounded-lg gradient-border group">
            <span className="flex items-center gap-2 px-8 py-3 text-sm font-semibold bg-background text-foreground rounded-[7px] transition-all duration-200 group-hover:bg-transparent group-hover:text-background">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
          <a
            href="#services"
            className="px-8 py-3 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
