export type RealProblem = { number: string; title: string; desc: string; image: string };

// Section 7 — "Problems they don't tell you about." Grounded in the
// patterns real Kashmir tourists report: driver substitution, union cab
// restrictions, forced commission-shopping stops, and bait-and-switch
// accommodation. Written fresh for Wild Ridge Adventure, not copied.
export const realProblems: RealProblem[] = [
  {
    number: "Common Problem — 1",
    title: "Drivers Who Don't Show Up",
    desc: "Many agencies use third-party drivers who vanish or get swapped without warning. You book with a company and end up in a stranger's car mid-trip. We only work with drivers directly employed and vetted by us — the person who picks you up from the airport is the one who drops you off.",
    image: "/images/problems/driver.jpg",
  },
  {
    number: "Common Problem — 2",
    title: "Union Cab Restrictions Between Zones",
    desc: "Kashmir's taxi unions control fixed zones — a Srinagar cab legally can't operate inside Gulmarg or Pahalgam, so you're forced to switch vehicles at each stop whether you like it or not. We plan around these zone rules upfront so there are no surprise handoffs and no unexplained waiting at a taxi stand.",
    image: "/images/problems/union.jpg",
  },
  {
    number: "Common Problem — 3",
    title: "Forced Stops at Commission Shops",
    desc: "Some drivers get a cut for every tourist they bring to a 'government emporium' selling pashmina or saffron at inflated prices, and the itinerary quietly makes room for it. We don't take commissions from shops — if you want to visit one, we'll point you to a genuinely fair-priced outlet, only if you ask.",
    image: "/images/problems/shopping.jpg",
  },
  {
    number: "Common Problem — 4",
    title: "Houseboat and Hotel Bait-and-Switch",
    desc: "The photos you're shown during booking are sometimes a different, better property than the one you're actually put in on arrival — a common complaint with budget Dal Lake houseboats. We confirm your exact room and houseboat by name on your voucher, and we've stayed in every property we recommend.",
    image: "/images/problems/houseboat.jpg",
  },
];
