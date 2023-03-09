
    var dinero = 10;
    var monchis = [

        { nombre: 'Cacahuetes con miel', precio: '2.5' },

        { nombre: 'Choclate Nestle', precio: '2' },

        { nombre: 'Colacao', precio: '4' },

        { nombre: 'Cereales', precio: '2' },

        { nombre: 'Donuts', precio: '1' },

        { nombre: 'Empanadillas', precio: '0.5' },

        { nombre: 'Filipinos', precio: '1' },

        { nombre: 'Gominolas', precio: '1' },

        { nombre: 'Happy Hippo', precio: '1.5' },

        { nombre: 'Huesitos', precio: '2' },

        { nombre: 'Kinder Bueno', precio: '1.5' },

        { nombre: 'kikos', precio: '1' },

        { nombre: 'kaskis', precio: '1' },

        { nombre: 'Nachos y guacamole', precio: '3' },

        { nombre: 'Nutella', precio: '3.5' },

        { nombre: 'Oreos', precio: '1.5' },

        { nombre: 'Pringles', precio: '2' },

        { nombre: 'Palmeritas', precio: '1.5' },

        { nombre: 'Pizza', precio: '2.5' },

        { nombre: 'Saladitos', precio: '2' },

        { nombre: 'Saladitas', precio: '1.5' },

        { nombre: 'Weikis', precio: '2' }]



    function Rellena() {
        var lista = document.getElementById('lista1');

        for (var i = 0; i < monchis.length; i++) {
            var nombre = monchis[i].nombre + ' ' + monchis[i].precio + '€';
            var precio = monchis[i].precio;
            lista.options[lista.options.length] = new Option(nombre, precio);

        }

    }


    function moveOption(origin, dest) {
        var originList = document.getElementById(origin);
        var destList = document.getElementById(dest);
        var selectedOption = originList.options[originList.selectedIndex];
        var precio = parseFloat(selectedOption.value);
        if (dinero >= precio) {

            destList.options[destList.options.length] = new Option(selectedOption.text, selectedOption.value);
            originList.remove(originList.selectedIndex);
            dinero -= precio;
            document.getElementById('dinero').innerHTML = 'Saldo: ' + dinero + '€';

        }
        else {
            document.getElementById('texto').innerHTML = 'Tu saldo no te da para comprarte eso, a parte has bajado de los 5€ y te has quedado sin tu viaje. Haz el favor y quita productos porque aquí solo se fia a mayores de 90 años acompañados de su padre.';
            document.getElementById("texto").style.visibility = "visible";
        }
        if (dinero > precio) {

            document.getElementById("texto").style.visibility = "hidden";
        }
    }
    function RemoveOption(origin, dest) {
        var originList = document.getElementById(origin);
        var destList = document.getElementById(dest);
        var selectedOption = originList.options[originList.selectedIndex];
        var precio = parseFloat(selectedOption.value);

        destList.options[destList.options.length] = new Option(selectedOption.text, selectedOption.value);
        originList.remove(originList.selectedIndex);
        dinero += precio;
        document.getElementById('dinero').innerHTML = 'Saldo: ' + dinero + '€';
        if (dinero > 0) {

            document.getElementById("texto").style.visibility = "hidden";
        }

    }
