

(function () {

    // 给字符串、数组、布尔值、数字、正则表达式 添加方法


    // 根据数字的正负值来判断是使用 Math.ceiling 还是 Math.floor

    // Number.prototype.integer = function () {  
    //     return Math[this < 0 ? 'ceil' : 'floor'](this);
    // };


    // 给字符串添加一个去除收尾空格的方法

    // String.prototype.trim = function () {  
    //     return this.replace(/^\s+|\s+$/g, '');
    // };

    // Function.prototype.method = function (name, func) {  
    //     if (!this.prototype[name]) {
    //         this.prototype[name] = func;
    //     }
    //     return this;
    // };


})();