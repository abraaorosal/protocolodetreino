# Protocolo de Treino — Men's Physique Premium

Aplicação web personalizada para acompanhamento do protocolo de treino de **Abraão Henrique**.

## Recursos

- Treinos organizados por dia da semana;
- Checklist de cada exercício;
- Registro de carga e repetições realizadas;
- Progresso diário e semanal;
- Periodização completa de 8 semanas;
- Registro semanal de peso, cintura, força e observação visual;
- Dados salvos automaticamente no navegador;
- Visual responsivo, instalável e disponível offline;
- Favicon personalizado AH Physique.

## Executar localmente

Como o projeto é estático, basta abrir `index.html` ou iniciar um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação

O workflow em `.github/workflows/pages.yml` publica automaticamente o projeto no GitHub Pages a cada alteração na branch `main`.
