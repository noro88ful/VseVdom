$("._slick1").slick({slidesToShow:5,arrows:!1,dots:!1,infinite:!0,responsive:[{breakpoint:1400,settings:{slidesToShow:4}},{breakpoint:1160,settings:{slidesToShow:3}},{breakpoint:920,settings:{slidesToShow:2}},{breakpoint:620,settings:{slidesToShow:1}}]}),$(".brands-slider__arrow_prev").click((function(){$("._slick1").slick("slickPrev")})),$(".brands-slider__arrow_next").click((function(i){$("._slick1").slick("slickNext")})),$("._slick2").slick({slidesToShow:1,arrows:!1,dots:!1,infinite:!1,asNavFor:"._slick3"}),$("._slick3").slick({slidesToShow:5,arrows:!1,dots:!1,infinite:!1,vertical:!0,verticalSwiping:!0,asNavFor:"._slick2",responsive:[{breakpoint:653,settings:{vertical:!1,verticalSwiping:!1}},{breakpoint:540,settings:{vertical:!1,verticalSwiping:!1,slidesToShow:3}}]}),$(document).on("click",".left-top-product__subslide",(function(){var i=$(this).data("slick-index");$("._slick2").slick("slickGoTo",i)})),$("._slick4").slick({slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!0,infinite:!1,initialSlide:3,responsive:[{breakpoint:1400,settings:{slidesToShow:4}},{breakpoint:1160,settings:{slidesToShow:3}},{breakpoint:860,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]}),$(".bottom-product__arrow_prev").click((function(){$("._slick4").slick("slickPrev")})),$(".bottom-product__arrow_next").click((function(i){$("._slick4").slick("slickNext")}));