function fixedEncodeURIComponent(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
    return '%' + e.charCodeAt(0).toString(16);
  });
}
function mail() {
  $('.madrss').each(function(e, t) {
    $(t).html(
      '<a href="mailto:info@newhattan.jp"><span class="t">info@newhattan.jp</span></a>'
    );
  });
}
function raf() {
  requestAnimationFrame(raf),
    normalScroll.ready && normalScroll.onScrollFrame();
}
function getPosition(e) {
  return e.originalEvent.touches[0].pageX;
}
function getExtention(e) {
  var t;
  if (!e) return t;
  var i = e.split('.'),
    n = i.length;
  return 0 === n ? t : (t = i[n - 1]);
}
function roundFloat(e, t) {
  var i = Math.pow(10, t);
  return Math.round(e * i) / i;
}
function cliclPin() {
  window.open().location.href = 'https://goo.gl/maps/aFA3JuN7nPC2';
}
!(function(e) {
  var t = /iPhone/i,
    i = /iPod/i,
    n = /iPad/i,
    o = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
    s = /Android/i,
    a = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
    l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
    r = /Windows Phone/i,
    d = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
    c = /BlackBerry/i,
    p = /BB10/i,
    h = /Opera Mini/i,
    u = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
    f = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
    m = new RegExp('(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)', 'i'),
    w = function(e, t) {
      return e.test(t);
    },
    y = function(e) {
      var y = e || navigator.userAgent,
        g = y.split('[FBAN');
      if (
        (void 0 !== g[1] && (y = g[0]),
        void 0 !== (g = y.split('Twitter'))[1] && (y = g[0]),
        (this.apple = {
          phone: w(t, y),
          ipod: w(i, y),
          tablet: !w(t, y) && w(n, y),
          device: w(t, y) || w(i, y) || w(n, y)
        }),
        (this.amazon = {
          phone: w(a, y),
          tablet: !w(a, y) && w(l, y),
          device: w(a, y) || w(l, y)
        }),
        (this.android = {
          phone: w(a, y) || w(o, y),
          tablet: !w(a, y) && !w(o, y) && (w(l, y) || w(s, y)),
          device: w(a, y) || w(l, y) || w(o, y) || w(s, y)
        }),
        (this.windows = {
          phone: w(r, y),
          tablet: w(d, y),
          device: w(r, y) || w(d, y)
        }),
        (this.other = {
          blackberry: w(c, y),
          blackberry10: w(p, y),
          opera: w(h, y),
          firefox: w(f, y),
          chrome: w(u, y),
          device: w(c, y) || w(p, y) || w(h, y) || w(f, y) || w(u, y)
        }),
        (this.seven_inch = w(m, y)),
        (this.any =
          this.apple.device ||
          this.android.device ||
          this.windows.device ||
          this.other.device ||
          this.seven_inch),
        (this.phone =
          this.apple.phone || this.android.phone || this.windows.phone),
        (this.tablet =
          this.apple.tablet || this.android.tablet || this.windows.tablet),
        'undefined' == typeof window)
      )
        return this;
    },
    g = function() {
      var e = new y();
      return (e.Class = y), e;
    };
  'undefined' != typeof module && module.exports && 'undefined' == typeof window
    ? (module.exports = y)
    : 'undefined' != typeof module &&
      module.exports &&
      'undefined' != typeof window
    ? (module.exports = g())
    : 'function' == typeof define && define.amd
    ? define('isMobile', [], (e.isMobile = g()))
    : (e.isMobile = g());
})(this);
var DEVICE_RATIO = window.devicePixelRatio,
  hH = (fh = wW = wH = wT = 0),
  $html = $('html'),
  $header = $('.site-header'),
  $footer = $('.site-footer'),
  $mask = $('.xhr-overlay'),
  $lang = $('.lg-wrap'),
  tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag),
  $(function() {
    loading.init(),
      video.once(),
      page.init(),
      page.onResize(),
      news.init(),
      normalScroll.init(),
      pulldown.once(),
      page.onLoadImages(),
      singleSlider.init(),
      spring.init(),
      cursor.init(),
      panel.init(),
      cat.init(),
      form.init(),
      page.language(),
      isMobile.phone
        ? $html.addClass('is-mobile')
        : isMobile.tablet
        ? $html.addClass('is-tablet')
        : $html.addClass('is-desktop'),
      page.onResizeOnce(),
      setTimeout(function() {
        loading.onLoad();
      }, 4e3);
  });
var anim = {
    pd: {
      i: {
        s: 0.4,
        e: Power2.easeOut
      },
      o: {
        s: 0.3,
        e: Power2.easeOut
      }
    },
    col: {
      i: {
        s: 0.4,
        e: Power2.easeOut,
        d: 0.008
      },
      o: {
        s: 0.5,
        e: Power2.easeOut,
        d: 0.01
      },
      h: {
        s: 0.3,
        e: Power2.easeOut,
        d: 0.01
      }
    },
    sp: {
      i: {
        s: 0.2
      },
      o: {
        s: 0.8,
        e: Elastic.easeOut.config(1.3, 0.3)
      }
    },
    tr: {
      i: {
        s: 0.55,
        e: Cubic.easeInOut
      },
      o: {
        s: 0.5,
        e: Cubic.easeInOut
      }
    }
  },
  mouse = {
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
    cx: 0,
    cy: 0
  };
