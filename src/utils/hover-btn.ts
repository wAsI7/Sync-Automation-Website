import $ from "jquery";
import { gsap } from "gsap";

function hoverBtn() {
  $(".tp-hover-btn").on("mouseenter", function (e: any) {
    const offset = $(this).offset();
    if (!offset) return;
    
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;

    $(this).find(".tp-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });

  $(".tp-hover-btn").on("mouseout", function (e: any) {
    const offset = $(this).offset();
    if (!offset) return;
    
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;

    $(this).find(".tp-btn-circle-dot").css({
      top: y,
      left: x,
    });
  });

  const hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

  const hoverBtnItem: any = gsap.utils.toArray(".tp-hover-btn-item");
  hoverBtns.forEach((btn: any, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e: any) {
      parallaxIt(e, hoverBtnItem[i], 60);
    }

    function parallaxIt(e: any, target: any, movement: any) {
      const $this: any = $(btn);
      const offset = $this.offset();
      if (!offset) return;
      
      const relX = e.pageX - offset.left;
      const relY = e.pageY - offset.top;

      gsap.to(target, {
        duration: 1,
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: "power2.out",
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hoverBtnItem[i], {
        duration: 1,
        x: 0,
        y: 0,
        ease: "power2.out",
      });
    });
  });
}


export {
  hoverBtn,
}
