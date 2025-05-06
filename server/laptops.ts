export interface Laptop {
  id: number;
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  price: number;
  imageUrl?: string; // Optional image URL
  recommendation: string; // Who is this laptop good for?
  pros?: string[];
  cons?: string[];
}

export const laptops: Laptop[] = [
  {
    id: 1,
    name: "Dell XPS 15",
    cpu: "Intel Core i7-13700H",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    price: 1599,
    imageUrl:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4752&hei=3168&qlt=100,0&resMode=sharp2&size=4752,3168&chrss=full&imwidth=5000",
    recommendation:
      "Excellent for professionals and creative users needing power and a great display.",
    pros: [
      "Stunning OLED display",
      "Powerful performance",
      "Premium build quality",
    ],
    cons: ["Can get expensive with upgrades", "Webcam is not the best"],
  },
  {
    id: 2,
    name: "MacBook Air M2",
    cpu: "Apple M2 Chip",
    ram: "8GB Unified Memory",
    storage: "256GB SSD",
    price: 1199,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    recommendation:
      "Perfect for students and everyday users wanting a light, long-lasting, and capable laptop.",
    pros: [
      "Exceptional battery life",
      "Silent fanless design",
      "Good performance for daily tasks",
      "Lightweight and portable",
    ],
    cons: ["Base model has only 8GB RAM", "Limited port selection"],
  },
  {
    id: 3,
    name: "Lenovo Legion 5 Pro",
    cpu: "AMD Ryzen 7 6800H",
    ram: "16GB DDR5",
    storage: "1TB SSD",
    price: 1499,
    imageUrl:
      "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTM0NDQ2fGltYWdlL3BuZ3xoMGEvaDA0LzE0MzU0NzM3MjUwMzM0LnBuZ3w4YjMyYjdkYjYwMTRhYmM5YjFlNDM0ZTA5N2Q3Mjk5YjY5YmExYzMyNWM1YjQxYjYwM2EzMjk4YjUwYjYxZGE4/lenovo-legion-5-pro-16-amd-hero.png",
    recommendation:
      "A top choice for gamers looking for high performance without breaking the bank.",
    pros: [
      "Excellent gaming performance",
      "High refresh rate display",
      "Good cooling system",
    ],
    cons: ["Bulky design", "Battery life is average during gaming"],
  },
  {
    id: 4,
    name: "HP Spectre x360 14",
    cpu: "Intel Core i7-1355U",
    ram: "16GB LPDDR4X",
    storage: "1TB SSD",
    price: 1399,
    imageUrl:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08386038.png",
    recommendation:
      "Ideal for users seeking a versatile 2-in-1 laptop with a premium feel and good battery life.",
    pros: [
      "Stylish 2-in-1 design",
      "Vibrant touch display",
      "Comfortable keyboard",
      "Good port selection",
    ],
    cons: [
      "Can be pricier than some competitors",
      "Performance not for heavy gaming",
    ],
  },
  {
    id: 5,
    name: "Acer Swift Go 14",
    cpu: "AMD Ryzen 5 7530U",
    ram: "8GB LPDDR4X",
    storage: "512GB SSD",
    price: 749,
    imageUrl:
      "https://static-ecpa.acer.com/media/catalog/product/cache/L2NvbnRlbnQvbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2kvbi9pbi5zZjMxNC00My5zZjMxNC00My1yN3B6LmpwZw==/acer-swift-3-oled-sf314-71-sf314-71g-fingerprint-reader-backlit-powersupply-adapter-display-14-windows-11-wallpaper-pure-silver-01.jpg",
    recommendation:
      "A great budget-friendly option for students and users needing a reliable laptop for everyday tasks and portability.",
    pros: [
      "Affordable price",
      "Lightweight and portable",
      "Decent performance for the price",
      "Good battery life",
    ],
    cons: ["Build quality is not as premium", "Display could be brighter"],
  },
];
