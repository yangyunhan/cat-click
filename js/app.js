
var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.grade = ko.observable('Newborn');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.nicknames = ko.observableArray(['Tabtab','T-Bone','Mr.T','Etc']);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        switch (true){
            case this.clickCount() >=5 && this.clickCount()<10:
                this.grade('infent');
                break;
            case this.clickCount()>=10 && this.clickCount()<15:
                this.grade('children');
                break;
            case this.clickCount()>=15 && this.clickCount()<20:
                this.grade('elementary');
        }
    };
};

ko.applyBindings(new ViewModel());