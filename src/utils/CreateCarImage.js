export const createCarImage = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model } = car;

  url.searchParams.append("customer", "img");
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("paintdescription", "black");
  url.searchParams.append("modelFamily", model);
  url.searchParams.append("modelVariant", model);
  url.searchParams.append("modelRange", model);
  url.searchParams.append("make", make);
  // url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
