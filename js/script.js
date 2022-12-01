$(document).ready(function (){

    //Populate countries dropdown list
    $(countries).each(function () {
        let element = '<option value="' + this.code + '">' + this.name + '</option>';
        $('select#country').append(element);
    });

console.log(countries);
});
