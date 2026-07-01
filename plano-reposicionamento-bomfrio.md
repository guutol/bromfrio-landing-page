# Plano de Reposicionamento — Bomfrio

Objetivo: transformar a Bomfrio de uma landing page genérica em um site profissional de assistência técnica especializada em refrigeração residencial e comercial (geladeiras duplex/frost free, lava e seca, máquinas de lavar com tampa superior, cervejeiras, câmaras frias, refrigeração comercial).

## 1. Arquitetura de páginas

### Home (a que mais muda)
1. Navbar (sticky)
2. Hero — foco em resolução de problema, não em "empresa de manutenção genérica"
3. Faixa de confiança (trust bar) — +20 anos, garantia, atendimento no mesmo dia
4. Diferenciais — por que escolher a Bomfrio (3–4 itens com ícone)
5. Serviços principais — resumo em cards com CTA "ver todos os serviços"
6. Atendimento residencial x comercial — bloco em 2 colunas
7. Marcas atendidas — grade/faixa de logos
8. Depoimentos — carrossel ou cards com nome/bairro
9. Chamada final (CTA banner)
10. Footer — contato, área atendida, redes, links rápidos

### Serviços
Reorganizar por categoria:
- Refrigeração residencial: geladeiras (duplex, frost free), lava e seca, máquina de lavar (tampa superior), cervejeiras
- Refrigeração comercial: câmaras frias, freezers/expositores comerciais

### Sobre a Bomfrio
Expandir para conteúdo institucional real: história, missão, anos de atuação, área de cobertura, certificações/parcerias.

### Contato
Formulário + WhatsApp, adicionando: telefone, tipo de equipamento, horário de atendimento, área atendida.

**Gap identificado**: não existe `Footer` no projeto atual — precisa ser criado do zero.

## 2. Paleta de cores

| Papel | Cor | Uso |
|---|---|---|
| Primária (azul profissional) | `#0F4C81` | navbar, títulos de destaque, elementos institucionais |
| Secundária (frost/gelo) | `#DCEFF7` | fundos alternados, ícones, badges |
| Acento de conversão | `#FF7A00` | botões de ação principais |
| WhatsApp | `#25D366` | reservado ao botão flutuante/ícone do WhatsApp |
| Texto principal | `#1C2B36` | títulos e corpo |
| Texto secundário | `#5A6B78` | subtítulos, descrições |
| Fundo alternado | `#F4F8FB` | separação de seções |

## 3. Tipografia

- **Opção A**: títulos em Sora/Poppins, corpo em Inter.
- **Opção B**: manter Mulish, variando peso (800 títulos, 600 subtítulos, 400 corpo).

## 4. Componentes necessários

**Novos:** `Hero.jsx`, `TrustBar.jsx`, `Differentials.jsx`, `ServicesHighlight.jsx`, `ResidentialCommercial.jsx`, `BrandsStrip.jsx`, `Testimonials.jsx`, `FinalCTA.jsx`, `Footer.jsx`, `WhatsAppFloatingButton.jsx`

**Reaproveitados:** `Navbar.jsx`, `Card.jsx`, `ServiceData.jsx` (expandido), `Common.jsx` (mantido para Sobre/Contato)

## 5. Melhorias de conversão

- Botão flutuante do WhatsApp fixo em todas as páginas
- CTA duplicado (topo e fim de cada página)
- Depoimentos reais com nome + bairro/cidade
- Selo de garantia e "atendimento no mesmo dia"
- Área de cobertura explícita (cidade/bairros)
- Formulário de contato com menos campos obrigatórios

## 6. Itens em aberto (precisam de input do cliente)

- Lista de marcas atendidas e logos
- Depoimentos reais de clientes
- Confirmação da opção de tipografia (A ou B)
- Área/cidades de cobertura para textos de SEO local
