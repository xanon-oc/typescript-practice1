// mixed data type - key, value
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userNameAndId;
userNameAndId = ["Niloy", 100];
var newData = __spreadArray([], userNameAndId, true);
newData.push("Saddat", 80);
console.log(userNameAndId);
