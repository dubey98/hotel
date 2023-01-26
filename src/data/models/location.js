const location = {
  title: "Jungle Safari",
  shortDescription: "A stay in nature's lap",
  longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Rerum et explicabo earum! Doloremque fuga temporibus eius excepturi placeat
    provident iste ullam nam a enim eaque amet aliquid, deleniti nemo. Quaerat.`,
  address: "ChintanGadh, Narmada Lake, Raipur,Chhattisgarh, PIN: 496751",
  contact: ["9999987878", "9898986767"],
  rooms: {
    std: {},
    dlx: {},
    suite: {},
  },
};

const room = {
  title: "Standard",
  shortDescription: "A standard room with all basis amenities",
  longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Rerum et explicabo earum! Doloremque fuga temporibus eius excepturi placeat
    provident iste ullam nam a enim eaque amet aliquid, deleniti nemo. Quaerat.`,
  amenities: [
    "AC",
    "MiniBar",
    "Balcony",
    "WideScreen TV",
    "Mini Fridge",
    "Hot/Cold Water",
  ],
  Adults: 2,
  Children: 2,
  images: [],
  price: {
    normal: 2500,
    seasonal: 3000,
    discountPercent: 20,
  },
};

const Booking = {
  checkin: new Date(),
  checkout: new Date(),
  adults: new Date(),
  children: new Date(),
  location: location,
  rooms: [
    {
      room: room,
      number: 2,
    },
  ],
  name: "Guest name",
  contact: "9998899898",
};
