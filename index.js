// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

    /**
     *
     * @param {String} _name
     * @param {String} _numbers
     * @
     */
    function Add(_name, _numbers){
        let numbers = _numbers.split(',');
        if (phoneBook.hasOwnProperty(_name)){
            phoneBook[_name] = phoneBook[_name].concat(numbers);
        } else {
            phoneBook[_name] = numbers;
        }
    }

    /**
     *
     * @param {String} _number
     * @returns {Boolean}
     */
    function Remove_Number(_number){
        let obj = Object.keys(phoneBook);
        for (let key in obj){
            let pos = phoneBook[key].indexOf(_number);
            if (pos !== -1){
                phoneBook[key].splice(pos, 1);
                if (phoneBook[key].length === 0){
                    delete phoneBook[key];
                }
                return true;
            }
        }
        return false;
    }

    /**
     *
     * @returns {Array}
     */
    function Show(){
        let res = [];
        let obj = Object.keys(phoneBook);
        for (let key in obj){
            res.push(key + ': ' + phoneBook[key].join(', '));
        }
        res.sort();
        return res;
    }

    let commandArray = command.split(' ');

    switch (commandArray[0]) {
        case 'ADD':{
            Add(commandArray[1], commandArray[2]);
            break;
        }
        case 'REMOVE_NUMBER':{
            return Remove_Number(commandArray[1]);
            break;
        }
        case 'SHOW':{
            return Show();
            break;
        }
    }
};
