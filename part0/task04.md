sequenceDiagram
    participant browser
    participant server

    browser->>server: The POST request to the address https://studies.cs.helsinki.fi/exampleapp/notes  contains the new note as JSON data
    activate server
    server-->>browser: The server responds with status code 201 create
    deactivate server

