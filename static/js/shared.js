exports.collectContentImage = function (name, context) {
    var tname = context.tname;
    var state = context.state;
    if (tname === 'div' || tname === 'p') {
        delete lineAttributes.img;
    }
    if (tname === 'img') {
        state.lineAttributes.img = `<img src=${context.node.attribs.src} >`;
    }
};

exports.collectContentPost = function(hook, context){
    var tname = context.tname;
    console.log(hook, tname, context);
    var state = context.state;
    var lineAttributes = state.lineAttributes
};