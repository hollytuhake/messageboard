app.controller('MessageController', ['$http', function ($http) {
    console.log('MessageController created.');
    
    var self = this
    self.newMessage = {};
    self.message = [];

    self.addMessage = function (messageToAdd) {
        console.log(messageToAdd);
        console.log('in addMessage');
        $http.post('/messages', messageToAdd).then(function (response) {
            console.log('Added Message');
            swal("Say what?!", "Your message has been added.", "success");
        }).catch(function (err) {
            console.log('Add message Failed!');
        })
       // self.refreshMessages();
    }

    self.refreshMessages = function () {
        console.log('in refresh messages');
        $http.get('/messages').then(function (response) {
            console.log(response.data);
            self.messages = response.data;
        }).catch(function (error) {
            console.log('Could not GET data');
        });
    };

    self.refreshMessages();

}])