$(window).on({
  resize: function() {
    menu.isopen && isMobile.any && menu.onClose(),
      cat.isOpen && cat.onClose(),
      pulldown.isOpen && pulldown.onClose(),
      page.onResize(),
      news.onResize(),
      video.ready && video.onResize(),
      normalScroll.onResize();
  },
  load: function() {
    loading.onLoad(), page.onLoad();
  },
  mousemove: function(e) {
    var t = e.clientX,
      i = e.clientY;
    (mouse.sx = t), (mouse.sy = i);
    var n = (e.clientX - wW / 2) / (wW / 2),
      o = (e.clientY - wH / 2) / (wH / 2);
    if (
      (TweenLite.to(mouse, 0.3, {
        x: t,
        y: i
      }),
      page.isLoaded && !isMobile.any)
    ) {
      if ((mfa.ready && mfa.onMouseMove(n, o), spring.ready))
        return spring.onMouseMove(), !1;
      cursor.ready && cursor.onMouseMove();
    }
  },
  scroll: function() {
    (wT = $(this).scrollTop()), normalScroll.onScroll();
  }
});
var period = 1,
  popupnews = {
    init: function() {
      if ($('.ns-popup').length) {
        var e = $('.ns-popup').data('name');
        Cookies.get(e)
          ? popupnews.delete()
          : (Cookies.set(e, {
              expires: period
            }),
            TweenLite.set('.ns-popup-body', {
              y: 60
            }),
            TweenLite.to('.ns-popup-body', 0.8, {
              y: 0,
              alpha: 1,
              delay: 1.4,
              ease: Circ.easeOut
            }),
            TweenLite.to('.ns-popup', 0.8, {
              alpha: 1,
              delay: 1
            }),
            $(document).on(
              {
                click: function(e) {
                  e.preventDefault(), popupnews.hide();
                }
              },
              '.js-popup-close'
            ));
      }
    },
    hide: function() {
      TweenLite.to('.ns-popup-body', 0.4, {
        y: 60,
        alpha: 0
      }),
        TweenLite.to('.ns-popup', 0.4, {
          alpha: 0,
          delay: 0.4,
          onComplete: function() {
            popupnews.delete();
          }
        });
    },
    delete: function() {
      $('.ns-popup').hide(),
        TweenLite.set('.ns-popup-bnr .js-bg', {
          y: 20
        }),
        TweenLite.to('.ns-popup-bnr .js-bg', 0.4, {
          y: 0,
          alpha: 1,
          ease: Circ.easeOut
        });
    }
  },
  loading = {
    isLoaded: !1,
    loop: null,
    init: function() {
      var e = this;
      TweenLite.set('.window', {
        y: 60,
        scale: 1,
        alpha: 0
      }),
        TweenLite.set('.loader', {
          zIndex: 0
        }),
        (e.g = $('.loader-bg')),
        (e.length = e.g.length),
        (n = e.length),
        (prevN = e.length - 1),
        (e.loop = setInterval(function() {
          n > e.length - 1 && (n = 0),
            TweenLite.set(e.g.eq(n), {
              zIndex: 2,
              clip: 'rect(0px ' + wW + 'px ' + wH + 'px ' + wW + 'px)'
            }),
            TweenLite.set(e.g.eq(n).siblings(), {
              zIndex: 0
            }),
            TweenLite.set(e.g.eq(prevN), {
              zIndex: 1
            }),
            TweenLite.to(e.g.eq(n), 0.5, {
              clip: 'rect(0px ' + wW + 'px ' + wH + 'px 0px)',
              ease: Circ.easeInOut
            }),
            (prevN = n),
            n++;
        }, 700));
    },
    onLoad: function() {
      var e = this;
      if (!loading.isLoaded) {
        (loading.isLoaded = !0), page.loadAllImages();
        $('.loader');
        var t = $('.loading-logo');
        clearInterval(e.loop),
          TweenMax.to(t, 0.4, {
            y: -60,
            alpha: 0,
            delay: 0.2,
            ease: Cubic.easeInOut,
            onComplete: function() {
              TweenLite.to('.window', 0.8, {
                y: 0,
                scale: 1,
                alpha: 1,
                ease: Cubic.easeInOut
              }),
                setTimeout(function() {
                  normalScroll.fixedElement(),
                    TweenMax.set(e.g.last(), {
                      zIndex: 2,
                      clip: 'rect(0px ' + wW + 'px ' + wH + 'px ' + wW + 'px)'
                    });
                }, 1e3),
                popupnews.init();
            }
          });
      }
    }
  },
  page = {
    isLoaded: !1,
    init: function() {
      ($footer = $('.site-footer')),
        (this.type = $('.xhr-body').data('type')),
        (this.name = $('.xhr-body').data('namespace')),
        $html.removeClass(function(e, t) {
          return (t.match(/\bis-page-\S+/g) || []).join(' ');
        }),
        $html.addClass('is-page-type-' + this.type),
        $html.addClass('is-page-in-' + this.name),
        'archive' === this.type && pagging.init(),
        clearInterval(notfound.interval),
        404 === this.name && notfound.init(),
        mail();
    },
    onLoad: function() {
      $('#video-iframe').length &&
        (isMobile.any || video.init(), video.initModal()),
        $('.js-slide').length && slide.init(),
        $('.mfa').length && mfa.init(),
        $('#map').length && gmap.init(),
        (this.isLoaded = !0),
        page.anchor();
    },
    loadImage: function(e) {
      var t = $(e),
        i = t.data('src');
      if (void 0 === i) t.addClass('is-bg-loaded');
      else {
        if (isMobile.phone || wW <= 740) var n = i.mb;
        else if (isMobile.tablet) n = i.d1x;
        else if (DEVICE_RATIO >= 1.5) n = i.d2x;
        else n = i.d1x;
        t.find('.js-bg-img').css({
          'background-image': 'url(' + n + ')'
        });
        var o = new Image();
        (o.onload = function() {
          t.addClass('is-bg-loaded');
        }),
          (o.src = n);
      }
    },
    listener: function(e) {
      $.each(e, function(e, t) {
        var i = t.target,
          n = t.isIntersecting,
          o = t.intersectionRatio;
        n && o > 0 && !$(i).is('.is-bg-loaded') && page.loadImage(i);
      });
    },
    loadAllImages: function() {
      $('.js-bg').each(function(e, t) {
        page.loadImage(t);
      });
    },
    onLoadImages: function() {
      var e = this;
      'IntersectionObserver' in window
        ? ((e.targets = {
            bg: $('.js-bg')
          }),
          (e.observer = new IntersectionObserver(e.listener, {
            threshold: [0, 0.1],
            rootMargin: '0px'
          })),
          e.targets.bg.each(function(t, i) {
            e.observer.observe(i);
          }))
        : page.loadAllImages();
    },
    onResize: function() {
      (wW = $(window).width()),
        (wH = $(window).height()),
        (hH = $header.height()),
        (fH = $footer.height()),
        $('.sh').css({
          height: wH - hH
        }),
        $('.wh').css({
          height: wH
        }),
        $('.js-ratio-by-w').each(function(e, t) {
          if (!$(t).is('.is-set-h')) {
            var i = $(t),
              n = i.data('ratio'),
              o = i.width() * n;
            i.css({
              height: o
            });
          }
        }),
        $('.section-add-bar').length &&
          $('.section-add-bar').each(function(e, t) {
            var i = $(this)
              .find('.js-bar')
              .position().top;
            $(this)
              .find('.bar')
              .css({
                top: i
              });
          });
    },
    onResizeOnce: function() {
      (wW = $(window).width()),
        (wH = $(window).height()),
        (hH = $header.height()),
        (fH = $footer.height()),
        $('.sh').css({
          height: wH - hH
        }),
        $('.wh').css({
          height: wH
        }),
        $('.js-ratio-by-w').each(function(e, t) {
          var i = $(t),
            n = i.data('ratio'),
            o = i.width() * n;
          i.css({
            height: o
          });
        }),
        $('.header-products-links-body .js-ratio-by-w').addClass('is-set-h'),
        $('.section-add-bar').length &&
          $('.section-add-bar').each(function(e, t) {
            var i = $(this)
              .find('.js-bar')
              .position().top;
            $(this)
              .find('.bar')
              .css({
                top: i
              });
          });
    },
    language: function() {
      var e = page.getParam('lang', window.location.href),
        t = e || 'ja';
      $html.addClass('is-lang-' + t),
        $('.js-lang-switch[data-lang="' + t + '"]')
          .addClass('active')
          .siblings()
          .removeClass('active');
    },
    anchor: function() {
      var e = page.getParam('section', window.location.href);
      if (e) {
        var t = $('#' + e).offset().top;
        wW > 1024
          ? TweenLite.to(window, 0.8, {
              scrollTo: {
                y: t - 80,
                autoKill: !1
              },
              ease: Cubic.easeInOut
            })
          : TweenLite.to('#xhr', 0.8, {
              scrollTo: {
                y: t - 60,
                autoKill: !1
              },
              ease: Power2.easeInOut
            });
      }
    },
    getParam: function(e, t) {
      e = e.replace(/[\[\]]/g, '\\$&');
      var i = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
      return i
        ? i[2]
          ? decodeURIComponent(i[2].replace(/\+/g, ' '))
          : ''
        : null;
    }
  },
  pagging = {
    init: function() {
      var e = $('.wp-pagenavi .pages').text();
      if (($('.an-nowmax').text(e), $('.previouspostslink').length)) {
        var t = $('.previouspostslink').attr('href');
        $('.an-newer').attr({
          href: t
        });
      } else $('.an-newer').addClass('diseble');
      if ($('.nextpostslink').length) {
        var i = $('.nextpostslink').attr('href');
        $('.an-older').attr({
          href: i
        });
      } else $('.an-older').addClass('diseble');
      $('.previouspostslink').length ||
        $('.nextpostslink').length ||
        $('.an-pagging').addClass('diseble');
    }
  },
  news = {
    ishover: !1,
    gitter: 20,
    init: function() {
      var e = this;
      e.onResize(),
        $('.ns-line-hover').off('mouseenter mouseleave'),
        $('.ns-line-hover').on({
          mouseenter: function(t) {
            if (!(isMobile.any || wW <= 1024)) {
              e.onResize();
              var i = $(this),
                n = i.find('.ns-title .t'),
                o = n.html(),
                s = o + ' | ',
                a = (i.find('.ns-date').width(),
                i.find('.ns-line-cat').width(),
                i.find('.ns-title .t').width() + 5),
                l = i.find('.ns-title').width();
              if (l < a) {
                var r = s + s;
                n.data('keep', o).html(r);
                var d = (h = a - l) / 80,
                  c = 2 * a - l,
                  p = d * ((c - h) / h);
                TweenLite.to(n, d, {
                  x: -h,
                  ease: Power0.easeNone,
                  onComplete: function() {
                    TweenMax.to(n, p, {
                      x: -c,
                      ease: Power0.easeNone,
                      repeat: -1
                    });
                  }
                });
              }
              var h = t.clientX - $('.ns-wrap').offset().left,
                u = t.clientY - $('.ns-wrap').offset().top + wT;
              e.ishover = !0;
              var f = $('.ns-line-thumb')
                .find('.js-bg')
                .eq(i.parents('.ns-line').index());
              f.is('.no-thumb')
                ? ($html.removeClass('is-ns-enter'),
                  $('.ns-line-thumb')
                    .find('.js-bg')
                    .removeClass('active'))
                : ($html.addClass('is-ns-enter'),
                  f.addClass('active'),
                  TweenLite.set('.ns-line-thumb', {
                    left: h,
                    top: u
                  }));
            }
          },
          mousemove: function(t) {
            if (!(isMobile.any || wW <= 1024)) {
              var i = $(this),
                n = t.clientX - $('.ns-wrap').offset().left,
                o = t.clientY - $('.ns-wrap').offset().top + wT;
              e.ishover = !0;
              var s = $('.ns-line-thumb')
                .find('.js-bg')
                .eq(i.parents('.ns-line').index());
              s.is('.no-thumb')
                ? ($html.removeClass('is-ns-enter'),
                  $('.ns-line-thumb')
                    .find('.js-bg')
                    .removeClass('active'))
                : ($html.addClass('is-ns-enter'),
                  s.addClass('active'),
                  TweenLite.set('.ns-line-thumb', {
                    left: n,
                    top: o
                  }));
            }
          },
          mouseleave: function() {
            if (!(isMobile.any || wW <= 1024)) {
              var t = $(this);
              TweenLite.to(t.find('.ns-title .t'), 0.6, {
                x: 0,
                ease: Power2.easeOut
              }),
                (e.ishover = !1),
                $html.removeClass('is-ns-enter'),
                $('.ns-line-thumb')
                  .find('.js-bg')
                  .removeClass('active');
              var i = t.find('.ns-title .t').data('keep');
              t.find('.ns-title .t').html(i);
            }
          }
        });
    },
    onResize: function() {
      if (!(isMobile.any || wW <= 1024)) {
        var e = this;
        $('.ns-line').each(function(t, i) {
          var n = $(i),
            o = n.find('.ns-date').width(),
            s = n.find('.ns-line-cat').width(),
            a = n.find('.ns-title .t').width(),
            l = n.width() - 2 * o - 2 * s;
          l < a
            ? n.find('.ns-title').css({
                width: l - e.gitter
              })
            : n.find('.ns-title').css({
                width: a + e.gitter
              });
        });
      }
    }
  },
  newsTween = !1;
