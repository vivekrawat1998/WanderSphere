import { OmanFlag } from "../../../public/svgs/page";
import { MoneyIcon } from "../../../public/svgs/page";
import { CorrectIcon } from "../../../public/svgs/page";

const mainData = {
  content: {
    heroSubText: "Adventure & Experience The Travel",
    heroMainText: "Best Oman Tours & Packages",
    featuresMainText: "Why WanderSphere",
    featuresSubText:
      "We are the number one website for tours and travel packages in Oman, offering top-rated experiences throughout the country.",
    aboutAgency: {
      mainText: "WanderSphere",
      subText: "Your Life Time Vacation In Oman",
      aboutText: `WanderSphere is a class "A" tour operator located
          in Muscat city the capital of Oman, one of the top leading tour
          operators in Oman, based on our solid structure of our professional
          booking agents, expert local suppliers, partnership with top hotels,
          and modern comfortable vehicles, we serve our clients with the top
          level of quality and safety to provide them with a Life Time tour and
          unforgettable experience in Oman.`,
    },
    aboutOman: {
      mainText: "Sultanate Of Oman",
      subText: "Everyone by nature loves to see the beauty",
      aboutText: `Oman is a country with unique nature, it have a long coastal line that include wonderful soft sand beaches, there also a wonderful spots for water sports, snorkeling, whales watching and dolphin watching, you can also watch sea turtles hatching on the beaches.`,
    },
    features: [
      {
        icon: OmanFlag,
        mainText: "Dedicated exclusively to Oman",
        subText:
          "We focus solely on showcasing the beauty and culture of Oman through unique travel experiences",
      },
      {
        icon: MoneyIcon,
        mainText: "Best value at a fair price",
        subText:
          "Our tours offer the best value at a fair price, ensuring you get an exceptional experience without overpaying.",
      },
      {
        icon: CorrectIcon,
        mainText: "Certified tour operator",
        subText:
          "We are a certified tour operator, committed to providing reliable and high-quality travel experiences.",
      },
    ],
  },
  imgAlt: {
    mainLogo: "Vacation Packages Oman",
  },
};

export default mainData;
