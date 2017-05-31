var gnb = {
    el: '',
    head: {
        set: {
            head: '.header_inner',
            list: '.h_nav',
        },
        get: {
            mobbtn: 'mob_btn',
            dimm: 'dimm'
        },
    },
    breakpoint: '',
    init: function (el) {
        this.el = el;
        this.set();
    },
    set: function () {
        this.get();
        this.bind();
    },
    get: function () {
        var headset = this.head.set;
        var headget = this.head.get;
        $(headset.head).append('<a href="#" class="' + headget.mobbtn + ' mobBtn" title="메뉴열기"><span></span><span></span><span></span></a>');
        $(headset.head).append('<div class="' + headget.dimm + '"></div>');
    },
    bind: function () {
        var _this = this;
        $('.' + _this.head.get.mobbtn).off().on({
            'click': function () {
                _this.motion(true);
            },
        });
        $('.' + _this.head.get.dimm).off().on({
            'click touchmove touchstart': function () {
                _this.motion(false);
            },
        });
    },
    motion: function (bool) {
        var $nav = $(this.head.set.list);
        var $dimm = $('.' + this.head.get.dimm);
        if (bool) {
            $nav.stop().animate({
                'right': 0
            });
            $dimm.show().stop().animate({
                'opacity': .65
            });
        } else {
            $nav.stop().animate({
                'right': '-100%'
            });
            $dimm.stop().animate({
                'opacity': 0
            }, {
                complete: function () {
                    $(this).hide();
                }
            });
        }
    },
};