$(document).on(
  {
    click: function(e) {
      var t = $(this).parents('.bd-section');
      t.is('.active') ? t.removeClass('active') : t.addClass('active'),
        normalScroll.onResize();
    }
  },
  '.fw-close-all'
),
  $(document).on(
    {
      click: function() {
        var e = $(this).parents('.fw-s');
        e.is('.active') ? e.removeClass('active') : e.addClass('active'),
          normalScroll.onResize();
      }
    },
    '.fw-close-child'
  ),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault();
        var t = $($(this).attr('href')).offset().top;
        wW > 1024
          ? TweenLite.to(window, 0.5, {
              scrollTo: {
                y: t - 80,
                autoKill: !1
              },
              ease: Power2.easeInOut
            })
          : ((wTmobile = $('#xhr').scrollTop()),
            TweenLite.to('#xhr', 0.5, {
              scrollTo: {
                y: t + wTmobile - 60,
                autoKill: !1
              },
              ease: Power2.easeInOut
            }));
      }
    },
    '.anchor-to'
  ),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault(),
          wW > 1024
            ? TweenLite.to(window, 0.5, {
                scrollTo: {
                  y: 0,
                  autoKill: !1
                },
                ease: Power2.easeInOut
              })
            : TweenLite.to('#xhr', 0.5, {
                scrollTo: {
                  y: 0,
                  autoKill: !1
                },
                ease: Power2.easeInOut
              });
      }
    },
    '.anchor-to-top'
  ),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault(),
          wW > 1024
            ? TweenLite.to(window, 0.5, {
                scrollTo: {
                  y: wH - 80,
                  autoKill: !1
                },
                ease: Power2.easeInOut
              })
            : TweenLite.to('#xhr', 0.5, {
                scrollTo: {
                  y: wH - 60,
                  autoKill: !1
                },
                ease: Power2.easeInOut
              });
      }
    },
    '.anchor-to-bottom'
  ),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault();
        var t = $(this);
        if (!t.is('.active')) {
          var i = t.data('lang');
          TweenLite.to($('.xhr-body'), 0.4, {
            alpha: 0,
            ease: Sine.easeInOut,
            onComplete: function() {
              if ('ja' != i) history.replaceState('', '', '?lang=' + i);
              else {
                var e = location.href.replace(/\?.*$/, '');
                history.replaceState('', '', e);
              }
              $html
                .removeClass(function(e, t) {
                  return (t.match(/\bis-lang-\S+/g) || []).join(' ');
                })
                .addClass('is-lang-' + i),
                t
                  .addClass('active')
                  .siblings('a')
                  .removeClass('active'),
                TweenLite.to($('.xhr-body'), 0.4, {
                  alpha: 1,
                  ease: Sine.easeInOut
                });
            }
          });
        }
      }
    },
    '.js-lang-switch'
  ),
  $(document).on('click', '.js-share-fb', function(e) {
    e.preventDefault();
    $('head title').text();
    var t = 'http://www.facebook.com/share.php?u=' + encodeURI(location.href);
    window.open(
      t,
      'facebook',
      'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'
    );
  }),
  $(document).on('click', '.js-share-tw', function(e) {
    e.preventDefault();
    var t = fixedEncodeURIComponent($('head title').text()),
      i = fixedEncodeURIComponent(location.href),
      n =
        'http://twitter.com/share?count=horizontal&original_referer=' +
        i +
        '&text=' +
        t +
        '&url=' +
        i;
    window.open(
      n,
      'twitter',
      'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'
    );
  }),
  $(document).on('click', '.js-share-line', function(e) {
    e.preventDefault();
    var t =
      'http://line.me/R/msg/text/?' +
      $('head title').text() +
      '%0D%0A' +
      encodeURI(location.href);
    window.open(
      t,
      'line',
      'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'
    );
  });
