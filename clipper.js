(function () {
  function sleep(e) {
    return new Promise((resolve) => setTimeout(resolve, e));
  }

  async function clickLoadMore() {
    // const cssClass = '.btn.load-more'; // ACME
    const cssClass = '.button.button--second.button-width--lg.loading'; // Stop and Shop
    let loadMoreButton = document.querySelector(cssClass);

    while (loadMoreButton !== null) {
      loadMoreButton.click();
      await sleep(500);
      loadMoreButton = document.querySelector(cssClass);
    }
  }

  async function clickCouponButtons() {
    // const couponButtons = document.querySelectorAll(".btn.grid-coupon-btn.btn-default"); // ACME
    // const couponButtons = document.querySelectorAll(".available-to-clip.ng-star-inserted"); // ShopRite
    const couponButtons = document.querySelectorAll(".text-center.border-2.cursor-pointer.border-2.border-dashed.rounded-brand.bg-white.item-details_color.w-full"); // Stop and Shop
    for (let i = 0; i < couponButtons.length; i++) {
      await sleep(500);
      couponButtons[i].click();
    }
  }

  async function click() {
    // await clickLoadMore();
    await clickCouponButtons();
  }

  click();
})();