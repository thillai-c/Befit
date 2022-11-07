import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recipe.css";

const Recipe = () => {
  const [articles, setArticles] = useState([]);

  return (
    <div id="pxfd-section-diet" class="pxfd-section">
      <h4>
        <p class="caption bx bxs-bowl-hot">Healthy Food List</p>
      </h4>
      <div class="pxfd-cardrow">
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1577594412764-f8fa57d4e5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21vb3RoaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  Good Morning
                </span>
                <ul class="pxfd-color-light">
                  <li>Banana-Blueberry Smoothie</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  You Deserved It{" "}
                </span>
                <ul class="pxfd-color-light">
                  <li>Egg</li>
                  <li>3 Strawberries</li>
                  <li>100gr Cheese</li>
                  <li>A Slice of Bread</li>
                  <li>Milk</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  Energy
                </span>
                <ul class="pxfd-color-light">
                  <li>Pasta with Vegetables and Meat</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1629214831802-bb2a07f9517e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvdGVpbiUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  Protein Time
                </span>
                <ul class="pxfd-color-light">
                  <li>20gr Bar</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1626790291085-19a27173773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  After A Looong Day
                </span>
                <ul class="pxfd-color-light">
                  <li>150gr of Meat</li>
                  <li>Steam Cooked Vegetables</li>
                  <li>A Slice of Bread</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="pxfd-cardcol pxfd-col-6x">
          <a href="#">
            <div class="pxfd-card pxfd-card-solid">
              <img
                src="https://images.unsplash.com/photo-1584587727565-a486d45d58b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtb290aGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              ></img>
              <div class="pxfd-card-overlay">
                <span class="pxfd-color-white pxfd-fontsize-12 pxfd-fontweight-bold">
                  The Day Ends
                </span>
                <ul class="pxfd-color-light">
                  <li>Lean, Mean, Green Machine</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