var browser_nm,
  userAgent = window.navigator.userAgent,
  browserIE = !1;
(userAgent.match(/MSIE/) || userAgent.match(/Trident/)) && (browserIE = !0),
  browserIE
    ? $('html').addClass('is-ie')
    : userAgent.indexOf('Edge') > -1
    ? $('html').addClass('is-edge is-ie11')
    : userAgent.indexOf('Firefox') > -1
    ? $('html').addClass('is-firefox')
    : userAgent.indexOf('Chrome') > -1
    ? $('html').addClass('is-chrome')
    : userAgent.indexOf('Opera') > -1
    ? $('html').addClass('is-opera')
    : userAgent.indexOf('Safari') > -1
    ? $('html').addClass('is-safari')
    : $('html').addClass('is-other'),
  -1 != navigator.platform.indexOf('Win')
    ? $('html').addClass('is-win')
    : $('html').addClass('is-not-win');
var video = {
  ready: !1,
  options: {
    id: 'qKyJdBzfXYY',
    muted: !0,
    title: !1,
    width: 1280,
    height: 720,
    loop: !0
  },
  ratio: {
    w: 0,
    h: 0
  },
  timeupdate: null,
  scale: 1.1,
  once: function() {
    (this.ratio.w = this.options.width / this.options.height),
      (this.ratio.h = this.options.height / this.options.width);
  },
  init: function() {
    var e = this;
    e.player = new YT.Player('video-iframe', {
      width: wW,
      height: wH,
      videoId: e.options.id,
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 0,
        iv_load_policy: 3
      },
      events: {
        onReady: function() {
          e.player.mute(),
            e.player.playVideo(),
            (e.ready = !0),
            e.onResize(),
            clearInterval(e.timeupdate),
            (e.timeupdate = setInterval(function() {
              (e.current = e.player.getCurrentTime()),
                e.current > 59 && e.player.seekTo(0);
            }, 1e3)),
            TweenLite.to('.video-overlay', 1, {
              opacity: 0,
              delay: 1.3,
              ease: Power2.easeOut
            });
        },
        onStateChange: function(e) {}
      }
    });
  },
  onResize: function() {
    (this.width = wW * this.scale),
      (this.height = wW * this.scale * this.ratio.h),
      this.height < wH * this.scale &&
        ((this.height = wH * this.scale),
        (this.width = wH * this.scale * this.ratio.w)),
      $('#video-iframe').css({
        'margin-left': -this.width / 2,
        'margin-top': -this.height / 2,
        width: this.width,
        height: this.height
      });
  },
  onReset: function() {
    (this.ready = !1),
      clearInterval(this.timeupdate),
      this.player && (this.player.destroy(), (this.player = null));
  },
  initModal: function() {
    (this.$body = $('#video-modal-iframe')),
      (this.$bg = $('.video-modal-bg')),
      TweenLite.set(this.$body, {
        scale: 0.9,
        opacity: 0
      });
    this.modal = new YT.Player('video-modal-iframe', {
      width: wW,
      height: wH,
      videoId: this.options.id,
      playerVars: {
        autoplay: 0,
        controls: 1,
        loop: 1,
        showinfo: 0,
        rel: 0,
        fs: 0,
        modestbranding: 0,
        iv_load_policy: 3
      },
      events: {
        onReady: function() {}
      }
    });
  },
  isOpen: !1,
  onOpen: function() {
    var e = this;
    $html.addClass('is-video-modal-open'),
      e.modal.playVideo(),
      TweenLite.to('#video-modal-iframe', anim.pd.i.s, {
        scale: 1,
        opacity: 1,
        ease: anim.pd.i.e,
        onComplete: function() {
          e.isOpen = !0;
        }
      }),
      TweenLite.to(e.$bg, anim.pd.i.s, {
        opacity: 0.9,
        ease: anim.pd.i.e
      });
  },
  onClose: function() {
    var e = this;
    e.modal.stopVideo(),
      TweenLite.to('#video-modal-iframe', anim.pd.o.s, {
        scale: 0.9,
        opacity: 0,
        ease: anim.pd.o.e,
        onComplete: function() {
          $html.removeClass('is-video-modal-open'), (e.isOpen = !1);
        }
      }),
      TweenLite.to(e.$bg, anim.pd.o.s, {
        opacity: 0,
        ease: anim.pd.o.e
      });
  }
};
$(document).on(
  {
    click: function() {
      video.isOpen || video.onOpen();
    }
  },
  '.js-open-video-modal'
),
  $(document).on(
    {
      click: function() {
        video.isOpen && video.onClose();
      }
    },
    '.js-close-video-modal'
  ),
  requestAnimationFrame(raf);
