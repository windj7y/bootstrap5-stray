const url = [
  {
    normal: 'dog01',
    hover: 'dog01-hover-1'
  },
  {
    normal: '04',
    hover: 'dog01-hover'
  },
  {
    normal: '08',
    hover: 'dog01-hover-2'
  },
  {
    normal: '06',
    hover: 'dog01-hover-1'
  },
  {
    normal: '07',
    hover: 'dog01-hover'
  },
  {
    normal: '05',
    hover: 'dog01-hover-2'
  }  
]

const cardHovers = document.querySelectorAll('.card-hover');
cardHovers.forEach((item, index) => {
  item.addEventListener('mouseover', function(e) {
    const img = item.querySelector('.card-img-top');
    img.src = `./images/${url[index].hover}.png`;
  });

  item.addEventListener('mouseout', function(e) {
    const img = item.querySelector('.card-img-top');
    img.src = `./images/${url[index].normal}.png`;
  });
});