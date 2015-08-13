module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,
      isBullettingDisabled = false,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1,
          activeSlideHasNextBullet = activeSlideHasBulletByOffset(1),
          bulletToActivate;

        if ((isBullettingDisabled || !activeSlideHasNextBullet) && bullets[nextSlideIndex]) {
          bulletToActivate = isBullettingDisabled ? bullets[nextSlideIndex].length - 1 : 0;
          activateBullet(nextSlideIndex, bulletToActivate);
        } else if (!isBullettingDisabled && activeSlideHasNextBullet) {
          activateBullet(activeSlideIndex, activeBulletIndex+1);
          return false;
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1,
          activeSlideHasPreviousBullet = activeSlideHasBulletByOffset(-1);

        if ((isBullettingDisabled || !activeSlideHasPreviousBullet) && bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        } else if (!isBullettingDisabled  && activeSlideHasPreviousBullet) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    deck.on('bullets.enable', function() {
      isBullettingDisabled = false;
    });
    deck.on('bullets.disable', function() {
      isBullettingDisabled = true;
      activateBullet(deck.slide(), bullets[deck.slide()].length - 1);
    });

    activateBullet(0, 0);
  };
};
