sequenceDiagram
    participant browser
    participant server

    browser->>server: POST request address new_note
    activate server
    server-->>browser: responds with HTTP status code 302
    deactivate server

    browser->>server: HTTP GET request to the address /notes
    activate server
    server-->>browser: HTML 
    deactivate server

