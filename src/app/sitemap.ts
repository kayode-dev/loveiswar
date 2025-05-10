export default async function sitemap() {
  const routes = {
    url: "https://loveiswar.world",
    lastModified: new Date().toISOString().split("T")[0],
  };

  return [routes];
}
