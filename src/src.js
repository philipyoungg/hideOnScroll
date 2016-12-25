((d, w) => {
  const hideOnScroll = selector => {
    function clamp(num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    }
    if (!selector) throw new Error('you havent\'t filled a selector yet');
    const menu = selector;
    menu.style.transition = '0.3s ease-in-out';

    let prevPos = 0;
    let isScrolling = false;

    d.addEventListener('scroll', () => {
      isScrolling = true;
    });

    setInterval(() => {
      if (isScrolling) {
        d.body.scrollTop >= prevPos ?
          menu.style.transform = 'translateY(-100%)' :
          menu.style.transform = '';
        // hack for safari where scrolling extends more than the document height.
        prevPos = clamp(d.body.scrollTop, 1, d.body.scrollHeight - w.innerHeight);
        isScrolling = false;
      }
    }, 200);
  };
  w.hideOnScroll = hideOnScroll;
})(document, window);
