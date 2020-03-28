console.log("Latinifying the website!");

function latinize() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/a/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g').replace(/д/g, 'd').replace(/ђ/g, 'đ').replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'ž').replace(/з/g, 'z').replace(/и/g, 'i').replace(/й/g, 'j').replace(/к/g, 'k').replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n').replace(/о/g, 'o').replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't').replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'c').replace(/ч/g, 'č').replace(/щ/g, 'šč').replace(/ъ/g, '\"').replace(/ы/g, 'y').replace(/ь/g, '\'').replace(/э/g, 'e').replace(/ю/g, 'yu').replace(/я/g, 'ya'.replace(/ѓ/g, 'ǵ')).replace(/А/g, 'A').replace(/Б/g, 'B').replace(/В/g, 'V').replace(/Г/g, 'G').replace(/Ґ/g, 'G').replace(/Д/g, 'D').replace(/Ђ/g, 'Đ').replace(/Ѓ/g, 'Ǵ').replace(/Е/g, 'E').replace(/Ѐ/g, 'È').replace(/ѐ/g, 'è').replace(/Ё/g, 'Yo').replace(/Є/g, 'E').replace(/є/g, 'e').replace(/Ж/g, 'Ž').replace(/З/g, 'Z').replace(/З́/g, 'Ź').replace(/Ѕ/g, 'S').replace(/ѕ/g, 's').replace(/И/g, 'I').replace(/І/g, 'I').replace(/і/g, 'i').replace(/Ї/g, 'Yi').replace(/ї/g, 'yi').replace(/Й/g, 'Y').replace(/Ј/g, 'J').replace(/ј/g, 'j').replace(/К/g, 'K').replace(/Л/g, 'L').replace(/Љ/g, 'Lj').replace(/љ/g, 'lj').replace(/М/g, 'M').replace(/Н/g, 'N').replace(/Њ/g, 'Nj').replace(/њ/g, 'nj').replace(/О/g, 'O').replace(/П/g, 'P').replace(/Р/g, 'R').replace(/С/g, 'S').replace(/Т/g, 'T').replace(/Ћ/g, 'Ć').replace(/ћ/g, 'ć').replace(/Ќ/g, 'K').replace(/ќ/g, 'ḱ').replace(/У/g, 'U').replace(/Ў/g, 'Ŭ').replace(/ў/g, 'ŭ').replace(/Ф/g, 'F').replace(/Х/g, 'H').replace(/Ц/g, 'C').replace(/Ч/g, 'Č').replace(/Џ/g, 'Dž').replace(/џ/g, 'dž').replace(/Шш/g, 'Š').replace(/ш/g, 'š').replace(/Щ/g, 'ŠČ').replace(/Ъ/g, '\"').replace(/Ы/g, 'Y').replace(/Ь/g, '\'').replace(/Э/g, 'E').replace(/Ю/g, 'Yu').replace(/Я/g, 'Ya').replace(/Ә/g, 'Á').replace(/ә/g, 'á').replace(/Ғ/g, 'Ǵ').replace(/ғ/g, 'ǵ').replace(/Қ/g, 'Q').replace(/қ/g, 'q').replace(/Ң/g, 'Ń').replace(/ң/g, 'ń').replace(/Ө/g, 'Ó').replace(/ө/g, 'ó').replace(/Ұ/g, 'U').replace(/ұ/g, 'u').replace(/Һ/g, 'H').replace(/һ/g, 'h').replace(/Ӯ/g, 'Ū').replace(/ӯ/g, 'ū').replace(/Ҳ/g, 'h').replace(/ҳ/g, 'h').replace(/Ҷ/g, 'J').replace(/ҷ/g, 'j');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
setInterval(latinize, 500);