
// 在对象的函数中也需要返回值
var obj={
    init:function(){
        // this.small_pic=document.getElementsByClassName(".small_pic")
         this.small_pic=this.$(".small_pic"); //左侧的图片
         this.slider=this.$(".slider"); //滑块
         this.big_pic=this.$(".big_pic");  //右侧BOX
         this.big_img=this.$(".big_img") ;
         this.move();
         this.leave();
    },
    $:function(name){
      return  document.querySelector(name);
     },
   mousehover:function(e){
        var x,y; 
        console.log(this,e)
        var e = e||window.event; 
        x = e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
        y = e.clientY+document.body.scrollTop+document.documentElement.scrollTop;        
    return {x,y};
    },
    move:function(){
        console.log(this.small_pic)   // 一直报错的原因是没有返回值
        // onmousemove 不能执行的原因  
        // 为什么进不去了
        this.small_pic.onmousemove= (event) =>{
            // 1获取鼠标的像素点
            console.log(1111)
             var x=obj.mousehover(event).x;
             var y=obj.mousehover(event).y;
            // var x=e.clientX.mousehover(e).x;
            // var y=obj.mousehover(e).y;
            console.log(x,y)
            this.slider.style.display="block";
            this.big_pic.style.display="block";
            // 获取滑块的高度和宽度
            left=event.clientX-this.slider.offsetWidth/2;
            console.log(event.clientY-this.slider.offsetHeight/2);
            topa=event.clientY-this.slider.offsetHeight/2;
            console.log(topa);
            sliderwidth=this.small_pic.offsetWidth-this.slider.offsetWidth;
            sliderheight=this.small_pic.offsetHeight-this.slider.offsetHeight;
            console.log(topa);   
            console.log(left,topa)   
            // 移动的范围要规定好
            if(left<0){
                left=0
            }else if(left>sliderwidth){
                left=sliderwidth;
            }
            if(topa<0){
              topa=0
          }else if(topa>sliderheight){
              topa=sliderheight;
          }
      // 设置滑块的topa left
            this.slider.style.left=left+'px';
            this.slider.style.top = topa +'px';
      // 设置出现对应的放大效果  根据滑块小图，扩大调节大图片的left和top
            this.big_img.style.left=-(2*left)+'px';
            this.big_img.style.top=-(2*topa)+'px';
        };
},
    
   leave:function(){
      this.small_pic.onmouseleave=()=>{
        this.slider.style.display="none";
        this.big_pic.style.display="none";
      };
   }
}
window.onload = function(){
    obj.init();
}


