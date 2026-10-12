export const CATEGORIES = [
  { id: 'all', name: 'All Fits', label: '🔥 All Drops', minPrice: 699 },
  { id: 'tshirt', name: 'T-Shirts', label: '👕 T-Shirts', startingText: 'From ₹699', minPrice: 699, tag: 'TRENDING DROP' },
  { id: 'shirt', name: 'Shirts', label: '👔 Shirts', startingText: 'From ₹799', minPrice: 799, tag: 'URBAN VIBES' },
  { id: 'jeans', name: 'Jeans', label: '👖 Jeans & Denim', startingText: 'From ₹999', minPrice: 999, tag: 'BAGGY DRIP' },
];

export const PRODUCTS = [
  // --- T-SHIRTS (Starts at ₹699) ---
  {
    id: 'tshirt-1',
    name: 'Acid Wash Heavyweight Oversized Tee',
    category: 'tshirt',
    categoryName: 'T-Shirt',
    price: 699,
    originalPrice: 1199,
    discount: '42% OFF',
    rating: 4.9,
    reviewCount: 142,
    stockLeft: 4,
    badge: 'STARTS ₹699',
    badgeType: 'deal',
    tag: 'Oversized Fit',
    description: 'Ultra heavy 240 GSM pure combed cotton. Custom vintage mineral acid wash finish with dropped shoulders and relaxed crew neck.',
    fabric: '100% Combed Cotton (240 GSM)',
    fit: 'Boxy Oversized Fit',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Washed Charcoal', hex: '#2b2c30' },
      { name: 'Vintage Olive', hex: '#48513d' },
      { name: 'Faded Black', hex: '#1e1e20' }
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'tshirt-2',
    name: 'Cyber Tokyo Street Graphic Tee',
    category: 'tshirt',
    categoryName: 'T-Shirt',
    price: 749,
    originalPrice: 1299,
    discount: '42% OFF',
    rating: 4.8,
    reviewCount: 98,
    stockLeft: 7,
    badge: 'HOT DROP',
    badgeType: 'hot',
    tag: 'High-Density Print',
    description: 'High-density screen printed back graphic with neon cyber font accents. Breathable, durable and shrink-free.',
    fabric: '220 GSM Cotton Terry',
    fit: 'Loose Street Fit',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Pitch Black', hex: '#0f0f12' },
      { name: 'Chalk White', hex: '#ededed' }
    ],
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'tshirt-3',
    name: 'Raw Hem Grunge Boxy T-Shirt',
    category: 'tshirt',
    categoryName: 'T-Shirt',
    price: 699,
    originalPrice: 1099,
    discount: '36% OFF',
    rating: 4.7,
    reviewCount: 64,
    stockLeft: 9,
    badge: 'BESTSELLER',
    badgeType: 'bestseller',
    tag: 'Raw Edges',
    description: 'Deconstructed aesthetics with raw unhemmed cuffs and hemline. Soft pre-shrunk cotton for that effortless everyday vibe.',
    fabric: '230 GSM French Terry',
    fit: 'Boxy Cropped Length',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Bone White', hex: '#e8e5dc' },
      { name: 'Sage Green', hex: '#7b8779' },
      { name: 'Muted Brown', hex: '#5c483d' }
    ],
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'tshirt-4',
    name: 'Aesthetic Neon Rave Oversized Tee',
    category: 'tshirt',
    categoryName: 'T-Shirt',
    price: 799,
    originalPrice: 1399,
    discount: '43% OFF',
    rating: 4.9,
    reviewCount: 115,
    stockLeft: 3,
    badge: 'FEW LEFT',
    badgeType: 'urgent',
    tag: 'Glow In Dark',
    description: 'Reflective and neon fluorescent highlights that pop under club lights. Extreme comfort with seamless shoulder seams.',
    fabric: '100% Breathable Cotton (250 GSM)',
    fit: 'Baggy Drop Shoulder',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Midnight Black', hex: '#0a0a0f' },
      { name: 'Neon Acid', hex: '#c5e82a' }
    ],
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // --- SHIRTS (Starts at ₹799) ---
  {
    id: 'shirt-1',
    name: 'Cuban Collar Abstract Resort Shirt',
    category: 'shirt',
    categoryName: 'Shirt',
    price: 799,
    originalPrice: 1499,
    discount: '47% OFF',
    rating: 4.8,
    reviewCount: 88,
    stockLeft: 5,
    badge: 'STARTS ₹799',
    badgeType: 'deal',
    tag: 'Summer Drop',
    description: 'Silky smooth rayon-viscose blend drape with retro camp collar and custom bold abstract pattern. Perfect for beach chills or night-outs.',
    fabric: '100% Ultra-Soft Rayon Viscose',
    fit: 'Relaxed Vacation Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Monochrome Wave', hex: '#262626' },
      { name: 'Retro Sunset', hex: '#c85a32' }
    ],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'shirt-2',
    name: 'Vintage Corduroy Boxy Overshirt',
    category: 'shirt',
    categoryName: 'Shirt',
    price: 899,
    originalPrice: 1699,
    discount: '47% OFF',
    rating: 4.9,
    reviewCount: 167,
    stockLeft: 2,
    badge: 'TRENDING #1',
    badgeType: 'hot',
    tag: 'Heavy Corduroy',
    description: 'Thick 8-wale ribbed corduroy fabric. Dual flap chest pockets with custom metallic hardware buttons. Works both as a shirt and jacket.',
    fabric: '100% Cotton Heavy Corduroy',
    fit: 'Boxy Layering Fit',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Mocha Tan', hex: '#87694f' },
      { name: 'Forest Green', hex: '#2e3d30' },
      { name: 'Jet Black', hex: '#171717' }
    ],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'shirt-3',
    name: 'Korean Minimalist Drop-Shoulder Shirt',
    category: 'shirt',
    categoryName: 'Shirt',
    price: 849,
    originalPrice: 1599,
    discount: '47% OFF',
    rating: 4.7,
    reviewCount: 76,
    stockLeft: 8,
    badge: 'K-STYLE',
    badgeType: 'bestseller',
    tag: 'Minimal Flow',
    description: 'Clean silhouette inspired by Seoul streetwear. Wrinkle-resistant textured fabric with concealed button placket and wide sleeves.',
    fabric: 'Cotton-Linen Blend',
    fit: 'Relaxed Drop Shoulder',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Beige', hex: '#d8cebf' },
      { name: 'Sky Ash', hex: '#a6b1be' },
      { name: 'Pure Black', hex: '#121214' }
    ],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'shirt-4',
    name: 'Retro Bowling Dual-Tone Camp Shirt',
    category: 'shirt',
    categoryName: 'Shirt',
    price: 799,
    originalPrice: 1399,
    discount: '43% OFF',
    rating: 4.8,
    reviewCount: 94,
    stockLeft: 6,
    badge: 'RETRO DROP',
    badgeType: 'deal',
    tag: 'Contrast Panel',
    description: 'Contrasting color blocked panel construction with classic 90s camp collar and relaxed short sleeves. Breathable and sweat-absorbent.',
    fabric: 'Soft Cotton Poplin',
    fit: 'Regular Boxy Fit',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Emerald / Cream', hex: '#164e3f' },
      { name: 'Black / Off-White', hex: '#222222' }
    ],
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // --- JEANS (Starts at ₹999) ---
  {
    id: 'jeans-1',
    name: 'Baggy Skater 90s Wide-Leg Denim',
    category: 'jeans',
    categoryName: 'Jeans',
    price: 999,
    originalPrice: 1999,
    discount: '50% OFF',
    rating: 4.9,
    reviewCount: 230,
    stockLeft: 4,
    badge: 'STARTS ₹999',
    badgeType: 'deal',
    tag: 'Extreme Baggy',
    description: 'The definitive Gen-Z wide leg denim. Authentic 13.5 oz non-stretch heavy ring-spun denim with washed whiskering and stacked ankle drape.',
    fabric: '100% Rigid Heavy Cotton Denim (13.5 oz)',
    fit: 'Ultra Baggy Wide Leg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Vintage Acid Blue', hex: '#68829e' },
      { name: 'Faded Ash Grey', hex: '#58595b' },
      { name: 'Overdyed Black', hex: '#1b1b1c' }
    ],
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'jeans-2',
    name: 'Y2K Multi-Pocket Utility Cargo Jeans',
    category: 'jeans',
    categoryName: 'Jeans',
    price: 1199,
    originalPrice: 2299,
    discount: '48% OFF',
    rating: 4.9,
    reviewCount: 189,
    stockLeft: 3,
    badge: 'VIRAL ON REELS',
    badgeType: 'hot',
    tag: '6 Pockets + Straps',
    description: 'Tactical streetwear cargo denim loaded with 6 ergonomic 3D flap pockets, metal D-rings, and adjustable hem drawstrings for custom taper.',
    fabric: '14 oz Reinforced Cotton Denim',
    fit: 'Loose Cargo Fit',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Washed Black', hex: '#232428' },
      { name: 'Army Fatigue Washed', hex: '#4f5343' }
    ],
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'jeans-3',
    name: 'Washed Vintage Carpenter Painter Denim',
    category: 'jeans',
    categoryName: 'Jeans',
    price: 1099,
    originalPrice: 2199,
    discount: '50% OFF',
    rating: 4.8,
    reviewCount: 112,
    stockLeft: 7,
    badge: 'WORKWEAR',
    badgeType: 'bestseller',
    tag: 'Hammer Loop',
    description: 'Workwear utility styling with authentic carpenter hammer loop, double-layer knee reinforcement, and contrast heavy triple-needle stitching.',
    fabric: '13 oz Pre-Washed Comfort Denim',
    fit: 'Relaxed Straight Leg',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Medium Wash Indigo', hex: '#466288' },
      { name: 'Ecru Off-White', hex: '#e4dece' }
    ],
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'jeans-4',
    name: 'Distressed Ripped Grunge Relaxed Jeans',
    category: 'jeans',
    categoryName: 'Jeans',
    price: 999,
    originalPrice: 1899,
    discount: '47% OFF',
    rating: 4.7,
    reviewCount: 84,
    stockLeft: 5,
    badge: 'GRUNGE DROP',
    badgeType: 'deal',
    tag: 'Hand-Distressed',
    description: 'Authentic hand-distressed knee rips with raw fraying. Soft enzyme wash finish for that lived-in, worn vintage character.',
    fabric: '100% Cotton Broken Twill Denim',
    fit: 'Relaxed Tapered Fit',
    sizes: ['30', '32', '34'],
    colors: [
      { name: 'Bleached Sky Blue', hex: '#8ea8c4' },
      { name: 'Charcoal Wash', hex: '#313338' }
    ],
    image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop'
    ]
  }
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'look-1',
    title: 'Baggy On Baggy Cyber Vibe',
    outfit: 'Tokyo Street Graphic Tee (₹749) + Baggy Skater Denim (₹999)',
    total: 1748,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    model: 'Aryan (@aryan_fits)',
    likes: '2.4k'
  },
  {
    id: 'look-2',
    title: 'Overshirt Fall Aesthetic',
    outfit: 'Corduroy Overshirt (₹899) + Acid Wash Heavyweight Tee (₹699)',
    total: 1598,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=600&auto=format&fit=crop',
    model: 'Kabir (@kabor.drip)',
    likes: '1.9k'
  },
  {
    id: 'look-3',
    title: 'Korean Clean Boy Drip',
    outfit: 'Korean Drop-Shoulder Shirt (₹849) + Carpenter Denim (₹1099)',
    total: 1948,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
    model: 'Rohan (@rohan_fits)',
    likes: '3.1k'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Tanmay Sharma',
    city: 'Delhi',
    rating: 5,
    text: 'Bhai cloth quality 240 GSM sacchi me heavy hai! Fit ekdum aesthetic oversized hai, mall me 2500 ka milta hai ye yahan ₹699 me mil gaya. 10/10 recommended!',
    item: 'Acid Wash Heavyweight Oversized Tee',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Zaid Khan',
    city: 'Mumbai',
    rating: 5,
    text: 'Jeans ka drape check karo! Proper 90s skater look deta hai sneakers ke sath. Delivery bhi 3 din me aa gayi. GenZ Fashion rocks!',
    item: 'Baggy Skater 90s Wide-Leg Denim',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Ishaan Verma',
    city: 'Bangalore',
    rating: 5,
    text: 'Corduroy shirt is super warm and structured. WhatsApp par order kiya tha, bahut friendly customer support hai. Ordered 2 more shirts!',
    item: 'Vintage Corduroy Boxy Overshirt',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];
