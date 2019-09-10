$('body').on('click', '*[ys-event]', function (e) {
    var othis = $(this), methid = othis.attr('ys-event');
    events[methid] ? events[methid].apply(this, [othis, e]) : '';
});

// 事件表里面存放动作

var events = {
    detail: function (othis, e) {
        console.log('详情');
    }
};