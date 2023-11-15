import ReactDom from "react-dom/client";

import { restaurants } from "./constants/mock.js";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <ul id='restaurants-list'>
    <li id={restaurants[0].id}>
      <h2>{restaurants[0].name}</h2>
      <ul>
        <li>
          <h3>Menu:</h3>
          <ul>
            <li id={restaurants[0].menu[0].id}>
              {restaurants[0].menu[0].name};
              Price: {restaurants[0].menu[0].price};
              Ingredients: {restaurants[0].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]};
            </li>
            <li id={restaurants[0].menu[1].id}>
              {restaurants[0].menu[1].name};
              Price: {restaurants[0].menu[1].price};
              Ingredients: {restaurants[0].menu[1].ingredients[0]};
            </li>
            <li id={restaurants[0].menu[2].id}>
              {restaurants[0].menu[2].name};
              Price: {restaurants[0].menu[2].price};
              Ingredients: {restaurants[0].menu[2].ingredients[0]}, {restaurants[0].menu[2].ingredients[1]};
            </li>
          </ul>
        </li>
        <li>
          <h3>Reviews:</h3>
          <ul>
            <li id={restaurants[0].reviews[0].id}>
              {restaurants[0].reviews[0].user};
              Text: {restaurants[0].reviews[0].text};
              Rating: {restaurants[0].reviews[0].rating};
            </li>
            <li id={restaurants[0].reviews[1].id}>
              {restaurants[0].reviews[1].user};
              Text: {restaurants[0].reviews[1].text};
              Rating: {restaurants[0].reviews[1].rating};
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li id={restaurants[1].id}>
      <h2>{restaurants[1].name}</h2>
      <ul>
        <li>
          <h3>Menu:</h3>
          <ul>
            <li id={restaurants[1].menu[0].id}>
              {restaurants[1].menu[0].name};
              Price: {restaurants[1].menu[0].price};
              Ingredients: {restaurants[1].menu[0].ingredients[0]}, {restaurants[1].menu[0].ingredients[1]}, {restaurants[1].menu[0].ingredients[2]};
            </li>
            <li id={restaurants[1].menu[1].id}>
              {restaurants[1].menu[1].name};
              Price: {restaurants[1].menu[1].price};
              Ingredients: {restaurants[1].menu[1].ingredients[0]}, {restaurants[1].menu[1].ingredients[1]}, {restaurants[1].menu[1].ingredients[2]}, {restaurants[1].menu[1].ingredients[3]};
            </li>
          </ul>
        </li>
        <li>
          <h3>Reviews:</h3>
          <ul>
            <li id={restaurants[1].reviews[0].id}>
              {restaurants[1].reviews[0].user};
              Text: {restaurants[1].reviews[0].text};
              Rating: {restaurants[1].reviews[0].rating};
            </li>
            <li id={restaurants[1].reviews[1].id}>
              {restaurants[1].reviews[1].user};
              Text: {restaurants[1].reviews[1].text};
              Rating: {restaurants[1].reviews[1].rating};
            </li>
            <li id={restaurants[1].reviews[2].id}>
              {restaurants[1].reviews[2].user};
              Text: {restaurants[1].reviews[2].text};
              Rating: {restaurants[1].reviews[2].rating};
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li id={restaurants[2].id}>
      <h2>{restaurants[2].name}</h2>
      <ul>
        <li>
          <h3>Menu:</h3>
          <ul>
            <li id={restaurants[2].menu[0].id}>
              {restaurants[2].menu[0].name};
              Price: {restaurants[2].menu[0].price};
              Ingredients: {restaurants[2].menu[0].ingredients[0]};
            </li>
            <li id={restaurants[2].menu[1].id}>
              {restaurants[2].menu[1].name};
              Price: {restaurants[2].menu[1].price};
              Ingredients: {restaurants[2].menu[1].ingredients[0]}, {restaurants[2].menu[1].ingredients[1]};
            </li>
            <li id={restaurants[2].menu[2].id}>
              {restaurants[2].menu[2].name};
              Price: {restaurants[2].menu[2].price};
              Ingredients: {restaurants[2].menu[2].ingredients[0]};
            </li>
          </ul>
        </li>
        <li>
          <h3>Reviews:</h3>
          <ul>
            <li id={restaurants[2].reviews[0].id}>
              {restaurants[2].reviews[0].user};
              Text: {restaurants[2].reviews[0].text};
              Rating: {restaurants[2].reviews[0].rating};
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li id={restaurants[3].id}>
      <h2>{restaurants[3].name}</h2>
      <ul>
        <li>
          <h3>Menu:</h3>
          <ul>
            <li id={restaurants[3].menu[0].id}>
              {restaurants[3].menu[0].name};
              Price: {restaurants[3].menu[0].price};
              Ingredients: {restaurants[3].menu[0].ingredients[0]};
            </li>
            <li id={restaurants[3].menu[1].id}>
              {restaurants[3].menu[1].name};
              Price: {restaurants[3].menu[1].price};
              Ingredients: {restaurants[3].menu[1].ingredients[0]}, {restaurants[3].menu[1].ingredients[1]};
            </li>
          </ul>
        </li>
        <li>
          <h3>Reviews:</h3>
          <ul>
            <li id={restaurants[3].reviews[0].id}>
              {restaurants[3].reviews[0].user};
              Text: {restaurants[3].reviews[0].text};
              Rating: {restaurants[3].reviews[0].rating};
            </li>
            <li id={restaurants[3].reviews[1].id}>
              {restaurants[3].reviews[1].user};
              Text: {restaurants[3].reviews[1].text};
              Rating: {restaurants[3].reviews[1].rating};
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
);
