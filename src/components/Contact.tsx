import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1];

const Contact = () => {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="label-caps text-muted-foreground mb-4">
            Ready to Start?
          </p>
          <h2 className="text-[clamp(2rem,4vw+1rem,3rem)] leading-tight mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Remarkable</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Tell us about your project. We'll get back to you within 24 hours
            with a clear plan and timeline.
          </p>

          <a
            href="mailto:hello@weiyuelab.com"
            className="inline-block p-px rounded-lg gradient-border group"
          >
            <span className="flex items-center gap-2 px-10 py-4 text-sm font-semibold bg-background text-foreground rounded-[7px] transition-all duration-200 group-hover:bg-transparent group-hover:text-background">
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
