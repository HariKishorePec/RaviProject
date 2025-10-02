export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
}

export const categories = [
  "All",
  "Furniture",
  "Electronics",
  "Decor",
  "Lighting",
  "Accessories"
];

export const products: Product[] = [
  {
    id: 1,
    title: "Modern Lounge Chair",
    description: "Elegant comfort meets contemporary design",
    fullDescription: "Experience ultimate relaxation with our Modern Lounge Chair. Crafted with premium materials and ergonomic design, this piece combines style and comfort. Perfect for any modern living space, it features a sturdy wooden frame and luxurious upholstery that will elevate your interior.",
    category: "Furniture",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Smart LED Desk Lamp",
    description: "Adjustable lighting for perfect ambiance",
    fullDescription: "Illuminate your workspace with our Smart LED Desk Lamp. Features touch controls, adjustable brightness, and color temperature. Energy-efficient LED technology provides optimal lighting while reducing power consumption. Perfect for work, study, or relaxation.",
    category: "Lighting",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Minimalist Wall Clock",
    description: "Timeless design for any room",
    fullDescription: "Keep time in style with our Minimalist Wall Clock. This sleek design features silent movement technology and a clean, modern aesthetic. Crafted with precision, it's perfect for bedrooms, offices, or living spaces where style meets functionality.",
    category: "Decor",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Wireless Speaker Set",
    description: "Premium sound quality for your space",
    fullDescription: "Transform your audio experience with our Wireless Speaker Set. Featuring Bluetooth 5.0 connectivity, 360-degree sound, and deep bass response. Perfect for music lovers who demand quality. Elegant design complements any interior.",
    category: "Electronics",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Ceramic Vase Collection",
    description: "Handcrafted elegance for fresh flowers",
    fullDescription: "Bring nature indoors with our Ceramic Vase Collection. Each piece is handcrafted by skilled artisans, featuring unique glazes and textures. Perfect for displaying fresh flowers or as standalone decorative pieces. Available in multiple sizes and colors.",
    category: "Decor",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Ergonomic Office Chair",
    description: "Comfort and support for long work hours",
    fullDescription: "Maximize productivity with our Ergonomic Office Chair. Features adjustable lumbar support, breathable mesh back, and premium cushioning. Designed for extended sitting sessions, it promotes proper posture and reduces fatigue. A must-have for any modern office.",
    category: "Furniture",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Smart Home Hub",
    description: "Control your home with ease",
    fullDescription: "Centralize your smart home control with our Smart Home Hub. Compatible with major smart home platforms, voice control enabled, and intuitive app interface. Manage lighting, temperature, security, and more from one convenient device.",
    category: "Electronics",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Designer Throw Pillows",
    description: "Comfort meets contemporary style",
    fullDescription: "Add a pop of style to your living space with our Designer Throw Pillows. Made from premium fabrics with hidden zippers and plush filling. Available in various patterns and colors to match any decor style. Machine washable for easy care.",
    category: "Accessories",
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Pendant Light Fixture",
    description: "Statement lighting for modern spaces",
    fullDescription: "Make a statement with our Pendant Light Fixture. Featuring adjustable height, energy-efficient LED bulbs, and a contemporary design. Perfect for kitchens, dining rooms, or entryways. Adds both functionality and style to any space.",
    category: "Lighting",
    image: "/placeholder.svg"
  },
  {
    id: 10,
    title: "Wooden Bookshelf",
    description: "Organize in style with solid wood",
    fullDescription: "Display your favorite books and decor with our Wooden Bookshelf. Crafted from solid hardwood with a rich finish, it offers ample storage while adding warmth to your space. Sturdy construction ensures years of reliable use.",
    category: "Furniture",
    image: "/placeholder.svg"
  },
  {
    id: 11,
    title: "Abstract Wall Art",
    description: "Contemporary art for modern interiors",
    fullDescription: "Transform your walls with our Abstract Wall Art. Each piece is professionally printed on premium canvas with vibrant, fade-resistant inks. Gallery-wrapped and ready to hang. Adds a sophisticated touch to any room.",
    category: "Decor",
    image: "/placeholder.svg"
  },
  {
    id: 12,
    title: "Bluetooth Headphones",
    description: "Immersive audio experience",
    fullDescription: "Enjoy crystal-clear sound with our Bluetooth Headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music, calls, or gaming. Premium build quality ensures durability.",
    category: "Electronics",
    image: "/placeholder.svg"
  }
];
