const titleScroll = () => {
  let start = 1000;
  let speed = 250;

  window.addEventListener('load', () => {
    let title = document.title + ' /// ';
    let i = 0;

    setTimeout(function () {
      setInterval(function () {
        document.title = title.substr(i, title.length) + title.substr(0, i);
        i = (i + 1) % title.length;
      }, speed);
    }, start);
  });
};

export default titleScroll;
