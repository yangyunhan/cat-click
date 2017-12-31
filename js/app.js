
var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.grade = ko.observable('Newborn');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

    this.people = ko.observableArray([
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }
    ]);

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


function AppViewModel() {
    var self = this;

    self.p = ko.observableArray([
        { n: 'Bert' },
        { n: 'Charles' },
        { n: 'Denise' }
    ]);

    self.addPerson = function() {
        self.p.push({ n: "New at " + new Date() });
    };

    self.removePerson = function() {
        self.p.remove(this);
    }
}

ko.applyBindings(new AppViewModel());

/*
var viewModel = function () {
    //this.months = ko.observableArray(['Jan','Feb','Mar']);
    ko.applyBindings({
        months: [ 'Jan', 'Feb', 'Mar', 'etc' ]
    });
};
ko.applyBindings(new viewModel());
*/