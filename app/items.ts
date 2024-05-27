export enum Category {
  kitchen = 'kitchen',
  bedroom = 'bedroom',
  office = 'office',
  baby = 'baby',
  fitness = 'fitness',
  other = 'other',
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
  hob?: string
  litres?: number
  model?: string | number
  details?: string
  link?: string
  watts?: number
}
;``

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
    details: '£15 on Amazon',
    link: 'https://www.amazon.co.uk/gp/product/B07MWDL5N6/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
  },
  {
    name: 'Butane Torch',
    images: s3Urls(['butane1', 'butane2', 'butane3', 'butane4']),
    category: Category.other,
    brand: 'Dremel',
    details:
      'Dremel versatip butane gas torch. £65 at screwfix. Comes with a bottle of butane around 1/4-1/2 left. Works as expected',
    price: 25,
    link: 'https://www.screwfix.com/p/dremel-versatip-butane-gas-torch/1596d',
  },
  {
    name: 'Cot',
    images: s3Urls(['cot1', 'cot2', 'cot3', 'cot4', 'cot5', 'cot6']),
    category: Category.baby,
    brand: 'Tutti Bambini',
    model: 'Rio',
    price: 140,
    details: 'NEVER used, plastic still on mattress',
  },
  {
    name: 'Dumbells',
    images: s3Urls(['dumbells1', 'dumbells2']),
    category: Category.fitness,
    brand: 'Body Sculpture',
    model: 'BW108T',
    details: '1.5KG, 3KG & 5KG. £45 on Amazon',
    price: 15,
    link: 'https://www.amazon.co.uk/Body-Sculpture-BW108T-Dumbbell-Included/dp/B075GP91GK',
  },
  {
    name: 'Baby Rocker',
    images: s3Urls(['rocker1', 'rocker2']),
    category: Category.baby,
    price: 10,
  },
  {
    name: 'Flip down ironing Board',
    images: s3Urls(['ironing-board1', 'ironing-board2']),
    category: Category.other,
    brand: 'Dunelm',
    price: 15,
    details: 'Brand new, never used, still in box. £36 new',
    link: 'https://www.dunelm.com/product/flip-down-ironing-board-over-the-door-1000187473?defaultSkuId=30734653&utm_source=google&utm_medium=cpc&utm_campaign=Utility_Ironing+Boards_%5BGOO-PLA+PSB-HOMEHYGIENE-IRONINGBOARD%5D&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNkfkMHsae1VOrknzMLYcf4J3Ngx1Fx-GxfRy1UfwSPcSFT10G7L2P4aAtmGEALw_wcB&gclsrc=aw.ds',
  },
  {
    name: 'Camping Chairs',
    brand: 'Highlander',
    images: s3Urls(['camping-chairs1', 'camping-chairs2', 'camping-chairs3']),
    category: Category.other,
    price: 10,
    details:
      'Very good condition, used once. £27 EACH on Amazon. One of the bags is missing',
    link: 'https://www.amazon.co.uk/gp/product/B00BIBBDHO/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1',
  },
  {
    name: 'Hoppa Lightweight Shopping Trolley',
    brand: 'Hoppa',
    price: 5,
    images: s3Urls(['trolley1', 'trolley2']),
    category: Category.other,
    details: 'Very good condition. £24 on Amazon',
    link: 'https://www.amazon.co.uk/gp/product/B006VV4Y9A/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
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
    details:
      'Please note, this air mattress deflates faster than normal. Electric, inflates and deflates electrically. Good for emergency situations',
    link: 'https://www.argos.co.uk/product/8884967?clickPR=plp:2:5',
  },
  {
    name: 'Pull up bar',
    images: s3Urls(['pullup-bar1', 'pullup-bar2']),
    category: Category.fitness,
    brand: 'Hakeno',
    price: 25,
    details:
      'Very good condition, rarely used. £45 on Amazon. Hangs on to frame of door, supports a very large amount of weight',
    link: 'https://www.amazon.co.uk/gp/product/B08CX8534T/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
  },
  {
    name: 'Desk Chair',
    images: s3Urls(['chair1', 'chair2', 'chair3', 'chair4']),
    category: Category.office,
    price: 15,
    details:
      'Very good condition. Note, to lift seat up, you need to manually pull the seat up rather than pull lever',
  },
  {
    name: 'Toaster',
    images: s3Urls(['toaster1', 'toaster2']),
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Russel Hobbs',
    model: 24080,
    price: 10,
    details:
      'Very good condition, rarely used. Was originally bought for my mother when she visits, she visited once',
    link: 'https://uk.russellhobbs.com/adventure-two-slice-toaster-24080',
  },
  {
    name: 'Bin',
    images: s3Urls(['']),
    category: Category.other,
    isDelayedSale: true,
  },
  {
    name: 'Combination Microwave Oven',
    images: s3Urls(['microwave1', 'microwave2']),
    category: Category.kitchen,
    isDelayedSale: true,
    brand: 'Panasonic',
    model: 'NN-CT56JB',
    price: 50,
    watts: 1000,
    link: 'https://www.panasonic.com/uk/consumer/home-appliances/microwaves/combination-microwaves/nn-ct56jbbpq.html',
    details:
      '£250 new. Combination microwave/oven. Very good condition. Around 1 year old',
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
    price: 15,
  },
  {
    name: 'Always Pan Set',
    images: s3Urls(['always-pan1', 'always-pan2', 'always-pan3']),
    category: Category.kitchen,
    hob: 'Induction',
    width: 280,
    price: 70,
    details:
      'Contains Always Pot 2.0, Perfect Pot and Tagine. Very good condition, rarely used',
    link: 'https://fromourplace.co.uk/products/always-essential-cooking-pan?variant=42608736993457',
  },
  {
    name: 'Wide Pan',
    images: s3Urls(['wide-pan1', 'wide-pan2', 'wide-pan3']),
    category: Category.kitchen,
    hob: 'Induction',
    width: 300,
    brand: 'Jamie Oliver',
  },
  {
    name: 'Medium Pot',
    images: s3Urls(['medium-pot1', 'medium-pot2', 'medium-pot3']),
    category: Category.kitchen,
    brand: 'Circulon',
    hob: 'Induction',
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
    watts: 1200,
    details: '1200W. Comes with multiple attachments and bags',
  },
  {
    name: 'Kettle',
    images: s3Urls(['kettle']),
    category: Category.kitchen,
    brand: 'Russel Hobbs',
    model: 20071,
    link: 'https://www.amazon.co.uk/Russell-Hobbs-Cambridge-Kettle-20071/dp/B00D3K79O4',
    isDelayedSale: true,
  },
  {
    name: 'Hand Mixer',
    images: s3Urls(['hand-mixer']),
    category: Category.kitchen,
    brand: 'Kenwood',
    model: 'HMP30',
    link: 'https://www.kenwoodworld.com/en-gb/hand-mixer-white-hmp30-a0wh/p/HMP30.A0WH',
    price: 10,
  },
  // {
  //   name: 'Coffee',
  //   images: s3Urls(['']),
  //   category: Category.kitchen,
  //   brand: 'Lavazza',
  //   details: '1KG',
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
    details: 'New, never used. Good for a gift. 6x Whiskey glasses,',
    price: 10,
  },
  {
    name: 'Pot and pan divider',
    images: s3Urls(['pot-divider']),
    category: Category.kitchen,
    brand: 'Puricon',
    link: 'https://www.amazon.co.uk/gp/product/B093315R74/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1',
    details: 'Sits in pot/pan drawer or cupboard to divide',
  },
]
