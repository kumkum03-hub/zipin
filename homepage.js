
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
  
    wrapper.scrollTo({
      left: banners[currentOfferIndex].offsetLeft,
      behavior: "smooth",
    });
  }
  