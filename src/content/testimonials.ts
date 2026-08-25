export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We've used Accotomate for bookkeeping and tax for over a year and the results have been remarkable. Automating our workflows saves us hours every week, and their attention to detail on UK filings has kept us compliant and stress-free.",
    name: "Dania",
    role: "Founder, Techies",
  },
  {
    id: 2,
    quote:
      "A game-changer for our business. Their expertise in QuickBooks integration and workflow design made everything more efficient. We can focus on growing, knowing our finances are in good hands.",
    name: "Wardah",
    role: "Founder, Alhub Collection",
  },
  {
    id: 3,
    quote:
      "Their tech-driven approach to bookkeeping has made a huge difference. We've seen a significant reduction in errors and a real increase in efficiency. The team is always available with tailored advice.",
    name: "Samad",
    role: "Founder, Neraton",
  },
];
