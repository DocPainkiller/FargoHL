Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    var params = [2, 6, 7, 3];
    for (var i = 0; i < params.length; i++) {
        var paramId = params[i];
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};