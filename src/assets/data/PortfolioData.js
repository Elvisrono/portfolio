import image1 from '../images/covid19.png'
import image2 from '../images/docapp.png'
import image3 from '../images/ecommerse.png'
import image4 from '../images/flatiron.png'
import image5 from '../images/recipe.png'
import image6 from '../images/article.png'

const portfolios = [
    {
      id: "06",
      imgUrl: image1,
      category: "web design",
      title: "covid19 tracker app",
      description:
          "Developed a React app website with Supabase backend for Limited International Limited, an HR recruitment company. Features include a search option for displaying all the countries with infected persons",
      technologies: ["React", "Tailwind css", "Supabase", "Next js"],
      siteUrl: "https://iridescent-bublanina-ed051d.netlify.app/",
    },
    {
      id: "05",
      imgUrl: image2,
      category: "Web Design",
      title: "Doc appointment - website design and dev",
      description:
        "I designed and developed a comprehensive  appointment app .This is where a patience can book an appointmment online and then be schedule to appropriate time . The platform offers a user-friendly experience, allowing patience to easily navigate and engage with the content",
      technologies: [
        "React",
        "Tailwind css",
        "Next.js",
        "UI/UX Prototyping",
        "JavaScript",
      ],
      siteUrl: "https://doc-app-book.vercel.app/",
    },
    {
      id: "01",
      imgUrl: image3,
      category: "Web Design",
      title: "Ecommerse shopping cart",
      description: `Created a comprehensive online shopping cart.
        With a mobile-first design and seamless UX, the site empowers 
        users to hop there preffered choice of the products at the cart.
        `,
      technologies: ["React", "css", "Rails", "Postgresql"],
      siteUrl: "https://hanancollections.com",
    },
    {
      id: "02",
      imgUrl: image4,
      category: "Web Design",
      title: "Flatiron ",
      description: `Designed a comprehensive bank app related app for Limeted solution,
      The Flatiron app simply acts as a bank where a client records her back account details.
      It reflects the bank withdrawal and bank balnce.`,
      technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
      siteUrl: "https://flat-iron-bank-theta.vercel.app/",
    },
    {
      id: "03",
      imgUrl: image5,
      category: "Web Design",
      title: "Recipe  ",
      description:
        `I was entrusted with developing a website for University student 
        The app displays all the categories of all kind of food presence in a restaraunt.
        As a client and user one is able tosearch for her best food and where it entails all the recipes and procedures step by step on how to cook them`,
      technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
      siteUrl: "https://recipe-app-five-amber.vercel.app/",
    },
    {
      id: "04",
      imgUrl: image6,
      category: "Web Design",
      title: "Article WebApp",
      description:
        ` I took the initiative to design and develop a website for creating articles.
         This project aimed to create a platform where authors can create there articles and publish them online.
         Authors can thereafter get a chance to sell there articles where they can get there reviews on there articles.`,
      technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
      siteUrl: "https://article254.vercel.app//",
    },
  
  
  ];

export default portfolios
