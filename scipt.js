var a, b;
        function geta() {
            a = prompt('Enter first name');
            document.getElementById('geta').innerHTML = a;
        }
        function getb() {
            b = prompt('Enter second name');
            document.getElementById('getb').innerHTML = b;
        }
        function sum() {
            var c = 0;
            c = parseInt(a) + parseInt(b);
            document.getElementById('sum').innerHTML = c;
        }
        function sub() {
            var c = 0;
            c = parseInt(a) - parseInt(b);
            document.getElementById('sub').innerHTML = c;
        }
        function mul() {
            var c = 0;
            c = parseInt(a) * parseInt(b);
            document.getElementById('mul').innerHTML = c;
        }
        function div() {
            var c = 0;
            c = parseInt(a) / parseInt(b);
            document.getElementById('div').innerHTML = c;
        }
        function mod() {
            var c = 0;
            c = parseInt(a) % parseInt(b);
            document.getElementById('mod').innerHTML = c;
        }
        function squ() {
            var c = 0;
            c = parseInt(a) ** parseInt(b)
            document.getElementById('squ').innerHTML = c;
        }
        function avg() {
            var c = 0;
            c = (parseInt(a) + parseInt(b)) / 2;
            document.getElementById('avg').innerHTML = c;
        }
        function rec() {
            var c = 0;
            c = parseInt(a) * parseInt(b);
            document.getElementById('rec').innerHTML = c;
        }