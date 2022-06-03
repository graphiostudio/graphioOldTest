import { useState, createContext } from "react";
// holiday garden
import holidayGardenThumbnail from "../../components/portfolio/holiday-garden/holiday-garden-hotel.jpg";
import holidayGardenHeader from "../../components/portfolio/holiday-garden/holiday-garden-main.jpg";
// lush cafe
import lushCafeThumbnail from "../../components/portfolio/lush-cafe/lush.jpg";
import lushCafeHeader from "../../components/portfolio/lush-cafe/lushHeader.jpg";
import lushItem1Mp4 from "../../components/portfolio/lush-cafe/lush.mp4";
import lushItem1WebM from "../../components/portfolio/lush-cafe/lush.webm";

// global citizenship
import globalCitizenshipThumbnail from "../../components/portfolio/global-citizenship/global-citizenship.jpg";
import globalCitizenshipHeader from "../../components/portfolio/global-citizenship/cmuOnline.jpg";
// feel nimman
import feelNimmanThumbnail from "../../components/portfolio/feel-nimman/feel.jpg";
// resilience
import resilienceThumbnail from "../../components/portfolio/resilience/resilience.jpg";
import resilienceHeaderMp4 from "../../components/portfolio/resilience/resilience-header.mp4";
import resilienceHeaderWebM from "../../components/portfolio/resilience/resilience-header.webm";
import resilienceItem1 from "../../components/portfolio/resilience/resilience-logo.png";
//inclusive city
import inclusiveCityThumbnail from "../../components/portfolio/inclusive-city/incCity.jpg";
import inclusiveCityHeaderMp4 from "../../components/portfolio/inclusive-city/Inclusivecity-header.mp4";
import inclusiveCityHeaderWebM from "../../components/portfolio/inclusive-city/Inclusivecity-header.webm";
//cccl
import ccclThumbnail from "../../components/portfolio/cccl/cccl.jpg";
import ccclHeader from "../../components/portfolio/cccl/cccl-header.png";
import ccclItem1 from "../../components/portfolio/cccl/cccl-poster.jpg";
import ccclItem2 from "../../components/portfolio/cccl/screenshot-ccclfilmfestival.png";
//citizenship
import citizenshipHeader from "../../components/portfolio/citizenship/cmu-header.jpg";
import citizenshipItem1 from "../../components/portfolio/citizenship/intPol-header.jpg";
import citizenshipItem2Mp4 from "../../components/portfolio/citizenship/intPol-720.mp4";
import citizenshipItem2WebM from "../../components/portfolio/citizenship/intPol-720.webm";
import citizenshipItem3 from "../../components/portfolio/citizenship/delivered-intPol.png";
import citizenshipItem4 from "../../components/portfolio/citizenship/citizenship-1.jpg";
import citizenshipItem5Mp4 from "../../components/portfolio/citizenship/Citizenship.mp4";
import citizenshipItem5WebM from "../../components/portfolio/citizenship/Citizenship.webm";

const GalleryContext = createContext();

