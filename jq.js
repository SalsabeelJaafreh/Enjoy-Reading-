$('document').ready(function(){
 var $showBooks = $('#showBooks');
        //$showBooks.append('');

        var index = streams.books.length - 1;
        while(index >= 0){
          var book = streams.books[index];
          //var firstRow=$('<div class="row "></div>');
          //var firstCol=$('<div class="col-md-8 "></div>');
          //var secCol=$('<div class="col-md-4"></div>');
          var secRow=$('<div class="row"></div>');
          var thirdCol=$('<div class="col-xs-5 marg"></div>');
          var fourthCol=$('<div class="col-xs-3 marg"> </div>');
          var fifthCol=$('<div class="col-xs-4 marg"></div>');
          var image=$('<img src="' + streams.books[index].bookImage + '">');
          var data=$('<h3>'+ streams.books[index].bookTitle +'</h3><h5>'+streams.books[index].author +'<p>('+ streams.books[index].genres +')</p></h4><p>'+ streams.books[index].quote+'</p>')
          fifthCol.append(data);
          thirdCol.append(image);
          secRow.append(thirdCol);
          secRow.append(fourthCol);
          secRow.append(fifthCol);
          //firstCol.append(secRow);
		  //firstRow.append(firstCol);
		  //firstRow.append(secCol);
          $showBooks.append(secRow);
          index -= 1;
        }

});