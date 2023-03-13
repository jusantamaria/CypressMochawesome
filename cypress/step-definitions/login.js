import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
const homeSaucePage = require ('../../pages/sauceDemo/homeSaucePage.js')



    Given('a user opens a SauceLabs website', ()=>{
        cy.visit('https://www.saucedemo.com');
    });
