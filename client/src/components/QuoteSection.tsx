import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../lib/motion";
import { Quote } from "lucide-react";
import FloatingShapes from "./effects/FloatingShapes";

const QuoteSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const quote = "The best way to predict the future is to create it.";
    const author = "Peter Drucker";

    return (
        <section ref={sectionRef} className="section-padding relative">
            <FloatingShapes count={8} minSize={30} maxSize={80} />
            <div className="section-container relative z-10">
                <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="text-center max-w-3xl mx-auto"
                >
                    <Quote className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                    <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
                        "{quote}"
                    </blockquote>
                    <p className="text-lg text-muted-foreground">- {author}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default QuoteSection;