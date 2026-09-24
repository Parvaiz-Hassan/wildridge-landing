export type Tour = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  priceOriginal: number;
  priceDiscounted: number;
  tag?: string;
  highlights: string[];
  image: string;
};

// Six packages modelled on the itineraries that actually sell best for
// Kashmir (Srinagar-Gulmarg-Pahalgam core, honeymoon, short getaway, an
// offbeat meadow route, and a budget group option). Prices are placeholders
// — update priceOriginal / priceDiscounted to match your real rate card.
export const tours: Tour[] = [
  {
    slug: "kashmir-classic-tour",
    title: "Kashmir Classic Tour",
    duration: "4 Nights / 5 Days",
    route: "Srinagar • Gulmarg • Pahalgam",
    priceOriginal: 14990,
    priceDiscounted: 11000,
    tag: "Best Seller",
    highlights: ["3-star hotels", "Private cab", "Gondola phase 1 included", "Daily breakfast & dinner"],
    image: "/images/tours/classic.jpg",
  },
  {
    slug: "grand-kashmir-tour",
    title: "Grand Kashmir Tour",
    duration: "6 Nights / 7 Days",
    route: "Srinagar • Gulmarg • Pahalgam • Sonmarg",
    priceOriginal: 39000,
    priceDiscounted: 24450,
    tag: "Most Complete",
    highlights: ["4 destinations covered", "Shikara ride included", "Thajiwas glacier visit", "Dedicated trip coordinator"],
    image: "/images/tours/grand.jpg",
  },
  {
    slug: "kashmir-honeymoon-special",
    title: "Kashmir Honeymoon Special",
    duration: "5 Nights / 6 Days",
    route: "Srinagar • Gulmarg • Pahalgam",
    priceOriginal: 21000,
    priceDiscounted: 18000,
    tag: "Couples' Favourite",
    highlights: ["Deluxe houseboat stay", "Candlelight dinner", "Private cab, no group clubbing", "Room decoration on arrival"],
    image: "/images/tours/honeymoon.jpg",
  },
  {
    slug: "gulmarg-pahalgam-getaway",
    title: "Gulmarg-Pahalgam Getaway",
    duration: "3 Nights / 4 Days",
    route: "Srinagar • Gulmarg • Pahalgam",
    priceOriginal: 15999,
    priceDiscounted: 10650,
    tag: "Weekend Trip",
    highlights: ["Perfect for a long weekend", "Gondola tickets pre-booked", "Betaab & Aru Valley", "Airport transfers included"],
    image: "/images/tours/getaway.jpg",
  },
  {
    slug: "doodhpathri-offbeat-tour",
    title: "Doodhpathri Offbeat Tour",
    duration: "5 Nights / 6 Days",
    route: "Srinagar • Doodhpathri • Yusmarg • Gulmarg",
    priceOriginal: 25500,
    priceDiscounted: 19700,
    tag: "Fewer Crowds",
    highlights: ["Meadows most tourists skip", "Ideal for repeat visitors", "Local shepherd villages", "Small-group friendly"],
    image: "/images/tours/offbeat.jpg",
  },
  {
    slug: "budget-kashmir-group-tour",
    title: "Budget Kashmir Group Tour",
    duration: "4 Nights / 5 Days",
    route: "Srinagar • Gulmarg • Pahalgam",
    priceOriginal: 14900,
    priceDiscounted: 11000,
    tag: "Best Value",
    highlights: ["Great for groups of 6+", "Clean 2-star stays", "Same driver, full trip", "No forced shopping stops"],
    image: "/images/tours/budget.jpg",
  },
];
