import { FaFacebookF, FaFacebookMessenger, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaQuora, FaReddit, FaRedditAlien, FaSearchLocation, FaTwitter, FaYoutube } from "react-icons/fa";
import {HiOutlineMail,HiOutlineLocationMarker } from "react-icons/hi";
import {IoCallOutline} from "react-icons/io5";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { newsFour, newsOne, newsThree, newsTwo } from "../assets";

export const quickLinks = [
  {link:'About', href:'/'},
  {link: 'Blog', href:'/'},
  {link:"Partners", href:'/'},
  {link:'Careers', href:'/'},
  {link: 'News', href:'/'},
]


export const contactInfo = [
  {Icon:HiOutlineLocationMarker , info: "08 W 36th St, New York, NY 10001"},
  {Icon:IoCallOutline , info:"+1 333 9296"},
  {Icon:HiOutlineMail , info: "contact@example.com"},
]

export const contactInfoTwo = [
  {Icon:HiOutlineLocationMarker , info: "100 Mainstreet Center, Sydney"},
  {Icon:IoCallOutline , info:"+61 333 9296"},
  {Icon:HiOutlineMail , info: "contact@example.com"},
]
export const newsIcons = [
  {Icon: FaTwitter , bg:'bg-blue-700'},
  {Icon:FaGoogle , bg:'bg-red-600'},
  {Icon:FaInstagram,bg:' bg-brown-600'},
  {Icon:FaYoutube,bg:' bg-red-600'},
  {Icon:FaLinkedin , bg:'bg-blue-800'},
  {Icon:FaFacebookF, bg:'bg-blue-600'},


]

export const newsForm = [
  {label:"Name", type:"name", },

  {label: "Email", type:"email" ,},
  
  {label:"Phone Number", type:"name", },

]

export const signUpForm = [
  {label:"Name", type:"name", },
  
  {label:"User Name", type:"name", },

  {label: "Email", type:"email" ,},
  
  {label:"Phone Number", type:"number", },

  {label:"Password", type:"password", },

  {label:"Re-enter Password:", type:"password", },

]

export const message = [
  {label:"Message" , type: "textarea",className: "w-full h-52 rounded-md border-green-300 focus:ring-blue-100"},
]

export const address = [
  {address:"08 W 36th St, New York, NY 10001"},
  {address:"08 W 36th St, New York, NY 10001"},
  {address:"08 W 36th St, New York, NY 10001"},
  {address:"08 W 36th St, New York, NY 10001"},
]

export const news = [
  {
    img:newsOne,
    title: "Enjoy Best Travel Experience",
    description:
      "Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.",
    month: "October",
    day: "15",
    year: "2023",
    Icon: BsFillCalendarWeekFill
  },
  {
    img:newsTwo,
    title: "The Future of Car Rent",
    description:
      "As technology continues to advance at a rapid pace, the car rental industry is poised for a transformative shift. The future of car rental promises..",
    month: "October",
    day: "20",
    year: "2023",
    Icon: BsFillCalendarWeekFill
  },
  {
    img:newsThree,
    title: "Holiday Tips For Backpacker",
    description:
      "For adventure seekers and budget-conscious travelers, backpacking offers a thrilling and immersive way to explore the world. Whether you're embarking..",
    month: "October",
    day: "25",
    year: "2023",
    Icon: BsFillCalendarWeekFill
  },

  {
    img:newsFour,
    title: "We Are Growing So High",
    description:
      "For adventure seekers and budget-conscious travelers, backpacking offers a thrilling and immersive way to explore the world. Whether you're embarking..",
    month: "October",
    day: "30",
    year: "2023",
    Icon: BsFillCalendarWeekFill
  },
];

export const services_title = "Let's Begin Your Adventure";

export const services_description =
  "Welcome to the start of your adventure on wheels! At our car rentalservice, we're excited to kickstart your journey. Whether you're planning a road trip, a weekend getaway, or simply need reliable transportation, we're here to provide you with top-notch vehicles and a hassle-free experience. Let's begin your journey today and explore the world with the freedom of the open road."

