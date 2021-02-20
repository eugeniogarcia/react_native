import React, { useState } from "react";

const id = (function*() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

//Convertimos el componente en un functional component
export default function MyFeature({ addArticle, articleList }) {
  //El estado lo inicializamos con el hook. Obtenemos también el setter del estado
  //Definimos tres hooks para manejar cada parte del estado
  const [articles, setArticles] = useState([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none"
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none"
    },
    {
      id: id.next(),
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none"
    },
    {
      id: id.next(),
      title: "Article 4",
      summary: "Article 4 Summary",
      display: "none"
    }
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  //Usamos los setters del hook para actualizar el estado
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeSummary(e) {
    setSummary(e.target.value);
  }

  function onClickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title: title,
        summary: summary,
        display: "none"
      }
    ]);
    setTitle("");
    setSummary("");
  }

  function onClickRemove(id) {
    //Reemplazamos la colección de articulos
    setArticles(articles.filter(article => article.id !== id));
  }

  function onClickToggle(id) {
    const index = articles.findIndex(article => article.id === id);
    const updatedArticles = [...articles];

    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none"
    };

    setArticles(updatedArticles);
  }

  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd
      })}
      {articleList({ articles, onClickToggle, onClickRemove })}
    </section>
  );
}
