'use strict';

(function(window){
    var App = window.App || {};

    function Truck(truckId, db){
      this.truckId = truckId;
      this.db = db;
    }

    Truck.prototype.createOrder = function(order){
      console.log('adding truck order for email address ' + order.emailAddress);
      this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function(customerId){
      console.log('Delivering order for customer ' + customerId);
      this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function(){
      var customerIdArray = Object.keys(this.db.getAll());
      console.log(customerIdArray);
      console.log("Truck # " + this.truckId + " has pending orders");

      customerIdArray.forEach(function(id){
        console.log(this.db.get(id));
      }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;
})(window);
