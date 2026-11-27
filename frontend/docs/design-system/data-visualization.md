# Visualização de dados

Use ChartData para séries alinhadas às categorias; null indica ausência, não zero. Valores não finitos são normalizados. A rosca aceita apenas a primeira série e valores não negativos; a legenda segue os itens efetivamente apresentados. Para comparações incompletas, prefira barras ou tabela.

ChartContainer fornece título, descrição, fonte, data de atualização opcional e tabela expansível. BaseChart e BrazilMap reservam altura explícita de 288 e 320 px para evitar inicialização SVG com altura zero. A largura acompanha o contêiner.

BrazilMap e RegionalMap recebem geometria e fonte. A propriedade name da geometria deve corresponder exatamente aos nomes dos registros. Não utilizar geometria fictícia como mapa territorial: a fixture sintética A/B/C é exclusivamente um teste do renderizador. Sem fonte ou geometria, o componente apresenta uma tabela. A escala é sequencial, não partidária; ausência de valor é distinta de zero.

Testes Playwright verificam SVG, dimensões, redimensionamento, tabela e geometria sintética. Malhas territoriais reais e integrações de dados estão fora do escopo desta biblioteca frontend.
