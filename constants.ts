
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Neuro-Electronics', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1000&q=80' },
  { id: '2', name: 'Sustainable Couture', image: 'https://images.unsplash.com/photo-1539109132373-9519faec16fe?w=1000&q=80' },
  { id: '3', name: 'Smart Living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80' },
  { id: '4', name: 'Organic Beauty', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1000&q=80' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Quantum Audio Zenith',
    description: 'The first headphones with bio-adaptive noise cancellation. Experience sound that adjusts to your brainwave patterns for perfect focus. 2026 Platinum Series.',
    price: 499.99,
    category: 'Neuro-Electronics',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000&q=80',
    rating: 5.0,
    featured: true,
    reviews: [
      { id: 'r1', user: 'Julian V.', rating: 5, comment: 'The neural sync is life-changing.', date: '2026-01-10' }
    ]
  },
  {
    id: 'p2',
    name: 'Neo-Classic Chrono',
    description: 'Crafted from recycled aerospace titanium. A self-winding masterpiece with integrated smart notifications on a holographic sapphire dial.',
    price: 1250.00,
    category: 'Sustainable Couture',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000&q=80',
    rating: 4.9,
    featured: true,
    reviews: []
  },
  {
    id: 'p3',
    name: 'Solar-Knit Tech Vest',
    description: 'Woven with high-efficiency photovoltaic threads. Charge your devices while you walk through the city in absolute style.',
    price: 380.00,
    category: 'Sustainable Couture',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&q=80',
    rating: 4.7,
    featured: false,
    reviews: []
  },
  {
    id: 'p4',
    name: 'Omni-Air Purifier Pro',
    description: '2026 limited edition. Uses molecular ionization to eliminate 99.9% of toxins. Fits seamlessly into modern minimalist interiors.',
    price: 899.00,
    category: 'Smart Living',
    image: 'https://images.unsplash.com/photo-1614859324967-bdf701509353?w=1000&q=80',
    rating: 4.8,
    featured: true,
    reviews: []
  },
  {
    id: 'p5',
    name: 'Floating Bonsai 2.0',
    description: 'Magnetic levitation meets botanical art. A serene floating centerpiece that rotates slowly to maximize sunlight exposure.',
    price: 245.00,
    category: 'Smart Living',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1000&q=80',
    rating: 4.6,
    featured: false,
    reviews: []
  },
  {
    id: 'p6',
    name: 'Carbon Silk Tuxedo',
    description: 'Synthetic spider silk infused with carbon nanotubes for a wrinkle-free, temperature-regulating formal experience.',
    price: 2100.00,
    category: 'Sustainable Couture',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?w=1000&q=80',
    rating: 4.9,
    featured: false,
    reviews: []
  },
  {
    id: 'p7',
    name: 'Molecular Skin Rebirth',
    description: 'A lab-grown serum that clones your skin cells to target specific aging concerns with 100% precision.',
    price: 320.00,
    category: 'Organic Beauty',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
    rating: 4.9,
    featured: true,
    reviews: []
  },
  {
    id: 'p8',
    name: 'Aero-Mesh Sneakers',
    description: '3D-printed to your exact foot scan. Zero waste, infinite comfort. The future of sustainable urban movement.',
    price: 295.00,
    category: 'Sustainable Couture',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80',
    rating: 4.5,
    featured: false,
    reviews: []
  },
  {
    id: 'p9',
    name: 'Neural Link Interface',
    description: 'Minimalist headband for seamless smart home control via cognitive commands. Encrypted and ethically certified.',
    price: 1599.00,
    category: 'Neuro-Electronics',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?w=1000&q=80',
    rating: 4.7,
    featured: true,
    reviews: []
  },
  {
    id: 'p10',
    name: 'Holographic Desk Companion',
    description: 'An AI assistant with a physical presence. Uses laser projection to interact with your workspace.',
    price: 650.00,
    category: 'Smart Living',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&q=80',
    rating: 4.8,
    featured: false,
    reviews: []
  }
];
