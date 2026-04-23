# 🌿 Acacia — Sistema de Gestão para Psicólogos

> Sistema web estático para gerenciamento de pacientes, agenda e relatórios clínicos. Desenvolvido para psicólogos que precisam de uma ferramenta simples, elegante e acessível via navegador — sem necessidade de instalação ou servidor.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Funcionalidades

- 🔐 **Autenticação** por chave de acesso (usuário + senha)
- 📊 **Dashboard** com métricas em tempo real (pacientes ativos, inativos, altas)
- 👤 **Gestão de Pacientes** — cadastro, edição, exclusão e busca por nome ou status
- 📋 **Ficha do Paciente** — informações pessoais, abordagem terapêutica e notas de sessão
- 📅 **Agenda Semanal** — visualização de consultas por dia
- 📈 **Relatórios** — gráficos de presença, cancelamentos e distribuição por status
- 💾 **Persistência local** via `localStorage` — dados mantidos entre sessões
- 📱 **Responsivo** — funciona em desktop, tablet e celular

---

## 🗂️ Estrutura do Projeto

```
acacia/
├── index.html          # Estrutura principal da aplicação
├── css/
│   └── style.css       # Estilos globais e responsividade
├── js/
│   └── app.js          # Lógica da aplicação (navegação, CRUD, persistência)
└── assets/
    └── logo.jpeg       # Logo oficial do projeto
```

---

## 🚀 Como rodar localmente

Não requer instalação de dependências. Basta abrir o arquivo:

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/acacia.git

# Entre na pasta
cd acacia

# Abra no navegador (qualquer um dos métodos abaixo)
open index.html                        # macOS
start index.html                       # Windows
xdg-open index.html                    # Linux

# Ou use um servidor local simples
npx serve .                            # Node.js
python3 -m http.server 8080            # Python
```

> **Acesse:** `http://localhost:8080`

---

## 🌐 Deploy no GitHub Pages

1. Suba o código para um repositório público no GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde ~1 minuto e acesse `https://SEU_USUARIO.github.io/acacia`

---

## 🔑 Credenciais de acesso (demo)

| Usuário | Senha |
|---------|-------|
| `admin` | `acacia2024` |
| `dra_ana` | `ana123` |

> ⚠️ Para uso real, altere as credenciais diretamente no arquivo `js/app.js`, na constante `US`.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|-----------|-----|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização, responsividade, animações |
| JavaScript (ES6+) | Lógica, CRUD, navegação SPA |
| localStorage | Persistência de dados no navegador |
| Google Fonts | Tipografia (Cormorant Garamond + Jost) |
| GitHub Pages | Hospedagem gratuita |

---

## 📋 Roadmap

- [ ] Integração com banco de dados (Supabase / Firebase)
- [ ] Sistema de autenticação seguro (JWT)
- [ ] Exportação real de relatórios em PDF
- [ ] Agendamento com calendário interativo
- [ ] Notificações de consultas por e-mail/WhatsApp
- [ ] Multi-usuário (vários psicólogos na mesma conta)
- [ ] Modo escuro

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

```bash
# 1. Faça um fork do projeto
# 2. Crie uma branch para sua feature
git checkout -b feat/nome-da-feature

# 3. Commit seguindo o padrão Conventional Commits
git commit -m "feat: adiciona exportação de relatório em PDF"

# 4. Abra um Pull Request descrevendo as mudanças
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">
  Desenvolvido com cuidado para a saúde mental 🌿
</div>
