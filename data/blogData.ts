import { Blog } from '../types';

const staticBlogData: Blog[] = [
  {
    id: 1,
    slug: "demystifying-cloud-computing",
    title: "Demystifying Cloud Computing: A Beginner's Guide",
    excerpt: "Cloud computing is everywhere, but what exactly is it? This guide breaks down the fundamentals of the cloud, from IaaS to SaaS.",
    content: `
      <p>Cloud computing has become a buzzword in the tech industry, but its core concept is quite simple. At its heart, cloud computing is the delivery of different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software.</p>
      <p>Rather than keeping files on a proprietary hard drive or local storage device, cloud-based storage makes it possible to save them to a remote database. As long as an electronic device has access to the web, it has access to the data and the software programs to run it.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">The Main Types of Cloud Computing</h3>
      <p>There are three main types of cloud computing services, often referred to as the cloud computing stack:</p>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Infrastructure as a Service (IaaS):</strong> This is the most basic category of cloud computing services. With IaaS, you rent IT infrastructure—servers and virtual machines (VMs), storage, networks, operating systems—from a cloud provider on a pay-as-you-go basis.</li>
        <li><strong>Platform as a Service (PaaS):</strong> PaaS refers to cloud computing services that supply an on-demand environment for developing, testing, delivering, and managing software applications. PaaS is designed to make it easier for developers to quickly create web or mobile apps, without worrying about setting up or managing the underlying infrastructure.</li>
        <li><strong>Software as a Service (SaaS):</strong> SaaS is a method for delivering software applications over the Internet, on demand and typically on a subscription basis. With SaaS, cloud providers host and manage the software application and underlying infrastructure and handle any maintenance, like software upgrades and security patching.</li>
      </ul>
      <p>Understanding these models is the first step to harnessing the power of the cloud for your business. Whether you're a startup or a large enterprise, the cloud offers flexibility, efficiency, and scalability.</p>
    `,
    main_image: "https://picsum.photos/seed/blog1/800/450",
    author_name: "Alex Johnson",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    published_date: "2024-05-15",
  },
  {
    id: 2,
    slug: "top-5-cybersecurity-threats-to-watch-out-for",
    title: "Top 5 Cybersecurity Threats to Watch Out For in 2024",
    excerpt: "In an increasingly digital world, cybersecurity has never been more important. Here are the top 5 threats your business should be aware of.",
    content: `
      <p>As technology evolves, so do the methods used by malicious actors. Staying informed about the latest cybersecurity threats is crucial for protecting your business's valuable assets. Here are the top five threats to keep on your radar.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3">The Top Threats</h3>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Phishing Attacks:</strong> Still one of the most common threats, phishing involves tricking individuals into giving away sensitive information like passwords and credit card numbers. These attacks are becoming increasingly sophisticated.</li>
        <li><strong>Ransomware:</strong> This type of malicious software threatens to publish the victim's data or perpetually block access to it unless a ransom is paid. The impact on a business can be devastating.</li>
        <li><strong>Insider Threats:</strong> A threat that comes from within an organization. It can be a current or former employee, contractor, or business partner who has access to an organization's systems or data.</li>
        <li><strong>IoT-Based Attacks:</strong> With the proliferation of Internet of Things (IoT) devices, from smart thermostats to security cameras, new vulnerabilities have emerged. Many IoT devices lack robust security, making them easy targets for hackers.</li>
        <li><strong>AI-Powered Cyberattacks:</strong> Artificial intelligence is a double-edged sword. While it can enhance security, it can also be used to create more sophisticated and automated attacks that are harder to detect and defend against.</li>
      </ol>
      <p>A proactive approach to cybersecurity, including regular training, robust security protocols, and up-to-date software, is the best defense against these evolving threats.</p>
    `,
    main_image: "https://picsum.photos/seed/blog2/800/450",
    author_name: "Maria Garcia",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
    published_date: "2024-05-10",
  },
  {
    id: 3,
    slug: "the-rise-of-progressive-web-apps",
    title: "The Rise of Progressive Web Apps (PWAs)",
    excerpt: "Progressive Web Apps are changing the way we think about web and mobile experiences. Learn what they are and why they matter for your business.",
    content: "<p>Content for The Rise of Progressive Web Apps.</p>",
    main_image: "https://picsum.photos/seed/blog3/800/450",
    author_name: "David Chen",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
    published_date: "2024-05-05",
  },
  {
    id: 4,
    slug: "agile-vs-waterfall-which-methodology-is-right-for-you",
    title: "Agile vs. Waterfall: Which Methodology Is Right for You?",
    excerpt: "Choosing the right project management methodology is key to success. We compare the pros and cons of Agile and Waterfall to help you decide.",
    content: "<p>Content for Agile vs. Waterfall.</p>",
    main_image: "https://picsum.photos/seed/blog4/800/450",
    author_name: "Emily White",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
    published_date: "2024-04-28",
  },
  {
    id: 5,
    slug: "how-to-choose-the-right-tech-stack-for-your-project",
    title: "How to Choose the Right Tech Stack for Your Project",
    excerpt: "Your choice of tech stack can make or break a project. This article covers the key factors to consider when making this critical decision.",
    content: "<p>Content for How to Choose the Right Tech Stack.</p>",
    main_image: "https://picsum.photos/seed/blog5/800/450",
    author_name: "Michael Brown",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026711d",
    published_date: "2024-04-22",
  },
  {
    id: 6,
    slug: "the-importance-of-ux-ui-design-in-web-development",
    title: "The Importance of UX/UI Design in Web Development",
    excerpt: "Good design is more than just aesthetics. A great user experience (UX) and user interface (UI) are crucial for engagement and conversion.",
    content: "<p>Content for The Importance of UX/UI Design.</p>",
    main_image: "https://picsum.photos/seed/blog6/800/450",
    author_name: "Jessica Lee",
    author_avatar: "https://i.pravatar.cc/150?u=a042581f4e29026712d",
    published_date: "2024-04-18",
  },
];

let blogData: Blog[];

try {
  const storedBlogDataJSON = localStorage.getItem('blogData');
  if (storedBlogDataJSON) {
    blogData = JSON.parse(storedBlogDataJSON);
  } else {
    blogData = staticBlogData;
    localStorage.setItem('blogData', JSON.stringify(staticBlogData));
  }
} catch (error) {
  console.error('Error handling blogData from localStorage:', error);
  blogData = staticBlogData;
}

export { blogData };