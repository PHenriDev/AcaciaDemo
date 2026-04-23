# 📤 Como subir o Acacia no GitHub — passo a passo

## 1. Instalar o Git (se ainda não tiver)

- **Windows:** https://git-scm.com/download/win
- **Mac:** `brew install git`
- Confirme com: `git --version`

---

## 2. Configurar sua identidade (só na primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## 3. Criar o repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `acacia`
3. Descrição: `Sistema de gestão para psicólogos — pacientes, agenda e relatórios`
4. Visibilidade: **Public** (necessário para GitHub Pages gratuito)
5. ❌ NÃO marque "Add a README" (já temos um)
6. Clique em **Create repository**

---

## 4. Iniciar o Git na pasta do projeto

Abra o terminal dentro da pasta `acacia/` e rode:

```bash
# Inicializar o repositório local
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit — descritivo e semântico
git commit -m "feat: initial commit — sistema estático de gestão para psicólogos

- Tela de login com autenticação por usuário e senha
- Dashboard com métricas de pacientes e consultas do dia
- Listagem de pacientes com busca, filtros e paginação
- Ficha individual com informações e notas de sessão
- Agenda semanal visual
- Relatórios com gráficos de barras e distribuição por status
- CRUD completo: cadastrar, editar e excluir pacientes
- Persistência via localStorage
- Layout responsivo com menu mobile e bottom navigation
- Identidade visual com paleta marrom/dourado e logo oficial"

# Renomear branch para 'main' (padrão atual do GitHub)
git branch -M main

# Conectar ao repositório remoto (substitua SEU_USUARIO pelo seu)
git remote add origin https://github.com/SEU_USUARIO/acacia.git

# Subir o código
git push -u origin main
```

---

## 5. Ativar o GitHub Pages

1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione: `Deploy from a branch`
4. Branch: `main` | Pasta: `/ (root)`
5. Clique em **Save**
6. Aguarde ~1 minuto
7. Seu site estará em: `https://SEU_USUARIO.github.io/acacia`

---

## 6. Como fazer commits futuros (fluxo correto)

Sempre que fizer uma mudança:

```bash
# Ver o que mudou
git status

# Adicionar arquivos modificados
git add .

# Commit descritivo seguindo Conventional Commits
git commit -m "fix: corrige bug no filtro de pacientes inativos"
# ou
git commit -m "feat: adiciona exportação de relatório em PDF"
# ou
git commit -m "style: ajusta espaçamento na ficha do paciente"

# Subir para o GitHub (o site atualiza automaticamente)
git push
```

---

## 📝 Padrão de mensagens de commit (Conventional Commits)

| Prefixo | Quando usar |
|---------|-------------|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `style:` | Mudanças visuais/CSS sem alterar lógica |
| `refactor:` | Refatoração de código |
| `docs:` | Atualização de documentação |
| `chore:` | Tarefas de manutenção (atualizar .gitignore, etc) |

---

## ✅ Checklist antes de cada push

- [ ] O site abre corretamente no navegador?
- [ ] Login funciona com as credenciais corretas?
- [ ] Cadastrar, editar e excluir pacientes funciona?
- [ ] Está navegando entre todas as páginas sem erro?
- [ ] Dados persistem ao recarregar?
- [ ] Funciona no celular?