var pulldownTimer,
  normalScroll = {
    body: {
      ty: 0,
      py: 0,
      ease: 0.2
    },
    para: {
      ty: 0,
      ease: 0.1,
      pow: 0.1,
      positions: []
    },
    text: {
      ty: 0,
      ease: 0.5,
      pow: 0.1,
      positions: []
    },
    ready: !1,
    init: function() {
      (this.$body = $('.scroll-body')),
        (this.$shadow = $('.scroll-shadow')),
        (this.$para = $('.js-para')),
        (this.$ta = $('.ta-o')),
        this.onResize(),
        (this.ready = !0);
    },
    fixedElement: function() {
      !isMobile.any || wW > 1024
        ? (wT <= wH / 2 && 'home' === page.name
            ? TweenLite.to($header, 0.3, {
                y: '-100%'
              })
            : TweenLite.to($header, 0.3, {
                y: '0%'
              }),
          'home' !== page.name && 'brand' !== page.name
            ? TweenLite.to($lang, 0.3, {
                y: '200%',
                alpha: 0
              })
            : wT <= wH / 2 || wT >= this.scrollHeight - wH - fH
            ? TweenLite.to($lang, 0.3, {
                y: '200%',
                alpha: 1
              })
            : TweenLite.to($lang, 0.3, {
                y: '0%',
                alpha: 1
              }))
        : (this.body.ease = 0.25);
    },
    onResize: function() {
      var e = this;
      (e.scrollHeight = e.$body.outerHeight()),
        isMobile.any &&
          wW < wH &&
          $('#xhr').css({
            height: wH
          }),
        e.$shadow.css({
          height: e.scrollHeight
        }),
        isMobile.any &&
          wW > 1024 &&
          $('.window').css({
            height: wH
          }),
        (e.para.positions = []),
        e.$para.each(function(t, i) {
          var n = $(i).height() / 10,
            o = $(i).offset().top - wH / 2;
          e.para.positions.push({
            y: o,
            h: n
          });
        }),
        (e.text.positions = []),
        e.$ta.each(function(t, i) {
          var n = $(i).height() / 10,
            o = $(i).offset().top - wH / 2;
          e.text.positions.push({
            y: o,
            h: n
          });
        });
    },
    onScroll: function() {
      (!isMobile.any || wW > 1024) &&
        (wT <= wH / 2 && 'home' === page.name
          ? TweenLite.to($header, 0.3, {
              y: '-100%'
            })
          : TweenLite.to($header, 0.3, {
              y: '0%'
            }),
        'home' !== page.name && 'brand' !== page.name
          ? TweenLite.to($lang, 0.3, {
              y: '200%',
              alpha: 0
            })
          : wT <= wH / 2 || wT >= this.scrollHeight - wH - fH
          ? TweenLite.to($lang, 0.3, {
              y: '200%',
              alpha: 1
            })
          : TweenLite.to($lang, 0.3, {
              y: '0%',
              alpha: 1
            }));
    },
    onScrollFrame: function() {
      var e = this;
      (!isMobile.any || wW > 1024) &&
        // wT: window.top
        ((e.body.ty += (wT - e.body.ty) * e.body.ease),
        0.001 >= e.body.ty && (e.body.ty = 0),
        (e.body.py = Math.abs(e.body.ty / (e.scrollHeight - wH))),
        (e.$body[0].style.transform =
          'translate3d(0, -' + e.body.ty + 'px, 0)')),
        e.$para.each(function(t, i) {
          var n = $(i).height() / 10,
            o = $(i).offset().top - wH / 2;
          (e.para.positions[t].h = n), (e.para.positions[t].y = o);
        }),
        (e.para.ty += (wT - e.para.ty) * e.para.ease),
        0.001 >= e.para.ty && (e.para.ty = 0);
      for (var t = e.$para.length - 1; t >= 0; t--) {
        var i = e.$para[t].children[0],
          n = Math.floor((e.para.ty - e.para.positions[t].y) * e.para.pow);
        i.style.transform = 'translate3d(0, ' + n + 'px, 0)';
      }
      video.ready &&
        (document.getElementById('video-iframe').style.transform =
          'translate3d(0, ' + n + 'px, 0)'),
        e.$ta.each(function(t, i) {
          var n = $(i).height() / 10,
            o = $(i).offset().top - wH / 2;
          (e.text.positions[t].h = n), (e.text.positions[t].y = o);
        }),
        (e.text.ty += (wT - e.text.ty) * e.text.ease),
        0.001 >= e.text.ty && (e.text.ty = 0);
      for (t = e.$ta.length - 1; t >= 0; t--) {
        (i = e.$ta[t].children[0]),
          (n = Math.floor((e.text.ty - e.text.positions[t].y) * e.text.pow));
        i.style.transform = 'translate3d(0, ' + n + 'px, 0)';
      }
    },
    onReset: function() {
      (this.body.ty = 0),
        (this.body.py = 0),
        (this.para.ty = 0),
        (this.text.ty = 0);
    }
  },
  spring = {
    ready: !1,
    init: function() {
      isMobile.any ||
        ($('.js-spring').off('mouseenter mouseleave'),
        $('.js-spring').on({
          mouseenter: function() {
            spring.onMouseEnter(this);
          },
          mouseleave: function() {
            spring.onMouseLeave(this);
          }
        }));
    },
    onReset: function() {},
    onMouseEnter: function(e) {
      (this.ready = !0),
        (this.el = e),
        (this.$el = $(e)),
        (this.$spring = $(e).find('.js-spring-tgt')),
        (this.w = this.$el.width()),
        (this.h = this.$el.height()),
        cursor.onMouseLeave();
    },
    onMouseMove: function() {
      var e = this.el.getBoundingClientRect(),
        t = e.left,
        i = e.top;
      (this.tx = 2 * ((mouse.sx - t) / this.w - 0.5)),
        (this.ty = 2 * ((mouse.sy - i) / this.h - 0.5)),
        this.$spring.is('.js-spring-tgt-reverse')
          ? ((this.dx = (-180 * this.tx * Math.PI) / 180),
            (this.dy = (-180 * this.ty * Math.PI) / 180))
          : ((this.dx = (180 * this.tx * Math.PI) / 180),
            (this.dy = (180 * this.ty * Math.PI) / 180)),
        TweenLite.to(this.$spring, anim.sp.i.s, {
          rotation: this.dx + 'deg',
          x: 10 * this.dx + 'px',
          y: 10 * this.dy + 'px'
        });
    },
    onMouseLeave: function(e) {
      (this.ready = !1),
        TweenLite.to(this.$spring, anim.sp.o.s, {
          rotation: '0deg',
          x: '0px',
          y: '0px',
          ease: anim.sp.o.e
        });
    }
  },
  mfa = {
    ready: !1,
    timer: !1,
    active: 0,
    offset: {
      x: 20,
      y: 20
    },
    init: function() {
      (this.$body = $('.mfa')),
        (this.$label = $('.mfa-label span')),
        (this.ready = !0),
        this.$body.each(function(e, t) {
          var i = $(t).find('.mfa-t');
          TweenLite.set(i, {
            x: 20 * e,
            y: 20 * e
          });
        });
    },
    onMouseMove: function(e, t) {
      this.$body.each(function(e, t) {
        var i = $(t).find('.mfa-t');
        TweenLite.to(i, 0.3, {
          delay: 0.1 * e
        });
      }),
        (this.active = Math.floor(((mouse.sx / (wW / 2)) * 3 + 0.5) % 4)),
        this.$body.removeClass('active'),
        this.$body.eq(this.active).addClass('active');
    }
  },
  cursor = {
    ready: !1,
    init: function() {
      isMobile.any ||
        ($('.js-cursor-area').off('mouseenter mouseleave'),
        $('.js-cursor-area').on({
          mouseenter: function() {
            cursor.onMouseEnter(this);
          },
          mousemove: function() {
            cursor.onMouseEnter(this);
          },
          mouseleave: function() {
            cursor.onMouseLeave(this);
          }
        }));
    },
    onReset: function() {},
    onMouseEnter: function(e) {
      (this.ready = !0),
        (this.area = e),
        (this.$area = $(e)),
        (this.$cursor = $(e).find('.js-cursor')),
        (this.w = this.$cursor.width()),
        (this.h = this.$cursor.height());
      var t = this.$area.offset(),
        i = t.left,
        n = t.top;
      (this.tx = mouse.sx - i),
        (this.ty = mouse.sy - n + wT),
        TweenLite.set(this.$cursor, {
          rotation: '180deg',
          x: this.tx - this.w / 2 + 'px',
          y: this.ty - this.h / 2 + 'px'
        });
    },
    onMouseMove: function() {
      var e = this.$area.offset(),
        t = e.left,
        i = e.top;
      (this.tx = mouse.sx - t),
        (this.ty = mouse.sy - i + wT),
        TweenLite.to(this.$cursor, anim.sp.i.s, {
          rotation: '180deg',
          x: this.tx - this.w / 2 + 'px',
          y: this.ty - this.h / 2 + 'px',
          scale: 1,
          alpha: 1
        });
    },
    onMouseLeave: function(e) {
      (this.ready = !1),
        TweenLite.to(this.$cursor, anim.sp.o.s, {
          rotation: '180deg',
          scale: 0,
          alpha: 0,
          ease: anim.sp.o.e
        });
    }
  },
  panel = {
    init: function() {
      $('.pane-body a').off('mouseenter mouseleave'),
        $('.pane-body a').on({
          mouseenter: function() {
            $(this).addClass('active');
            $(this)
              .find('.col-prop .js-bg')
              .each(function(e, t) {
                TweenLite.set(t, {
                  opacity: 0,
                  y: '100%'
                }),
                  TweenLite.to(t, anim.col.i.s, {
                    opacity: 1,
                    delay: e * anim.col.i.d,
                    y: '0%',
                    ease: anim.col.i.e
                  });
              }),
              ($btn = $(this).find('.button-detail span')),
              $btn.each(function(e, t) {
                TweenLite.set(t, {
                  opacity: 0,
                  y: 30
                }),
                  TweenLite.to(t, anim.col.i.s, {
                    opacity: 1,
                    delay: e * anim.col.i.d,
                    y: 0,
                    ease: anim.col.i.e
                  });
              });
          },
          mouseleave: function() {
            $(this)
              .find('.col-prop .js-bg')
              .each(function(e, t) {
                TweenLite.to(t, anim.col.o.s, {
                  opacity: 0,
                  delay: e * anim.col.o.d,
                  y: '-100%',
                  ease: anim.col.o.e,
                  onComplete: function() {
                    TweenLite.set(this.target, {
                      opacity: 0,
                      y: '100%'
                    });
                  }
                });
              }),
              ($btn = $(this).find('.button-detail span')),
              $btn.each(function(e, t) {
                TweenLite.to(t, anim.col.o.s, {
                  opacity: 0,
                  delay: e * anim.col.o.d,
                  y: -30,
                  ease: anim.col.o.e,
                  onComplete: function() {
                    TweenLite.set(this.target, {
                      opacity: 0,
                      y: 30
                    });
                  }
                });
              });
          }
        });
    }
  },
  pulldown = {
    isOpen: !1,
    once: function() {
      (this.$body = $('.pulldown-body')),
        (this.$bg = $('.pulldown-bg')),
        TweenLite.set(this.$body, {
          y: 20,
          opacity: 0
        }),
        isMobile.any &&
          $('.pulldown-head').attr({
            href: '#'
          });
    },
    onOpen: function() {
      $html.addClass('is-pulldown-open'),
        $html.addClass('is-pulldown-open-before'),
        TweenLite.to(this.$body, anim.pd.i.s, {
          y: 0,
          x: '-50%',
          opacity: 1,
          ease: anim.pd.i.e
        }),
        this.$body.slideDown(150, function() {
          $('.header-products-body .js-ratio-by-w').each(function(e, t) {
            var i = $(t),
              n = i.data('ratio'),
              o = i.width() * n;
            i.css({
              height: o
            });
          });
        }),
        TweenLite.to(this.$bg, anim.pd.i.s, {
          opacity: 0.4,
          ease: anim.pd.i.e
        }),
        (this.isOpen = !0);
    },
    onClose: function() {
      var e = this;
      $html.removeClass('is-pulldown-open-before'),
        TweenLite.to(e.$body, anim.pd.o.s, {
          y: 30,
          x: '-50%',
          opacity: 0,
          ease: anim.pd.o.e,
          onComplete: function() {
            TweenLite.set(e.$body, {
              y: 20,
              opacity: 0
            }),
              $html.removeClass('is-pulldown-open'),
              (e.isOpen = !1);
          }
        }),
        e.$body.slideUp(150),
        TweenLite.to(e.$bg, anim.pd.o.s, {
          opacity: 0,
          ease: anim.pd.o.e
        });
    }
  };
