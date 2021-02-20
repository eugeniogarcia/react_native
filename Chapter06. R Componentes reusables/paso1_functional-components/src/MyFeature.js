import React, { Component } from "react";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

const id = (function*() {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default class MyFeature extends Component {
  //Define el estado
  state = {
    articles: [
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
    ],
    title: "",
    summary: ""
  };

  onChangeTitle = e => {
    //Pasamos un objeto. Se hace merge del objeto con el estado
    this.setState({ title: e.target.value });
  };

  onChangeSummary = e => {
    this.setState({ summary: e.target.value });
  };

  onClickAdd = () => {
    //Pasamos un lambda. El lambda tiene que retornar el objeto completo. No hay merge
    //Se usa el operador ... ; Esto hace una copia del contenido del objeto, sus propiedades, etc, y sobre esta copia, aplica el resto de cambios, sobre-escribiendo lo que proceda
    this.setState(state => ({
      articles: [
        ...state.articles,
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none"
        }
      ],
      title: "",
      summary: ""
    }));
  };

  onClickRemove = id => {
    //Usa el operador ... ; Aqui reemplazamos la coleccion de articles por otra coleccion
    this.setState(state => ({
      ...state,
      articles: state.articles.filter(article => article.id !== id)
    }));
  };

  onClickToggle = id => {
    //Usa el operador ... ; Aqui reemplazamos la coleccion de articles por otra coleccion
    this.setState(state => {
      const articles = [...state.articles];
      const index = articles.findIndex(article => article.id === id);

      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none"
      };

      return { ...state, articles };
    });
  };

  //El estado se mantiene en esta clase. Los hijos son functional componentes que actuan sobre el estado usando los handlers que pasamos como props
  render() {
    const { articles, title, summary } = this.state;

    return (
      <section>
        <AddArticle
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={this.onChangeTitle}
          onChangeSummary={this.onChangeSummary}
          onClickAdd={this.onClickAdd}
        />
        <ArticleList
          articles={articles}
          onClickToggle={this.onClickToggle}
          onClickRemove={this.onClickRemove}
        />
      </section>
    );
  }
}