const data = [
  // PORTFOLIO TEMPLATE
  // {
  //   name: "",
  // header: {
  //   image: ,
  //   video: {
  //      webm: ,
  //      mp4: ,
  //   }
  //   },
  //   thumbnail: ,
  //   alt: "",
  //   category: "",
  //   info: {
  //     who: "",
  //     services: [],
  //     how: "",
  //   },

  //EXAMPLE ITEM
  // ** CAN BE USED FOR POSTING ONLY AN IMAGE, A VIDEO, TEXT PARAGRAPH, OR IMAGE/VIDEO WITH PARAGRAPH

  // items: [
  //   {
  //     image: imgHolidayGardenHotel,
  //     alt: "", ** NOT REQUIRED WITHOUT IMAGE
  //     youtubeEmbedId: '',
  //     video: {
  //      mp4: ,
  //      webm: ,
  //     }
  //     title: "",
  //     text: [
  //       "",
  //     ], ** PARAGRAPHS AS ITEMS IN AN ARRAY
  //      reverse: true/false ** MEDIA FIRST THEN TEXT/TEXT THEN MEDIA
  //      divider: true/false ** TRUE IF YOU WANT A DIVIDER ** PUT IT IN AN EMPTY OBJECT
  //   },
  // ],
  // },
  {
    name: "Holiday Garden Hotel & Resort",
    header: {
      image: holidayGardenHeader,
    },
    thumbnail: holidayGardenThumbnail,
    alt: "Holiday Garden Hotel web design",
    category: "web development",
    info: {
      who: "Holiday Garden Hotel & Resort",
      services: ["web design & development", "photography", "video production"],
      how: "As the main body of Lush Cafe, we also took on a challenging job at Holiday Garden Resort and Hotel. We have worked on their photography, small promotional videos, social media management, and as well as remaking their website.",
    },
    items: [],
  },
  {
    name: "Lush Cafe",
    header: {
      image: lushCafeHeader,
    },
    thumbnail: lushCafeThumbnail,
    alt: "Lush Cafe web design",
    category: "web development",
    info: {
      who: "Lush Cafe",
      services: ["web design & development", "graphic design", "photography"],
      how: "We were responsible complete branding of a new cafe Lush. We designed their logo, created a color palette, made their website, online menu as well as photography of their drinks, food and environment.",
    },
    items: [
      {
        video: {
          mp4: lushItem1Mp4,
          webm: lushItem1WebM,
        },
        // title: "",
        // text: [
        //   "",
        // ], ** PARAGRAPHS AS ITEMS IN AN ARRAY
        //  reverse: true/false ** MEDIA FIRST THEN TEXT/TEXT THEN MEDIA
        //  divider: true/false ** TRUE IF YOU WANT A DIVIDER ** PUT IT IN AN EMPTY OBJECT
      },
    ],
  },
  {
    name: "Global Citizenship",
    header: {
      image: globalCitizenshipHeader,
    },
    thumbnail: globalCitizenshipThumbnail,
    alt: "Global citizenship web design",
    category: "web development",
    info: {
      who: "Chiang Mai University",
      services: ["web design & development", "video production"],
      how: "We designed and developed an online-education application website for students to easily access course content and interact with teachers.",
    },
    items: [],
  },
  {
    name: "Feel Nimman",
    header: {
      image: feelNimmanThumbnail,
    },
    thumbnail: feelNimmanThumbnail,
    alt: "Feel Nimman hotel web design",
    category: "web development",
    info: {
      who: "Feel Nimman Boutique",
      services: [
        "web design & development",
        "photography",
        "digital check-in system",
      ],
      how: "We rebranded Feel Nimman Boutique completely from their logo to their website. We cut their costs enormously by integrating an online check-in system, no more papers! This also allowed them to collect and keep guest information for both targeted marketing and statistical purposes.",
    },
    items: [],
  },
  {
    name: "LE Resilience Series",
    header: {
      video: {
        webm: resilienceHeaderWebM,
        mp4: resilienceHeaderMp4,
      },
    },
    thumbnail: resilienceThumbnail,
    alt: "LE Resilience series video production",
    category: "video production",
    info: {
      who: "LifeLong Learning CMU",
      services: ["video production", "motion graphics"],
      how: "We took on creating a journey about how people show resilience against the hardships they encounter. We filmed all series using Canon R5 in 4K and a Blackmagic Cinema Camera.",
    },
    items: [
      {
        image: resilienceItem1,
        alt: "Resilience logo",
      },
      {
        youtubeEmbedId: "2nOGC_ACjZE",
        title: "Resilience 1",
        text: [
          "A story about depression.",
          "The first part features a university student recounting her friend’s battle through rejection, depression, and a suicide attempt. The second part features a university professor providing his expert opinion on the subject.",
          "This project required extra post-production, editing, and censoring because of the sensitive subject matter and concern for privacy. It was a challenge for the team to find a way to keep the student’s anonymity intact without losing the viewer’s attention during the storyboarding stage.",
          "The project was a full-scale production from initial contact, location scouting, filming, and post production",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "1yfEuxxcby0",
        title: "Resilience 2",
        text: [
          "A Q&A style video of a farmer explaining why she left the capital city to live off the land and her struggles during the COVID-19 pandemic. ",
          'Filmed in the beautiful and secluded Mae Wang Waterfall in Chiang Mai, Thailand. This video has a strong focus on nature footage and carries a motivational undertone throughout. The keyword for this video is "self-reliance".',
          "Because of the far distance from the city and remote location within the mountains, a high-level of coordination was required beforehand in order to keep with the limited time frame. The video features several different activities all shot under different weather conditions and required detailed color correction during the post production",
          "The project was a full-scale production from initial contact, location scouting, filming, and post production.",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "jyyBLiF9WNU",
        title: "Resilience 3",
        text: [
          "A motivational video of a wheelchair-bound disabled student sharing her thoughts on the country's lack of accessibility for the elderly, children, and disabled.",
          "The client had a clear vision for this video, they wanted to highlight the struggles of the student as well as treat her to a fancy lunch. The video was shot in a restaurant which sponsored the lunch. We wanted to keep the venue's authentic atmosphere of having real patrons lightly present in the background. ",
          "The video comments about the lack of planning of both the private and public sector when it comes to designing buildings. Nong Earng, the video's subject matter, aims to inform people who may have never thought about these things. A little forethought during construction and city planning is a small gesture that can make the lives of everyone better. The video ends on a high note as she shares her motivations for getting a degree that can help her make real changes and policies. ",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "DmS1XedMK6M",
        title: "Resilience 4",
        text: [
          "A video about the decade-long struggles of the communities along the Mae Kha Canal. The video highlights the main contributors to the waste management problem, why it has been neglected, and the visions the community has.",
          "Because of their busy schedule, the client could only give us a couple of keywords to start with. As we always do on all our projects, we started researching and highlighted the points objectively and found out the contact information for the people we could interview with.",
          "We believe that this is not only business, we believe that we can make a change through our stories and illuminate people, and create awareness. It is our most humble opinion that we achieved this with this video.",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "El4quJm_dTg",
        title: "Resilience 5",
        text: [
          "A video about Kru Bella, a Go With Goodwill volunteer, on a mission to help reduce the Doi Suthep forest fires.",
          "As Graphio, we are specifically proud of this video. Our client only came up with one word for us: Resilience. We had to find the topic, we had to find the people and shoot the clip. It was a complete 0 to 100 project.",
          "When we took on the job, it was the infamous air pollution season in Chiang Mai due to forest fires caused by deliberate field burnings and extreme temperatures. We came across this amazing group of volunteers led by Kru Bella. She is not just a great leader but also dedicated her life, and her time to the good of the society she lives in, a virtue we believe all should have.",
          "There was so much to go on with. We interviewed people and shot footage over 4 hours, however, due to the time limitation set by the client, we had to reduce it to just under 15 minutes.",
        ],
        reverse: true,
      },
    ],
  },
  {
    name: "LE Inclusive City Series",
    header: {
      video: {
        webm: inclusiveCityHeaderWebM,
        mp4: inclusiveCityHeaderMp4,
      },
    },
    thumbnail: inclusiveCityThumbnail,
    alt: "",
    category: "video production",
    info: {
      who: "LifeLong Learning CMU",
      services: ["video producton", "motion graphics"],
      how: "In this 3 episode series, we tried to tell the story of student hardships, their suggestions for improvements, their creativity, and their willingness to help others. We filmed all series using Canon R5 in 4K and a Blackmagic Cinema Camera. We shot on location and at our own green screen studio.",
    },

    items: [
      {
        youtubeEmbedId: "JFOAKFLXYfo",
        title: "Inclusive City 1",
        text: [
          "The first part of the Inclusive City series is a scripted short film of the “Green Power Gangster” student group on a mission to help solve the food shortage problem in Chiang Mai. The key features of this video include green screen production, motion graphics, dual language video closed captioning, and drone footage of the beautiful Chiang Mai Urban Farm. The tone of the video is light-hearted and comedic to capture the playful spirit of the students. The scriptwriting and storyboarding process was a collaboration between the students, their teachers, and Graphio Creative Studio.",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "08fn5cxK-dM",
        title: "Inclusive City 2",
        text: [
          "The second video in the three-part Inclusive City series is an explainer video presented by the students of Chiang Mai Demonstrational School. Hand-drawn animated sequences were used for the majority of this video to help illustrate the key concepts that the students wanted to offer as a solution to the footpath problem in Chiang Mai. Filmed entirely at Graphio Creative Studio. The video features dual-language closed captioning, hand-drawn animation sequences, extensive motion graphics, and green screen production. Keywords required for this video were: art, water, and joy.",
        ],
        reverse: true,
      },
      {
        youtubeEmbedId: "OprGHLKUTrE",
        title: "Inclusive City 3",
        text: [
          "The third and final part of the Inclusive City series is a candid Q&A-style video featuring the disabled community and their views on public spaces and accessibility. We interviewed three members of the Disabled Friends CMU Club of Chiang Mai University. The interviewee’s shared their experience using public transportation and brought awareness to the lack of proper accessibility around the city. All three agreed on the need for the city to incorporate the key concepts of “Universal Design” into city planning. Shot using two cameras to capture to subject’s expressions and movements. Naturally, the video also features dual-language closed captioning for the hearing impaired and inclusivity. Thanks to Lush Café at Holiday Garden Hotel and Resort for providing a beautiful interview location with natural lighting.",
        ],
        reverse: true,
      },
    ],
  },
  {
    name: "CCCL Fesitval Short Film",
    header: {
      image: ccclHeader,
    },
    thumbnail: ccclThumbnail,
    alt: "cccl film festival",
    category: "video production",
    info: {
      who: "CCCL Festival Short Film Submission Fire - Chiang Mai",
      services: ["video production", "motion graphics"],
      how: "We arranged interviews, created storyboards and composed, shot, and edited",
    },

    items: [
      {
        image: ccclItem1,
        alt: "CCCL film festival poster",
      },
      {
        youtubeEmbedId: "R6vGEIWXwUU",
        title:
          "CCCL Festival Short Film Submission Fire - Chiang Mai: Smoge and Dust",
        text: [
          "Fire - Chiang Mai: Smoge and Dust was not a job we took from a client. This was our own making and submission to CCCL Festival for a problem we wanted to point out and create awareness which we have been living with for over a decade now.",
          "Tt was a challenge to make a short film about Fire in a wet season, however, we managed to tell Chiang Mai’s story. We arranged interviews, created storyboards, and composed, shot, and edited.",
          "As a result, our video has been selected to premiere at CCCL Film Festival among 200+ submissions and awarded 4th",
        ],
        reverse: true,
      },
      {
        image: ccclItem2,
        alt: "CCCL Festival Short Film Submission Fire - Chiang Mai: Smoge and Dust",
      },
    ],
  },

  {
    name: "Chiang Mai University Online Education Series",
    header: {
      image: citizenshipHeader,
    },
    thumbnail: citizenshipHeader,
    alt: "Chiang Mai University Citizenship course",
    category: "video production",
    info: {
      who: "Chiang Mai University",
      services: [
        "video production",
        "motion graphics",
        "eng/thai translation and transcription",
      ],
      how: "We have been working with CMU to create online education videos for many years now. Most clips were shot in our own green screen studio and edited later.",
    },
    items: [
      {
        image: citizenshipItem1,
        alt: "Introduction to Politics - Online Education Series",
      },
      {
        title: "127101 - Introduction to Politics - Online Education Series",
        text: [
          "Introduction to Politics consisted of 8 chapters and over 24 hours of video shooting. It was pretty challenging to make a relatively not so entertaining topic into something that is a joy to watch. That was where our team’s exquisite editing skills came into play. We used modern backgrounds, light matching, color grading, and lots of motion graphics along the way to spice things up. The result was satisfying.",
        ],
        video: {
          mp4: citizenshipItem2Mp4,
          webm: citizenshipItem2WebM,
        },
        reverse: true,
      },
      {
        image: citizenshipItem3,
        alt: "Introduction to Politics - Online Education Series. Chiang Mai University",
        text: [
          "As we always do, files are delivered on time and in a professional manner. We use the cloud to store and deliver your files, so even if you accidentally delete your local files you will always have access to them on our cloud storage for as long as we are around.",
        ],
        reverse: true,
      },
      {
        divider: true,
      },
      {
        title: "140104 Citizenship - Online Education Serires",
        image: citizenshipItem4,
        text: [
          "A series of university-level course supplements used on a national scale. This is one of Graphio’s largest projects to date with just over 300 hours worth of footage recorded and edited.",
          "Consistency is one of the most important elements of this project. The client wanted a comprehensive feel for all the videos regardless of the differences in each lecturer’s presentations.",
          "Shot in front of our green screen studio, we equipped multiple cameras in order to switch between different angles for emphasis during key presentation moments. Our team, led by the on-set director, performed real-time editing during the filming to reduce the post-production process. The final delivery time was about 1 week for each batch which included motion graphics, title cards, ending credits, as well as academic subtitles. The final course supplements ranged from 60 minutes to 120 minutes.",
        ],
      },
      {
        video: {
          mp4: citizenshipItem5Mp4,
          webm: citizenshipItem5WebM,
        },
      },
    ],
  },
];

export const GalleryProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    { title: "all", isActive: true },
    { title: "video production", isActive: false },
    { title: "web development", isActive: false },
    // { title: "graphic/motion design", isActive: false },
  ]);

  const [portfolios, setPortfolios] = useState(data);

  const categorize = (input) => {
    if (input === "all") {
      setPortfolios(data);
    } else {
      setPortfolios(data.filter((item) => item.category === input));
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        portfolios,
        categories,
        setPortfolios,
        setCategories,
        categorize,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
