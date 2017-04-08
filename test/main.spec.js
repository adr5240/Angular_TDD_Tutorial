let assert = chai.assert;
let expect = chai.expect;

describe("The AddressBook App", function() {

    describe("the contact service", function() {
        beforeEach(function() {
            module("AddressBook");
            inject(function($injector) {
                contactService = $injector.get("contactService");
                $httpBackend = $injector.get("$httpBackend");
            });
        });

        it("should have a property contacts, an array", function() {
            expect(contactService.contacts).to.be.an('array');
        });

        it("should call the http backend", function() {
            $httpBackend.expectGET("http://localhost:9000/contacts")
                .respond(200, []);
            $httpBackend.flush();
        });
    });

    describe("the contact controller", function() {
        beforeEach(function() {
            module("AddressBook");
            inject(function($injector, $rootScope) {
                $scope = $rootScope.$new();
                contactService = $injector.get("contactService");
                $httpBackend = $injector.get("$httpBackend");
                $controller = $injector.get("$controller");
            });
        });

        it("should store array of contacts in scope", function() {
            $controller("ContactCtrl", { $scope:$scope, contactService:contactService });
            assert.isArray($scope.contacts);
        });

    });

});
