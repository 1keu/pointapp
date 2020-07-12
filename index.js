if (document.getElementById("date-mask").value == "YYYY/MM/DD") {
    document.getElementById("date-mask").style.color = "#BDBDBD"
}
var element = document.getElementById("date-mask")
var momentFormat = 'YYYY/MM/DD';
var momentMask = IMask(element, {
    mask: Date,
    pattern: momentFormat,
    lazy: false,
    format: function (date) {
        return moment(date).format(momentFormat);
    },
    parse: function (str) {
        return moment(str, momentFormat);
    },

    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 2020,
            placeholderChar: 'Y'
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M'
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D'
        }
    }
});
document.addEventListener('keyup', keyUp);
function keyUp(e) {
    console.log(document.getElementById("date-mask").value)
    if (document.getElementById("date-mask").value == "YYYY/MM/DD") {
        document.getElementById("date-mask").style.color = "#BDBDBD"
    } else {
        document.getElementById("date-mask").style.color = "black"
    }
}
