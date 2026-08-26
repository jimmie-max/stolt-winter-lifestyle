/**
 * Product catalogue.
 *
 * All copy, prices, sizes, article numbers and imagery below are taken from the
 * live Stolt of Sweden store (stoltski.com). Nothing here is invented — when a
 * detail is not published on the store it is simply omitted.
 *
 * When this is wired to the real Shopify storefront, replace `PRODUCTS` with the
 * storefront API response and keep the same shape.
 */

export type ProductCategory = "bootski" | "goggles";

export type Product = {
  /** Shopify handle — used to build the /products/<handle> checkout link. */
  handle: string;
  title: string;
  shortTitle: string;
  colour: string;
  category: ProductCategory;
  /** ADULT | KIDS for BootSki. */
  fit?: "ADULT" | "KIDS";
  sizes: string[];
  price: number;
  currency: "SEK";
  available: boolean;
  note?: string;
  image: string;
  imageAlt: string;
  hoverImage?: string;
};

export const PRODUCTS: Product[] = [
  {
    handle: "bootski-solid-black",
    title: "BootSki ADULT SIZE Solid Black",
    shortTitle: "BootSki Adult",
    colour: "Solid Black",
    category: "bootski",
    fit: "ADULT",
    sizes: ["Medium", "Large"],
    price: 1995,
    currency: "SEK",
    available: true,
    note: "Medium is pre-order",
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/BLACK1.png?v=1634892130",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/BLACK3.png?v=1760442045",
    imageAlt: "Stolt of Sweden BootSki short ski in Solid Black, adult size",
  },
  {
    handle: "bootski-carbon-green",
    title: "BootSki ADULT SIZE Carbon Green",
    shortTitle: "BootSki Adult",
    colour: "Carbon Green",
    category: "bootski",
    fit: "ADULT",
    sizes: ["Large"],
    price: 2195,
    currency: "SEK",
    available: true,
    note: "Medium sold out",
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonGreen.png?v=1760446441",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonGreen42.png?v=1763125189",
    imageAlt: "Stolt of Sweden BootSki short ski with Carbon Green print, adult size",
  },
  {
    handle: "bootski-solid-pink",
    title: "BootSki ADULT SIZE Solid Pink",
    shortTitle: "BootSki Adult",
    colour: "Solid Pink",
    category: "bootski",
    fit: "ADULT",
    sizes: ["Medium", "Large"],
    price: 1995,
    currency: "SEK",
    available: false,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/PINK1.png?v=1766152134",
    imageAlt: "Stolt of Sweden BootSki short ski in Solid Pink, adult size",
  },
  {
    handle: "bootski-kids-size-carbon-green",
    title: "BootSki KIDS SIZE Carbon Green",
    shortTitle: "BootSki Kids",
    colour: "Carbon Green",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 2195,
    currency: "SEK",
    available: true,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonGreen.png?v=1760446441",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonGreen3.png?v=1760442250",
    imageAlt: "Stolt of Sweden BootSki short ski with Carbon Green print, kids size",
  },
  {
    handle: "bootski-kids-size-carbon-orange",
    title: "BootSki KIDS SIZE Carbon Orange",
    shortTitle: "BootSki Kids",
    colour: "Carbon Orange",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 2195,
    currency: "SEK",
    available: true,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/C_ORANGE1.png?v=1634891892",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/C_ORANGE3.png?v=1634893705",
    imageAlt: "Stolt of Sweden BootSki short ski with Carbon Orange print, kids size",
  },
  {
    handle: "bootski-kids-size-carbon-pink",
    title: "BootSki KIDS SIZE Carbon Pink",
    shortTitle: "BootSki Kids",
    colour: "Carbon Pink",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 2195,
    currency: "SEK",
    available: true,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonPink.png?v=1757412317",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonPINK3.png?v=1760442206",
    imageAlt: "Stolt of Sweden BootSki short ski with Carbon Pink print, kids size",
  },
  {
    handle: "bootski-kids-size-usa-design",
    title: "BootSki KIDS SIZE USA Design",
    shortTitle: "BootSki Kids",
    colour: "USA Design",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 2195,
    currency: "SEK",
    available: true,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/Skarmklipp.USA.png?v=1764850501",
    imageAlt: "Stolt of Sweden BootSki short ski with USA design, kids size",
  },
  {
    handle: "bootski-kids-size-solid-pink",
    title: "BootSki KIDS SIZE Solid Pink",
    shortTitle: "BootSki Kids",
    colour: "Solid Pink",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 1995,
    currency: "SEK",
    available: true,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/PINK1.png?v=1766152134",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/PINK3.png?v=1766152134",
    imageAlt: "Stolt of Sweden BootSki short ski in Solid Pink, kids size",
  },
  {
    handle: "bootski-kids-size-carbon-blue",
    title: "BootSki KIDS SIZE Carbon Blue",
    shortTitle: "BootSki Kids",
    colour: "Carbon Blue",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 2195,
    currency: "SEK",
    available: false,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiCarbonBlue.png?v=1757412178",
    imageAlt: "Stolt of Sweden BootSki short ski with Carbon Blue print, kids size",
  },
  {
    handle: "bootski-kids-size-solid-orange",
    title: "BootSki KIDS SIZE Solid Orange",
    shortTitle: "BootSki Kids",
    colour: "Solid Orange",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 1995,
    currency: "SEK",
    available: false,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/BootskiSolidOrange.png?v=1757411931",
    imageAlt: "Stolt of Sweden BootSki short ski in Solid Orange, kids size",
  },
  {
    handle: "bootski-kids-size-solid-blue",
    title: "BootSki KIDS SIZE Solid Blue",
    shortTitle: "BootSki Kids",
    colour: "Solid Blue",
    category: "bootski",
    fit: "KIDS",
    sizes: ["Kids"],
    price: 1995,
    currency: "SEK",
    available: false,
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/products/BLUE1.png?v=1634893742",
    imageAlt: "Stolt of Sweden BootSki short ski in Solid Blue, kids size",
  },
  {
    handle: "st-50-black-ski-goggles-with-spare-lens",
    title: "ST-50 Black Ski Goggles with Spare Lens",
    shortTitle: "ST-50 Goggles",
    colour: "Black",
    category: "goggles",
    sizes: ["One size"],
    price: 1499,
    currency: "SEK",
    available: false,
    note: "Arriving October 2026",
    image:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/ChatGPTImage22aug.202621_08_56.png?v=1787513409",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0201/1093/4070/files/ChatGPTImage22aug.202621_01_04.png?v=1787513421",
    imageAlt: "Stolt of Sweden ST-50 ski goggles in black with mirror lens",
  },
];

export const BOOTSKI = PRODUCTS.filter((p) => p.category === "bootski");
export const GOGGLES = PRODUCTS.filter((p) => p.category === "goggles");
export const ST50 = GOGGLES[0]!;

export const STORE_ORIGIN = "https://stoltski.com";

/** Deep link straight into the live Shopify product page. */
export const productUrl = (p: Product) => `${STORE_ORIGIN}/products/${p.handle}`;

export const formatSEK = (value: number) =>
  `${new Intl.NumberFormat("sv-SE").format(Math.round(value))} kr`;
