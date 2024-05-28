export enum Category {
  kitchen = 'kitchen',
  bedroom = 'bedroom',
  office = 'office',
  baby = 'baby',
  fitness = 'fitness',
  other = 'other',
}

interface Reservation {
  name: string
  contact: string
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
  reservations?: Reservation[]
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
    isSold: true,
  },
  {
    name: 'Dremel Butane Torch',
    images: s3Urls(['butane1', 'butane2', 'butane3', 'butane4']),
    category: Category.other,
    brand: 'Dremel',
    details:
      'Dremel versatip butane gas torch. £65 at screwfix. Comes with a bottle of butane around 1/4-1/2 left. Works as expected',
    price: 25,
    link: 'https://www.screwfix.com/p/dremel-versatip-butane-gas-torch/1596d',
  },
  {
    name: 'Tutti Bambini Cot',
    images: s3Urls(['cot1', 'cot2', 'cot3', 'cot4', 'cot5', 'cot6']),
    category: Category.baby,
    brand: 'Tutti Bambini',
    model: 'Rio',
    price: 140,
    details: 'NEVER used, plastic still on mattress',
    link: 'https://www.tuttibambini.com/rio-cot-bed-with-cot-top-changer-mattress-slate-oak.html',
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
    name: 'Highlander Camping Chairs',
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
    details: 'Has a lid that opens up for storage',
  },
  {
    name: 'Intext Air Mattress',
    images: s3Urls(['air-mattress1', 'air-mattress2', 'air-mattress3']),
    category: Category.bedroom,
    brand: 'Intext',
    model: 'AP620A',
    details:
      'Please note, this air mattress deflates faster than normal. Electric, inflates and deflates electrically. Good for emergency situations',
    link: 'https://www.argos.co.uk/product/8884967?clickPR=plp:2:5',
    isSold: true,
  },
  {
    name: 'Hakeno Pull up bar',
    images: s3Urls(['pullup-bar1', 'pullup-bar2']),
    category: Category.fitness,
    brand: 'Hakeno',
    price: 25,
    details:
      'Very good condition, rarely used. £45 on Amazon. Hangs on to frame of door, supports a very large amount of weight',
    link: 'https://www.amazon.co.uk/gp/product/B08CX8534T/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
  },
  {
    name: 'Yaheetech Desk Chair',
    brand: 'Yaheetech',
    images: s3Urls(['chair1', 'chair2', 'chair3', 'chair4']),
    category: Category.office,
    price: 15,
    details:
      'Very good condition. Note, to lift seat up, you need to manually pull the seat up rather than pull lever',
    link: 'https://www.amazon.co.uk/gp/product/B08D9HKS9L/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
  },
  {
    name: 'Russell Hobbs Toaster',
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
    name: 'Simplehuman Bin',
    brand: 'Simplehuman',
    litres: 45,
    images: s3Urls(['bin1', 'bin2']),
    category: Category.other,
    isDelayedSale: true,
    details: 'Foot operated, inner layer holds down lining of bin',
    price: 10,
    reservations: [
      {
        name: 'Geraldine',
        contact: 'geraldineojo@ymail.com',
      },
    ],
  },
  {
    name: 'Panasonic Combination Microwave Oven',
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
    name: 'Brita Water Filter',
    brand: 'Brita',
    images: s3Urls(['water-filter1', 'water-filter2', 'water-filter3']),
    category: Category.kitchen,
    isDelayedSale: true,
    details:
      '£40 on Amazon. Note, there are cracks in the plastic, but it is heigher than the water level, so it will not leak.',
    link: 'https://www.amazon.co.uk/gp/product/B07DWV14T8/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
  },
  {
    name: 'Pot Set',
    images: s3Urls(['pot-set1', 'pot-set2', 'pot-set3', 'pot-set4']),
    category: Category.kitchen,
    price: 15,
  },
  {
    name: 'Always Pan 2.0',
    images: s3Urls(['always-pan1v2', 'always-pan2v2', 'always-pan3v2']),
    category: Category.kitchen,
    brand: 'Our Place',
    hob: 'Induction',
    width: 280,
    price: 70,
    details:
      'Contains Always Pot 2.0, Perfect Pot. Very good condition, rarely used',
    link: 'https://fromourplace.co.uk/products/always-essential-cooking-pan?variant=42608736993457',
  },
  {
    name: 'Jamie Oliver All in One Pan, 30cm',
    images: s3Urls(['wide-pan1', 'wide-pan2', 'wide-pan3']),
    category: Category.kitchen,
    hob: 'Induction',
    width: 300,
    brand: 'Tefal',
    link: 'https://shop.tefal.co.uk/jamie-oliver-by-tefal-cook-s-classics-h9129943-30cm-shallow-pan-hard-anodised?utm_source=Google&utm_medium=cpc&utm_campaign=1PxGUp_UK_TEF_CWB_PotsPans_.NSSFP_PU_SEA_SHOADS&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlsncnJL76rD4BrNYhAQd0nwCu8fm4jNczYYLvHl2wE0hvWb-iy2lUaAhuFEALw_wcB&gclsrc=aw.ds',
    details: '£80 on Tefal website',
    isSold: true,
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
    images: s3Urls(['vacuum1', 'vacuum2', 'vacuum3']),
    category: Category.other,
    model: 'HVR-200-22',
    link: 'https://www.henryvacuumcleaner.com/red-henry-hvr200-22.php',
    price: 30,
    isDelayedSale: true,
    watts: 1200,
    details: '1200W. Comes with multiple attachments and bags',
    reservations: [
      {
        name: 'Sarah Brookes',
        contact: 'sarahbrookes2022@gmail.com',
      },
    ],
  },
  {
    name: 'Russell Hobbs Kettle',
    images: s3Urls(['kettle']),
    category: Category.kitchen,
    brand: 'Russell Hobbs',
    model: 20071,
    link: 'https://www.amazon.co.uk/Russell-Hobbs-Cambridge-Kettle-20071/dp/B00D3K79O4',
    isDelayedSale: true,
    reservations: [
      {
        name: 'Hafsa',
        contact: '6 Headington Rd',
      },
      {
        name: 'Geraldine',
        contact: 'geraldineolusolaojo@yahoo.co.uk',
      },
    ],
  },
  {
    name: 'Kenwood Hand Mixer',
    images: s3Urls(['hand-mixer1', 'hand-mixer2', 'hand-mixer3']),
    category: Category.kitchen,
    brand: 'Kenwood',
    model: 'HMP30',
    link: 'https://www.kenwoodworld.com/en-gb/hand-mixer-white-hmp30-a0wh/p/HMP30.A0WH',
    price: 10,
    details: 'Comes with both mixer and knead attachments',
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
    images: s3Urls(['glasses2', 'glasses1']),
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
    details: '£16 on Amazon. Sits in pot/pan drawer or cupboard to divide',
  },
  {
    name: 'Baking Trays',
    category: Category.kitchen,
    images: s3Urls(['baking-trays1', 'baking-trays2', 'baking-trays3']),
    details: '3x shallow, 1x deep',
  },
  {
    name: 'Mastertop Cake Stand',
    brand: 'Mastertop',
    category: Category.kitchen,
    images: s3Urls(['cake-holder1', 'cake-holder2', 'cake-holder3']),
    link: 'https://www.amazon.co.uk/gp/product/B07SBCP5HX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1',
    details: '£23 on Amazon. Very good condition, rarely used',
    price: 5,
  },
  {
    name: 'Perfect Pot',
    category: Category.kitchen,
    brand: 'Our Place',
    images: s3Urls([
      'perfect-pot1',
      'perfect-pot2',
      'perfect-pot3',
      'perfect-pot4',
      'perfect-pot5',
    ]),
    details:
      'Very good condition, rarely used. Comes with Perfect Pot Roast Rack',
    link: 'https://fromourplace.co.uk/products/perfect-pot?variant=40485861884081',
    price: 50,
  },
  {
    name: 'Circulon Pot',
    category: Category.kitchen,
    brand: 'Circulon',
    images: s3Urls(['circulon-pot1', 'circulon-pot2', 'circulon-pot3']),
    litres: 1.9,
  },
  {
    name: 'Wok',
    category: Category.kitchen,
    images: s3Urls(['wok1', 'wok2']),
  },
]