$(document).on(
  {
    mouseenter: function() {
      pulldown.isOpen ||
        (pulldownTimer = setTimeout(function() {
          pulldown.onOpen();
        }, 150));
    },
    mouseleave: function() {
      clearTimeout(pulldownTimer), pulldown.isOpen && pulldown.onClose();
    },
    click: function(e) {}
  },
  '.pulldown-wrap'
),
  $(document).on(
    {
      mouseenter: function() {
        !isMobile.any && pulldown.isOpen && pulldown.onClose();
      },
      click: function(e) {
        isMobile.any &&
          pulldown.isOpen &&
          (e.preventDefault(), pulldown.onClose());
      }
    },
    '.pulldown-bg'
  ),
  $(document).on(
    {
      touchstart: function(e) {
        isMobile.any &&
          (e.preventDefault(),
          e.stopPropagation(),
          pulldown.isOpen ? pulldown.onClose() : pulldown.onOpen());
      }
    },
    '.pulldown-head'
  );
var cat = {
  isOpen: !1,
  tween: [],
  init: function() {
    (this.$li = $('.cat-pulldown-ul li')),
      TweenLite.set(this.$li, {
        y: 60,
        opacity: 0
      });
  },
  onOpen: function() {
    var e = this;
    if (e.tween)
      for (var t = e.tween.length - 1; t >= 0; t--) e.tween[t].kill();
    (e.isOpen = !0),
      $html.addClass('is-cat-open'),
      e.$li.each(function(t, i) {
        var n = TweenLite.to(i, anim.pd.i.s, {
          y: 0,
          opacity: 1,
          delay: 0.01 * t,
          ease: anim.pd.i.e
        });
        e.tween.push(n);
      });
  },
  onClose: function() {
    var e = this;
    (e.isOpen = !1),
      e.$li.each(function(t, i) {
        var n = TweenLite.to(i, anim.pd.i.s, {
          y: 30,
          opacity: 0,
          ease: anim.pd.o.e,
          onComplete: function() {
            TweenLite.set(this.target, {
              y: 60,
              opacity: 0
            }),
              $(this.target).is(':last-child') &&
                $html.removeClass('is-cat-open');
          }
        });
        e.tween.push(n);
      });
  }
};
$(document).on(
  {
    mouseenter: function() {
      cat.isOpen || cat.onOpen();
    },
    mouseleave: function() {
      cat.isOpen && cat.onClose();
    }
  },
  '.cat-pulldown-wrap'
);
var slide = {
    timer: !1,
    loop: 2500,
    init: function() {
      var e = this;
      (e.now = 0),
        (e.max = $('.js-slide-tgt').length),
        clearInterval(e.timer),
        (e.timer = setInterval(function() {
          e.now < e.max - 1 ? e.now++ : (e.now = 0),
            $('.js-slide-tgt').removeClass('active'),
            $('.js-slide-tgt')
              .eq(e.now)
              .addClass('active');
        }, e.loop));
    },
    onReset: function() {
      clearInterval(this.timer);
    }
  },
  singleSlider = {
    init: function() {
      (this.max = $('.sp-thumb-wrap .js-sp-slide-pool li').length),
        (this.now = 0),
        this.loadSlideBg();
    },
    onSlideTo: function(e, t) {
      (this.now = e),
        $(t)
          .siblings()
          .removeClass('active'),
        $(t).addClass('active'),
        $('.js-sp-slide-pool li').removeClass('active'),
        $('.js-sp-slide-pool li:nth-child(' + (this.now + 1) + ')').addClass(
          'active'
        ),
        this.loadSlideBg();
    },
    onSlideToNext: function() {
      this.now < this.max - 1 ? this.now++ : (this.now = 0),
        $('.js-sp-slide-pool li').removeClass('active'),
        $('.js-sp-slide-pool li:nth-child(' + (this.now + 1) + ')').addClass(
          'active'
        ),
        $('.js-sp-slide-cntrl li').removeClass('active'),
        $('.js-sp-slide-cntrl li:nth-child(' + (this.now + 1) + ')').addClass(
          'active'
        ),
        this.loadSlideBg();
    },
    onSlideToPrev: function() {
      this.now > 0 ? this.now-- : (this.now = this.max - 1),
        $('.js-sp-slide-pool li').removeClass('active'),
        $('.js-sp-slide-pool li:nth-child(' + (this.now + 1) + ')').addClass(
          'active'
        ),
        $('.js-sp-slide-cntrl li').removeClass('active'),
        $('.js-sp-slide-cntrl li:nth-child(' + (this.now + 1) + ')').addClass(
          'active'
        ),
        this.loadSlideBg();
    },
    loadSlideBg: function() {
      $('.active .js-slide-bg').each(function(e, t) {
        var i = $(t),
          n = i.data('src');
        if (void 0 === n) i.addClass('is-bg-loaded');
        else {
          if (isMobile.phone || wW <= 740) var o = n.mb;
          else if (isMobile.tablet) o = n.d1x;
          else if (DEVICE_RATIO >= 1.5) o = n.d2x;
          else o = n.d1x;
          i.find('.js-bg-img').css({
            'background-image': 'url(' + o + ')'
          });
          var s = new Image();
          (s.onload = function() {
            i.addClass('is-bg-loaded');
          }),
            (s.src = o);
        }
      });
    }
  };
