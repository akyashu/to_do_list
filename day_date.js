exports.getDate = function() {

        const Day = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return Day.toLocaleDateString("en-US", options);
    }
    // yaha tak ka code upar export karne ke liye kiya tha
exports.getDay = function() {

        const Day = new Date();
        const options = { weekday: 'long' };
        return Day.toLocaleDateString("en-US", options);
    }
    // ye code bad wala export karne ke liye kiya hai