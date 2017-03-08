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

      console.log("Truck # has " + this.truckId + " pending orders");

      customerIdArray.foreach(function(id){
        this.db.get(id);
      });
    };
    
    App.Truck = Truck;
    window.App = App;
})(window);
