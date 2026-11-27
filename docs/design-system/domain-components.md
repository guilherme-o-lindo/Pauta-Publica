# Domínios

Os contratos em `features/*/types.ts` descrevem modelos de apresentação. ParliamentarianCard recebe person; BillCard recebe code, summary, status e fonte opcional; VotingCard recebe voting; ExpenseCard recebe expense; IndicatorCard recebe indicator; GlossaryCard recebe entry. FavoriteButton usa v-model booleano e FavoriteList emite remove(id). Dados demonstrativos não são dados oficiais; persistência e APIs futuras pertencem à camada de aplicação.
