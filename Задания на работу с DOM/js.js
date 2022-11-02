'use strict'

document.write('<table>')
for (var i = 0; i <= 10; i++) {
    document.write('<tr>')
    for (var j = 1; j <= 10; j++) {
        if (j === 1) {
          if (i != 0) {
            document.write('<td class = "text2">' + i + '</td>');
          } else {
            document.write('<td class = "text2">' + ' ' + '</td>');
          }
        }
        if (i === 0){ 
            document.write('<td class = "text2">' + j + '</td>');
        }
        if (i != 0) {
            if (i == j) {
                document.write('<td class = "text t2">' + i*j + '</td>')
            } else {
                document.write('<td class = "text">' + i*j + '</td>')
            }
        }
    }
    document.write('</tr>')
}
document.write('</table>')

document.write('<br>')


let listMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    
(function () {
    var d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDate();
    let lastDay =  new Date(year, month+1, 0).getDate()
    let dayLastMonth = new Date(year, month, 0).getDate()
    let weekLastMonth = new Date(year, month, 0).getDay() 
  
    document.write(listMonth[month] + " " + year)
  
    document.write('<table class = "calendar">')

    document.write('<tr>')
    for (var i = 0; i < Object.keys(week).length; i++) {
      document.write('<td>' + week[i] + '</td>')
    }
    document.write('</tr>')

    document.write('<tr>')
    var i=1;
    while(i <= lastDay){
      var startWeek = new Date(year, month, i).getDay();
      if ( startWeek === 1 ) {
        document.write('<tr>');
      }
      else if ( i == 1 ) {
        document.write('<tr>');
        var k = dayLastMonth - weekLastMonth + 1;
        for(let j = weekLastMonth; j > 0; j--) {
          document.write('<td class = "last">' + k + '</td>');
          k++;
        }
      }
      if (i == day) {
        document.write('<td class="today">' + i + '</td>');
      } else {
        document.write('<td>' + i + '</td>');
      }
      if ( startWeek == 0 ) {
        document.write('</tr>');
      }
      else if ( i == lastDay ) {
        var k=1;
        for(startWeek; startWeek < 7; startWeek++) {
          document.write('<td class = "last">' + k + '</td>');
          k++;
        }
      }
      i++;
    };
    document.write('</tr>')
  
    document.write('</table>')
  
  })();
  
