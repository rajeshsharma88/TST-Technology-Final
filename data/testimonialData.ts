import { Testimonial } from '../types';

const staticTestimonialData: Testimonial[] = [
  {
    id: 1,
    quote: "TST Technologies transformed our digital presence. Their team is professional, skilled, and delivered beyond our expectations. Highly recommended!",
    author: "John Doe",
    company: "CEO, TechCorp",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 2,
    quote: "The mobile app they developed for us is a masterpiece. It's intuitive, fast, and has significantly improved our customer engagement.",
    author: "Jane Smith",
    company: "Marketing Director, Innovate Inc",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    id: 3,
    quote: "Their cloud solutions are robust and scalable. We've seen a massive improvement in performance and a reduction in our IT costs.",
    author: "Samuel Green",
    company: "CTO, Solutions Ltd",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
];

let testimonialData: Testimonial[];

try {
  const storedTestimonialDataJSON = localStorage.getItem('testimonialData');
  if (storedTestimonialDataJSON) {
    testimonialData = JSON.parse(storedTestimonialDataJSON);
  } else {
    testimonialData = staticTestimonialData;
    localStorage.setItem('testimonialData', JSON.stringify(staticTestimonialData));
  }
} catch (error) {
  console.error('Error handling testimonialData from localStorage:', error);
  testimonialData = staticTestimonialData;
}

export { testimonialData };