
var Helpers = {
    clone: function(obj) {
        return JSON.parse( JSON.stringify(obj) );
    },
    randomize: function(arr) {
        arr = this.clone(arr);
        var buffer = [], start;
        for(var i = arr.length; i >= arr.length && i > 0;i--) {
            start = Math.floor(Math.random() * arr.length);
            buffer.push(arr.splice(start, 1)[0])
        };
        return buffer;
    },
    reverse: function(arr) {
        arr = this.clone(arr);
        return arr.reverse();
    },
    formatDate: function(val){
        if(!val) { return ''; }
        var t = new Date(val);
        if(isNaN(t.getDate())){ return val; }
    
        // YYYY-MM-DD__HH-MM-SS
        var str = t.getFullYear();
        str += '.'+this._zero(t.getMonth()+1);
        str += '.'+this._zero(t.getDate());
        str += ' ['+this._zero(t.getHours());
        str += ':'+this._zero(t.getMinutes());
        str += ']';
        //str += '-'+_zero(t.getSeconds());
        return str;    
    },
    _zero: function(i){
        return i > 9 ? i : '0'+i;
    }
};


export default Helpers;
