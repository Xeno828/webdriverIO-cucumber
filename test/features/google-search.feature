Feature: Performing a Google search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to know more about it

    Background:

      Given I am on the Google Search page

    Scenario: performing the search action
        When I enter "Selenium Webdriver" into the search box
        And I click the search button
        Then I should see a list of search results

      Scenario Outline: Performing a search action whilst passing test data as data table
          When I enter <searchItem> into the search box
          And I click the search button
          Then I should see a list of search results

          Examples:
          |searchItem|
          |"Selenium Webdriver"|
