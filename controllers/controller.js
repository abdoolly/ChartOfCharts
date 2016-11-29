var controller = {
    uses: function (controllerAction) {
        var controllerName = controllerAction.split('@');
        var currentController = require('./'+ controllerName[0]);
        return currentController[controllerName[1]];
    }
};


module.exports = controller.uses;