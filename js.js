document.addEventListener("DOMContentLoaded", () => {
  const filmes = document.querySelectorAll(".filme");

  filmes.forEach((filme) => {
    const estrelas = filme.querySelectorAll(".estrelas span");
    const media = filme.querySelector(".valor-media");
    const votos = filme.querySelector(".total-votos");

    let totalVotos = 0;
    let somaVotos = 0;

    estrelas.forEach((estrela) => {
      estrela.addEventListener("click", () => {
        const valor = parseInt(estrela.getAttribute("data-value"));

        totalVotos++;
        somaVotos += valor;

        const novaMedia = (somaVotos / totalVotos).toFixed(1);
        media.textContent = novaMedia;
        votos.textContent = `(${totalVotos} voto${totalVotos > 1 ? "s" : ""})`;

        estrelas.forEach((s, i) => {
          s.classList.toggle("selecionado", i < valor);
        });
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-menu');
  const nav = document.getElementById('menu-principal');

  if (btn && nav){
    const fechar = () => {
      nav.classList.remove('aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    };

    btn.addEventListener('click', () => {
      const aberto = nav.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      btn.textContent = aberto ? '✕' : '☰';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('aberto')) {
        fechar(); btn.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && e.target !== btn && nav.classList.contains('aberto')) {
        fechar();
      }
    });
  }
});