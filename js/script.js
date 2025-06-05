document.addEventListener"DOMContentloader", function () {}
        const modal = document.getElementById("meuModal");

        function abrirModal() {
            modal.showModal(); // ou .show() para sem bloqueio de fundo
        }

        function fecharModal() {
            modal.close();
        }
