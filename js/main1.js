window.onload = function() {
    $(document).ready(function() {
        let oUl = document.getElementById('ul');
        $.ajax({
            url: './js/main1.json' + '?a=' + Math.random(),
            //dataType: 'json',
            method: 'get',
            success: function(data) {
                for (q = 0; q < data['data']['songs'].length; q++) {
                    create();
                }
                let adata = [];
                adata.unshift(data['data']['songs']);
                var timer1 = null;

                function create() {
                    var aLi = document.createElement('li');
                    aLi.className = 'li2';
                    var aUl = document.createElement('ul');
                    aUl.className = 'ul2';
                    var aLii1 = document.createElement('li');
                    aLii1.className = 'song-checked1';
                    var oInput = document.createElement('input');
                    aLii1.appendChild(oInput);
                    var aLii2 = document.createElement('li');
                    aLii2.className = 'songs1';
                    var aDiv1 = document.createElement('div');
                    aDiv1.className = 'adiv1';
                    var aDiv = document.createElement('div');
                    aDiv1.innerHTML = q + 1;
                    aDiv.className = 'adiv';
                    aDiv.innerHTML = data['data']['songs'][q].name;
                    aLii2.appendChild(aDiv);
                    var oDivv = document.createElement('div');
                    oDivv.className = 'gequ';
                    oDivv.id = 'gequ';
                    aLii2.appendChild(oDivv);
                    var aA1 = document.createElement('a');
                    aA1.href = 'javascript:;';
                    aA1.title = '分享';
                    var ai1 = document.createElement('i');
                    ai1.className = 'iconfont icon-fenxiang-';
                    aA1.appendChild(ai1);
                    var aA2 = document.createElement('a');
                    aA2.href = 'javascript:;';
                    aA2.title = '添加到歌单';
                    var aA3 = document.createElement('a');
                    aA3.href = 'javascript:;';
                    aA3.className = 'bofang';
                    aA3.title = '播放';
                    oDivv.appendChild(aA1);
                    oDivv.appendChild(aA2);
                    oDivv.appendChild(aA3);
                    var ai2 = document.createElement('i');
                    ai2.className = 'iconfont icon-tianja';
                    aA2.appendChild(ai2);
                    var ai3 = document.createElement('i');
                    ai3.className = 'iconfont icon-bofan';
                    ai3.id = 'bofan';
                    ai3.index = q;
                    aA3.appendChild(ai3);
                    var aLii3 = document.createElement('li');
                    aLii3.className = 'song1 singer';
                    var aA4 = document.createElement('a');
                    aA4.id = 'singer';
                    aA4.innerHTML = data['data']['songs'][q].singer;
                    aLii3.appendChild(aA4);
                    var aLii4 = document.createElement('li');
                    aLii4.className = 'song1 time1';
                    aLii4.innerHTML = minutes(data['data']['songs'][q].time);
                    aLi.appendChild(aUl);
                    aUl.appendChild(aLii1);
                    aUl.appendChild(aDiv1);
                    aUl.appendChild(aLii2);
                    aUl.appendChild(aLii3);
                    aUl.appendChild(aLii4);
                    oUl.appendChild(aLi);
                }

                function minutes(number) {
                    let minute = parseInt(number / 60);
                    let point = number % 60;
                    if (minute < 10) {
                        if (point < 10) {
                            let hour = '0' + minute + ':' + '0' + point;
                            return hour;
                        } else {
                            let hour = '0' + minute + ':' + point;
                            return hour;
                        }
                    } else {
                        if (point < 10) {
                            let hour = minute + ':' + '0' + point;
                            return hour;
                        } else {
                            let hour = minute + ':' + point;
                            return hour;
                        }
                    }
                }



                var e = true;
                $('.ul2').mouseenter(function() {
                    $(this).children('.time1').html('');
                    $(this).children('.time1').addClass('iconfont icon-shanchu1');
                    let atime1 = document.querySelectorAll('.time1');
                    for (i = 0; i < atime1.length; i++) {
                        atime1[i].indexxx = i;
                        atime1[i].onclick = function() {
                            if ($('.gequ').eq(this.indexxx).hasClass('gequ1')) {
                                if (this.indexxx == atime1.length - 1) {
                                    $(this).parent('.ul2').parent('li').remove();
                                    adata[0].splice(this.indexxx, 1);
                                    oAudio.src = 'javascript:;';
                                    $('.zhuanji').attr('src', './img/images/5.png');
                                    if ($('.p2')) {
                                        $('.info12').children('.p2').remove();
                                        $('.easy2').children('.easy-p').remove();
                                    }
                                    $('.body1').css('background-image', 'url()');
                                }
                                adata[0].splice(this.indexxx, 1);
                                $(this).parent('.ul2').parent('li').remove();
                                $('.gequ').eq(this.indexxx).addClass('gequ1');
                                $('.icon-bofan').eq(this.indexxx).addClass('icon-suspend_icon');
                                $('.icon-bofang').addClass('icon-zanting');
                                $('.body1').css('background-image', 'url(' + adata[0][this.indexxx].pic + ')');

                                oAudio.src = adata[0][this.indexxx].url;
                                $('.zhuanji').attr('src', adata[0][this.indexxx].pic);
                                if ($('.p2')) {
                                    $('.info12').children('.p2').remove();
                                    $('.easy2').children('.easy-p').remove();
                                }
                                clearInterval(timer1);
                                getsense(this.indexxx);
                                oAudio.play();
                                var aDiv2 = document.querySelectorAll('.adiv1');
                                for (i = 0; i < aDiv2.length; i++) {
                                    aDiv2[i].innerHTML = i + 1;
                                }
                                $('.adiv1').eq(this.indexxx).html('');
                                $('.adiv1').eq(this.indexxx).addClass('adiv-img');
                            } else {
                                if (this.indexxx == atime1.length - 1) {
                                    $(this).parent('.ul2').parent('li').remove();
                                    adata[0].splice(this.indexxx, 1);
                                    oAudio.src = 'javascript:;';
                                    $('.zhuanji').attr('src', './img/images/5.png');
                                    if ($('.p2')) {
                                        $('.info12').children('.p2').remove();
                                        $('.easy2').children('.easy-p').remove();
                                    }
                                    $('.body1').css('background-image', 'url()');
                                }
                                adata[0].splice(this.indexxx, 1);
                                $(this).parent('.ul2').parent('li').remove();
                                var aDiv2 = document.querySelectorAll('.adiv1');
                                for (i = 0; i < aDiv2.length; i++) {
                                    aDiv2[i].innerHTML = i + 1;
                                }

                                if ($('.adiv1').hasClass('adiv-img')) {
                                    let p = $('.adiv1').index($('.adiv-img'));
                                    $('.adiv1').eq(p).html('');
                                }
                            }
                        }
                    }
                })

                $('.ul2').mouseleave(function() {
                    let aul2 = document.querySelectorAll('.ul2');
                    for (i = 0; i < aul2.length; i++) {
                        aul2[i].index = i;
                    }
                    $(this).children('.time1').removeClass('iconfont icon-shanchu1');
                    $(this).children('.time1').html(minutes(adata[0][this.index].time));
                })



                var c;
                $('#shanchu').click(function() {
                    if (confirm('你真的要删除吗？') == true) {
                        if ($('.song-checked1').hasClass('gou')) {
                            c = $('.song-checked1').index($('.gou'));
                            if (c != $('.gequ').index($('.gequ1'))) {
                                let aCheck = document.querySelectorAll('.song-checked1');
                                let aGou = document.querySelectorAll('.gou');
                                for (let i = 0; i < aCheck.length; i++) {
                                    aCheck[i].index = i;
                                }
                                let arry = [];
                                for (let i = 0; i < aGou.length; i++) {
                                    arry.unshift(aGou[i].index);
                                }
                                for (let i = 0; i < arry.length; i++) {
                                    adata[0].splice(arry[i], 1);
                                }
                                $('.gou').parent('.ul2').parents('li').remove();
                                var aBofan = document.querySelectorAll('.icon-bofan');
                                var aDiv2 = document.querySelectorAll('.adiv1');
                                for (i = 0; i < aDiv2.length; i++) {
                                    aDiv2[i].innerHTML = i + 1;
                                }
                                $('.adiv1').eq(c).html('');
                                $('.adiv1').eq(c).addClass('adiv-img');
                            } else {
                                let aCheck = document.querySelectorAll('.song-checked1');
                                let aGou = document.querySelectorAll('.gou');
                                for (let i = 0; i < aCheck.length; i++) {
                                    aCheck[i].index = i;
                                }
                                let arry = [];
                                for (let i = 0; i < aGou.length; i++) {
                                    arry.unshift(aGou[i].index);
                                }
                                for (let i = 0; i < arry.length; i++) {
                                    adata[0].splice(arry[i], 1);
                                }
                                $('.icon-bofang').addClass('icon-zanting');
                                $('.gou').parent('.ul2').parents('li').remove();
                                var aBofan = document.querySelectorAll('.icon-bofan');
                                var aDiv2 = document.querySelectorAll('.adiv1');
                                for (i = 0; i < aDiv2.length; i++) {
                                    aDiv2[i].innerHTML = i + 1;
                                }
                                $('#circle1').addClass('play');
                                $('.icon-bofan').eq(c).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                                $('.icon-bofan').eq(c).addClass('icon-suspend_icon');
                                $('.icon-bofan').eq(c).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                                $('.gequ').eq(c).addClass('gequ1');
                                $('.zhuanji').attr('src', adata[0][c].pic);
                                oAudio.src = adata[0][c].url;
                                if ($('.p2')) {
                                    $('.info12').children('.p2').remove();
                                    $('.easy2').children('.easy-p').remove();
                                }
                                clearInterval(timer1);
                                getsense(c);
                                $('.body1').css('background-image', 'url(' + adata[0][c].pic + ')');
                                oAudio.play();
                            }
                            if (aDiv2.length == 0) {
                                $('.p1').html('');
                                if ($('.p2')) {
                                    $('.info12').children('.p2').remove();
                                    $('.easy2').children('.easy-p').remove();
                                }
                                e = false;
                                oAudio.src = 'javascript:;';
                                $('.progress2').width(0 + '%');
                                oCirc1.style.left = 0 + 'px';
                                $('#circle1').removeClass('play')
                                $('.body1').css('background-image', '');
                                $('.zhuanji').attr('src', './img/images/5.png');
                                $('.icon-bofang').removeClass('icon-zanting');
                            }
                        }
                    }
                })



                $('#qingkong').click(function() {
                    if (confirm('你真的要清空吗？') == true) {
                        $('.content4').empty();
                        $('.zhuanji').attr('src', './img/images/5.png');
                        if ($('.p2')) {
                            $('.info12').children('.p2').remove();
                            $('.easy2').children('.easy-p').remove();
                        }
                        $('.p1').html('');
                        $('.body1').css('background-image', 'url');
                        $('.body1').css('background-image', 'url()');
                        oAudio.src = 'javascript:;';
                        e = false;
                        oAudio.pause();
                        oAudio.currentTime = 0;
                        $('.progress2').width(0 + '%');
                        $('#circle1').removeClass('play');
                        oCirc1.style.left = 0 + 'px';
                        $('.icon-bofang').removeClass('icon-zanting');
                    }
                })







                $('.song-checked').click(function() {
                    if ($('.song-checked').hasClass('gou')) {
                        $(this).removeClass('gou');
                        $('.song-checked1').removeClass('gou');
                    } else {
                        $(this).addClass('gou');
                        $('.song-checked1').addClass('gou');
                    }
                    j++;
                })
                $('.song-checked1').click(function() {
                    if ($(this).hasClass('gou')) {
                        $(this).removeClass('gou');
                    } else {
                        $(this).addClass('gou');
                    }
                    j++;
                })








                let oAudio = document.getElementById('audio');
                var oCirc1 = document.getElementById('circle1');
                var oCirc3 = document.getElementById('circle3');
                oAudio.volume = 0.5;
                var j = 1;
                $('.icon-volume_icon').click(function() {
                    if (j % 2 != 0) {
                        oAudio.volume = 0;
                        $('.progress4').width(0);
                        oCirc3.style.left = 0;
                        $(this).addClass('icon-jingyin');
                    } else {
                        oCirc3.style.left = 40 + 'px';
                        oAudio.volume = 0.5;
                        $('.progress4').width(40 + 'px');
                        $(this).removeClass('icon-jingyin');
                    }
                    j++;
                })



                $('.icon-bofan').click(function() {
                    if (oAudio.paused) {
                        var aBofan = document.querySelectorAll('.icon-bofan');
                        for (i = 0; i < aBofan.length; i++) {
                            aBofan[i].index = i;
                            $('.gequ').removeClass('gequ1');
                            $('.icon-bofang').addClass('icon-zanting');
                            $(this).addClass('icon-suspend_icon');
                            $('#circle1').addClass('play');
                            $('.icon-bofan').parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                            $(this).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $(this).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            $(this).parents('.gequ').addClass('gequ1');
                            $(this).children('.time1').html('');
                            $(this).children('.time1').addClass('iconfont icon-shanchu1');
                            $('.body1').css('background-image', 'url(' + adata[0][this.index].pic + ')');
                            $('.zhuanji').attr('src', adata[0][this.index].pic);
                        }
                        if (oAudio.src != adata[0][this.index].url) {
                            oAudio.src = adata[0][this.index].url;
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }
                            clearInterval(timer1);
                            getsense(this.index);
                            oAudio.play();
                        } else {
                            oAudio.play();
                        }
                    } else {
                        var aBofan = document.querySelectorAll('.icon-bofan');
                        var aDiv1 = document.querySelectorAll('.adiv1');
                        for (i = 0; i < aDiv1.length; i++) {
                            aDiv1[i].innerHTML = i + 1;
                            aBofan[i].index = i;
                        }
                        if (oAudio.src != adata[0][this.index].url) {
                            var aBofan = document.querySelectorAll('.icon-bofan');
                            for (i = 0; i < aDiv1.length; i++) {
                                aBofan[i].index = i;
                                aDiv1[i].innerHTML = i + 1;
                                $(this).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                                $('.icon-bofan').parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                                $(this).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                                $('.gequ').removeClass('gequ1');
                                $('.icon-bofan').removeClass('icon-suspend_icon');
                                $(this).addClass('icon-suspend_icon');
                                $(this).parents('.gequ').addClass('gequ1');
                                $('.zhuanji').attr('src', adata[0][this.index].pic);
                                $('.body1').css('background-image', 'url(' + adata[0][this.index].pic + ')');
                                oAudio.src = adata[0][this.index].url;
                            }
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }
                            clearInterval(timer1);
                            getsense(this.index);
                            oAudio.play();
                        } else {
                            var aDiv1 = document.querySelectorAll('.adiv1');
                            var aBofan = document.querySelectorAll('.icon-bofan');
                            for (i = 0; i < aDiv1.length; i++) {
                                aDiv1[i].innerHTML = i + 1;
                                aBofan[i].index = i;
                                $(this).parents('.gequ').parent('.songs1').prev('.adiv1').html(this.indexx);
                                $(this).parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                                $('.icon-bofang').removeClass('icon-zanting');
                                $(this).removeClass('icon-suspend_icon');
                                $('#circle1').removeClass('play');
                                $('#circle1').removeClass('play1');
                                $(this).children('.time1').html();
                                $(this).children('.time1').removeClass('iconfont icon-shanchu1');
                                oAudio.pause();
                            }
                        }

                    }

                })


                $('.icon-bofang').click(function() {
                    if (oAudio.src != 'javascript:;') {
                        if (oAudio.paused) {
                            $(this).addClass('icon-zanting');
                            $('#circle1').addClass('play');
                            $('.gequ').each(function(a) {
                                if ($(this).hasClass('gequ1') == true) {
                                    $('.icon-bofan').eq(a).addClass('icon-suspend_icon');
                                    $('.icon-bofan').eq(a).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                                    $('.icon-bofan').parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                                    $('.icon-bofan').eq(a).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                                }
                            })
                            oAudio.play();
                        } else {
                            $(this).removeClass('icon-zanting');
                            $('#circle1').removeClass('play');
                            $('.icon-bofan').each(function(a) {
                                if ($(this).hasClass('icon-suspend_icon') == true) {
                                    var aDiv1 = document.querySelectorAll('.adiv1');
                                    for (i = 0; i < aDiv1.length; i++) {
                                        aDiv1[i].innerHTML = i + 1;
                                    }
                                    $('.icon-bofan').eq(a).parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                                    $('.icon-bofan').eq(a).removeClass('icon-suspend_icon');
                                }
                            })
                            oAudio.pause();
                        }
                    } else {
                        if (e == true) {
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            $(this).addClass('icon-zanting');
                            $('#circle1').addClass('play');
                            $('.gequ').eq(0).addClass('gequ1');
                            $('.icon-bofan').eq(0).addClass('icon-suspend_icon')
                            oAudio.src = adata[0][0].url;
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }
                            clearInterval(timer1);
                            getsense(0);
                            $('.zhuanji').attr('src', adata[0][0].pic);
                            $('.body1').css('background-image', 'url(' + adata[0][0].pic + ')');
                            oAudio.play();
                        }
                        return false;
                    }
                });
                var a;
                var b;
                $('.icon-xiayishou').click(function() {
                    if (oAudio.src != 'javascript:;') {
                        $('.icon-bofang').addClass('icon-zanting');
                        $('#circle1').addClass('play');
                        var aDiv1 = document.querySelectorAll('.adiv1');
                        a = $('.gequ').index($('.gequ1'));
                        if (a == aDiv1.length - 1) {
                            $('.icon-bofan').eq(0).addClass('icon-suspend_icon');
                            $('.icon-bofan').eq(a).removeClass('icon-suspend_icon');
                            $('.gequ').eq(0).addClass('gequ1');
                            $('.gequ').eq(a).removeClass('gequ1');
                            oAudio.src = adata[0][0].url;
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }

                            clearInterval(timer1);
                            getsense(0);
                            $('.zhuanji').attr('src', adata[0].pic)
                            $('.body1').css('background-image', 'url(' + adata[0][0].pic + ')');
                            for (i = 0; i < aDiv1.length; i++) {
                                aDiv1[i].innerHTML = i + 1;
                            }
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            oAudio.play();
                            a = -1;
                        }
                        var aDiv1 = document.querySelectorAll('.adiv1');
                        for (i = 0; i < aDiv1.length; i++) {
                            aDiv1[i].innerHTML = i + 1;
                        }
                        $('.icon-bofan').eq(a + 1).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                        $('.icon-bofan').parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                        $('.icon-bofan').eq(a + 1).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                        $('.icon-bofan').eq(a).removeClass('icon-suspend_icon');
                        $('.icon-bofan').eq(a + 1).addClass('icon-suspend_icon');
                        $('.gequ').eq(a).removeClass('gequ1');
                        $('.gequ').eq(a + 1).addClass('gequ1');
                        oAudio.src = adata[0][a + 1].url;
                        if ($('.p2')) {
                            $('.info12').children('.p2').remove();
                            $('.easy2').children('.easy-p').remove();
                        }
                        clearInterval(timer1);
                        getsense(a + 1);
                        $('.zhuanji').attr('src', adata[0][a + 1].pic);
                        $('.body1').css('background-image', 'url(' + adata[0][a + 1].pic + ')');
                        oAudio.play();
                    } else {
                        if (e == true) {
                            oAudio.src = adata[0][0].url;
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }

                            clearInterval(timer1);
                            getsense(0);
                            $('#circle1').addClass('play');
                            $('.icon-bofang').addClass('icon-zanting');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            $('.zhuanji').attr('src', adata[0][0].pic);
                            $('.body1').css('background-image', 'url(' + adata[0][0].pic + ')');
                            $('#gequ').eq(0).addClass('gequ1');
                            $('#bofan').eq(0).addClass('icon-suspend_icon');
                            oAudio.play();
                        } else {
                            return false;
                        }
                    }
                });

                $('.icon-shangyishou').click(function() {
                    if (oAudio.src != 'javascript:;') {
                        $('.icon-bofang').addClass('icon-zanting');
                        $('#circle1').addClass('play');
                        b = $('.gequ').index($('.gequ1'));
                        var aDiv1 = document.querySelectorAll('.adiv1');

                        if (b == 0) {
                            $('.icon-bofan').eq(aDiv1.length - 1).addClass('icon-suspend_icon');
                            $('.icon-bofan').eq(b).removeClass('icon-suspend_icon');
                            $('.gequ').eq(aDiv1.length - 1).addClass('gequ1');
                            $('.gequ').eq(b).removeClass('gequ1');
                            oAudio.src = adata[0][aDiv1.length - 1].url;
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }
                            clearInterval(timer1);
                            getsense(aDiv1.length - 1);
                            $('.zhuanji').attr('src', adata[0][aDiv1.length - 1].pic);
                            $('.body1').css('background-image', 'url(' + adata[0][aDiv1.length - 1].pic + ')');
                            var aDiv1 = document.querySelectorAll('.adiv1');
                            for (i = 0; i < aDiv1.length; i++) {
                                aDiv1[i].innerHTML = i + 1;
                            }
                            $('.icon-bofan').eq(aDiv1.length).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $('.icon-bofan').eq(aDiv1.length).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            oAudio.play();
                            b = aDiv1.length;
                        }
                        for (i = 0; i < aDiv1.length; i++) {
                            aDiv1[i].innerHTML = i + 1;
                        }
                        $('.icon-bofan').eq(b - 1).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                        $('.icon-bofan').parents('.gequ').parent('.songs1').prev('.adiv1').removeClass('adiv-img');
                        $('.icon-bofan').eq(b - 1).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                        $('.icon-bofan').eq(b - 1).addClass('icon-suspend_icon');
                        $('.icon-bofan').eq(b).removeClass('icon-suspend_icon');
                        $('.gequ').eq(b - 1).addClass('gequ1');
                        $('.gequ').eq(b).removeClass('gequ1');
                        oAudio.src = adata[0][b - 1].url;
                        if ($('.p2')) {
                            $('.info12').children('.p2').remove();
                            $('.easy2').children('.easy-p').remove();
                        }
                        clearInterval(timer1);
                        getsense(b - 1);
                        $('.zhuanji').attr('src', adata[0][b - 1].pic)
                        $('.body1').css('background-image', 'url(' + adata[0][b - 1].pic + ')');
                        oAudio.play();
                    } else {
                        if (e == true) {
                            if ($('.p2')) {
                                $('.info12').children('.p2').remove();
                                $('.easy2').children('.easy-p').remove();
                            }
                            clearInterval(timer1);
                            getsense(0);
                            oAudio.src = adata[0][0].url;
                            $('#circle1').addClass('play');
                            $('.icon-bofang').addClass('icon-zanting');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').html('');
                            $('.icon-bofan').eq(0).parents('.gequ').parent('.songs1').prev('.adiv1').addClass('adiv-img');
                            $('.zhuanji').attr('src', adata[0][0].pic);
                            $('#gequ').eq(0).addClass('gequ1');
                            $('#bofan').eq(0).addClass('icon-suspend_icon');
                            oAudio.play();
                        } else {
                            return false;
                        }
                    }
                });





                setInterval(progress, 500);
                $('.progress1').mousedown(function(ev) {
                    let oEvent = ev || event;
                    let x = oEvent.clientX;
                    let target = x - 1333;
                    oAudio.volume = target / 80;
                    $('.progress4').width(target + 'px');
                    oCirc3.style.left = target + 'px';
                })

                oCirc1.onmousedown = function(ev) {
                    let oEvent = ev || event;
                    let x = oEvent.clientX;
                    if (oCirc1.offsetLeft >= 620) {
                        oCirc1.offsetLeft = 620;
                    } else if (oCirc1.offsetLeft <= 0) {
                        oCirc1.offsetLeft = 0;
                    }
                    let left = oCirc1.offsetLeft;
                    let disx = x - left;
                    document.onmousemove = function(ev) {
                        let oEvent = ev || event;
                        oCirc1.style.left = oEvent.clientX - disx + 'px';
                        $('.progress2').width(left + 'px');
                    }
                    document.onmouseup = function() {
                        this.onmousemove = null;
                    }
                    oCirc1.onmouseup = function() {
                        let left = oCirc1.offsetLeft;
                        oAudio.currentTime = oAudio.duration * left / 620;
                    }
                }

                oCirc3.onmousedown = function(ev) {
                    let oEvent = ev || event;
                    let x = oEvent.clientX;
                    let left = oCirc3.offsetLeft;
                    let disx = x - left;
                    document.onmousemove = function(ev) {
                        let oEvent = ev || event;
                        oCirc3.style.left = oEvent.clientX - disx + 'px';
                    }
                    document.onmouseup = function() {
                        this.onmousemove = null;
                    }
                    oCirc3.onmouseup = function() {
                        if (oCirc3.offsetLeft >= 80) {
                            oCirc3.style.left = 80 + 'px';
                        } else if (oCirc3.offsetLeft <= 0) {
                            oCirc3.style.left = 0 + 'px';
                        }
                        let left = oCirc3.offsetLeft;
                        oAudio.volume = left / 80;
                        $('.progress4').width(left + 'px');
                    }
                }


                function progress() {
                    var length = oAudio.currentTime / oAudio.duration * 100;
                    var length1 = oAudio.currentTime / oAudio.duration * 620;
                    $('.progress2').width(length + '%');
                    oCirc1.style.left = length1 + 'px';
                    if (Math.ceil(length) == 100) {
                        var d = $('.gequ').index($('.gequ1'));
                        $('.gequ').eq(d).removeClass('gequ1');
                        $('.gequ').eq(d + 1).addClass('gequ1');
                        $('.adiv1').eq(d).removeClass('adiv-img');
                        $('.adiv1').eq(d).html(d + 1);
                        $('.adiv1').eq(d + 1).html('');
                        $('.adiv1').eq(d + 1).addClass('adiv-img');
                        $('.icon-bofan').eq(d).removeClass('icon-suspend_icon');
                        $('.icon-bofan').eq(d + 1).addClass('icon-suspend_icon');
                        $('.zhuanji').attr('src', adata[0][d + 1].pic);
                        $('.body1').css('background-image', 'url(' + adata[0][d + 1].pic + ')');
                        oAudio.src = adata[0][d + 1].url;
                        if ($('.p2')) {
                            $('.info12').children('.p2').remove();
                            $('.easy2').children('.easy-p').remove();
                        }
                        clearInterval(timer1);
                        getsense(d + 1);

                        oAudio.play();
                    }
                }



                var nDiv2 = document.createElement('div');
                nDiv2.className = 'easy2';

                function getsense(obj) {
                    let oinfo1 = document.querySelector('.info111');
                    let oinfo12 = document.querySelector('.info12');
                    let ap1 = oinfo1.querySelectorAll('p');
                    $.ajax({
                        url: 'https://v1.itooi.cn/netease/lrc?id=' + adata[0][obj].id,
                        //  var ageci1;dataType: 'jsonp',
                        type: 'get',
                        success: function(data) {
                            let alist = data.match(/\d+\:\d+\.\d+/g);
                            var musictime = [];
                            for (let i = 0; i < alist.length; i++) {
                                musictime[i] = getpoint(alist[i]);
                                musictime[i].index = i;
                            }
                            let alist1 = data.split('\n');
                            var ageci = [];
                            for (let i = 0; i < alist1.length; i++) {
                                ageci[i] = alist1[i].slice(11);
                            }
                            for (let j = 0; j < ap1.length; j++) {
                                ap1[j].innerHTML = ageci[j];
                            }

                            for (let i = 0; i < ageci.length; i++) {
                                let ap2 = document.createElement('p');
                                ap2.className = 'p2';
                                ap2.innerHTML = ageci[i + 2];
                                oinfo12.appendChild(ap2);
                                let aep = document.createElement('p');
                                aep.className = 'easy-p';
                                aep.innerHTML = ageci[i + 2];
                                nDiv2.appendChild(aep);
                            }
                            $('.progress3').mousedown(function(ev) {
                                let oEvent = ev || event;
                                let x = oEvent.clientX;
                                let target = x - 319;
                                let targetx = target / 620;
                                oAudio.currentTime = parseInt(oAudio.duration * targetx);
                                progress();
                                oAudio.ontimeupdate = function() {
                                    let indextime;
                                    for (let i = 0; i < result.length; i++) {
                                        if (oAudio.currentTime >= result[i]) {
                                            indextime = result.indexOf(result[i]);

                                        }
                                    }

                                    t = indextime - 2;
                                    $('.p2').removeClass('linehight');
                                    $('.easy-p').removeClass('linehight');
                                    $('.easy-p').eq(t).addClass('linehight');
                                    $('.p2').eq(t).addClass('linehight');
                                    otop = 40 * (indextime - 2);
                                    otop1 = 57 * (indextime - 2);
                                    geci(result.filter(item => item >= oAudio.currentTime));
                                }
                            })

                            let t = 0;
                            let otop = 0;
                            let otop1 = 0;
                            oinfo12.scrollTo(0, 0);
                            nDiv2.scrollTo(0, 0);

                            oAudio.ontimeupdate = function() {
                                geci(musictime);
                            }
                            let result = [];
                            for (let i = 0; i < musictime.length; i++) {
                                result[i] = musictime[i];
                            }

                            function geci(musictime) {
                                for (let i = 2; i < musictime.length; i++) {
                                    if (parseInt(oAudio.currentTime) >= musictime[i]) {
                                        if (i == 2) {
                                            $('.p2').eq(0).addClass('linehight');
                                            $('.easy-p').eq(0).addClass('linehight');
                                        } else {
                                            otop += 40;
                                            otop1 += 57;

                                            function player1() {
                                                clearInterval(timer1);
                                                timer1 = setInterval(function() {
                                                    var speed = (otop - parseInt(oinfo12.scrollTop)) / 4;
                                                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                                                    var speed1 = (otop1 - parseInt(nDiv2.scrollTop)) / 4;
                                                    speed1 = speed1 > 0 ? Math.ceil(speed1) : Math.floor(speed1);
                                                    oinfo12.scrollTo(0, parseInt(oinfo12.scrollTop + speed));
                                                    nDiv2.scrollTo(0, parseInt(nDiv2.scrollTop + speed1));
                                                }, 20)
                                            };
                                            player1();
                                            t = $('.p2').index($('.linehight'));
                                            $('.p2').eq(t).removeClass('linehight');
                                            $('.p2').eq(t + 1).addClass('linehight');
                                            $('.easy-p').eq(t + 1).addClass('linehight');
                                            $('.easy-p').eq(t).removeClass('linehight');

                                        }
                                        delete musictime[musictime.indexOf(parseInt(oAudio.currentTime))];
                                    }
                                }
                            }
                        }
                    })
                }

                let oA = document.getElementById('kaiguan1');
                let oSpan = document.getElementById('span');
                let oSpan1 = document.querySelector('.chunjin');
                let oBody = document.querySelector('.body-content');
                let oContent4 = document.querySelector('content4');
                let oDiv = document.querySelector('.simple');
                var m = 1;
                var nDiv = document.createElement('div');
                var nDiv1 = document.createElement('div');
                nDiv.className = 'easy';
                nDiv1.className = 'easy1';
                nDiv.appendChild(nDiv1);
                nDiv1.appendChild(nDiv2);
                oDiv.appendChild(nDiv);
                oDiv.style.display = 'none';
                oA.onclick = function() {
                    if (m % 2) {
                        oDiv.style.display = 'flex';
                        play3(oSpan, 'margin-left', -60);
                        play3(oSpan1, 'margin-left', -12);
                        oSpan.innerHTML = 'ON';
                        oBody.style.display = 'none';
                    } else {
                        let nDiv3 = document.querySelector('.easy');
                        play3(oSpan, 'margin-left', 10);
                        play3(oSpan1, 'margin-left', 8);
                        oSpan.innerHTML = 'OFF';
                        oDiv.style.display = 'none';
                        oBody.style.display = 'flex';
                    }
                    m++;
                }



                function getpoint(time) {
                    let musictime1 = time[1] * 60;
                    let musictime2 = time.slice(3);
                    return parseInt(musictime1) + parseInt(musictime2);
                }








                let oSet = document.getElementById('set');
                let oSet1 = document.getElementById('set1')
                oSet.onmouseover = function() {
                    play3(oSet1, 'opacity', 100);
                }
                oSet.onmouseout = function() {
                    play3(oSet1, 'opacity', 0);
                }
                oSet1.onmouseover = function() {
                    play3(this, 'opacity', 100);
                }
                oSet1.onmouseout = function() {
                    play3(this, 'opacity', 0);
                }


                function play3(obj, attr, target, fnend) {
                    clearInterval(obj.timer);
                    obj.timer = setInterval(function() {
                        var cur = null;
                        if (attr == 'opacity') {
                            cur = Math.round(parseFloat(getComputedStyle(obj, null)[attr]) * 100);
                        } else {
                            cur = parseInt(getComputedStyle(obj, null)[attr]);
                        }
                        var speed = (target - cur) / 6;
                        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                        if (cur == target) {
                            clearInterval(obj.timer);
                            if (fnend) fnend();
                        } else {
                            if (attr == 'opacity') {
                                obj.style[attr] = (cur + speed) / 100;
                            } else {
                                obj.style[attr] = cur + speed + 'px';
                            }
                        }
                    }, 30)
                }



            }

        })
    })

}