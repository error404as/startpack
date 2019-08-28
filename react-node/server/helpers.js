

module.exports = {
    sortAZ(a,b) {
        if(a.title > b.title) { return 1; }
        if(a.title < b.title) { return -1; }
        return 0;
    },
    sortDate(a,b) {
        if(a.publishedAt > b.publishedAt) { return 1; }
        if(a.publishedAt < b.publishedAt) { return -1; }
        return 0;
    },

};
