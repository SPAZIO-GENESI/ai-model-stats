# AI Model Stats

Mostra pubblicamente il numero di parametri del modello AI tramite un endpoint protetto con token JWT generato da Cloudflare Worker.

## 🧩 Architettura

- **Cloudflare Tunnel**: Espone `/params` in modo sicuro
- **Cloudflare Worker**: Genera token JWT con `aud` specifico
- **Pagina HTML Statica**: Mostra i dati pubblici

## 🚀 Deploy

### 1. Installa Wrangler

```bash
npm install -g wrangler