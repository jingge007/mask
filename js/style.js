/**
 * Created by 敬哥 on 2017/7/10.
 */

$(function () {
    $(".content").mouseenter(function () {
        $(".main").animate({
            bottom: "0",
        }, 1000);
    }).mouseleave(function () {
        $(".main").animate({
            bottom: "-70%",
        }, 1000);
    })
});