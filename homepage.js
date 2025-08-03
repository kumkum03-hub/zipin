
  function scrollCategories(distance) {
    const scrollContainer = document.querySelector('.category-scroll-wrapper');
    scrollContainer.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }

  let currentOfferIndex = 0;

function scrollOffer(direction) {
  const wrapper = document.getElementById("offerWrapper");
  const banners = wrapper.querySelectorAll(".offer-banner");

  currentOfferIndex += direction;

  if (currentOfferIndex < 0) currentOfferIndex = banners.length - 1;
  if (currentOfferIndex >= banners.length) currentOfferIndex = 0;

  const scrollAmount = wrapper.clientWidth * currentOfferIndex;

  wrapper.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

function scroll4(direction) {
  const wrapper = document.getElementById("subContainer1");
  const banners = wrapper.querySelectorAll(".card4");

  currentOfferIndex += direction;

  const scrollAmount = wrapper.clientWidth * currentOfferIndex;

  wrapper.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

  
