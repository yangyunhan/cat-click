$(function () {

    var data = {
        admin: false,
        currentCat: null,
        cats: [
            {
                name: 'Jetske',
                clickNum: 0,
                url: 'images/cat1Jetske.jpg'
            },
            {
                name: 'MikhailVasilyev',
                clickNum: 0,
                url: 'images/cat2MikhailVasilyev.jpg'
            },
            {
                name: 'KariShea',
                clickNum: 0,
                url: 'images/cat3KariShea.jpg'
            },
            {
                name: 'PactoVisual',
                clickNum: 0,
                url: 'images/cat4PactoVisual.jpg'
            },
            {
                name: 'SabriTuzcu',
                clickNum: 0,
                url: 'images/cat5SabriTuzcu.jpg'
            },
            {
                name: 'MarkoBlaze',
                clickNum: 0,
                url: 'images/cat6MarkoBlazevic.jpg'
            }
            ]
    };

    var octopus = {
        getCats: function () {
            return data.cats;
        },
        getCurrentCat: function () {
            return data.currentCat;
        },
        setCurrentCat: function (cat) {
            data.currentCat = cat;
        },
        getAdmin: function (open) {
            if(open === true){
                data.admin = true;
                $('#form').show();
            }else if(open === false){
                data.admin = false;
                $('#form').hide();
            }
        },
        clickNum: function () {
            data.currentCat.clickNum++;
            viewCat.render();
        },
        /*clickNum: function (i) {
            $('.cat1').click(function () {
                data.cats[i].clickNum ++;
                viewCat.render(i);
            });
        },*/
        init: function () {
            data.currentCat = data.cats[0];
            viewList.init();
            viewCat.init();
            viewAdmin.init();
        }
    };

    var viewList = {
        init: function () {
            this.catList = $('.catList');
            this.render();
        },
        render: function () {
            var cats = octopus.getCats();
            this.catList.innerHTML = '';
            cats.forEach(function (cat) {
                var $li = $('<li></li>');
                var img = $('<img>');
                img.attr('src',cat.url);
                $li.append(img);
                $li.click(function () {
                    octopus.setCurrentCat(cat);
                    viewCat.render();

                });
                viewList.catList.append($li);
            })
        },
        /*
        render: function () {
            var htmlStr = '';
            octopus.getCats().forEach(function (cat) {
                htmlStr += '<li>'+'<img src="'+cat.url+'" alt="catJetske">'+'</li>';

            });
            this.catList.html(htmlStr);
            this.catslist = $('.catList li');
            $.each(this.catslist,function (i) {
                $(this).on('click',function () {
                    viewCat.render(i);
                });
            });
        }*/
    };

    var viewCat = {
        init: function () {
            this.display = $('.container');
            this.catName = $('.catname');
            this.catImg = $('.cat1');
            this.catNum = $('.Num');
            this.catImg.click(function () {
               octopus.clickNum();
            });
            this.render();
            //viewCat.render(0);
        },
        render: function () {
            var currentCat = octopus.getCurrentCat();
            this.catNum[0].textContent = currentCat.clickNum;
            this.catName[0].textContent = currentCat.name;
            this.catImg.attr('src',currentCat.url);

            viewAdmin.render();
        },
        /*
        render: function (i) {
            var name = octopus.getCats()[i].name;
            var url = octopus.getCats()[i].url;
            var clickNum = octopus.getCats()[i].clickNum;
            var htmlStr = '<p class="name">' + 'Her name is ' + '<span>' +
                name + '</span></p>' + '<img src="' + url + '" alt="' + name +
                '" class="cat1">' + '<p>You have click ' + '<span>'+ clickNum +
                '</span> times.</p>';
            this.display.html(htmlStr);
            octopus.clickNum(i);
        }*/
    };
    var viewAdmin = {
        init: function () {
            this.adminButton = $('#admin');
            this.cancelButton = $('#cancel');
            this.saveButton = $('#save');
            octopus.getAdmin(false);
            $(this.adminButton).on('click',function () {
                octopus.getAdmin(true);
            });
            $(this.cancelButton).on('click',function () {
                octopus.getAdmin(false);
            });
            $(this.saveButton).on('click', function () {
                var name = $('#Name').val();
                var url = $('#URL').val();
                var clickNum = $('#ClickNum').val();
                var currentCat = octopus.getCurrentCat();
                currentCat.name = name;
                currentCat.url = url;
                currentCat.clickNum = clickNum;
                viewCat.render();
                octopus.getAdmin(false);
            });
            this.render();
        },
        render: function () {
            var currentCat = octopus.getCurrentCat();
            $('#Name').attr('value',currentCat.name);
            $('#URL').attr('value',currentCat.url);
            $('#ClickNum').attr('value',currentCat.clickNum);
        }
    };
    octopus.init();
});