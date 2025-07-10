export function importAllLogos() {
  const images = import.meta.glob('../assets/images/*.{svg,png,jpg,jpeg}', { eager: true });

  const mappedImages = {};

  Object.entries(images).forEach(([path, module]) => {
    const filename = path.split('/').pop();
    mappedImages[filename] = module.default;
  });

  console.log('Mapped Images:', mappedImages); // <--- check keys & values here

  return mappedImages;
}
