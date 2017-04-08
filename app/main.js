angular.module('AddressBook', [])
    .service("contactService", function($http) {
        let contactService = this;
        contactService.contacts = [];

        $http.get("http://localhost:9000/contacts")
            .then(function(res) {
                console.log(res);
                while (res.data[0]) {
                    contactService.contacts.push(res.data.pop());
                }
        });
    })
    .controller("ContactCtrl", function(contactService, $scope) {
        $scope.contacts = contactService.contacts;
    })
;
