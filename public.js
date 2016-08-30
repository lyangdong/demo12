/**
 * Created by liu on 2016/7/23.
 */


$(function(){
    //模拟数据
   var res = {
       "list":[
       {"money":"1110","time":"1"},
       {"money":"1160","time":"2"},
       {"money":"1200","time":"3"},
       {"money":"1360","time":"4"},
       {"money":"1440","time":"5"}
       ]
   };
    for(var i=0;i<5;i++){
        //设置节点横向坐标
        var strLeft = i*$('.time').width() + $('.time').width()/2-$('.option').width()/2;
        $('.point').eq(i).css('left',strLeft);

        //设置节点纵向坐标
        var strBottom = ( Number(res.list[i].money) - 1100)*3/5 + 60 - 8;
        $('.point').eq(i).css('bottom',strBottom);

       if(i<=3){
           //设置连接线长度
           var strBottom2 = ( Number(res.list[i + 1].money) - 1100) * 3 / 5 + 60 - 8;
           var dh = strBottom2 - strBottom;
           var tw = $('.time').width();
           var lh = Math.sqrt((tw * tw + dh * dh));

           //设置连线的角度
           var A = Math.acos(tw / lh) / Math.PI * 180;
           $('.outline').eq(i).css('transform', 'rotate(' + (270 - A) + 'deg)');

           //设置连线位子
           $('.outline').eq(i).css('height', 2 * lh);
           $('.outline').eq(i).css('bottom', lh - 4);
           $('.line').eq(i).css('height', lh + 2);
       }
    }
    //设置鼠标滑过效果
    $('.trend').mouseenter(function(){
        $('.point').css('width',12);
        $('.point').css('height',12);
        $('.line').css('width',3);
       for(var i=0;i<4;i++){
           var bottom_hover =  $('.outline').eq(i).css('bottom');
           var bottom_hover = bottom_hover.replace(/px/,'');
           $('.outline').eq(i).css('bottom',bottom_hover-3)
       }
    });
    $('.trend').mouseleave(function(){
        $('.point').css('width',8);
        $('.point').css('height',8);
        $('.line').css('width',2);
        for(var i=0;i<4;i++){
            var bottom_hover =  $('.outline').eq(i).css('bottom');
            var bottom_hover = Number(bottom_hover.replace(/px/,''))+3;
            $('.outline').eq(i).css('bottom',bottom_hover)
        }
    })
});