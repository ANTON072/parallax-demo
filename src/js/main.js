const body = {
  ty: 0,
  py: 0,
  ease: 0.2
};

const para = {
  ty: 0,
  ease: 0.1,
  pow: 0.1,
  positions: {
    y: $('.thumbnail-img').height(),
    h: $('.thumbnail-img').offset().top
  }
};

const scrollHeight = document.querySelector('body').offsetHeight;

console.log(scrollHeight);

const normalScroll = {
  ready: !1,
  onScrollFrame: () => {
    const wT = window.pageYOffset;
    body.ty += (wT - body.ty) * body.ease;
    body.py = Math.abs(body.ty / (scrollHeight - window.innerHeight));
    document.querySelector('#app-root').style.transform =
      'translate3d(0, -' + body.ty + 'px, 0)';

    const $p = $('.thumbnail-img');
    const n = $p.height() / 10;
    const o = $p.offset().top - window.innerHeight / 2;
    para.positions.h = n;
    para.positions.y = o;
    para.ty += (wT - para.ty) * para.ease;

    const nn = Math.floor((para.ty - para.positions.y) * para.pow);
    $p[0].style.transform = 'translate3d(0, ' + nn + 'px, 0)';
    // para.ty =
    // console.log('scroll', window.innerHeight, body.innerHeight);
  }
};

function raf() {
  requestAnimationFrame(raf);
  normalScroll.onScrollFrame();
}

raf();
