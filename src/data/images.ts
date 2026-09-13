/**
 * Temporary photography for the Samman demo.
 * Replace every src with organisation photography when available.
 * Search by `id` to find usages.
 */
export const images = {
  heroFields:
    "https://images.pexels.com/photos/17504886/pexels-photo-17504886.jpeg?auto=compress&cs=tinysrgb&w=2000",
  womanFarmer:
    "https://images.pexels.com/photos/33061786/pexels-photo-33061786.jpeg?auto=compress&cs=tinysrgb&w=1600",
  harvestNagpur:
    "https://images.pexels.com/photos/20458075/pexels-photo-20458075.jpeg?auto=compress&cs=tinysrgb&w=1600",
  carryingCrops:
    "https://images.pexels.com/photos/20527345/pexels-photo-20527345.jpeg?auto=compress&cs=tinysrgb&w=1400",
  siftingGrain:
    "https://images.pexels.com/photos/20344340/pexels-photo-20344340.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cookingTandoor:
    "https://images.pexels.com/photos/15206149/pexels-photo-15206149.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cookingParatha:
    "https://images.pexels.com/photos/11011089/pexels-photo-11011089.jpeg?auto=compress&cs=tinysrgb&w=1600",
  harvestPortrait:
    "https://images.pexels.com/photos/35281194/pexels-photo-35281194.jpeg?auto=compress&cs=tinysrgb&w=1200",
  portraitWarm:
    "https://images.pexels.com/photos/3104713/pexels-photo-3104713.jpeg?auto=compress&cs=tinysrgb&w=1000",
  portraitSari:
    "https://images.pexels.com/photos/19532504/pexels-photo-19532504.jpeg?auto=compress&cs=tinysrgb&w=1000",
  portraitField:
    "https://images.pexels.com/photos/37145167/pexels-photo-37145167.jpeg?auto=compress&cs=tinysrgb&w=1000",
  walkingField:
    "https://images.pexels.com/photos/3920705/pexels-photo-3920705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  spicesColor:
    "https://images.pexels.com/photos/30296301/pexels-photo-30296301.jpeg?auto=compress&cs=tinysrgb&w=1600",
  spicePowders:
    "https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg?auto=compress&cs=tinysrgb&w=1400",
  spiceJars:
    "https://images.pexels.com/photos/1516421/pexels-photo-1516421.jpeg?auto=compress&cs=tinysrgb&w=1400",
  mangoPickle:
    "https://images.pexels.com/photos/7812134/pexels-photo-7812134.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clayPots:
    "https://images.pexels.com/photos/27403385/pexels-photo-27403385.jpeg?auto=compress&cs=tinysrgb&w=1600",
  spiceMarket:
    "https://images.pexels.com/photos/15741144/pexels-photo-15741144.jpeg?auto=compress&cs=tinysrgb&w=1600",
  chaiClay:
    "https://images.pexels.com/photos/36662612/pexels-photo-36662612.jpeg?auto=compress&cs=tinysrgb&w=1400",
  festiveGifts:
    "https://images.pexels.com/photos/7686125/pexels-photo-7686125.jpeg?auto=compress&cs=tinysrgb&w=1600",
  hamperHero: "/images/hamper-hero.jpg",
  hamperClosed: "/images/hamper-closed.jpg",
  hamperLifestyle: "/images/hamper-lifestyle.jpg",
  hamperDetail: "/images/hamper-detail.jpg",
  workKitchen: "/images/work-kitchen.jpg",
  itemSpice: "/images/item-spice.jpg",
  itemPreserve: "/images/item-preserve.jpg",
  itemGrain: "/images/item-grain.jpg",
  itemOil: "/images/item-oil.jpg",
  itemPantry: "/images/item-pantry.jpg",
} as const;

export type ImageId = keyof typeof images;
