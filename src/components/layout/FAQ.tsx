// src/components/layout/FAQ.tsx - FULL REPLACEMENT (Brand Replacement)
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 1. Updated data with 10 questions (UPDATED BRANDS)
const allFaqs = [
  {
    value: "item-1",
    question: "Do you only sell to professional contractors?",
    answer:
      "No! We are open to the public and serve everyone. While we have a specialized trade partner program for contractors, we are passionate about helping DIY enthusiasts and homeowners in Alberton find the perfect paint and get the right advice for their projects.",
  },
  {
    value: "item-2",
    question: "I have a specific colour I need. Can you match it?",
    answer:
      "Yes, specialist colour matching is one of our key services. We have an advanced spectrophotometer in-store. Bring us a sample of what you&apos;re trying to match (a paint chip, a piece of fabric, etc.), and our experts can create a perfect match for you.",
  },
  {
    value: "item-3",
    question: "What&apos;s the advantage of using PAINTCHEM Trade over retail paint?",
    answer:
      // UPDATED: Replacing Dulux comparison with PAINTCHEM's general trade advantage
      "PAINTCHEM Trade paints are formulated for professional use. They typically have higher durability, better application properties, and greater batch consistency, designed specifically to save contractors time and money on high-volume jobs.",
  },
  {
    value: "item-4",
    question: "Do you deliver in the Alberton area?",
    answer:
      "Yes, we offer a prompt and reliable on-site delivery service for our trade partners. For our retail customers, we can also arrange local delivery. Please call us at 010 216 9131 to discuss your requirements.",
  },
  {
    value: "item-5",
    question: "I&apos;m a contractor. What&apos;s the benefit of the Contractor&apos;s Hub?",
    answer:
      "Our Trade Partner Program gives you access to exclusive trade-only pricing, priority on-site technical support, a dedicated account manager, and our on-site delivery service. It&apos;s designed to be a true partnership to help your business run more efficiently.",
  },
  {
    value: "item-6",
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Friday from 8:00 am to 5:00 pm, and on Saturdays from 8:00 am to 12:30 pm. We are closed on Sundays and public holidays.",
  },
  {
    value: "item-7",
    question: "What brands do you stock for refinishing and decorative projects?",
    answer:
      // UPDATED: Replaced all unapproved brands with new ones
      "We stock a wide range of specialist brands. For automotive, we are official suppliers of **mipa** and **HB BODY**. For industrial, we carry **SHIELD** protective coatings. For decorative, we stock **PAINTCHEM, Top Paints, and Genkem**.",
  },
  {
    value: "item-8",
    question: "I&apos;m not sure what coating I need for my factory floor. Can you help?",
    answer:
      "Absolutely. This is our specialty. We provide on-site technical consultations. We&apos;ll come to your site, assess the surface, understand the chemical and traffic exposure, and provide a full specification for the correct industrial coating system, whether it&apos;s epoxy or polyurethane.",
  },
  {
    value: "item-9",
    question: "What are the key advantages of mipa and HB BODY systems?",
    answer:
      // UPDATED: Replaced R-M/baslac comparison
      "**mipa** Professional Coating Systems offer excellent all-round quality for speed and finish across a wide range of repair jobs. **HB BODY** specializes in premium consumables, like fillers and polishes, that guarantee optimal surface preparation.",
  },
  {
    value: "item-10",
    question: "Where exactly are you located in Alberton?",
    answer:
      "We are located at Piet Retief St, Alberton, 1450. You&apos;ll find us in the Courtney Court building. There is plenty of parking for contractors and trailers. You can click the &apos;Get Directions&apos; button in our hero section for a direct link to Google Maps.",
  },
];

// 2. Split the data into two columns for the 5x2 grid
const leftColumnFaqs = allFaqs.slice(0, 5);
const rightColumnFaqs = allFaqs.slice(5, 10);

export function FAQ() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Got questions? We&apos;ve got answers. Here are some of the things
            our customers ask most.
          </p>
        </div>

        {/* 3. NEW 2-Column Grid Layout */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
          
          {/* Column 1 */}
          <Accordion type="single" collapsible className="w-full">
            {leftColumnFaqs.map((faq) => (
              <AccordionItem value={faq.value} key={faq.value}>
                <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700">
                  {faq.answer}
                </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>

          {/* Column 2 */}
          <Accordion type="single" collapsible className="w-full">
            {rightColumnFaqs.map((faq) => (
              <AccordionItem value={faq.value} key={faq.value}>
                <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-700">
                  {faq.answer}
                </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
          
        </div>
      </div>
    </section>
  );
}