$(document).on(
  {
    click: function() {
      var e = $(this).index();
      singleSlider.onSlideTo(e, this);
    }
  },
  '.js-sp-slide-cntrl li'
),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault(), singleSlider.onSlideToNext();
      }
    },
    '.js-sp-slide-to-next'
  ),
  $(document).on(
    {
      click: function(e) {
        e.preventDefault(), singleSlider.onSlideToPrev();
      }
    },
    '.js-sp-slide-to-prev'
  );
var swipeDir, swipePos;
$(document).on(
  {
    touchstart: function(e) {
      (swipePos = getPosition(e)), (swipeDir = '');
    },
    touchmove: function(e) {
      swipePos - getPosition(e) > 70
        ? (swipeDir = 'left')
        : swipePos - getPosition(e) < -70 && (swipeDir = 'right');
    },
    touchend: function(e) {
      'right' == swipeDir
        ? singleSlider.onSlideToPrev()
        : 'left' == swipeDir && singleSlider.onSlideToNext();
    }
  },
  '.js-sp-slide-pool'
);
var form = {
  unit: 'MB',
  bit: 1e6,
  file: {
    xls: {
      name: 'エクセルファイル',
      extension: ['xlsx', 'xls', 'csv'],
      mine: [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv'
      ],
      filesize: 0,
      enable: !0,
      maxsize: 4e6
    },
    ai: {
      name: 'illustratorファイル',
      extension: ['ai'],
      mine: ['application/postscript'],
      filesize: 0,
      enable: !0,
      maxsize: 4e6
    }
  },
  isChecked: !1,
  init: function() {
    this.initSpamCheck(), this.canIsubmit();
  },
  canIsubmit: function() {
    $('.form-confirm').length ||
      $('.post-password-form').length ||
      ($('input[type="submit"]')
        .prop('disabled', !0)
        .addClass('is-disabled'),
      this.isChecked &&
        $('input[type="submit"]')
          .prop('disabled', !1)
          .removeClass('is-disabled'));
  },
  initSpamCheck: function() {
    (this.isChecked = $('.fm-check-in input[type="checkbox"]').is(':checked')),
      this.isChecked && $('.fm-check-in').addClass('active');
  },
  initFileCheck: function() {
    var e = this;
    $('.fm-flie').each(function(t, i) {
      for (
        var n = $(i),
          o = n.find('input'),
          s = n.find('.fm-file-size'),
          a = n.find('.fm-file-max-size'),
          l = n.find('.fm-file-name'),
          r = e.file[n.data('type')],
          d = '',
          c = r.extension.length - 1;
        c >= 0;
        c--
      )
        d = d + '.' + r.extension[c] + ', ';
      o.attr({
        accept: d
      }),
        a.text(r.maxsize / e.bit + e.unit),
        l.text(r.name),
        o.off('change'),
        o.on('change', function() {
          var t = this.files[0];
          if (void 0 === t) {
            (r.enable = !0), n.removeClass('file-error'), l.text(r.name);
            var i = 0;
          } else {
            i = roundFloat(t.size / e.bit, 2);
            var o = getExtention(t.name);
            if (r.mine.indexOf(t.type) >= 0 && r.extension.indexOf(o) >= 0) {
              if (null != t)
                t.size < r.maxsize
                  ? ((r.enable = !0),
                    n.removeClass('file-error'),
                    l.text(t.name))
                  : ((r.enable = !1),
                    n.addClass('file-error'),
                    l.text('ファイルサイズが大きすぎます。'));
              else {
                (r.enable = !0), n.removeClass('file-error'), l.text(r.name);
                i = 0;
              }
              TweenLite.to(r, 0.4, {
                filesize: i,
                ease: Power2.easeOut,
                onUpdate: function() {
                  var t = roundFloat(r.filesize, 2) + e.unit;
                  s.text(t);
                }
              });
            } else
              (r.enable = !1),
                n.addClass('file-error'),
                l.text(r.name + 'ではありません。'),
                s.text('0' + e.unit);
          }
          form.canIsubmit();
        });
    });
  }
};
$(document).on(
  {
    change: function() {
      (form.isChecked = $(this).is(':checked')),
        form.isChecked
          ? $('.fm-check-in').addClass('active')
          : $('.fm-check-in').removeClass('active'),
        form.canIsubmit();
    }
  },
  '.fm-check-in input[type="checkbox"]'
);
var center = new google.maps.LatLng(35.693918, 139.78436),
  gmap = {
    name: 'Newhattan',
    init: function() {
      var e = $('#map').data('pin');
      (this.stylez = [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#212121'
            }
          ]
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#212121'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e'
            }
          ]
        },
        {
          featureType: 'administrative.land_parcel',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#181818'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1b1b1b'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#2c2c2c'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8a8a8a'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#373737'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3c3c3c'
            }
          ]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4e4e4e'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3d3d3d'
            }
          ]
        }
      ]),
        (this.options = {
          zoom: 15,
          navigationControl: !1,
          mapTypeControl: !1,
          scaleControl: !1,
          scrollwheel: !1,
          streetViewControl: !1,
          zoomControl: !1,
          center: center,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, this.name]
          },
          mapTypeId: this.name
        }),
        (this.pin = {
          url: e,
          scaledSize: new google.maps.Size(45, 45)
        }),
        (this.canvas = new google.maps.Map(
          document.getElementById('map'),
          this.options
        )),
        (this.mapStyleOption = {
          name: 'maps'
        }),
        (this.mapStyle = new google.maps.StyledMapType(
          this.stylez,
          this.mapStyleOption
        )),
        this.canvas.mapTypes.set(this.name, this.mapStyle),
        (this.markerOpts = {
          position: center,
          map: this.canvas,
          icon: this.pin
        }),
        (this.marker = new google.maps.Marker(this.markerOpts)),
        google.maps.event.addListener(this.marker, 'click', cliclPin);
    }
  };
