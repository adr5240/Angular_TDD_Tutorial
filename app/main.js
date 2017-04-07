angular.module('AddressBook', [])
    .service("contactService", function($http) {
        this.contacts = [];
        $http.get("http://localhost:9000/contacts", function(res) {
            console.log(res);
        });
    })
;
