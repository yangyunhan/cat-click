var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttrbution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-Bone', 'Mr.T', 'Tabitha Tab']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['Tigger']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['Tabtab', 'T-Bone']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Mr.T', 'Tabitha Tab']
    }
];
var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if (clicks <10){
            title = 'Newborn';
        } else if(clicks < 50){
            title = 'Infant';
        } else if(clicks <100){
            title = 'Child';
        } else if(clicks <200){
            title = 'Teen';
        } else if(clicks <500){
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
    },this);
};
var ViewModel = function () {
    var self = this;
    self.catList = ko.observableArray([]);
    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });
    self.currentCat = ko.observable(this.catList()[0]);
    self.clickCat = function (cat) {
        self.currentCat(cat);
    };
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);//self表示视图模型
        //this.clickCount(this.clickCount() + 1);//this表示当前猫的binding context
    };
};

ko.applyBindings(new ViewModel());