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
  // images: string[]
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

export const items: Item[] = [
  {
    category: Category.other,
    name: 'Fan',
    brand: 'Signature',
    model: 'S40008',
  },
  {
    name: 'Butane Torch',
    category: Category.other,
    brand: 'Dremel',
    description:
      'Dremel versatip butane gas torch. Comes with a bottle of butane around 1/4-1/2 left. Works as expected',
  },
  {
    name: 'Cot',
    category: Category.baby,
    brand: 'Tutti Bambini',
    model: 'Rio',
    price: 140,
    description: 'NEVER used, plastic still on mattress',
  },
  {
    name: 'Dumbells',
    category: Category.fitness,
    brand: 'Body Sculpture',
    model: 'BW108T',
    description: '1.5KG, 3KG & 5KG. 50 pound on amazon',
    price: 15,
  },
  {
    name: 'Baby Rocker',
    category: Category.baby,
  },
  {
    name: 'Flip down ironing Board',
    category: Category.other,
    brand: 'Dunelm',
    price: 15,
  },
  {
    name: 'Camping Chairs',
    category: Category.other,
    price: 10,
  },
  {
    name: 'Trolley',
    category: Category.other,
  },
  {
    name: 'Foot Rest',
    category: Category.other,
  },
  {
    name: 'Crown Lever',
    category: Category.other,
    brand: 'Crown',
  },
  {
    name: 'Sanwa Lever',
    category: Category.other,
    brand: 'Sanwa',
  },
  {
    name: 'Air Mattress',
    category: Category.bedroom,
    brand: 'Intext',
    model: 'AP620A',
    description:
      'Please note, this air mattress deflates faster than normal. Electric, inflates and deflates electrically. Good for emergency situations',
  },
  {
    name: 'Pull up bar',
    category: Category.fitness,
    brand: 'Hakeno',
    price: 40,
  },
  {
    name: 'Desk Chair',
    category: Category.office,
  },
  {
    name: 'Toaster',
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Russel Hobbs',
    model: 24080,
    price: 10,
  },
  {
    name: 'Bin',
    category: Category.other,
    isDelayedSale: true,
  },
  {
    name: 'Microwave/Oven',
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Panasonic',
    model: 'NN-CT56JB',
    price: 50,
  },
  {
    name: 'Water Filter',
    category: Category.kitchen,
    isDelayedSale: true,
  },
  {
    name: 'Pot Set',
    category: Category.kitchen,
  },
  {
    name: 'Always Pan',
    category: Category.kitchen,
    isInduction: true,
    width: 280,
  },
  {
    name: 'Wide Pan',
    category: Category.kitchen,
    isInduction: true,
    width: 300,
    brand: 'Jamie Oliver',
  },
  {
    name: 'Medium Pot',
    category: Category.kitchen,
    brand: 'Circulon',
    isInduction: true,
    litres: 3.8,
  },
  {
    name: 'Henry Vacuum',
    category: Category.other,
    model: 'HVR-200-22',
    link: 'https://www.henryvacuumcleaner.com/red-henry-hvr200-22.php',
    price: 20,
    isDelayedSale: true,
  },
  {
    name: 'Kettle',
    category: Category.kitchen,
    brand: 'Russel Hobbs',
    model: 20071,
  },
  {
    name: 'Coffee Grinder',
    category: Category.kitchen,
    brand: 'Cuisinart',
    model: 'SG21U',
    description: 'Has a spare container',
    price: 15,
  },
  {
    name: 'Hand Mixer',
    category: Category.kitchen,
    brand: 'Kenwood',
    model: 'HMP30',
  },
  {
    name: 'Coffee',
    category: Category.kitchen,
    brand: 'Lavazza',
    description: '1KG',
  },
  {
    name: 'Cardboard Boxes',
    category: Category.other,
  },
  {
    name: 'Condiments',
    category: Category.kitchen,
  },
  {
    name: 'Box of glasses',
    category: Category.kitchen,
    brand: 'Crystalia',
    model: 'Washington Collection',
    description: '6x Whiskey glasses',
  },
  {
    name: 'Moisturiser',
    category: Category.other,
    brand: 'CeraVe',
    litres: 1,
    description: 'Majority is left',
  },
  {
    name: 'Cleanser',
    category: Category.other,
    brand: 'CeraVe',
    litres: 1,
    description: 'Majority is left',
  },
  {
    name: 'Pot and pan divider',
    category: Category.kitchen,
    brand: 'Puricon',
    link: 'https://www.amazon.co.uk/gp/product/B093315R74/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1',
  },
]
