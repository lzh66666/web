
$(function(){
    var dc_left=$(".previous");
    var dc_right=$(".next");
    var dc_img=$(".dc_carousel_img li");
    var dc_point=$(".dc_carousel_point li");

    var dc_w=[],dc_h=[],dc_t=[],dc_l=[],dc_o=[],dc_z=[];//这里用了不少数组，其实可以存成一个对象，代码看起来会更好看一些。
    function slide(flag){
        //存样式（属性）
        dc_img.each(function(i){
            dc_w[i]=$(this).css("width");
            dc_h[i]=$(this).css("height");
            dc_t[i]=$(this).css("top");
            dc_l[i]=$(this).css("left");
            dc_o[i]=$(this).css("opacity");
            dc_z[i]=$(this).css("zIndex");
        });
        //取样式（属性）
        dc_img.each(function(i){
            if(flag){
                var a=i+1;
                a%=dc_img.length;//有的人应该喜欢写成a>=dc_img.length?a=0:null;吧？嘿嘿，你看哪个简单？只是js毕竟只是一门10天创造出来的语言，对数据类型的定义比较不严谨，
                                 //其实不仅仅取余，异或，同或等等在数据的处理上也有很大的妙用，这里算小试牛刀了。
            }
            else{
                var a=i-1;
                a<0?a=dc_img.length-1:a;
            }
            $(this).css("zIndex",dc_z[a]).animate({
                width:dc_w[a],
                height:dc_h[a],
                left:dc_l[a],
                top:dc_t[a],
                opacity:dc_o[a]
            },400);
        })
    }
    var time=setInterval(function(){
        slide(1);
    },2000);
});