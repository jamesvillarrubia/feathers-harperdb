var nock = require('nock');
module.exports = function() {
nock.define([
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Bob",
          "age": 25
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "f9de81ab-aeeb-4e20-a2ff-c9265537f3db"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "7.3141999989748",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 90
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "f9de81ab-aeeb-4e20-a2ff-c9265537f3db"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783912842,
        "__updatedtime__": 1646783912842,
        "age": 25,
        "created": null,
        "id": "f9de81ab-aeeb-4e20-a2ff-c9265537f3db",
        "name": "Bob"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "0.8525999970734119",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Doug",
          "age": 32
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "7322af04-281a-4c8a-9fe8-0f3cddbbab6d"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.853299997746944",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 91
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "7322af04-281a-4c8a-9fe8-0f3cddbbab6d"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783912863,
        "__updatedtime__": 1646783912863,
        "age": 32,
        "created": null,
        "id": "7322af04-281a-4c8a-9fe8-0f3cddbbab6d",
        "name": "Doug"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "1.220100000500679",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Alice",
          "age": 19
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "50274f05-753a-4080-b43c-98d28cae9569"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.7824000008404255",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 92
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "50274f05-753a-4080-b43c-98d28cae9569"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783912887,
        "__updatedtime__": 1646783912887,
        "age": 19,
        "created": null,
        "id": "50274f05-753a-4080-b43c-98d28cae9569",
        "name": "Alice"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "1.387499999254942",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((name = 'Doug') or (age >= 18 and age < 25)) order by name asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "50274f05-753a-4080-b43c-98d28cae9569",
        "name": "Alice",
        "__createdtime__": 1646783912887,
        "__updatedtime__": 1646783912887,
        "age": 19
      },
      {
        "created": null,
        "id": "7322af04-281a-4c8a-9fe8-0f3cddbbab6d",
        "name": "Doug",
        "__createdtime__": 1646783912863,
        "__updatedtime__": 1646783912863,
        "age": 32
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "33.56809999793768",
      "content-length",
      "298",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 137
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = 'f9de81ab-aeeb-4e20-a2ff-c9265537f3db')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "f9de81ab-aeeb-4e20-a2ff-c9265537f3db",
        "name": "Bob",
        "__createdtime__": 1646783912842,
        "__updatedtime__": 1646783912842,
        "age": 25
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "14.90599999949336",
      "content-length",
      "148",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "f9de81ab-aeeb-4e20-a2ff-c9265537f3db"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "f9de81ab-aeeb-4e20-a2ff-c9265537f3db"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "8.7652000002563",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:32 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = '50274f05-753a-4080-b43c-98d28cae9569')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "50274f05-753a-4080-b43c-98d28cae9569",
        "name": "Alice",
        "__createdtime__": 1646783912887,
        "__updatedtime__": 1646783912887,
        "age": 19
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "7.976500000804663",
      "content-length",
      "150",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "50274f05-753a-4080-b43c-98d28cae9569"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "50274f05-753a-4080-b43c-98d28cae9569"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "6.1367999985814095",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = '7322af04-281a-4c8a-9fe8-0f3cddbbab6d')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "7322af04-281a-4c8a-9fe8-0f3cddbbab6d",
        "name": "Doug",
        "__createdtime__": 1646783912863,
        "__updatedtime__": 1646783912863,
        "age": 32
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "6.946199998259544",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "7322af04-281a-4c8a-9fe8-0f3cddbbab6d"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "7322af04-281a-4c8a-9fe8-0f3cddbbab6d"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.879200000315905",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:33 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  }
]);
};