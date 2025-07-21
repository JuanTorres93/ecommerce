import { Accordion } from "@szhsin/react-accordion";

import Heading from "../../../ui/Heading/Heading";
import AccordionItem from "../../../ui/AccordionItem/AccordionItem";
import styles from "./FAQs.module.scss";

const faqData = [
  {
    id: 1,
    question: "How do you find these unique products?",
    answer:
      "We connect to curated APIs and marketplaces that most people don't even know exist. Our system filters through thousands of products to find the weird, rare, and brilliant items that spark conversations. No mainstream stuff - just pure personality in product form.",
  },
  {
    id: 2,
    question: "Are all products really under 30€?",
    answer:
      "Yes! Our current handpicked collection features 30+ items all priced under 30€. We believe unique doesn't have to mean expensive. You can stand out without breaking the bank.",
  },
  {
    id: 3,
    question: "What if I don't like what I ordered?",
    answer:
      "We offer a 30-day return policy on all items. But honestly, our selection is so unique that most customers end up loving their finds. If something doesn't spark joy or conversations, just send it back.",
  },
  {
    id: 4,
    question: "How fast is shipping?",
    answer:
      "Most items ship within 2-3 business days and arrive within 5-7 days across Europe. We know you're excited to show off your new conversation starter, so we keep things moving fast.",
  },
  {
    id: 5,
    question: "Do I need to sign up or subscribe?",
    answer:
      "Nope! No signup required, no subscription fees. Just browse, find what catches your eye, buy it, and go impress your people. We keep it simple because shopping for unique stuff should be fun, not complicated.",
  },
  {
    id: 6,
    question: "Will these products actually start conversations?",
    answer:
      "That's the whole point! Every item in our collection is chosen specifically because it's something people haven't seen before. Whether it's a weird gadget, an odd gift, or a clever accessory - you'll definitely get the 'Where did you get that?' reaction.",
  },
];

function FAQs() {
  return (
    <section id="faqs" className={styles.faqsSection}>
      <div className={styles.faqs}>
        <div className={styles.titleBox}>
          <Heading type="h2">
            Everything you need to know before ordering
          </Heading>

          <p>
            We know you have questions, and we have answers. Here are some of
            the most common questions we get from our customers.
          </p>
        </div>

        <div className={styles.faqsList}>
          <Accordion>
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                className={styles.AccordionItem}
                header={faq.question}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
