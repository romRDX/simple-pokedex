# Rodar e testar o projeto

- npm install
- npm start
- npm test

### Comentários

# Webpack e Estruturas

Eu fiz a congiruação certinha para usar o relative import do typescript, porém no final não funcionou.
Imagino que foi uma bobeirinha que eu não percebi, ou o typescript realmente estava de sacanagem comigo,
mas da para ver no tsconfig.json que a configuração do baseUrl e path estão certinhas, inclusive,
quando eu fazia o auto-import ele já vinha com o relative path, mas logo em seguida ele dava erro e
crashava a aplicação, então no fim, infelizmente, eu deixei o import normal.
# UX & UI

Eu brinquei um pouco com o chackra na página home, porém como eu quis fazer um layout um pouco mais
elaborado e estiloso na página list, eu acabei fazendo o CSS na mão mesmo, como lembro de termos
mencionado o css modules em nossa última conversa, então não devo ter fugido das tecnologias que são
usadas no projeto dessa forma.

# Testes

Fiz apenas os testes unitários, ainda preciso estudar cypress para fazer os E2E, dai consegui testar tudo exceto por 2 situações:

- Não consegui mockar o fetch do javascript para dar um retorno fake para a requisição, então o teste
do custom hook que usei para fazer a requisição não foi testado

- Não consegui mockar o localStorage pois o useCallback do react inventou de dar erro nessa hora, dai
teria que dar uma volta extra para fazer isso dai acabei deixando assim.

Eu deixei alguns comentários nesses arquivos de testes para você conseguir identificar mais ou menos o que eu tentei fazer.
Os testes do redux-store tiveram um pequeno warning pois eu usei uma função mockada como argumento do dispatch, porém como
o teste rodou e passou normalmente, não me preocupei muito e deixei assim.

# Fim

Muito obrigado pela oportunidade! Já tenho mais palpites de qual jogo possa ser...