(Barba.Pjax.Dom.wrapperId = 'xhr'),
  (Barba.Pjax.Dom.containerClass = 'xhr-body');
var lastElementClicked,
  isGlobalLinkClicked = !1;
$(function() {
  Barba.Pjax.init(),
    Barba.Prefetch.init(),
    Barba.Dispatcher.on('linkClicked', function(e) {
      (lastElementClicked = e),
        $(e).is('.js-link-gnav') && (isGlobalLinkClicked = !0),
        (direction = 'forward');
    }),
    Barba.Dispatcher.on('initStateChange', function(e) {
      gtag('config', 'UA-123145882-1', {
        page_path: location.pathname
      });
    }),
    (ExpandTransition = Barba.BaseTransition.extend({
      start: function() {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(
          this.fadeIn.bind(this)
        );
      },
      fadeOut: function() {
        var e = Barba.Utils.deferred(),
          t = $(this.oldContainer);
        return PageTransition.fadeOut(t, e), e.promise;
      },
      fadeIn: function() {
        var e = $(this.oldContainer),
          t = $(this.newContainer);
        PageTransition.fadeIn(e, t, this);
      }
    })),
    (Barba.Pjax.getTransition = function() {
      return ExpandTransition;
    }),
    Barba.Dispatcher.on('newPageReady', function(e, t, i) {
      (history.scrollRestoration = 'manual'),
        (page.oldname = t.namespace),
        (page.name = e.namespace);
    }),
    Barba.Dispatcher.on('transitionCompleted', function() {});
});
var PageTransition = {
    onReset: function() {
      wW > 1024
        ? (window.scrollTo(0, 0),
          (windowTop = 0),
          TweenLite.to($(window), 0, {
            scrollTo: {
              y: 0,
              autoKill: !1
            }
          }))
        : (TweenLite.to('body,html', 0, {
            scrollTo: {
              y: 0,
              autoKill: !1
            }
          }),
          TweenLite.to('#xhr', 0, {
            scrollTo: {
              y: 0,
              autoKill: !1
            }
          })),
        slide.onReset(),
        normalScroll.onReset(),
        video.onReset(),
        spring.onReset(),
        cursor.onReset();
    },
    fadeOut: function(e, t) {
      $html.addClass('is-transition');
      menu.isopen && isMobile.any && menu.onClose(),
        cat.isOpen && cat.onClose(),
        pulldown.isOpen && pulldown.onClose(),
        TweenLite.to(e, anim.tr.o.s, {
          opacity: 0,
          ease: anim.tr.o.e,
          onComplete: function() {
            t.resolve();
          }
        });
    },
    fadeIn: function(e, t, i) {
      var n = this;
      n.onReset(),
        e.hide(),
        t.css({
          visibility: 'visible',
          opacity: 0
        }),
        TweenLite.set('.xhr-body', {
          y: 60
        }),
        TweenLite.to(t, anim.tr.o.s, {
          opacity: 1,
          top: 0,
          ease: anim.tr.o.e,
          onStart: function() {
            n.onStart();
          },
          onComplete: function() {
            n.onComplete();
          }
        }),
        TweenLite.to('.xhr-body', anim.tr.o.s, {
          y: 0
        }),
        i.done(),
        (isGlobalLinkClicked = !1);
    },
    onStart: function() {
      page.init(),
        page.onResize(),
        news.init(),
        page.onLoadImages(),
        normalScroll.init(),
        normalScroll.fixedElement(),
        cat.init(),
        singleSlider.init(),
        spring.init(),
        cursor.init(),
        panel.init(),
        form.init(),
        popupnews.init();
    },
    onComplete: function() {
      TweenLite.set($mask, {
        y: '0%'
      }),
        $html.removeClass('is-transition'),
        page.onLoad(),
        page.anchor(),
        $('a[href="' + window.location.href + '"]').addClass('no-barba');
    }
  },
  notfound = {
    interval: !1,
    init: function() {
      var e = this;
      (e.now = 0),
        (e.max = $('.nf404').children().length),
        clearInterval(e.interval),
        (e.interval = setInterval(function() {
          e.now < e.max - 1 ? e.now++ : (e.now = 0),
            $('.nf404')
              .children()
              .removeClass('active'),
            $('.nf404')
              .children()
              .eq(e.now)
              .addClass('active');
        }, 100));
    }
  },
  menu = {
    isopen: !1,
    onOpen: function() {
      var e = this;
      $html.addClass('is-menu-open'),
        TweenLite.to('.site-nav', 0.55, {
          x: '-100%',
          ease: Power2.easeInOut,
          onComplete: function() {
            e.isopen = !0;
          }
        }),
        TweenLite.to('.xhr-body', 0.5, {
          x: '-50%',
          ease: Power2.easeInOut
        });
    },
    onClose: function() {
      var e = this;
      $html.removeClass('is-menu-open'),
        TweenLite.to('.site-nav', 0.5, {
          x: '0%',
          ease: Power2.easeInOut,
          onComplete: function() {
            e.isopen = !1;
          }
        }),
        TweenLite.to('.xhr-body', 0.5, {
          x: '0%',
          ease: Power2.easeInOut
        });
    }
  };
$(document).on(
  {
    touchstart: function() {
      isMobile.any && (menu.isopen ? menu.onClose() : menu.onOpen());
    },
    click: function() {
      isMobile.any || (menu.isopen ? menu.onClose() : menu.onOpen());
    }
  },
  '.toggle'
),
  $(document).on(
    {
      change: function() {
        var e = $(this).val();
        Barba.Pjax.goTo(e);
      }
    },
    '.cat-pulldown-select'
  );
