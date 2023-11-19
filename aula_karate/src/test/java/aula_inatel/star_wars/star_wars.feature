Feature: Testando API do Star Wars.


Scenario: Testando retorno de people/1/.
        Given url 'https://swapi.dev/api/people/1/'
        When method get
        Then status 200
