export const createCarImage = (car, angle) => {
  // console.log(car);
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, basemodel } = car;
  // console.log(car);

  url.searchParams.append("customer", "img");
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("paintdescription", "black");
  url.searchParams.append("modelFamily", basemodel);
  url.searchParams.append("modelVariant", basemodel);
  url.searchParams.append("modelRange", basemodel);
  url.searchParams.append("make", make);
  // url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
