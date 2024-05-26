enum Category {
  kitchen = 'kitchen',
  bedroom = 'bedroom',
  office = 'office',
  other = 'other',
  baby = 'baby',
  fitness = 'fitness',
}

export interface Item {
  name: string
  brand?: string
  category: Category
  price?: number
  images: string[]
  isSold?: boolean
  isDelayedSale?: boolean
  height?: number
  width?: number
  isInduction?: boolean
  litres?: number
  model?: string | number
  description?: string
  link?: string
}

const s3Urls = (items: string[]) =>
  items.map(
    (item) =>
      `https://7-headington-sales.s3.eu-west-2.amazonaws.com/${item}.jpg`
  )

export const items: Item[] = [
  {
    category: Category.other,
    name: 'Fan',
    images: s3Urls(['fan']),
    brand: 'Signature',
    model: 'S40008',
  },
  {
    name: 'Butane Torch',
    images: s3Urls(['butane1', 'butane2', 'butane3', 'butane4']),
    category: Category.other,
    brand: 'Dremel',
    description:
      'Dremel versatip butane gas torch. Comes with a bottle of butane around 1/4-1/2 left. Works as expected',
  },
  {
    name: 'Cot',
    images: s3Urls(['cot1', 'cot2', 'cot3', 'cot4', 'cot5', 'cot6']),
    category: Category.baby,
    brand: 'Tutti Bambini',
    model: 'Rio',
    price: 140,
    description: 'NEVER used, plastic still on mattress',
  },
  {
    name: 'Dumbells',
    images: s3Urls(['dumbells1', 'dumbells2']),
    category: Category.fitness,
    brand: 'Body Sculpture',
    model: 'BW108T',
    description: '1.5KG, 3KG & 5KG. 50 pound on amazon',
    price: 15,
  },
  {
    name: 'Baby Rocker',
    images: s3Urls(['rocker1', 'rocker2']),
    category: Category.baby,
  },
  {
    name: 'Flip down ironing Board',
    images: s3Urls(['ironing-board1', 'ironing-board2']),
    category: Category.other,
    brand: 'Dunelm',
    price: 15,
  },
  {
    name: 'Camping Chairs',
    images: s3Urls(['camping-chairs1', 'camping-chairs2', 'camping-chairs3']),
    category: Category.other,
    price: 10,
  },
  {
    name: 'Trolley',
    images: s3Urls(['trolley1', 'trolley2']),
    category: Category.other,
  },
  {
    name: 'Foot Rest',
    images: s3Urls(['foot-rest1', 'foot-rest2']),
    category: Category.other,
  },
  {
    name: 'Air Mattress',
    images: s3Urls(['air-mattress1', 'air-mattress2', 'air-mattress3']),
    category: Category.bedroom,
    brand: 'Intext',
    model: 'AP620A',
    description:
      'Please note, this air mattress deflates faster than normal. Electric, inflates and deflates electrically. Good for emergency situations',
  },
  {
    name: 'Pull up bar',
    images: s3Urls(['pullup-bar1', 'pullup-bar2']),
    category: Category.fitness,
    brand: 'Hakeno',
    price: 40,
  },
  {
    name: 'Desk Chair',
    images: s3Urls(['chair1', 'chair2', 'chair3', 'chair4']),
    category: Category.office,
  },
  {
    name: 'Toaster',
    images: s3Urls(['toaster1', 'toaster2']),
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Russel Hobbs',
    model: 24080,
    price: 10,
  },
  {
    name: 'Bin',
    images: s3Urls(['']),
    category: Category.other,
    isDelayedSale: true,
  },
  {
    name: 'Microwave/Oven',
    images: s3Urls(['microwave1', 'microwave2']),
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Panasonic',
    model: 'NN-CT56JB',
    price: 50,
  },
  {
    name: 'Water Filter',
    images: s3Urls(['']),
    category: Category.kitchen,
    isDelayedSale: true,
  },
  {
    name: 'Pot Set',
    images: s3Urls(['pot-set1', 'pot-set2', 'pot-set3', 'pot-set4']),
    category: Category.kitchen,
  },
  {
    name: 'Always Pan',
    images: s3Urls(['always-pan1', 'always-pan2', 'always-pan3']),
    category: Category.kitchen,
    isInduction: true,
    width: 280,
  },
  {
    name: 'Wide Pan',
    images: s3Urls(['wide-pan1', 'wide-pan2', 'wide-pan3']),
    category: Category.kitchen,
    isInduction: true,
    width: 300,
    brand: 'Jamie Oliver',
  },
  {
    name: 'Medium Pot',
    images: s3Urls(['medium-pot1', 'medium-pot2', 'medium-pot3']),
    category: Category.kitchen,
    brand: 'Circulon',
    isInduction: true,
    litres: 3.8,
  },
  {
    name: 'Henry Vacuum',
    images: s3Urls(['vacuum1', 'vacuum2']),
    category: Category.other,
    model: 'HVR-200-22',
    link: 'https://www.henryvacuumcleaner.com/red-henry-hvr200-22.php',
    price: 20,
    isDelayedSale: true,
  },
  {
    name: 'Kettle',
    images: s3Urls(['kettle']),
    category: Category.kitchen,
    brand: 'Russel Hobbs',
    model: 20071,
  },
  {
    name: 'Coffee Grinder',
    images: s3Urls(['coffee-grinder1', 'coffee-grinder2']),
    category: Category.kitchen,
    brand: 'Cuisinart',
    model: 'SG21U',
    description: 'Has a spare container',
    price: 15,
  },
  {
    name: 'Hand Mixer',
    images: s3Urls(['hand-mixer']),
    category: Category.kitchen,
    brand: 'Kenwood',
    model: 'HMP30',
  },
  // {
  //   name: 'Coffee',
  //   images: s3Urls(['']),
  //   category: Category.kitchen,
  //   brand: 'Lavazza',
  //   description: '1KG',
  // },
  // {
  //   name: 'Cardboard Boxes',
  //   images: s3Urls(['']),
  //   category: Category.other,
  // },
  // {
  //   name: 'Condiments',
  //   images: s3Urls(['']),
  //   category: Category.kitchen,
  // },
  {
    name: 'Box of glasses',
    images: s3Urls(['glasses1', 'glasses2']),
    category: Category.kitchen,
    brand: 'Crystalia',
    model: 'Washington Collection',
    description: '6x Whiskey glasses',
  },
  {
    name: 'Moisturiser',
    images: s3Urls(['moisturiser']),
    category: Category.other,
    brand: 'CeraVe',
    litres: 1,
    description: 'Majority is left',
  },
  {
    name: 'Cleanser',
    images: s3Urls(['cleanser']),
    category: Category.other,
    brand: 'CeraVe',
    litres: 1,
    description: 'Majority is left',
  },
  {
    name: 'Pot and pan divider',
    images: s3Urls(['pot-divider']),
    category: Category.kitchen,
    brand: 'Puricon',
    link: 'https://www.amazon.co.uk/gp/product/B093315R74/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1',
  },
]
