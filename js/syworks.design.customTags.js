$.fn.extend({
    'customTags': function () {
        var $this = $(this);
        $this.find('table, ul , dl, ol').each(function () {
            if ($(this).is('ul')) {
                $(this).find('li:first').addClass('first');
                $(this).find('li:last').addClass('last');
            }
        });
        /* 셀렉트 */
        ;
        (function ($) {
            var customSelectWrap = 'customSelectWrap';
            var $html = '<div class="' + customSelectWrap + '"></div>';
            var $span = '<div class="virSelect"><span class="virSelectTxt"></span><span class="attacSelect"></span></div>';
            var $selectValRetuFun = function ($this) {
                var $thisVal = $this.find('option:selected').text();
                var $thisSpan = $this.closest('.' + customSelectWrap).find('.virSelectTxt');
                $thisSpan.text($thisVal);
            };
            $this.find('select').each(function () {
                if ($(this).closest('label').length == 0) {
                    $(this).wrap($html);
                    $(this).closest('.' + customSelectWrap).append($span);
                }
                $selectValRetuFun($(this));
            });
            $this.find('select').change(function () {
                $selectValRetuFun($(this));
            });
        })(jQuery);
        /* fakfile */
        var fakFileVal = function ($this) {
            var $thisVal = $this.val();
            var fak = $thisVal.lastIndexOf('\\') + 1;
            var txt = $thisVal != '' ? $thisVal.substring(fak, $thisVal.length) : '<span>파일을 등록해주세요.</span>';
            var $input = $this.closest('.fakFile').find('.fkf_input');
            $input.html(txt);
        };
        $this.find('.fakFile input[type="file"]').on({
            'change': function (e) {
                fakFileVal($(this));
            },
        });
        $this.find('.fakFile input[type="file"]').each(function () {
            fakFileVal($(this));
        });
        /** 가변 테이블 - 희재 */
        $this.find('.ul_respon').each(function () {
            if ($this.find('body').attr('page-index') != '') {
                var pageIdx = $this.find('body').attr('page-index');
                $(this).addClass(pageIdx);
            }
            var colgroup = $(this).find('.colgroup');
            var responGroup = function (res, $this, dir) {
                var $thisIdx = $this.index();
                $this.closest('.ul_respon').find('.thead > ul,.tbody > ul').each(function () {
                    var $thisLiIdx = $(this).find('>li:eq(' + $thisIdx + ')');
                    $thisLiIdx.hide();
                    switch (dir) {
                    case 'next':
                        break;
                    }
                });
            };
            if ($(this).find('.thead').length != 0) {
                var _this = $(this).find('.thead > ul > li');
                var _thisEl = $(this).find('.tbody > ul > li');
            }
            $(this).find('.thead > ul >li,.tbody > ul>li').each(function () {
                var $this = $(this);
                var $thisIdx = $this.index();
                var $thisTxt = $this.text();
                var dir;
                $this.addClass('li_index' + $thisIdx);
                switch ($thisTxt) {
                case '�쒕ぉ1':
                    dir = 'next';
                    responGroup(1, $this, dir);
                    break;
                }
            });
            var colgWidth = function () {
                var col = [];
                colgroup.find('.col').each(function () {
                    var $thisColWidth = Number($(this).text());
                    var $thisColIndex = $(this).index();
                    col.push([
                        $thisColIndex, $thisColWidth
                    ]);
                });
                return col;
            };
            if ($(this).find('.lhead').length != 0) {
                $(this).find('ul').each(function () {
                    $(this).find('li:even').addClass('thead');
                    $(this).find('li:odd').addClass('tbody');
                });
            }
            for (var i = 0; i < $(this).find('.thead > ul,.tbody > ul').length; i++) {
                $(this).find('.thead > ul:eq(' + i + ')>li,.tbody > ul:eq(' + i + ')>li').each(function () {
                    if (!$(this).closest('.ul_respon').is('.thumb')) {
                        $(this).addClass('li_respon').wrapInner('<div class="inner_txt"></div>');
                    }
                });
                for (var z = 0; z < colgWidth().length; z++) {
                    $(this).find('.thead > ul:eq(' + i + ') li:eq(' + colgWidth()[z][0] + '), .tbody > ul:eq(' + i + ') li:eq(' + colgWidth()[z][0] + ')').addClass('w' + colgWidth()[z][1]);
                }
            }
            if ($(this).find('.colspan').length != 0) {
                $(this).find('.colspan').each(function () {
                    var colspanIdx = $(this).index();
                    var colgroup = $(this).closest('.ul_respon').find('.colgroup');
                    var colSlice = colgroup.find('.col').slice(colspanIdx, colgroup.find('.col').length);
                    var addWidth = 0;
                    colSlice.each(function () {
                        addWidth += Number($(this).text());
                    });
                    $(this).addClass('w' + addWidth);
                });
            }
        });
        if ($this.find('.ul_respon li').is('.wNaN')) {
            var colw = [];
            var addCol = null;
            $this.find('.ul_respon .colgroup .col').each(function (idx) {
                colw.push(Number($(this).text()));
                if (isNaN(colw[idx])) {
                    colw[idx] = 0;
                }
                addCol += colw[idx];
            });
            addCol = 100 - addCol;
            $this.find('.wNaN').removeClass('.wNaN').addClass('w' + addCol);
        };
        (function ($) {
            var $box = $this.find('.fixedAsideBox');
            var ajh = null;
            $(window).scroll(function () {
                ajh = function () {
                    if ($('.toolbar').is(':hidden')) {
                        return $('.header').outerHeight();
                    } else {
                        return $('.header').outerHeight() + $('.toolbar').outerHeight();
                    }
                };
                var $sct = $(this).scrollTop();
                if ($sct >= ajh()) {
                    $box.css({
                        'margin-top': $sct - ajh()
                    });
                } else {
                    $box.css({
                        'margin-top': 0
                    });
                }
            });
        })(jQuery);
        return $this;
    },
});

