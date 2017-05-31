var mainGridHtml = {
    html: '',
    target: '.ppGrid',
    subTarget: '.pfLstParsArea',
    countNum: {
        total: '.totalSiteLeng',
        web: '.webSiteLeng',
        res: '.resSiteLeng',
        mob: '.mobSiteLeng'
    },
    //res,IE8++,js,cms,tmc,hyb
    items: [{
        img: '/images/pp_img11.jpg',
        subImgs: ['/images/pp_img11_01.jpg', '/images/pp_img11_02.jpg', '/images/pp_img11_03.jpg', '/images/pp_img11_04.jpg', '/images/pp_img11_05.jpg', '/images/pp_img11_06.jpg'],
        tit: '한의연-미병',
        subj: '이 어플리케이션은 일상 생활에서 사용자의 미병을 평가하고 관리방법을 제공하기 위한 한의학 기반 예방관리 프로그램입니다. 현재 등록된 어플리케이션은 임상연구 수행을 위한 버전으로, 일반 사용자가 활용할 때는 자료 또는 기능에 제한이 있습니다.',
        mode: 'js,hyb',
        href: 'https://play.google.com/store/apps/details?id=kr.re.kiom.mibyeong.app',
        chat: 55,
    }, {
        img: '/images/pp_img19.jpg',
        subImgs: ['/images/pp_img19_01.jpg'],
        tit: 'T&D소프트',
        subj: '',
        mode: 'js,IE8++',
        href: 'http://dev.tndsoft.com:8088/',
    }, {
        img: '/images/pp_img17.jpg',
        tit: '인플러스간호학원',
        subj: '이 어플리케이션은 일상 생활에서 사용자의 미병을 평가하고 관리방법을 제공하기 위한 한의학 기반 예방관리 프로그램입니다. 현재 등록된 어플리케이션은 임상연구 수행을 위한 버전으로, 일반 사용자가 활용할 때는 자료 또는 기능에 제한이 있습니다.',
        mode: 'IE9++',
        href: 'http://inplusnr.co.kr/',
        chat: 30,
    }, {
        img: '/images/pp_img14.jpg',
        subImgs: ['/images/pp_img14_01.jpg'],
        tit: 'MCARE_V1.0',
        subj: '부산대병원 진료&길찾기 앱은 부산대학교병원 내부를 어디든 쉽게 찾아갈 수 있는 길찾기 기능을 제공합니다. 또한 병원에 방문하시는 경우 필요한 원무과 번호표발급, 진료 대기순서 확인 및 수납후 가셔야할 곳을 확인할 수 있습니다. ',
        mode: 'cms,hyb,js',
        href: '개발 진행중..',
        chat: 99,
    }, {
        img: '/images/pp_img02.jpg',
        subImgs: ['/images/pp_img02_01.jpg'],
        tit: 'MCARE_V2.0',
        subj: '부산대병원 진료&길찾기 앱은 부산대학교병원 내부를 어디든 쉽게 찾아갈 수 있는 길찾기 기능을 제공합니다. 또한 병원에 방문하시는 경우 필요한 원무과 번호표발급, 진료 대기순서 확인 및 수납후 가셔야할 곳을 확인할 수 있습니다. ',
        mode: 'cms,hyb,js',
        href: '개발 진행중..',
        chat: 99,
    }, {
        img: '/images/pp_img15.jpg',
        subImgs: ['/images/pp_img15_01.jpg'],
        tit: 'MCARE_V3.0',
        subj: '부산대병원 진료&길찾기 앱은 부산대학교병원 내부를 어디든 쉽게 찾아갈 수 있는 길찾기 기능을 제공합니다. 또한 병원에 방문하시는 경우 필요한 원무과 번호표발급, 진료 대기순서 확인 및 수납후 가셔야할 곳을 확인할 수 있습니다. ',
        mode: 'cms,hyb,js',
        href: '개발 진행중..',
        chat: 99,
    }, {
        img: '/images/pp_img08.jpg',
        subImgs: ['/images/pp_img08_01.jpg', '/images/pp_img08_02.jpg', '/images/pp_img08_03.jpg'],
        tit: '이화여대-포트폴리오-PC',
        subj: 'THE포트폴리오는 이화여대의 전공, 교양, 비교과 체계를 중심으로 학생들의 학습 및 교내외 활동 등의 정보를 분석하여 맞춤형 학습활동 및 미래진로 설계를 지원하는 시스템입니다.',
        mode: 'ie9++,js',
        href: 'http://the.ewha.ac.kr/user/main.do',
        chat: 70,
    }, {
        img: '/images/pp_img10.jpg',
        tit: '이화여대-포트폴리오-MOB',
        subImgs: ['/images/pp_img10_01.jpg', '/images/pp_img10_02.jpg'],
        subj: '이화여자대학교 공식 앱입니다. 학교 주요 정보 및 교내 구성원이 사용할 수 있는 다양한 서비스를 제공합니다.',
        mode: 'res,js',
        href: 'http://the.ewha.ac.kr/m/user/main.do',
        chat: 70,
    }, {
        img: '/images/pp_img18.jpg',
        tit: '국토교통사이버안전센터',
        subj: '',
        mode: 'IE8++,js',
    }, {
        img: '/images/pp_img03.jpg',
        subImgs: ['/images/pp_img03_01.jpg', '/images/pp_img03_02.jpg'],
        tit: '강남대학교',
        subj: '밤과 낮 시간에 따라 배경이 변경되며 관리자 설정에 따라 비주얼 이미지를 동영상으로 변경하여 필요에 따라 임팩트 있는 메인 페이지 관리가 가능함상단과 하단을 다양한 UI로 사용자에게 제공할 수 있는것이 최대 장점.',
        mode: 'cms,IE8++,js,res',
        href: 'http://web.kangnam.ac.kr',
    }, {
        img: '/images/pp_img13.jpg',
        tit: '강남대학교-발전기금',
        subj: '밤과 낮 시간에 따라 배경이 변경되며 관리자 설정에 따라 비주얼 이미지를 동영상으로 변경하여 필요에 따라 임팩트 있는 메인 페이지 관리가 가능함상단과 하단을 다양한 UI로 사용자에게 제공할 수 있는것이 최대 장점.',
        mode: 'cms,IE8++,js,res',
        href: 'http://give.kangnam.ac.kr/',
        chat: 85,
    }, {
        img: '/images/pp_img04.jpg',
        tit: 'CMS-SYWORKS',
        subj: '',
        href: '접근불가한 사이트입니다.',
        mode: 'cms,IE8++,js'
    }, {
        img: '/images/pp_img16.jpg',
        tit: '금융연수원-MYKBI',
        subj: '한국 금융연수원 대표 웹사이트(PC/모바일), 용이한 학습컨텐츠 제공을 위한 시각화 및 금융 전문가 분야별 연수과정 로드맵 적용',
        mode: 'IE7++,js',
        href: 'http://www.kbi.or.kr'
    }, {
        img: '/images/pp_img09.jpg',
        subImgs: ['/images/pp_img09_01.jpg', '/images/pp_img09_02.jpg'],
        tit: '금융연수원-MOB',
        subj: '한국 금융연수원 대표 웹사이트(PC/모바일), 용이한 학습컨텐츠 제공을 위한 시각화 및 금융 전문가 분야별 연수과정 로드맵 적용',
        mode: 'IE7++,js,res',
        href: 'http://www.kbi.or.kr/home/Common.do?cmd=goIndex&mobile_yn=Y',
        chat: 80,
    }, {
        img: '/images/pp_img05.jpg',
        subImgs: ['/images/pp_img05_01.jpg', '/images/pp_img05_02.jpg', '/images/pp_img05_03.jpg'],
        tit: '금융연수원-PC',
        subj: '한국 금융연수원 대표 웹사이트(PC/모바일), 용이한 학습컨텐츠 제공을 위한 시각화 및 금융 전문가 분야별 연수과정 로드맵 적용',
        mode: 'IE7++,js',
        href: 'http://www.kbi.or.kr',
        chat: 50,
    }, {
        img: '/images/pp_img06.jpg',
        tit: 'WESS-현장실습시스템',
        subj: 'NCS기반의 현장실습지원시스템 국가직무능력표준의 모듈을 적용하여 현장실습을 진행하는 학생들이 NCS교육과정과 연계하여 현장실습을 진행할수 있습니다.',
        mode: 'ie9++',
        href: 'https://ipp.dongguk.edu/index.do'
    }, {
        img: '/images/pp_img07.jpg',
        tit: '해성산업',
        subj: '해성산업 관계사 소개, 해성그룹 계열사, 오피스 임대업, 부동산 전문기업',
        mode: 'IE8++',
        href: 'http://www.haesungind.co.kr/'
    }, {
        img: '/images/pp_img.jpg',
        subImgs: ['/images/pp_img_01.jpg', '/images/pp_img_02.jpg', '/images/pp_img_03.jpg', '/images/pp_img_04.jpg'],
        tit: '한라대학교-MOB',
        subj: '한라대학교의 Brand Identity를 나타낼 수 있도록 밝고 생동감 있는 디자인 적용하였으며, Hybrid앱 방식으로 개발하여 접근성 및 운영의 편리함까지 확보',
        mode: 'hyb,js',
        href: 'https://play.google.com/store/apps/details?id=kr.ac.halla.apps.hallamobile'
    }, {
        img: '/images/pp_img12.jpg',
        subImgs: ['/images/pp_img12_01.jpg', '/images/pp_img12_02.jpg'],
        tit: '단국대학교-MOB',
        subj: '단국대학교 공식 모바일 어플리케이션 본 단국대학교 앱은 정보화기획센터에서 학내 구성원을 대상으로 서비스하는 공식 앱으로, 로그인 이후 서비스 이용이 가능합니다.본 앱은 모바일Push알림서비스, 포털, 웹정보시스템, 취업, 이러닝, 도서관, 생활관 등의 서비스를 제공합니다.',
        mode: 'hyb,js',
        href: 'https://play.google.com/store/apps/details?id=com.sfactory.newdankook'
    }, ],
    set: function (obj) {
        var defaults = {
            maxlengh: 0,
        };
        var opt = $.extend(true, defaults, obj);
        var countNum = this.countNum;
        var totalNum = 0;
        var webNum = 0;
        var resNum = 0;
        var mobNum = 0;
        for (var i = 0; i < this.items.length; i++) {
            totalNum++;
            switch (this.items[i].mode) {
            case 'web':
                webNum++;
                break;
            case 'res':
                resNum++;
                break;
            case 'mob':
                mobNum++;
                break;
            }
            this.html += '<div class="item">';
            this.html += '<a href="/sub.html?pageNum=' + i + '">';
            this.html += '<div class="ppgr_inner">';
            this.html += '<span class="ppgr_img">';
            this.html += '<img src="' + this.items[i].img + '" alt="작업물이미지" />';
            this.html += '</span>';
            this.html += '<div class="ppgr_txts">';
            this.html += '<span class="ppgr_tit">' + this.items[i].tit + '</span>';
            if (opt.maxlengh) {
                var itemsSubj = this.items[i].subj;
                var sliceTxt = itemsSubj.slice(0, opt.maxlengh);
                if (itemsSubj.length > opt.maxlengh) {
                    sliceTxt += '...';
                }
                this.html += '<p class="ppgr_subj">' + sliceTxt + '</p>';
            } else {
                this.html += '<p class="ppgr_subj">' + this.items[i].subj + '</p>';
            }
            this.html += '</div>';
            this.html += '</div>';
            this.html += '</a>';
            this.html += '</div>';
        }
        $(countNum.total).text(totalNum);
        $(countNum.web).text(webNum);
        $(countNum.res).text(resNum);
        $(countNum.mob).text(mobNum);
        $(this.target).append(this.html);
    },
    pfPars: function () {
        var $el = $(this.subTarget);
        //var params = location.search.replace(/[?a-zA-Z=]/g, '');
        var params = $(this).getParams('pageNum');
        var html = '';
        for (var i = 0; i < this.items.length; i++) {
            if (params == i) {
                html += '<li class="active">';
            } else {
                html += '<li>';
            }
            html += '<a href="/sub.html?pageNum=' + i + '?currentMenu=0">' + this.items[i].tit + '</a>';
            html += '</li>';
        }
        $el.append(html);
    },
};

