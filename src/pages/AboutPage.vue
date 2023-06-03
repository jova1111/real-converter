<template>
  <div class="main-container">
    <h2>Прави конвертор</h2>

    <div id="purpose">
      <p>
        <strong>Прави конвертор</strong> је једини конвертор у Србији који
        истински задовољава потребе простог народа. Омогућава конверзију
        најчешћих валута, као и временских јединица коришћених у свакодневном
        животу.
      </p>

      <ul>
        <li>
          Ако не знате како да оправдате куповину ствари за којe сте дали
          издашну суму новца и које највероватније нећете користити, преко
          <strong>Правог конвертора</strong> лако можете да израчунате колика је
          њихова цена изражена у кутијама цигара. Тиме ћете одмах моћи људима да
          кажете конкретан број кутија цигара када будете рекли 'шта је то, то
          неко попуши'.
        </li>
        <li>
          Не знате како да докучите колико је заправо огромна свота новца за
          коју сте чули људе да спомињу? Свима нам је позната рол виришла и њена
          вредност. Лако претворите своту новца у рол виршле и одмах ће Вам бити
          јасна права слика.
        </li>
        <li>
          Боца си и не знаш како брзо људима да кажеш кад ћеш бити слободна за
          дружење? Немаш бриге, претвори Боцин испитни рок у јединицу времена
          коју сви разумеју.
        </li>
      </ul>
    </div>

    <div id="about">
      <i>Направио Јоца као поклон Боци за тежак пораз у другом циклусу Слагалице.
      Циклус је почео у новембру прошле године и трајао дугих и мучних 6 месеци, а завршен је резултатом 10:6 у Боцину корист.</i>
      <img id="funny-img" src="@/assets/boca_madjija_jovo_potisten.jpg" />
    </div>

    <div id="place-and-year">Нови Сад, 2023.</div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
}

#purpose {
  margin: 15px;
  text-align: left;
}

li {
  margin: 5px;
}

#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: left;
  color: rgb(80, 80, 80);
}

#place-and-year {
  margin-top: 20px;
  margin-bottom: 15px;
}

#funny-img {
  margin-top: 30px;
  width: 75%;
  height: auto;
}

</style>
