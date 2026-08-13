import { products, CATEGORIES } from "@/lib/products";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticPages = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: SITE_URL + "/products", changeFrequency: "daily", priority: 0.9 },
    { url: SITE_URL + "/products?deals=1", changeFrequency: "daily", priority: 0.8 },
  ];

  const categoryPages = Object.keys(CATEGORIES).map((key) => ({
    url: SITE_URL + "/products?category=" + key,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productPages = products.map((p) => ({
    url: SITE_URL + "/product/" + p.slug,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: SITE_URL + "/services/" + s.slug,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...servicePages];
}