export const Faq = [
  {
    questions: "How do I get started with Car Rental?",
    ans: "To get started with car rental, you'll need to choose a car rental company, check their available vehicles and rates, and then make a reservation. Most companies have online platforms for booking, but you can also visit their physical locations. You'll typically need a valid driver's license and a credit or debit card for payment and security.",
  },
  {
    questions: "Can I rent a car with a debit card?",
    ans: "Many car rental companies do accept debit cards, but policies vary. They may place a hold on a certain amount of money in your account as a security deposit. It's advisable to check with the specific rental company for their debit card policy.",
  },

  {
    questions: "Is it possible to extend my rental period?",
    ans: "Yes, you can often extend your rental period, but you should notify the rental company in advance. There might be additional charges for extending the rental, and availability can be a factor, so it's best to request an extension as early as possible.",
  },
];

export const Faq_2 = [
  {
    questions: "What kind of Car Rental do I need?",
    ans: "The type of car rental you need depends on your specific requirements. If you're traveling with a group, you might need a larger vehicle like an SUV or minivan. For cost savings and fuel efficiency, a compact car might be sufficient. Consider factors like the number of passengers, luggage space, and your budget when choosing.",
  },
  {
    questions: "What is a rental car security deposit?",
    ans: "A rental car security deposit is a sum of money held by the rental company to cover any potential damages to the vehicle or extra charges like fuel or late returns. The deposit is typically placed on your credit or debit card and is refunded after you return the car in the agreed-upon condition.",
  },
  {
    questions: "Can I cancel or modify my reservation?",
    ans: "Most car rental companies allow reservation cancellations or modifications, but there may be cancellation fees or restrictions depending on the company's policy. It's essential to read the terms and conditions of your reservation or contact the rental company for specific details.",
  },
];

export const news_description = [
  {
    des:  "CarHive is proud to announce that our exceptional car rental services are now available in every corner of the country. We understand that convenience and reliability are paramount when it comes to transportation, and that's why we've expanded our reach to ensure you have easy access to our services no matter where you are."},

    {
      des: "Our commitment to providing a seamless rental experience means that whether you're in a bustling urban center or a picturesque countryside town, CarHive has you covered. We offer a diverse fleet of vehicles to cater to your unique needs, whether it's a compact car for a quick city getaway, a spacious SUV for a family road trip, or a luxurious vehicle for a special occasion."
    },

    
    {
      des: "At CarHive, we pride ourselves on competitive prices and transparent rental terms. We want you to focus on your journey, not on hidden fees or complicated rental agreements. Our user-friendly online platform allows you to book a car quickly and easily, putting the power in your hands."
    },
    
    {
      des: "  Customer satisfaction is our top priority, and we're dedicated to providing exceptional service every step of the way. Our nationwide network of pick-up and drop-off locations ensures flexibility and convenience for your travels."
    },
    
    {
      des: "Explore the cultural landmarks, natural wonders, and hidden gems our country has to offer, and trust in CarHive to be your trusted travel partner. Your journey starts with a click, a reservation, and the open road. CarHive - Where Your Adventure Begins."
    }
    
]

export const about_us = [
  
{description: "At CarHive, we're more than just a car rental service; we're your trusted partner in every journey. Founded with a passion for providing convenient and reliable transportation solutions, CarHive has quickly become a household name in the car rental industry."}, 
  
  {description: "Our story begins with a vision to make travel accessible and hassle-free for everyone, whether you're a seasoned road warrior or a first-time explorer. We've worked tirelessly to expand our services to cover every nook and cranny of the country, ensuring that our diverse fleet of vehicles is just a booking away, no matter where you are."},
  
 {description:" What sets us apart is our unwavering commitment to customer satisfaction. We understand that your journey is not just about the destination, but the experience along the way. Our team of dedicated professionals is here to make your travel dreams a reality. We offer competitive prices, transparent rental agreements, and an easy-to-use online platform, making your reservation process as smooth as the open road."},
 {description:" From compact cars for city commutes to spacious SUVs for family adventures and luxury vehicles for those special occasions, we have the perfect vehicle to match your needs. And with a vast network of pick-up and drop-off locations nationwide, flexibility and convenience are always at your fingertips."},
 {description:" At CarHive, we believe that the journey is just as important as the destination. Whether you're embarking on a business trip, a scenic road trip, or exploring hidden gems in your own backyard, trust CarHive to be your reliable travel companion. Join us on the road to new adventures and unforgettable memories. CarHive - Where Every Journey Begins."},
  
]


export const tags = [
{tag:"travel"},
{tag:"holiday"},
{tag:"tourism"},
{tag:"travel"},
{tag:"hotel"},
{tag:"inn"},
{tag:"hostel"},
{tag:"motel"},
{tag:"resort"},
{tag:"lodge"},
{tag:"vacation"},
{tag:"accommodation"},

]